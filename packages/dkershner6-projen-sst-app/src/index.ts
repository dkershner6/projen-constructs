import path from "path";

import deepClone from "clone-deep";
import {
    AwsAppPublisher,
    AwsAppPublisherOptions,
    DeployJobStepBuilderParams,
    PublishToAwsOptions,
} from "dkershner6-projen-awscdk-core";
import {
    DKBugFixes,
    DKJest,
    DKTasks,
    EslintConfig,
    Node20TypeScriptProjectJestOptions,
    RECOMMENDED_NODE_20_PROJECT_OPTIONS,
} from "dkershner6-projen-typescript";
import { Task, filteredRunsOnOptions, github } from "projen";
import { GitHubProject, WorkflowSteps } from "projen/lib/github";
import { Job, JobStep } from "projen/lib/github/workflows-model";
import { deepMerge } from "projen/lib/util";
import { ensureRelativePathStartsWithDot } from "projen/lib/util/path";
import { SstTypescriptApp, SstTypescriptAppOptions } from "projen-sst";

export interface Node20SstAppOptions extends SstTypescriptAppOptions {
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

export class Node20SstApp extends SstTypescriptApp {
    private readonly publishToAwsOptions?: PublishToAwsOptions;

    // eslint-disable-next-line sonarjs/cognitive-complexity
    constructor(options: Node20SstAppOptions) {
        const combinedOptions: Node20SstAppOptions = deepMerge([
            deepClone(RECOMMENDED_NODE_20_PROJECT_OPTIONS),
            options,
        ]) as Node20SstAppOptions;

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

        // No overriding package, since SST cant use an artifact

        if (
            this.release &&
            options.publishToAws &&
            options.publishToAwsOptions
        ) {
            const defaultReleaseWorkflow = (
                this.root as GitHubProject
            )?.github?.tryFindWorkflow(
                AwsAppPublisher.workflowNameForProject("release", this),
            );
            if (
                (defaultReleaseWorkflow &&
                    options.publishToAwsOptions?.autoAddJob) ||
                options.publishToAwsOptions?.autoAddJob === undefined
            ) {
                const deployTask = this.tasks.tryFind("deploy");

                if (deployTask) {
                    defaultReleaseWorkflow?.addJob(
                        "release_aws",
                        this.buildPublishToAwsJob(
                            {
                                deployTask,
                            },
                            {
                                configureAwsCredentialsJobSteps:
                                    options.publishToAwsOptions
                                        ?.configureAwsCredentialsJobSteps,
                                deployJobStepBuilder: (builderParams) =>
                                    this.buildDeployToAwsJobStep(builderParams),
                                env: options.publishToAwsOptions?.env,
                                runsOn: options.workflowRunsOn,
                                runsOnGroup: options.workflowRunsOnGroup,
                            },
                        ),
                    );

                    if (this.release.branches) {
                        const otherBranches = this.release.branches.filter(
                            (branch) =>
                                branch !== options?.defaultReleaseBranch,
                        );
                        for (const branch of otherBranches) {
                            const branchReleaseWorkflow = (
                                this.root as GitHubProject
                            )?.github?.tryFindWorkflow(
                                AwsAppPublisher.workflowNameForProject(
                                    "release",
                                    this,
                                    branch,
                                ),
                            );
                            branchReleaseWorkflow?.addJob(
                                `release_aws-${branch}`,
                                this.buildPublishToAwsJob(
                                    {
                                        branchName: branch,
                                        deployTask:
                                            this.determineDeployTaskToUseForAwsJobStep(
                                                {
                                                    deployTask,
                                                    branchName: branch,
                                                },
                                            ),
                                    },
                                    {
                                        configureAwsCredentialsJobSteps:
                                            options.publishToAwsOptions
                                                ?.configureAwsCredentialsJobSteps,

                                        deployJobStepBuilder: (builderParams) =>
                                            this.buildDeployToAwsJobStep(
                                                builderParams,
                                            ),
                                        env: options.publishToAwsOptions?.env,
                                        runsOn: options.workflowRunsOn,
                                        runsOnGroup:
                                            options.workflowRunsOnGroup,
                                    },
                                ),
                            );
                        }
                    }
                }
            }
        }

        const cleanCompileTask =
            this.tasks.tryFind("clean-compile") ??
            this.tasks.addTask("clean-compile", {
                description: "Clean up the compiled output",
            });
        cleanCompileTask.exec(`rm -rf ${this.sstConfig.sstOut}`);
    }

    public buildPublishToAwsJob(
        { deployTask, branchName }: DeployJobStepBuilderParams,
        options: Pick<
            AwsAppPublisherOptions,
            | "configureAwsCredentialsJobSteps"
            | "deployJobStepBuilder"
            | "env"
            | "runsOn"
            | "runsOnGroup"
        >,
    ): Job {
        const projectPathRelativeToRoot = path.relative(
            this.root.outdir,
            this.outdir,
        );

        // We are basically ignoring the artifact since SST needs too many things to use it anyway
        return {
            name: "Publish to AWS",
            if: this.release?.publisher.condition,
            needs: ["release"],
            ...filteredRunsOnOptions(options.runsOn, options.runsOnGroup),
            env: options.env,
            permissions: {
                contents: github.workflows.JobPermission.WRITE,
                packages: github.workflows.JobPermission.WRITE,
            },
            defaults:
                projectPathRelativeToRoot.length > 0 // is subproject
                    ? {
                          run: {
                              workingDirectory: ensureRelativePathStartsWithDot(
                                  projectPathRelativeToRoot,
                              ),
                          },
                      }
                    : undefined,
            steps: [
                WorkflowSteps.checkout(),
                ...this.workflowBootstrapSteps,
                ...this.renderWorkflowSetup({
                    installStepConfiguration: {
                        workingDirectory: ".",
                    },
                }),
                ...(options.configureAwsCredentialsJobSteps ?? []),
                options.deployJobStepBuilder({
                    deployTask,
                    branchName,
                }),
            ],
        };
    }

    public buildDeployToAwsJobStep({
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
            ...(this.publishToAwsOptions?.deployJobStepConfiguration ?? {}),
            name:
                this.publishToAwsOptions?.deployJobStepConfiguration?.name ??
                "Deploy to AWS",
            run: [
                exec?.replace("sst", `npx sst@${this.sstVersion}`),
                ...(args ?? []),
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
