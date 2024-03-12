import { NodePackageUtils } from "@aws/pdk/monorepo";
import merge from "lodash.merge";
import { TaskStep } from "projen";

import {
    MonorepoProject,
    MonorepoProjectOptions,
} from "../packages/dkershner6-projen-nx-monorepo/src/MonorepoProject";
import {
    RECOMMENDED_NODE_20_PROJECT_OPTIONS,
    DKEslintConfig,
    DKBugFixes,
    DKTaskName,
    DKTasks,
} from "../packages/dkershner6-projen-typescript/src";
import { CSpell } from "../packages/projen-cspell/src";

import { PROJEN_VERSION } from "./common/constants";

export class RootMonorepo extends MonorepoProject {
    constructor() {
        super(
            merge<MonorepoProjectOptions, Partial<MonorepoProjectOptions>>(
                {
                    devDeps: [
                        "@aws/pdk",
                        "@types/jest",
                        "@types/lodash.merge",
                        "lodash.merge",
                    ],
                    name: "projen-constructs",

                    projenrcTs: true,
                    projenVersion: PROJEN_VERSION,
                    github: true,

                    depsUpgradeOptions: {
                        workflowOptions: {
                            preUpgradeSteps: [
                                { run: "echo 'preUpgradeSteps'" },
                            ],
                        },
                    },
                },
                RECOMMENDED_NODE_20_PROJECT_OPTIONS,
            ),
        );

        this.gitignore.exclude(".DS_Store");
        this.npmignore?.exclude(".DS_Store");

        new DKBugFixes(this);
        new DKEslintConfig(this);
        new DKTasks(this, {
            checkUpdatesTask: false,
        });

        for (const taskName of [
            DKTaskName.LINT,
            DKTaskName.TEST_UNIT,
            DKTaskName.TYPE_CHECK,
        ]) {
            const task = this.tasks.tryFind(taskName);
            if (task) {
                task.exec(
                    this.execNxRunManyCommand({
                        target: taskName,
                    }),
                );
            }
        }

        new CSpell(this);

        this.nx.useNxCloud(
            "OTNiNWJlNjgtNGE5NS00YmYwLWFmYTMtOGFlODM3YTkwNWFkfHJlYWQ=",
        );
        this.addGitIgnore("nx-cloud.env");
    }

    override preSynthesize(): void {
        super.preSynthesize();

        const checkUpdatesTask = this.addNxRunManyTask("check-updates", {
            target: "check-updates",
        });
        const upgradeTask = this.upgradeWorkflow?.upgradeTask;
        if (upgradeTask) {
            this.tasks.removeTask(upgradeTask.name);
            const upgradeTaskSteps = upgradeTask
                ?._renderSpec?.()
                // @ts-expect-error - It's there
                ?.steps?.toJSON?.();
            this.tasks.addTask(upgradeTask.name, {
                description: upgradeTask.description,
                env: upgradeTask.envVars,
                steps: [
                    { spawn: checkUpdatesTask.name },
                    upgradeTaskSteps?.[0],
                    {
                        exec: NodePackageUtils.command.exec(
                            this.package.packageManager,
                            "syncpack",
                            "fix-mismatches",
                        ),
                    },
                    ...(upgradeTaskSteps
                        ?.slice?.(1)
                        ?.filter(
                            (step: TaskStep) =>
                                typeof step?.exec !== "function",
                        ) ?? []),
                ].filter(Boolean),
            });
        }
    }
}
