import { Component, github } from "projen";

export interface WorkflowJobMerge {
    /**
     * Job steps to place at the end of every workflow job.
     * These can be used to clean up anything.
     *
     * Steps are deduplicated by name with existing steps.
     */
    readonly appendSteps?: github.workflows.JobStep[];

    /**
     * Job steps to place at the beginning of every workflow job.
     * These can be used to bootstrap anything.
     *
     * Steps are deduplicated by name with existing steps.
     */
    readonly prependSteps?: github.workflows.JobStep[];

    /**
     * What fields to merge into the job.
     *
     */
    readonly job?: Omit<github.workflows.Job, "steps">;

    /**
     * Filter the workflow jobs to override by workflow name prefix (starts with) and job name.
     *
     * @default - If not provided, all jobs in all workflows will be overridden.
     */
    readonly workflowNamePrefixJobNameEntries?: [string, string][];
}

export interface WorkflowJobMergerOptions {
    /**
     * All merges to perform on the workflow jobs.
     */
    readonly merges: WorkflowJobMerge[];
}

/**
 * Add steps or settings to every workflow job in a project.
 */
export class WorkflowJobMerger extends Component {
    constructor(
        private readonly projectGithub: github.GitHub,
        private readonly options: WorkflowJobMergerOptions,
    ) {
        super(projectGithub);
    }

    private mergeWorkflowJobs(): void {
        for (const workflow of this.projectGithub.workflows ?? []) {
            const jobs =
                // @ts-expect-error - Violating private access
                (workflow.jobs ?? {}) as Record<string, github.workflows.Job>;

            for (const [jobName, job] of Object.entries(jobs)) {
                for (const merge of this.options.merges) {
                    if (
                        !merge.workflowNamePrefixJobNameEntries ||
                        merge.workflowNamePrefixJobNameEntries?.some(
                            ([workflowNamePrefix, jobNameLookup]) =>
                                workflow.name.startsWith(workflowNamePrefix) &&
                                jobNameLookup === jobNameLookup,
                        )
                    ) {
                        this.mergeJob(workflow, jobName, job, merge);
                    }
                }
            }
        }
    }

    private mergeJob(
        workflow: github.GithubWorkflow,
        jobName: string,
        job: github.workflows.Job,
        merge: WorkflowJobMerge,
    ): void {
        workflow.updateJob(jobName, {
            ...job,
            ...merge.job,
            defaults: this.mergeObjects(job?.defaults, merge?.job?.defaults),
            env: this.mergeObjects(job?.env, merge?.job?.env),
            outputs: this.mergeObjects(job?.outputs, merge?.job?.outputs),
            permissions: this.mergeObjects(
                job.permissions,
                merge?.job?.permissions,
            ) as github.workflows.JobPermissions,
            steps: Array.isArray(job.steps)
                ? [
                      ...(merge.prependSteps ?? []).filter((step) =>
                          job.steps.every(
                              (stepInJob) =>
                                  !step.name || stepInJob.name !== step.name,
                          ),
                      ),
                      ...job.steps,
                      ...(merge.appendSteps ?? []).filter((step) =>
                          job.steps.every(
                              (stepInJob) =>
                                  !step.name || stepInJob.name !== step.name,
                          ),
                      ),
                  ]
                : job.steps,
        });
    }

    private mergeObjects<TObj>(
        obj1: TObj | undefined,
        obj2: TObj | undefined,
    ): TObj | undefined {
        return obj2
            ? {
                  ...(obj1 ?? {}),
                  ...obj2,
              }
            : obj1;
    }

    public override preSynthesize(): void {
        super.preSynthesize();

        // Do here to ensure we get every job in every workflow.
        this.mergeWorkflowJobs();
    }
}
