import { monorepo } from "@aws/pdk";
import deepClone from "clone-deep";
import {
    DKBugFixes,
    DKTaskName,
    EslintConfig,
    RECOMMENDED_NODE_20_PROJECT_OPTIONS,
} from "dkershner6-projen-typescript";
import { deepMerge } from "projen/lib/util";

import { MonorepoProject } from "./MonorepoProject";

export class Node20MonorepoProject extends MonorepoProject {
    constructor(options: monorepo.MonorepoTsProjectOptions) {
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
        new EslintConfig(this);

        for (const taskName of Object.values(DKTaskName)) {
            this.addNxRunManyTask(taskName, {
                target: taskName,
            });
        }
    }
}
