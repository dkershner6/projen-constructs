import {
    Component,
    IniFile,
    IniFileOptions,
    JsonPatch,
    Project,
    YamlFile,
} from "projen";
import {
    GithubWorkflow,
    GithubWorkflowOptions,
    WorkflowSteps,
} from "projen/lib/github";
import {
    Job,
    JobStep,
    JobStepConfiguration,
} from "projen/lib/github/workflows-model";
import { NodeProject } from "projen/lib/javascript";

export const buildSonarQualityScanJobStep = (
    jobStepConfig?: JobStepConfiguration,
    actionVersion = "v2.0.2",
): JobStep => ({
    ...(jobStepConfig ?? {}),
    name: jobStepConfig?.name ?? "Sonar Quality Scan",
    continueOnError: jobStepConfig?.continueOnError ?? true,
    env: {
        SONAR_TOKEN: "${{ secrets.SONAR_TOKEN }}",
        SONAR_HOST_URL: "${{ secrets.SONAR_HOST_URL }}",
        ...(jobStepConfig?.env ?? {}),
    },
    uses: `sonarsource/sonarqube-scan-action@${actionVersion}`,
});

export class SonarPropertiesFile extends Component {
    public static readonly PROJECT_KEY_FIELD_NAME = "sonar.projectKey";
    public static readonly JAVASCRIPT_LCOV_REPORT_PATHS_FIELD_NAME =
        "sonar.javascript.lcov.reportPaths";

    /** Escape Hatch */
    public readonly obj: Record<string, string>;

    constructor(project: Project, options: IniFileOptions) {
        super(project);

        this.obj = options.obj ?? {};

        new IniFile(project, "sonar-project.properties", {
            ...options,
            obj: this.obj,
        });
    }

    public addJavascriptLcovReportPaths(...paths: string[]): void {
        const existingValue =
            this.obj[
                SonarPropertiesFile.JAVASCRIPT_LCOV_REPORT_PATHS_FIELD_NAME
            ];

        this.obj[SonarPropertiesFile.JAVASCRIPT_LCOV_REPORT_PATHS_FIELD_NAME] =
            [...new Set([...(existingValue?.split(",") ?? []), ...paths])].join(
                ",",
            );
    }

    public removeJavascriptLcovReportPaths(...paths: string[]): void {
        const existingValue =
            this.obj[
                SonarPropertiesFile.JAVASCRIPT_LCOV_REPORT_PATHS_FIELD_NAME
            ];

        this.obj[SonarPropertiesFile.JAVASCRIPT_LCOV_REPORT_PATHS_FIELD_NAME] =
            [
                ...new Set(
                    existingValue
                        ?.split(",")
                        ?.filter((x) => !paths.includes(x)) ?? [],
                ),
            ].join(",");
    }

    public get javascriptLcovReportPaths(): string[] {
        const existingValue =
            this.obj[
                SonarPropertiesFile.JAVASCRIPT_LCOV_REPORT_PATHS_FIELD_NAME
            ];

        return existingValue?.split(",") ?? [];
    }

    /**
     * Get projectKey for your Sonar project.
     *
     * @returns The project key from the sonar-project.properties file.
     */
    public get projectKey(): string {
        return this.obj[SonarPropertiesFile.PROJECT_KEY_FIELD_NAME];
    }

    /**
     * Set projectKey for your Sonar project.
     *
     * @param projectKey The project key to add to the sonar-project.properties file.
     */
    public set projectKey(projectKey: string) {
        this.obj[SonarPropertiesFile.PROJECT_KEY_FIELD_NAME] = projectKey;
    }
}

export interface SonarFullQualityScanWorkflowOptions {
    /**
     * The version of the Sonar Quality Scan action to use.
     */
    readonly actionVersion?: string;

    /**
     * The branches to run the workflow on (push).
     */
    readonly branches?: string[];

    /**
     * The job configuration for the Sonar Quality Scan job.
     *
     * @default Same as the build job
     */
    readonly jobConfig?: Partial<Job>;

    readonly workflowOptions?: GithubWorkflowOptions;
}

/**
 * Run a full quality scan on your project after pushing to your default branch(es).
 */
export class SonarFullQualityScanWorkflow extends Component {
    declare project: NodeProject;

    public readonly workflow: GithubWorkflow | undefined;

    constructor(
        project: NodeProject,
        name?: string,
        options?: SonarFullQualityScanWorkflowOptions,
    ) {
        super(project);

        if (!project.github) {
            return;
        }

        this.workflow = new GithubWorkflow(
            project.github,
            name ?? "sonar-full-scan",
            options?.workflowOptions,
        );

        if (options?.branches) {
            this.workflow.on({
                push: {
                    branches: options.branches,
                },
                workflowDispatch: {},
            });
        }

        const buildWorkflowJob = project.github
            .tryFindWorkflow("build")
            ?.getJob("build") as Job | undefined;
        if (buildWorkflowJob) {
            this.workflow.addJob("sonar-quality-scan", {
                concurrency: buildWorkflowJob.concurrency,
                container: buildWorkflowJob.container,
                continueOnError: buildWorkflowJob.continueOnError,
                defaults: buildWorkflowJob.defaults,
                env: buildWorkflowJob.env,
                environment: buildWorkflowJob.environment,
                permissions: buildWorkflowJob.permissions,
                runsOn: buildWorkflowJob.runsOn,
                runsOnGroup: buildWorkflowJob.runsOnGroup,
                services: buildWorkflowJob.services,
                strategy: buildWorkflowJob.strategy,
                steps: [
                    WorkflowSteps.checkout({
                        with: {
                            fetchDepth: 0, // Sonar likes to have history
                        },
                    }),
                    ...project.renderWorkflowSetup(),
                    {
                        name: "Build",
                        run: project.runTaskCommand(project.buildTask),
                    },
                    buildSonarQualityScanJobStep(
                        options?.jobConfig,
                        options?.actionVersion,
                    ),
                ],
                ...(options?.jobConfig ?? {}),
            });
        }
    }
}

export class SonarBuildWorkflowPatch extends Component {
    constructor(
        project: Project,
        options?: Pick<
            SonarFullQualityScanWorkflowOptions,
            "actionVersion" | "jobConfig"
        >,
    ) {
        super(project);

        const buildWorkflowFile = project.tryFindObjectFile(
            ".github/workflows/build.yml",
        ) as YamlFile | undefined;
        if (buildWorkflowFile) {
            buildWorkflowFile.patch(
                JsonPatch.add("/jobs/build/steps/0/with", {
                    "fetch-depth": 0,
                    // Add should make below un-needed, but it replaces for some reason
                    ref: "${{ github.event.pull_request.head.ref }}",
                    repository:
                        "${{ github.event.pull_request.head.repo.full_name }}",
                }),
            );

            const { continueOnError, ...restOfStep } =
                buildSonarQualityScanJobStep(
                    options?.jobConfig,
                    options?.actionVersion,
                );
            buildWorkflowFile.addToArray("jobs.build.steps", {
                ...restOfStep,
                "continue-on-error": continueOnError,
            });
        }
    }
}
