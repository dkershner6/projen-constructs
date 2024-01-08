import {
    Component,
    GroupRunnerOptions,
    Task,
    awscdk,
    filteredRunsOnOptions,
    github,
} from "projen";
import { JobStep } from "projen/lib/github/workflows-model";

export interface DeployJobStepBuilderParams {
    /**
     * The branch name being published. Undefined for the default branch.
     */
    readonly branchName: string | undefined;

    /**
     * The deploy task of the project.
     */
    readonly deployTask: Task;
}

export interface AwsAppPublisherOptions {
    /**
     * Typically a single step involved in configuring AWS credentials.
     * AKA aws-actions/configure-aws-credentials
     */
    readonly configureAwsCredentialsJobSteps: JobStep[];

    /**
     * A function that builds the JobStep to deploy the App.
     *
     * @param deployTask The deploy task of the project.
     * @param branchName The branch name being published. Undefined for the default branch.
     * @returns JobStep to deploy the App
     */
    readonly deployJobStepBuilder: (
        builderParams: DeployJobStepBuilderParams,
    ) => JobStep;

    readonly runsOn?: string[];

    readonly runsOnGroup?: GroupRunnerOptions;
}

export class AwsAppPublisher extends Component {
    constructor(
        public override readonly project: awscdk.AwsCdkTypeScriptApp,
        options: AwsAppPublisherOptions,
    ) {
        super(project);

        if (this.project.release && options.configureAwsCredentialsJobSteps) {
            this.addPublishToAwsJob(options);

            if (this.project.release.branches) {
                const otherBranches = this.project.release.branches.filter(
                    // @ts-expect-error - Violate access
                    (branch) => branch !== this.project.release?.defaultBranch,
                );
                for (const branch of otherBranches) {
                    this.addPublishToAwsJob(options, branch);
                }
            }
        }
    }

    protected addPublishToAwsJob(
        options: AwsAppPublisherOptions,
        branchName?: string,
    ): void {
        const taskSuffix = branchName ? `:${branchName}` : "";
        const workflowNameSuffix = branchName ? `-${branchName}` : "";

        const deployTask = this.project.tasks.tryFind(`deploy`);
        if (deployTask) {
            // @ts-expect-error - Violate access
            if (this.project.release?.publisher?.publishTasks) {
                const publishToAwsTask = this.project.addTask(
                    `publish:aws${taskSuffix}`,
                );
                publishToAwsTask.spawn(deployTask, {
                    args: [
                        `--app ${this.project.artifactsDirectory}/${this.project.cdkConfig.cdkout}`,
                    ],
                });
            }

            const releaseWorkflow = this.project.github?.tryFindWorkflow(
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
                        // @ts-expect-error - Violate access
                        ...this.project.workflowBootstrapSteps,
                        {
                            name: "Setup Node.js",
                            uses: "actions/setup-node@v3",
                            with: {
                                // @ts-expect-error - Violate access
                                ...(this.nodeVersion && {
                                    // @ts-expect-error - Violate access
                                    "node-version": this.nodeVersion,
                                }),
                            },
                        },
                        {
                            name: "Download build artifacts",
                            uses: "actions/download-artifact@v3",
                            with: {
                                name: "build-artifact",
                                path: this.project.artifactsDirectory,
                            },
                        },
                        {
                            name: "Restore build artifact permissions",
                            continueOnError: true,
                            run: [
                                `cd ${this.project.artifactsDirectory} && setfacl --restore=permissions-backup.acl`,
                            ].join("\n"),
                        },
                        ...options.configureAwsCredentialsJobSteps,
                        options.deployJobStepBuilder({
                            deployTask,
                            branchName,
                        }),
                    ],
                });
            }
        }
    }
}
