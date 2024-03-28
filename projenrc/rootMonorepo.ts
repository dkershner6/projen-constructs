import merge from "lodash.merge";

import {
    MonorepoProject,
    MonorepoProjectOptions,
} from "../packages/dkershner6-projen-nx-monorepo/src/MonorepoProject";
import {
    RECOMMENDED_NODE_20_PROJECT_OPTIONS,
    DKEslintConfig,
    DKBugFixes,
    DKTaskName,
} from "../packages/dkershner6-projen-typescript/src";
import { CSpell } from "../packages/projen-cspell/src";

import { THIS_REPOSITORY } from "./common/constants";

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
                    github: true,

                    depsUpgradeOptions: {
                        workflowOptions: {
                            preUpgradeSteps: [
                                { run: "echo 'preUpgradeSteps'" },
                            ],
                        },
                    },

                    repository: THIS_REPOSITORY,
                },
                RECOMMENDED_NODE_20_PROJECT_OPTIONS,
            ),
        );

        this.gitignore.exclude(".DS_Store");
        this.npmignore?.exclude(".DS_Store");

        new DKBugFixes(this);
        new DKEslintConfig(this);

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
}
