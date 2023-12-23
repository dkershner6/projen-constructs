import { monorepo } from "@aws/pdk";
import { ProjectOptions, javascript } from "projen";
import { NodeProjectOptions } from "projen/lib/javascript";
import {
    TypeScriptProject,
    TypeScriptProjectOptions,
} from "projen/lib/typescript";
import { VsCodeWorkspaces } from "./packages/projen-vscode-workspaces/src";

const COMMON_PROJECT_OPTIONS: Omit<
    ProjectOptions & NodeProjectOptions & TypeScriptProjectOptions,
    "defaultReleaseBranch" | "name"
> = {
    minNodeVersion: "18.12.0",
    maxNodeVersion: "20.10.0",
    workflowNodeVersion: "20.10.0",
    packageManager: javascript.NodePackageManager.PNPM,

    eslint: true,
    github: true,

    prettier: true,
    prettierOptions: {
        settings: {
            tabWidth: 4,
        },
    },
};

const rootProject = new monorepo.MonorepoTsProject({
    ...COMMON_PROJECT_OPTIONS,
    devDeps: ["@aws/pdk", "@types/jest"],
    name: "projen-constructs",
    projenrcTs: true,
});

const workspacesProject = new TypeScriptProject({
    ...COMMON_PROJECT_OPTIONS,
    parent: rootProject,
    name: "projen-vscode-workspaces",
    defaultReleaseBranch: "main",
    outdir: "packages/projen-vscode-workspaces",
    release: true,
    releaseToNpm: true,

    peerDeps: ["constructs", "projen"],
    devDeps: ["constructs", "projen"],

    jestOptions: {
        configFilePath: "jest.config.json",
    },
    tsconfig: {
        fileName: "tsconfig.publish.json",
        compilerOptions: {},
    },
    tsconfigDev: {
        fileName: "tsconfig.json",
        compilerOptions: {},
    },
});

workspacesProject.tsconfig?.addExclude("src/**/*.test.ts");

new TypeScriptProject({
    ...COMMON_PROJECT_OPTIONS,
    parent: rootProject,
    name: "projen-nvm",
    defaultReleaseBranch: "main",
    outdir: "packages/projen-nvm",
    release: true,
    releaseToNpm: true,

    peerDeps: ["constructs", "projen"],
    devDeps: ["constructs", "projen"],
});

new VsCodeWorkspaces(rootProject, {
    filename: "Projen Constructs Monorepo.code-workspace",
});

rootProject.synth();
