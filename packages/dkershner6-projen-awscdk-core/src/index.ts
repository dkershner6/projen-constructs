import {
    Component,
    GroupRunnerOptions,
    Project,
    Task,
    awscdk,
    filteredRunsOnOptions,
    github,
} from "projen";
import { GitHubProject } from "projen/lib/github";
import {
    Job,
    JobStep,
    JobStepConfiguration,
} from "projen/lib/github/workflows-model";

export interface PublishToAwsOptions {
    /**
     * Whether or not to automatically add the job to the release workflow.
     *
     * @default true
     */
    readonly autoAddJob?: boolean;

    /**
     * Typically a single step involved in configuring AWS credentials.
     * AKA aws-actions/configure-aws-credentials
     */
    readonly configureAwsCredentialsJobSteps: JobStep[];

    /**
     * Additional configuration for the deploy job step.
     */
    readonly deployJobStepConfiguration?: JobStepConfiguration;
}

export interface DeployJobStepBuilderParams {
    /**
     * The branch name being published. Undefined for the default branch.
     */
    readonly branchName?: string;

    /**
     * The deploy task of the project.
     */
    readonly deployTask: Task;
}

export interface AwsAppPublisherOptions {
    /**
     * Whether or not to automatically add the job to the release workflow.
     *
     * @default true
     */
    readonly autoAddJob?: boolean;

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

    readonly defaultReleaseBranch?: string;

    readonly publishTasks?: boolean;

    readonly runsOn?: string[];

    readonly runsOnGroup?: GroupRunnerOptions;

    readonly workflowBootstrapSteps?: JobStep[];

    readonly workflowNodeVersion?: string;
}

export class AwsAppPublisher extends Component {
    /** release.ts in projen, not exported */
    public static workflowNameForProject(
        base: string,
        project: Project,
    ): string {
        // Subprojects
        if (project.parent) {
            return `${base}_${fileSafeName(project.name)}`;
        }

        // root project doesn't get a suffix
        return base;
    }

    constructor(
        public override readonly project: awscdk.AwsCdkTypeScriptApp,
        private readonly options: AwsAppPublisherOptions,
    ) {
        super(project);

        if (
            (options.autoAddJob || options.autoAddJob === undefined) &&
            this.project.release &&
            options.configureAwsCredentialsJobSteps
        ) {
            this.addPublishToAwsJob();

            if (this.project.release.branches) {
                const otherBranches = this.project.release.branches.filter(
                    (branch) => branch !== options?.defaultReleaseBranch,
                );
                for (const branch of otherBranches) {
                    this.addPublishToAwsJob(branch);
                }
            }
        }
    }
    protected addPublishToAwsJob(branchName?: string): void {
        const taskSuffix = branchName ? `:${branchName}` : "";
        const workflowNameSuffix = branchName ? `-${branchName}` : "";

        const deployTask = this.project.tasks.tryFind(`deploy`);
        if (deployTask) {
            if (this.options.publishTasks) {
                const publishToAwsTask = this.project.addTask(
                    `publish:aws${taskSuffix}`,
                );
                publishToAwsTask.spawn(deployTask, {
                    args: [
                        `--app ${this.project.artifactsDirectory}/${this.project.cdkConfig.cdkout}`,
                    ],
                });
            }

            const releaseWorkflow = (
                this.project.root as GitHubProject
            ).github?.tryFindWorkflow(
                `${AwsAppPublisher.workflowNameForProject(
                    "release",
                    this.project,
                )}${workflowNameSuffix}`,
            );
            if (releaseWorkflow) {
                releaseWorkflow.addJob(
                    `release_aws${workflowNameSuffix}`,
                    this.buildPublishToAwsJob(deployTask, branchName),
                );
            }
        }
    }

    /**
     * Allows for manual creation of the publish to AWS Job.
     *
     * @param deployTask The deploy task to use in the deploy JobStep
     * @param branchName Optional branchName
     * @returns The job to add
     */
    public buildPublishToAwsJob(deployTask: Task, branchName?: string): Job {
        return {
            name: "Publish to AWS",
            if: this.project.release?.publisher.condition,
            needs: ["release"],
            ...filteredRunsOnOptions(
                this.options.runsOn,
                this.options.runsOnGroup,
            ),
            permissions: {
                contents: github.workflows.JobPermission.WRITE,
                packages: github.workflows.JobPermission.WRITE,
            },
            steps: [
                ...(this.options.workflowBootstrapSteps ?? []),
                {
                    name: "Setup Node.js",
                    uses: "actions/setup-node@v3",
                    with: {
                        ...(this.options.workflowNodeVersion && {
                            "node-version": this.options.workflowNodeVersion,
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
                ...this.options.configureAwsCredentialsJobSteps,
                this.options.deployJobStepBuilder({
                    deployTask,
                    branchName,
                }),
            ],
        };
    }
}

function fileSafeName(name: string): string {
    return name.replace("@", "").replace(/\//g, "-");
}
