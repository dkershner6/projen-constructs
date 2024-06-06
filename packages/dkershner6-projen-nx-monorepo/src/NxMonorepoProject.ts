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

const I_AM_MONOREPO_ENV = {
    I_AM_MONOREPO: "true",
};

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

        const defaultTask = this.defaultTask;
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
            const upgradeRunManyExec = this.execNxRunManyCommand({
                target: "upgrade",
                parallel: 1, // Otherwise package manager can be updating lock file two at once, which is bad
            });

            postUpgradeTask.exec(upgradeRunManyExec, {
                env: I_AM_MONOREPO_ENV,
            });
            postUpgradeTask.exec(upgradeRunManyExec, {
                env: I_AM_MONOREPO_ENV,
            }); // Upgrading twice can help with sticky peer dependencies

            postUpgradeTask.exec(this.package.installAndUpdateLockfileCommand);
            if (defaultTask) postUpgradeTask.spawn(defaultTask);
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

        this.manageSubprojectTasksThatShouldBeRunInRoot();
    }

    private manageSubprojectTasksThatShouldBeRunInRoot(): void {
        for (const subproject of this.subprojects) {
            for (const taskName of ["upgrade"]) {
                const subprojectTask = subproject.tasks.tryFind(taskName);
                if (subprojectTask) {
                    subprojectTask.addCondition(
                        `if [ "$I_AM_MONOREPO" != "true" ] ; then echo "Please run upgrade from the root, or set env variable I_AM_MONOREPO=true to override this behavior" && exit 1 ; fi`,
                    );
                }
            }
        }
    }
}
