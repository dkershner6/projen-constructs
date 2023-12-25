import { monorepo } from "@aws/pdk";
import merge from "lodash.merge";
import { COMMON_PROJECT_OPTIONS } from "./common/options";

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
                    autoApproveOptions: { allowedUsernames: ["dkershner6"] },

                    eslintOptions: {
                        dirs: [],
                        devdirs: ADDITIONAL_DEV_DIRS,
                    },

                    workflowPackageCache: true,
                },
                COMMON_PROJECT_OPTIONS,
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
    }
}
