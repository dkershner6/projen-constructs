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

        this.addDevDeps("syncpack@^8");

        this.addAndEditTasks();
        this.overwriteUpgradeWorkflow(options.depsUpgradeOptions);
    }

    private addAndEditTasks(): void {
        const defaultTask = this.tasks.tryFind("default");
        if (defaultTask) {
            this.tasks.tryFind("build")?.prependSpawn(defaultTask);
        }

        const eslintTask = this.tasks.tryFind("eslint");
        if (eslintTask) {
            // Lint the monorepo too
            eslintTask.prependExec(
                `eslint --ext .ts,.tsx --fix --no-error-on-unmatched-pattern --max-warnings=0 .projenrc.* projenrc`,
                { receiveArgs: true },
            );
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
        this.tasks.removeTask(upgradeName);

        const upgradeDepsTask = this.tasks.tryFind("upgrade-deps");

        if (upgradeDepsTask) {
            upgradeDepsTask.env("CI", "0"); // Lock file has weird behavior without this

            const upgradeWorkflow = this.github?.tryFindWorkflow(upgradeName);

            if (upgradeWorkflow) {
                const upgradeTask = this.tasks.addTask(upgradeName);
                upgradeTask.spawn(upgradeDepsTask);

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
