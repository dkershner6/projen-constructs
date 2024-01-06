import { monorepo } from "@aws/pdk";
import merge from "lodash.merge";

import { MonorepoProject } from "../packages/dkershner6-projen-nx-monorepo/src/MonorepoProject";
import {
    RECOMMENDED_NODE_20_PROJECT_OPTIONS,
    EslintConfig,
    DKBugFixes,
    DKTaskName,
} from "../packages/dkershner6-projen-typescript/src";

export class RootMonorepo extends MonorepoProject {
    constructor() {
        super(
            merge<
                monorepo.MonorepoTsProjectOptions,
                Partial<monorepo.MonorepoTsProjectOptions>
            >(
                {
                    devDeps: [
                        "@aws/pdk",
                        "@types/jest",
                        "@types/lodash.merge",
                        "lodash.merge",
                    ],
                    name: "projen-constructs",

                    projenrcTs: true,
                    github: true,

                    workflowPackageCache: true,
                    depsUpgradeOptions: {
                        workflow: false,
                    },
                },
                RECOMMENDED_NODE_20_PROJECT_OPTIONS,
            ),
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
