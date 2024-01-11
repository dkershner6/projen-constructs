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
import { Task, filteredRunsOnOptions, github } from "projen";
import { GitHubProject, WorkflowSteps } from "projen/lib/github";
import { Job, JobStep } from "projen/lib/github/workflows-model";
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
    // eslint-disable-next-line sonarjs/cognitive-complexity
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

        // No overriding package, since SST cant use an artifact

        if (
            this.release &&
            options.publishToAws &&
            options.publishToAwsOptions
        ) {
            const releaseWorkflow = (
                this.root as GitHubProject
            )?.github?.tryFindWorkflow(
                AwsAppPublisher.workflowNameForProject("release", this),
            );
            if (
                (releaseWorkflow && options.publishToAwsOptions?.autoAddJob) ||
                options.publishToAwsOptions?.autoAddJob === undefined
            ) {
                const deployTask = this.tasks.tryFind("deploy");

                if (deployTask) {
                    releaseWorkflow?.addJob(
                        "release_aws",
                        this.buildPublishToAwsJob(
                            {
                                branchName: undefined,
                                deployTask,
                            },
                            options.publishToAwsOptions
                                ?.configureAwsCredentialsJobSteps,
                            {
                                ...filteredRunsOnOptions(
                                    options.workflowRunsOn,
                                    options.workflowRunsOnGroup,
                                ),
                            },
                        ),
                    );

                    if (this.release.branches) {
                        const otherBranches = this.release.branches.filter(
                            (branch) =>
                                branch !== options?.defaultReleaseBranch,
                        );
                        for (const branch of otherBranches) {
                            releaseWorkflow?.addJob(
                                `release_aws-${branch}`,
                                this.buildPublishToAwsJob({
                                    branchName: branch,
                                    deployTask:
                                        this.determineDeployTaskToUseForAwsJobStep(
                                            {
                                                deployTask,
                                                branchName: branch,
                                            },
                                        ),
                                }),
                            );
                        }
                    }
                }
            }
        }
    }

    public buildPublishToAwsJob(
        { deployTask, branchName }: DeployJobStepBuilderParams,
        configureAwsCredentialsJobSteps?: JobStep[],
        options?: Partial<Job>,
    ): Job {
        // We are basically ignoring the artifact since SST needs too many things to use it
        return {
            ...(options ?? {}),
            name: "Publish to AWS",
            if: this.release?.publisher.condition,
            needs: ["release"],
            permissions: {
                contents: github.workflows.JobPermission.WRITE,
                packages: github.workflows.JobPermission.WRITE,
            },
            steps: [
                WorkflowSteps.checkout(),
                ...this.workflowBootstrapSteps,
                ...this.renderWorkflowSetup(),
                ...(configureAwsCredentialsJobSteps ?? []),
                this.buildDeployToAwsJobStep({ deployTask, branchName }),
            ],
        };
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
            run: [exec, ...(args ?? [])].filter(Boolean).join(" "),
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
