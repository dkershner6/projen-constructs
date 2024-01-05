import { Component, github } from "projen";

export interface UniversalWorkflowJobStepsOptions {
    /**
     * Job steps to place at the beginning of every workflow job.
     * These can be used to bootstrap anything.
     *
     * Steps are deduplicated by name with existing steps.
     */
    readonly prependSteps?: github.workflows.JobStep[];

    /**
     * Job steps to place at the end of every workflow job.
     * These can be used to clean up anything.
     *
     * Steps are deduplicated by name with existing steps.
     */
    readonly appendSteps?: github.workflows.JobStep[];
}

/**
 * Add steps to every workflow job in a project besides the "build" job of the "Build" workflow.
 */
export class UniversalWorkflowJobSteps extends Component {
    constructor(
        projectGithub: github.GitHub,
        options: UniversalWorkflowJobStepsOptions,
    ) {
        super(projectGithub);

        for (const workflow of projectGithub.workflows ?? []) {
            const jobs =
                // @ts-expect-error - Violating private access
                (workflow.jobs ?? {}) as Record<string, github.workflows.Job>;

            for (const [jobName, job] of Object.entries(jobs)) {
                if (job.steps && Array.isArray(job.steps)) {
                    workflow.updateJob(jobName, {
                        ...job,
                        steps: [
                            ...(options.prependSteps ?? []).filter((step) =>
                                job.steps.every(
                                    (stepInJob) =>
                                        !step.name ||
                                        stepInJob.name !== step.name,
                                ),
                            ),
                            ...job.steps,
                            ...(options.appendSteps ?? []).filter((step) =>
                                job.steps.every(
                                    (stepInJob) =>
                                        !step.name ||
                                        stepInJob.name !== step.name,
                                ),
                            ),
                        ],
                    });
                } else if (jobName !== "build") {
                    console.warn(
                        `UniversalWorkflowJobSteps: Job ${jobName} in workflow ${
                            workflow.name
                        } was not updated because it does not have steps or is not an array.  Type: ${typeof job.steps}. This might be fine, so long as you have control over that workflow.`,
                    );
                }
            }
        }
    }
}
