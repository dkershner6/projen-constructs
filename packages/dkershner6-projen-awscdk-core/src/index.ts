import { Component, Project, Task, awscdk, github } from "projen";
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
    readonly configureAwsCredentialsJobSteps?: JobStep[];

    /**
     * Additional configuration for the deploy job step.
     */
    readonly deployJobStepConfiguration?: JobStepConfiguration;

    /**
     * The configuration for the deploy job. This is useful for when you want to
     * change the timeoutMinutes, or other job-level configuration.
     */
    readonly jobConfiguration?: Omit<Job, "steps">;

    /**
     * A map of environment variables that are available to all steps in the
     * job. You can also set environment variables for the entire workflow or an
     * individual step.
     */
    readonly env?: Record<string, string>;

    /**
     * Job steps to run after the deploy step.
     */
    readonly postPublishJobSteps?: JobStep[];
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

export interface AwsAppPublisherOptions extends PublishToAwsOptions {
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

    readonly workflowBootstrapSteps?: JobStep[];

    readonly workflowNodeVersion?: string;
}

export class AwsAppPublisher extends Component {
    /** release.ts in projen, not exported */
    public static workflowNameForProject(
        base: string,
        project: Project,
        branchName?: string,
    ): string {
        const branchNameToUse = branchName ? `-${branchName}` : "";

        // Subprojects
        if (project.parent) {
            return `${base}${branchNameToUse}_${fileSafeName(project.name)}`;
        }

        // root project doesn't get a project suffix
        return `${base}${branchNameToUse}`;
    }

    constructor(
        public override readonly project: awscdk.AwsCdkTypeScriptApp,
        private readonly options: AwsAppPublisherOptions,
    ) {
        super(project);

        if (
            (options.autoAddJob || options.autoAddJob === undefined) &&
            this.project.release
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
                    branchName,
                )}`,
            );
            if (releaseWorkflow) {
                const jobNameSuffix = branchName ? `-${branchName}` : "";
                releaseWorkflow.addJob(
                    `release_aws${jobNameSuffix}`,
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
            ...(this.options?.jobConfiguration ?? {}),
            name: this.options?.jobConfiguration?.name ?? "Publish to AWS",
            if:
                this.options?.jobConfiguration?.if ??
                this.project.release?.publisher.condition,
            needs: this.options?.jobConfiguration?.needs ?? ["release"],
            env: this.options?.jobConfiguration?.env ?? this.options.env,
            permissions: this.options?.jobConfiguration?.permissions ?? {
                contents: github.workflows.JobPermission.WRITE,
                packages: github.workflows.JobPermission.WRITE,
            },
            steps: [
                ...(this.options.workflowBootstrapSteps ?? []),
                {
                    name: "Setup Node.js",
                    uses: "actions/setup-node@v4",
                    with: {
                        ...(this.options.workflowNodeVersion && {
                            "node-version": this.options.workflowNodeVersion,
                        }),
                    },
                },
                {
                    name: "Download build artifacts",
                    uses: "actions/download-artifact@v4",
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
                ...(this.options.configureAwsCredentialsJobSteps ?? []),
                {
                    ...this.options.deployJobStepBuilder({
                        deployTask,
                        branchName,
                    }),
                    ...(this.options.deployJobStepConfiguration ?? {}),
                },
                ...(this.options.postPublishJobSteps ?? []),
            ],
        };
    }
}

function fileSafeName(name: string): string {
    return name.replace("@", "").replace(/\//g, "-");
}
