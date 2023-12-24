import {
    TypeScriptProject,
    TypeScriptProjectOptions,
} from "projen/lib/typescript";
import { COMMON_PROJECT_OPTIONS } from "./options";
import { RootMonorepo } from "../rootMonorepo";

export class ProjenConstructTsLib extends TypeScriptProject {
    constructor(
        rootMonorepoProject: RootMonorepo,
        options: Omit<
            TypeScriptProjectOptions,
            "defaultReleaseBranch" | "outDir"
        >,
    ) {
        super({
            parent: rootMonorepoProject,
            ...COMMON_PROJECT_OPTIONS,
            ...options,

            defaultReleaseBranch: "main",
            outdir: `packages/${options.name}`,
            releaseTagPrefix: `${options.name}@v`,

            peerDeps: ["constructs", "projen", ...(options.peerDeps ?? [])],
            devDeps: ["constructs", "projen", ...(options.devDeps ?? [])],
        });

        this.tsconfig?.addExclude("src/**/*.test.ts");
        this.tasks
            .tryFind("compile")
            ?.reset(`tsc --build ${this.tsconfig?.fileName}`);
    }
}
