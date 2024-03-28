import { monorepo } from "@aws/pdk";
import { github, javascript } from "projen";

export interface UpgradeDependenciesWorkflowOptions
    extends javascript.UpgradeDependenciesWorkflowOptions {
    /** Steps that will be placed just in front of the upgrade step in the upgrade Workflow */
    readonly preUpgradeSteps?: github.workflows.JobStep[];
}

export interface UpgradeDependenciesOptions
    extends javascript.UpgradeDependenciesOptions {
    readonly workflowOptions?: UpgradeDependenciesWorkflowOptions;
}

export interface MonorepoProjectOptions
    extends monorepo.MonorepoTsProjectOptions {
    readonly depsUpgradeOptions?: UpgradeDependenciesOptions;
}

export class MonorepoProject extends monorepo.MonorepoTsProject {
    constructor(options: MonorepoProjectOptions) {
        super(options);

        this.removeUnneededPackages();
        this.addAndEditTasks();
    }

    /** PDK is one big package, and monorepo doesn't need these */
    private removeUnneededPackages(): void {
        this.deps.removeDependency("@aws-cdk/aws-cognito-identitypool-alpha");
        this.deps.removeDependency("aws-cdk-lib");
        this.deps.removeDependency("cdk-nag");

        // No longer using this
        this.deps.removeDependency("syncpack");
    }

    private addAndEditTasks(): void {
        const eslintMonorepoTask = this.tasks.addTask("eslint:monorepo", {
            exec: "eslint --ext .ts,.tsx --fix --no-error-on-unmatched-pattern --max-warnings=0 .projenrc.* projenrc",
            description: "Lint the monorepo",
        });

        const buildTask = this.tasks.tryFind("build");

        const eslintTask = this.tasks.tryFind("eslint");
        if (eslintTask) {
            // Lint the monorepo too
            eslintTask.prependSpawn(eslintMonorepoTask, { receiveArgs: true });

            if (buildTask) {
                // Second
                buildTask.prependSpawn(eslintMonorepoTask, {
                    receiveArgs: true,
                });
            }
        }

        const postBuildTask = this.tasks.addTask("post-build", {
            description:
                "Build gets locked, so this can be used to add tasks after everything is built, such as centralized docs that don't need building on release.",
        });
        buildTask?.spawn(postBuildTask);

        const defaultTask = this.tasks.tryFind("default");
        if (defaultTask && buildTask) {
            buildTask.prependSpawn(defaultTask); // First
        }

        if (buildTask) {
            const buildSkipCacheTask = this.tasks.addTask("build:skip-cache");
            buildSkipCacheTask.spawn(buildTask, {
                args: ["--skip-nx-cache"],
            });
        }

        this.addTask("clean-modules", {
            exec: "find . -type d -name 'node_modules' -exec rm -r {} \\; || echo 'All done!'",
            description: "Delete all node_modules folders",
        });

        const nxBuild = this.nx.targetDefaults.build;
        this.nx.setTargetDefault("compile", {
            ...nxBuild,
            dependsOn: ["^compile"],
        });

        const postUpgradeTask = this.tasks.tryFind("post-upgrade");
        if (postUpgradeTask) {
            postUpgradeTask.reset(
                this.execNxRunManyCommand({
                    target: "upgrade",
                }),
            );
        }
    }

    override preSynthesize(): void {
        super.preSynthesize();

        const compileTask = this.tasks.tryFind("compile");
        if (compileTask) {
            compileTask.reset(
                this.execNxRunManyCommand({
                    target: "compile",
                }),
                {
                    receiveArgs: true,
                },
            );

            compileTask.description = "Compile all projects";
        }
    }
}
