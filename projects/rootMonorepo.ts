import { monorepo } from "@aws/pdk";
import { COMMON_PROJECT_OPTIONS } from "./common/options";

const ADDITIONAL_DEV_DIRS = ["projects"];

export class RootMonorepo extends monorepo.MonorepoTsProject {
    constructor() {
        super({
            ...COMMON_PROJECT_OPTIONS,
            devDeps: ["@aws/pdk", "@types/jest"],
            name: "projen-constructs",

            projenrcTs: true,
            github: true,

            eslintOptions: {
                dirs: [],
                devdirs: ADDITIONAL_DEV_DIRS,
            },
        });

        for (const devDir of ADDITIONAL_DEV_DIRS) {
            this.tsconfigDev?.addInclude(`${devDir}/**/*.ts`);
        }

        const upgradeDepsTask = this.tasks.tryFind("upgrade-deps");
        if (upgradeDepsTask) {
            this.tasks.tryFind("post-upgrade")?.spawn(upgradeDepsTask);
        }
    }
}
