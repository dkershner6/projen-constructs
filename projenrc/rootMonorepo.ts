import { monorepo } from "@aws/pdk";
import merge from "lodash.merge";

import {
    RECOMMENDED_NODE_20_PROJECT_OPTIONS,
    EslintConfig,
    DKBugFixes,
    DKTaskName,
} from "../packages/dkershner6-projen-typescript/src";

export class RootMonorepo extends monorepo.MonorepoTsProject {
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

        const defaultTask = this.tasks.tryFind("default");
        if (defaultTask) {
            this.tasks.tryFind("build")?.prependSpawn(defaultTask);
        }

        new DKBugFixes(this);
        new EslintConfig(this);

        for (const taskName of Object.values(DKTaskName)) {
            this.addNxRunManyTask(taskName, {
                target: taskName,
            });
        }
    }
}
