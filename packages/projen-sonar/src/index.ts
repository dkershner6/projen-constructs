import { Component, IniFile, IniFileOptions, Project } from "projen";

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
