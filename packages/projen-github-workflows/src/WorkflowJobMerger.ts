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
    readonly job?: Partial<Omit<github.workflows.Job, "steps">>;

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
    private readonly jobsCompleted = new Set<string>();

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
                const jobCompletedKey = `${workflow.name}::${jobName}`;
                if (this.jobsCompleted.has(jobCompletedKey)) {
                    continue;
                }
                let workingJob = job;
                for (const merge of this.options.merges) {
                    if (
                        this.determineShouldMergeJob(workflow, jobName, merge)
                    ) {
                        workingJob = this.mergeJob(
                            workflow,
                            jobName,
                            workingJob,
                            merge,
                        );
                    }
                }

                this.jobsCompleted.add(jobCompletedKey);
            }
        }
    }

    private determineShouldMergeJob(
        workflow: github.GithubWorkflow,
        jobName: string,
        merge: WorkflowJobMerge,
    ): boolean {
        return (
            !merge.workflowNamePrefixJobNameEntries ||
            merge.workflowNamePrefixJobNameEntries?.some(
                ([workflowNamePrefix, jobNameLookup]) =>
                    workflow.name.startsWith(workflowNamePrefix) &&
                    jobName === jobNameLookup,
            )
        );
    }

    private mergeJob(
        workflow: github.GithubWorkflow,
        jobName: string,
        job: github.workflows.Job,
        merge: WorkflowJobMerge,
    ): github.workflows.Job {
        const newJob = {
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
        };
        workflow.updateJob(jobName, newJob);
        return newJob;
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

        this.mergeWorkflowJobs();
    }

    override synthesize(): void {
        // Do here to ensure we get every job in every workflow.
        this.mergeWorkflowJobs();

        super.synthesize();
    }
}
