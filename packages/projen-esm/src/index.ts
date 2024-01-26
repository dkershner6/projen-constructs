import { Component } from "projen";
import {
    TypeScriptModuleResolution,
    TypescriptConfig,
    TypescriptConfigOptions,
} from "projen/lib/javascript";
import { TypeScriptProject } from "projen/lib/typescript";

export const TS_WITH_JS = "^.+\\.[tj]sx?$";

/**
 * Helps Jest and TSJest play nice with ESM.
 */
export const ESM_PROJECT_OPTIONS = {
    jestOptions: {
        jestConfig: {
            extensionsToTreatAsEsm: [".ts", ".tsx"],
            moduleNameMapper: {
                "(.+)\\.js": "$1",
            },
        },
    },
    tsJestOptions: {
        transformOptions: {
            isolatedModules: true,
            useESM: true,
        },
        transformPattern: TS_WITH_JS,
    },
    tsconfig: {
        compilerOptions: {
            module: "esnext",
            moduleResolution: TypeScriptModuleResolution.NODE,
            allowJs: true,
        },
    },
};

/**
 * Adds ESM support and linting to a projen TypeScript project.
 */
export class EsmLibrary extends Component {
    declare project: TypeScriptProject;

    constructor(project: TypeScriptProject) {
        super(project);

        project.package.addField("type", "module");

        project.addDevDeps("eslint-plugin-file-extension-in-import-ts");

        project.eslint?.addPlugins("file-extension-in-import-ts");
        project.eslint?.addRules({
            "file-extension-in-import-ts/file-extension-in-import-ts": [
                "error",
                "always",
            ],
        });
    }
}

export interface EsmRootOptions {
    /**
     * ESM App specific tsconfig options.
     * Due to conflicts between projen, things like the AWS CDK, and ESM tsconfig settings, a separate tsconfig is used for ESM Apps.
     */
    readonly tsconfig?: TypescriptConfigOptions;
}

/**
 * Adds ESM support to a projen Root project without breaking projen itself.
 * This is unneeded in a Monorepo, but is useful for standalone projects.
 */
export class EsmRoot extends Component {
    declare project: TypeScriptProject;

    public tsconfig: TypescriptConfig;

    constructor(project: TypeScriptProject, options: EsmRootOptions = {}) {
        super(project);

        this.tsconfig = new TypescriptConfig(project, {
            ...(options.tsconfig ?? { compilerOptions: {} }),
            fileName: options.tsconfig?.fileName ?? "tsconfig.esm.json",
        });
    }
}
