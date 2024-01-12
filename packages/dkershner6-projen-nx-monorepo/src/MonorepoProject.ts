import { monorepo } from "@aws/pdk";

export class MonorepoProject extends monorepo.MonorepoTsProject {
    constructor(options: monorepo.MonorepoTsProjectOptions) {
        super(options);

        this.addDevDeps("syncpack@^8");

        this.addAndEditTasks();
        this.overwriteUpgradeWorkflow();
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

    private overwriteUpgradeWorkflow(): void {
        const upgradeDepsTask = this.tasks.tryFind("upgrade-deps");
        const upgradeWorkflow = this.github?.tryFindWorkflow("upgrade");

        if (upgradeWorkflow && upgradeDepsTask) {
            const job = upgradeWorkflow?.getJob("upgrade");
            if (job) {
                // @ts-expect-error - Violating private access
                const newSteps = job.steps.map((step) => {
                    if (step.run?.includes("upgrade")) {
                        return {
                            ...step,
                            run: step.run.replace("upgrade", "upgrade-deps"),
                        };
                    }
                    return step;
                });
                upgradeWorkflow.updateJob("upgrade", {
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
