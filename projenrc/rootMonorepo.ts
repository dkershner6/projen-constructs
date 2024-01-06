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
        this.addTask("clean-modules", {
            exec: "find . -type d -name 'node_modules' -exec rm -r {} \\;",
        });

        const nxBuild = this.nx.targetDefaults.build;
        this.nx.setTargetDefault("compile", {
            ...nxBuild,
            dependsOn: ["^compile"],
        });

        new DKBugFixes(this);
        new EslintConfig(this);

        for (const taskName of Object.values(DKTaskName)) {
            this.addNxRunManyTask(taskName, {
                target: taskName,
            });
        }
    }

    override preSynthesize(): void {
        super.preSynthesize();

        this.tasks.tryFind("compile")?.reset(
            this.execNxRunManyCommand({
                target: "compile",
            }),
        );
    }
}
