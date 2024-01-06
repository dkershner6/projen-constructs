import { monorepo } from "@aws/pdk";

export class MonorepoProject extends monorepo.MonorepoTsProject {
    constructor(options: monorepo.MonorepoTsProjectOptions) {
        super(options);

        this.addDevDeps("syncpack@^8");

        this.addAndEditTasks();
    }

    private addAndEditTasks(): void {
        const defaultTask = this.tasks.tryFind("default");
        if (defaultTask) {
            this.tasks.tryFind("build")?.prependSpawn(defaultTask);
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
