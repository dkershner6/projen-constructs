import deepClone from "clone-deep";
import {
    DKBugFixes,
    DKTaskName,
    DKTasks,
    DKEslintConfig,
    RECOMMENDED_NODE_20_PROJECT_OPTIONS,
} from "dkershner6-projen-typescript";
import { deepMerge } from "projen/lib/util";

import {
    NxMonorepoProject,
    NxMonorepoProjectOptions,
} from "./NxMonorepoProject";
import { MonorepoTsProjectOptions } from "./projects/typescript/monorepo-ts";

export class Node20MonorepoProject extends NxMonorepoProject {
    constructor(options: NxMonorepoProjectOptions) {
        super(
            deepMerge([
                deepClone(RECOMMENDED_NODE_20_PROJECT_OPTIONS),
                {
                    devDeps: [
                        "@types/jest",
                        "@types/lodash.merge",
                        "lodash.merge",
                    ],
                },
                options,
            ]) as MonorepoTsProjectOptions,
        );

        new DKBugFixes(this);
        new DKEslintConfig(this);
        new DKTasks(this);

        for (const taskName of [
            DKTaskName.CLEAN_COMPILE,
            DKTaskName.DOCGEN_REMOVE,
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
                continue;
            }

            this.addTask(taskName, {
                exec: this.execNxRunManyCommand({
                    target: taskName,
                }),
            });
        }
    }
}
