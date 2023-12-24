import { ProjectOptions, javascript } from "projen";
import { NodeProjectOptions } from "projen/lib/javascript";
import { TypeScriptProjectOptions } from "projen/lib/typescript";

export const SHIMS_FOR_VSCODE = {
    tsconfig: {
        fileName: "tsconfig.publish.json",
        compilerOptions: {},
    },
    tsconfigDev: {
        fileName: "tsconfig.json",
        compilerOptions: {},
    },
};

export const COMMON_PROJECT_OPTIONS: Omit<
    ProjectOptions & NodeProjectOptions & TypeScriptProjectOptions,
    "defaultReleaseBranch" | "name"
> = {
    ...SHIMS_FOR_VSCODE,
    minNodeVersion: "18.12.0",
    maxNodeVersion: "20.10.0",
    workflowNodeVersion: "20.10.0",

    packageManager: javascript.NodePackageManager.PNPM,
    pnpmVersion: "8",

    eslint: true,

    prettier: true,
    prettierOptions: {
        settings: {
            tabWidth: 4,
        },
    },

    jestOptions: {
        configFilePath: "jest.config.json",
    },
};
