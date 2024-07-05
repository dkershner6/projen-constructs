import merge from "lodash.merge";

import {
    NxMonorepoProject,
    NxMonorepoProjectOptions,
} from "../packages/dkershner6-projen-nx-monorepo/src/NxMonorepoProject";
import {
    RECOMMENDED_NODE_20_PROJECT_OPTIONS,
    DKEslintConfig,
    DKBugFixes,
    DKTaskName,
    DKTasks,
} from "../packages/dkershner6-projen-typescript/src";
import { CSpell } from "../packages/projen-cspell/src";

import { THIS_REPOSITORY } from "./common/constants";

export class RootMonorepo extends NxMonorepoProject {
    constructor() {
        super(
            merge<NxMonorepoProjectOptions, Partial<NxMonorepoProjectOptions>>(
                {
                    devDeps: [
                        "@types/jest",
                        "@types/lodash.merge",
                        "lodash.merge",
                    ],
                    name: "projen-constructs",

                    projenrcTs: true,
                    github: true,

                    repository: THIS_REPOSITORY,
                } as NxMonorepoProjectOptions,
                RECOMMENDED_NODE_20_PROJECT_OPTIONS,
            ),
        );

        this.gitignore.exclude(".DS_Store");
        this.npmignore?.exclude(".DS_Store");

        new DKBugFixes(this);
        new DKEslintConfig(this);
        new DKTasks(this);

        for (const taskName of [
            DKTaskName.CLEAN_COMPILE,
            DKTaskName.DOCGEN_REMOVE,
            DKTaskName.LINT,
            DKTaskName.TEST_UNIT,
            DKTaskName.TYPE_CHECK,
            DKTaskName.UPGRADE_PACKAGE,
        ]) {
            const task = this.tasks.tryFind(taskName);
            if (task) {
                task.exec(
                    this.execNxRunManyCommand({
                        target: taskName,
                    }),
                    { receiveArgs: true },
                );
                continue;
            }

            this.addTask(taskName, {
                exec: this.execNxRunManyCommand({
                    target: taskName,
                }),
                receiveArgs: true,
            });
        }

        new CSpell(this);

        this.nx.useNxCloud(
            "OTNiNWJlNjgtNGE5NS00YmYwLWFmYTMtOGFlODM3YTkwNWFkfHJlYWQ=",
        );
        this.addGitIgnore("nx-cloud.env");
    }
}
