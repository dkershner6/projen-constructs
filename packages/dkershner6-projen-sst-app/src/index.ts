import deepClone from "clone-deep";
import {
    AwsAppPublisher,
    AwsAppPublisherOptions,
    DeployJobStepBuilderParams,
} from "dkershner6-projen-awscdk-core";
import {
    DKBugFixes,
    DKTasks,
    EslintConfig,
    RECOMMENDED_NODE_20_PROJECT_OPTIONS,
} from "dkershner6-projen-typescript";
import { Task } from "projen";
import { JobStep } from "projen/lib/github/workflows-model";
import { deepMerge } from "projen/lib/util";
import { SstTypescriptApp, SstTypescriptAppOptions } from "projen-sst";

export interface Node20SstAppOptions extends SstTypescriptAppOptions {
    /**
     * Whether or not to pin the version of constructs to the version specified in the
     * `constructsVersion` property.
     */
    constructsVersionPinning?: boolean;

    /**
     * Whether to publish this App to AWS.
     */
    readonly publishToAws?: boolean;

    /**
     * Populate in order to add a deploy to AWS job to the release workflow.
     */
    readonly publishToAwsOptions?: Omit<
        AwsAppPublisherOptions,
        | "deployJobStepBuilder"
        | "defaultReleaseBranch"
        | "publishTasks"
        | "runsOn"
        | "runsOnGroup"
        | "workflowBootstrapSteps"
        | "workflowNodeVersion"
    >;
}

export class Node20SstApp extends SstTypescriptApp {
    constructor(options: Node20SstAppOptions) {
        const combinedOptions: Node20SstAppOptions = deepMerge([
            deepClone(RECOMMENDED_NODE_20_PROJECT_OPTIONS),
            options,
        ]) as Node20SstAppOptions;

        super(combinedOptions);

        new DKBugFixes(this);
        new DKTasks(this);
        new EslintConfig(this);

        this.eslint?.allowDevDeps("src/main.ts");
        this.eslint?.allowDevDeps("src/*Stack.ts");
        this.eslint?.allowDevDeps("src/*Stack/index.ts");
        this.eslint?.allowDevDeps("src/stacks/**/*Stack.ts");
        this.eslint?.allowDevDeps("src/stacks/**/*Stack/index.ts");

        if (options.constructsVersionPinning) {
            this.addDeps(`constructs@${options.constructsVersion}`);
        }

        if (
            this.release &&
            options.publishToAws &&
            options.publishToAwsOptions
        ) {
            const publishToAwsOptions: AwsAppPublisherOptions = {
                ...options.publishToAwsOptions,
                deployJobStepBuilder: (builderParams) =>
                    this.buildDeployToAwsJobStep(builderParams),
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

    protected overridePackageTask(): void {
        this.packageTask.reset(`mkdir -p ${this.artifactsDirectory}`);
        this.packageTask.exec(
            `cp -r ${this.sstConfig.sstOut} ${this.artifactsDirectory}`,
        );
    }

    protected buildDeployToAwsJobStep({
        deployTask,
        branchName,
    }: DeployJobStepBuilderParams): JobStep {
        const deployTaskToUse = this.determineDeployTaskToUseForAwsJobStep({
            deployTask,
            branchName,
        });
        const exec = deployTaskToUse.steps[0].exec;
        const args = deployTaskToUse.steps[0].args;

        return {
            name: "Deploy to AWS",
            run: [
                exec?.replace("sst", `npx sst@${this.sstVersion}`),
                ...(args ?? []),
                `--from ${this.artifactsDirectory}/${this.sstConfig.sstOut}`,
            ]
                .filter(Boolean)
                .join(" "),
        };
    }

    private determineDeployTaskToUseForAwsJobStep({
        deployTask,
        branchName,
    }: DeployJobStepBuilderParams): Task {
        if (!branchName) {
            return deployTask;
        }

        const stageName =
            this.branchNameToSstStageMap?.[branchName] ?? branchName;

        const stageDeployTask = this.tasks.tryFind(`deploy:${stageName}`);
        if (stageDeployTask) {
            return stageDeployTask;
        }

        throw new Error(
            `AWSPublisher: Cannot find deploy task for stage ${stageName}`,
        );
    }
}
