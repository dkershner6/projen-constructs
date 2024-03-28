import { javascript } from "projen";

import {
    MonorepoTsProject,
    MonorepoTsProjectOptions,
} from "./projects/typescript/monorepo-ts";

export interface UpgradeDependenciesOptions
    extends javascript.UpgradeDependenciesOptions {}

export interface NxMonorepoProjectOptions extends MonorepoTsProjectOptions {
    readonly depsUpgradeOptions?: UpgradeDependenciesOptions;
}

export class NxMonorepoProject extends MonorepoTsProject {
    constructor(options: NxMonorepoProjectOptions) {
        super(options);

        this.addAndEditTasks();
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
