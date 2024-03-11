import { monorepo } from "@aws/pdk";
import { github, javascript } from "projen";
import { Job } from "projen/lib/github/workflows-model";

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

        this.addAndEditTasks();
        this.overwriteUpgradeWorkflow(options.depsUpgradeOptions);
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
    }

    private overwriteUpgradeWorkflow(
        upgradeDependenciesOptions: UpgradeDependenciesOptions | undefined,
    ): void {
        const upgradeName = upgradeDependenciesOptions?.taskName ?? "upgrade";

        this.tasks.removeTask("upgrade-deps");

        const upgradeWorkflow = this.github?.tryFindWorkflow(upgradeName);

        if (upgradeWorkflow) {
            const job = upgradeWorkflow?.getJob("upgrade");
            if (job) {
                const newSteps = (job as Job).steps.flatMap((step) => {
                    if (step.run?.includes("upgrade")) {
                        return [
                            ...(upgradeDependenciesOptions?.workflowOptions
                                ?.preUpgradeSteps ?? []),
                            {
                                ...step,
                            },
                        ];
                    }
                    return [step];
                });
                upgradeWorkflow.updateJob(upgradeName, {
                    ...job,
                    steps: newSteps,
                });
            }
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
