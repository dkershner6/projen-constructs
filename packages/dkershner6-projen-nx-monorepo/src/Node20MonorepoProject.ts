import { monorepo } from "@aws/pdk";
import deepClone from "clone-deep";
import {
    DKBugFixes,
    DKTaskName,
    DKTasks,
    DKEslintConfig,
    RECOMMENDED_NODE_20_PROJECT_OPTIONS,
} from "dkershner6-projen-typescript";
import { deepMerge } from "projen/lib/util";

import { MonorepoProject, MonorepoProjectOptions } from "./MonorepoProject";

export class Node20MonorepoProject extends MonorepoProject {
    constructor(options: MonorepoProjectOptions) {
        super(
            deepMerge([
                deepClone(RECOMMENDED_NODE_20_PROJECT_OPTIONS),
                {
                    devDeps: [
                        "@aws/pdk",
                        "@types/jest",
                        "@types/lodash.merge",
                        "lodash.merge",
                    ],
                },
                options,
            ]) as monorepo.MonorepoTsProjectOptions,
        );

        new DKBugFixes(this);
        new DKEslintConfig(this);
        new DKTasks(this);

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
    }
}
