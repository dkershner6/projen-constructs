import deepClone from "clone-deep";
import {
    AwsAppPublisher,
    AwsAppPublisherOptions,
    PublishToAwsOptions,
} from "dkershner6-projen-awscdk-core";
import {
    RECOMMENDED_NODE_20_PROJECT_OPTIONS,
    DKBugFixes,
    DKTasks,
    EslintConfig,
    Node20TypeScriptProjectJestOptions,
    DKJest,
} from "dkershner6-projen-typescript";
import { Task, awscdk } from "projen";
import { JobStep } from "projen/lib/github/workflows-model";
import { deepMerge } from "projen/lib/util";

export interface Node20AwsCdkAppOptions
    extends awscdk.AwsCdkTypeScriptAppOptions {
    /**
     * Whether or not to pin the version of constructs to the version specified in the
     * `constructsVersion` property.
     */
    constructsVersionPinning?: boolean;

    jestOptions?: Node20TypeScriptProjectJestOptions;

    /**
     * Whether to publish this App to AWS.
     */
    readonly publishToAws?: boolean;

    /**
     * Populate in order to add a deploy to AWS job to the release workflow.
     */
    readonly publishToAwsOptions?: PublishToAwsOptions;
}

export class Node20AwsCdkApp extends awscdk.AwsCdkTypeScriptApp {
    private readonly publishToAwsOptions?: PublishToAwsOptions;

    constructor(options: Node20AwsCdkAppOptions) {
        const combinedOptions = deepMerge([
            deepClone(RECOMMENDED_NODE_20_PROJECT_OPTIONS),
            options,
        ]) as awscdk.AwsCdkTypeScriptAppOptions;
        super(combinedOptions);

        this.publishToAwsOptions = options.publishToAwsOptions;

        new DKBugFixes(this);
        new DKTasks(this);
        new EslintConfig(this);
        new DKJest(this, options.jestOptions);

        this.eslint?.allowDevDeps(`${this.srcdir}/main.ts`);
        this.eslint?.allowDevDeps(`${this.srcdir}/*Stack.ts`);
        this.eslint?.allowDevDeps(`${this.srcdir}/*Stack/index.ts`);
        this.eslint?.allowDevDeps(`${this.srcdir}/stacks/**/*Stack.ts`);
        this.eslint?.allowDevDeps(`${this.srcdir}/stacks/**/*Stack/index.ts`);

        if (options.constructsVersionPinning) {
            this.addDeps(`constructs@${options.constructsVersion}`);
        }

        this.makeDeployAndSynthTasksNotRequireApproval();

        if (this.package) {
            this.overridePackageTask();
        }

        if (
            this.release &&
            options.publishToAws &&
            options.publishToAwsOptions
        ) {
            const publishToAwsOptions: AwsAppPublisherOptions = {
                ...options.publishToAwsOptions,
                deployJobStepBuilder: (builderParams) =>
                    this.buildDeployToAwsJobStep(builderParams.deployTask),
                defaultReleaseBranch: options.defaultReleaseBranch,
                publishTasks: options.publishTasks,
                runsOn: options.workflowRunsOn,
                runsOnGroup: options.workflowRunsOnGroup,
                workflowBootstrapSteps: options.workflowBootstrapSteps,
                workflowNodeVersion:
                    options.workflowNodeVersion ??
                    options.maxNodeVersion ??
                    options.minNodeVersion ??
                    "20.10.0",
            };

            new AwsAppPublisher(this, publishToAwsOptions);
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

    protected buildDeployToAwsJobStep(deployTask: Task): JobStep {
        const exec = deployTask.steps[0].exec;
        const args = deployTask.steps[0].args;
        return {
            ...(this.publishToAwsOptions?.deployJobStepConfiguration ?? {}),
            name:
                this.publishToAwsOptions?.deployJobStepConfiguration?.name ??
                "Deploy to AWS",
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
