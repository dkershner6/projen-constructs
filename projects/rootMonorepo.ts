import { monorepo } from "@aws/pdk";
import merge from "lodash.merge";
import {
    RECOMMENDED_NODE_20_PROJECT_OPTIONS,
    enactNode20ProjectConfig,
} from "../packages/dkershner6-projen/src/node20";

const ADDITIONAL_DEV_DIRS = ["projects"];

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

                    eslintOptions: {
                        dirs: [],
                        devdirs: ADDITIONAL_DEV_DIRS,
                    },

                    workflowPackageCache: true,
                },
                RECOMMENDED_NODE_20_PROJECT_OPTIONS,
            ),
        );

        for (const devDir of ADDITIONAL_DEV_DIRS) {
            this.tsconfigDev?.addInclude(`${devDir}/**/*.ts`);
        }

        const defaultTask = this.tasks.tryFind("default");
        if (defaultTask) {
            this.tasks.tryFind("build")?.prependSpawn(defaultTask);
        }

        const upgradeDepsTask = this.tasks.tryFind("upgrade-deps");
        if (upgradeDepsTask) {
            this.tasks.tryFind("post-upgrade")?.spawn(upgradeDepsTask);
        }

        enactNode20ProjectConfig(this);
    }
}
