import deepClone from "clone-deep";
import {
    RECOMMENDED_NODE_20_PROJECT_OPTIONS,
    DKBugFixes,
    DKTasks,
    EslintConfig,
} from "dkershner6-projen-typescript";
import {
    GroupRunnerOptions,
    Task,
    awscdk,
    filteredRunsOnOptions,
    github,
} from "projen";
import { JobStep } from "projen/lib/github/workflows-model";
import { deepMerge } from "projen/lib/util";

export interface PublishToAwsOptions {
    /**
     * Typically a single step involved in configuring AWS credentials.
     * AKA aws-actions/configure-aws-credentials
     */
    readonly configureAwsCredentialsJobSteps: JobStep[];

    readonly runsOn?: string[];

    readonly runsOnGroup?: GroupRunnerOptions;
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
            const publishToAwsOptions: PublishToAwsOptions = {
                ...options.publishToAwsOptions,
                runsOn:
                    options.publishToAwsOptions.runsOn ??
                    options.workflowRunsOn,
                runsOnGroup:
                    options.publishToAwsOptions.runsOnGroup ??
                    options.workflowRunsOnGroup,
            };

            this.addPublishToAwsJob(publishToAwsOptions);

            if (this.release.branches) {
                const otherBranches = this.release.branches.filter(
                    (branch) => branch !== options.defaultReleaseBranch,
                );
                for (const branch of otherBranches) {
                    this.addPublishToAwsJob(publishToAwsOptions, branch);
                }
            }
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

    protected overridePackageTask(): void {
        this.packageTask.reset(`mkdir -p ${this.artifactsDirectory}`);
        this.packageTask.exec(
            `cp -r ${this.cdkConfig.cdkout} ${this.artifactsDirectory}`,
        );
    }

    protected addPublishToAwsJob(
        options: PublishToAwsOptions,
        branchName?: string,
    ): void {
        const taskSuffix = branchName ? `:${branchName}` : "";
        const workflowNameSuffix = branchName ? `-${branchName}` : "";

        const deployTask = this.tasks.tryFind(`deploy`);
        if (deployTask) {
            const publishToAwsTask = this.addTask(`publish:aws${taskSuffix}`);
            publishToAwsTask.spawn(deployTask, {
                args: [
                    `--app ${this.artifactsDirectory}/${this.cdkConfig.cdkout}`,
                ],
            });

            const releaseWorkflow = this.github?.tryFindWorkflow(
                `release${workflowNameSuffix}`,
            );
            if (releaseWorkflow) {
                releaseWorkflow.addJob("release_aws", {
                    name: "Publish to AWS",
                    needs: ["release"],
                    ...filteredRunsOnOptions(
                        options.runsOn,
                        options.runsOnGroup,
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
                        ...options.configureAwsCredentialsJobSteps,
                        this.buildDeployToAwsJobStep(deployTask),
                    ],
                });
            }
        }
    }

    protected buildDeployToAwsJobStep(deployTask: Task): JobStep {
        const exec = deployTask.steps[0].exec;
        const args = deployTask.steps[0].args;
        return {
            name: "Deploy to AWS",
            run: [
                exec?.replace("cdk", `npx cdk@${this.cdkVersion}`),
                ...(args ?? []),
                `--app ${this.artifactsDirectory}/${this.cdkConfig.cdkout}`,
            ]
                .filter(Boolean)
                .join(" "),
        };
    }
}
