import deepClone from "clone-deep";
import {
    RECOMMENDED_NODE_20_PROJECT_OPTIONS,
    DKBugFixes,
    DKTasks,
    EslintConfig,
    RenderWorkflowSetupOptions,
} from "dkershner6-projen-typescript";
import { awscdk, filteredRunsOnOptions, github, release } from "projen";
import { JobStep } from "projen/lib/github/workflows-model";
import { deepMerge } from "projen/lib/util";

export interface PublishToAwsOptions {
    /**
     * Typically a single step involved in configuring AWS credentials.
     * AKA aws-actions/configure-aws-credentials
     */
    readonly configureAwsCredentialsJobSteps: JobStep[];
}

export interface Node20AwsCdkAppProjectOptions
    extends awscdk.AwsCdkTypeScriptAppOptions {
    /**
     * Whether or not to pin the version of constructs to the version specified in the
     * `constructsVersion` property.
     */
    constructsVersionPinning?: boolean;
    /**
     * Populate in order to add a deploy to AWS job to the release workflow.
     */
    readonly publishToAwsOptions?: PublishToAwsOptions;
}

export class Node20AwsCdkAppProject extends awscdk.AwsCdkTypeScriptApp {
    constructor(options: Node20AwsCdkAppProjectOptions) {
        const combinedOptions = deepMerge([
            deepClone(RECOMMENDED_NODE_20_PROJECT_OPTIONS),
            options,
        ]) as awscdk.AwsCdkTypeScriptAppOptions;
        super(combinedOptions);

        new DKBugFixes(this);
        new DKTasks(this);
        new EslintConfig(this);

        this.eslint?.allowDevDeps("src/main.ts");
        this.eslint?.allowDevDeps("src/stacks/**/*Stack.ts");
        this.eslint?.allowDevDeps("src/stacks/**/*Stack/index.ts");

        if (options.constructsVersionPinning) {
            this.addDeps(`constructs@${options.constructsVersion}`);
        }

        this.makeDeployAndSynthTasksNotRequireApproval();
        if (this.package) {
            this.overridePackageTask();
        }
        if (this.release && options.publishToAwsOptions) {
            this.addDeployToAwsJob(options);
        }
    }

    private makeDeployAndSynthTasksNotRequireApproval(): void {
        const deployTask = this.tasks.tryFind("deploy");
        if (deployTask) {
            const { exec, ...restOfTaskStep } = deployTask.steps[0];
            deployTask.reset(exec, {
                ...restOfTaskStep,
                args: ["--all", "--require-approval never"],
            });
        }
        const synthTask = this.tasks.tryFind("synth");
        if (synthTask) {
            const { exec, ...restOfTaskStep } = synthTask.steps[0];
            synthTask.reset(exec, {
                ...restOfTaskStep,
                args: ["--all", "--require-approval never"],
            });
        }
    }

    private overridePackageTask(): void {
        this.packageTask.reset("mkdir -p dist");
        this.packageTask.exec("cp -r cdk.out dist");
    }

    private addDeployToAwsJob(options: Node20AwsCdkAppProjectOptions): void {
        if (options.publishToAwsOptions) {
            const deployTask = this.tasks.tryFind("deploy");
            if (deployTask) {
                const publishToAwsTask = this.addTask("publish:aws");
                publishToAwsTask.spawn(deployTask, {
                    args: [`--app ${this.artifactsDirectory}/cdk.out`],
                });

                const releaseWorkflow = this.github?.tryFindWorkflow("release");
                if (releaseWorkflow) {
                    releaseWorkflow.addJob("deploy-aws", {
                        name: "Deploy to AWS",
                        needs: ["release"],
                        ...filteredRunsOnOptions(
                            options.workflowRunsOn,
                            options.workflowRunsOnGroup,
                        ),
                        permissions: {
                            contents: github.workflows.JobPermission.WRITE,
                            packages: github.workflows.JobPermission.WRITE,
                        },
                        steps: [
                            ...this.workflowBootstrapSteps,
                            {
                                name: "Setup Node.js",
                                uses: "actions/setup-node@v3",
                                with: {
                                    ...(this.nodeVersion && {
                                        "node-version": this.nodeVersion,
                                    }),
                                },
                            },
                            {
                                name: "Download build artifacts",
                                uses: "actions/download-artifact@v3",
                                with: {
                                    name: "build-artifact",
                                    path: this.artifactsDirectory,
                                },
                            },
                            {
                                name: "Restore build artifact permissions",
                                continueOnError: true,
                                run: [
                                    `cd ${this.artifactsDirectory} && setfacl --restore=permissions-backup.acl`,
                                ].join("\n"),
                            },
                            options.publishToAwsOptions
                                .configureAwsCredentialsJobSteps,
                            {
                                name: "Deploy to AWS",
                                run: `npx cdk@${
                                    this.cdkVersion
                                } deploy ${deployTask.steps[0].args?.join(
                                    " ",
                                )} --app ${this.artifactsDirectory}/cdk.out`,
                            },
                        ],
                    });
                }
            }
        }
    }

    public override renderWorkflowSetup(
        options?: RenderWorkflowSetupOptions | undefined,
    ): JobStep[] {
        const { installJobStepOverrides, ...restOfOptions } = options ?? {};

        const originalSteps = super.renderWorkflowSetup(restOfOptions);

        return originalSteps.map((step) => {
            if (step.name?.toLowerCase?.()?.startsWith?.("install")) {
                return {
                    workingDirectory: this.parent ? "." : undefined,
                    ...step,
                    ...(installJobStepOverrides ?? {}),
                };
            }
            return step;
        });
    }
}
