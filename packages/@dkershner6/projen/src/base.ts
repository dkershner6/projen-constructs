import merge from "lodash.merge";
import { ProjectOptions, javascript } from "projen";
import { NodeProjectOptions } from "projen/lib/javascript";
import {
    TypeScriptProject,
    TypeScriptProjectOptions,
} from "projen/lib/typescript";

export const BASE_TSCONFIG_NODE_20: Partial<TypeScriptProjectOptions> = {
    tsconfig: {
        fileName: "tsconfig.publish.json",
        compilerOptions: {
            lib: ["es2023"],
            target: "es2022",
        },
    },
    tsconfigDev: {
        fileName: "tsconfig.json", // Shim for VSCode, dev file must be named this
        compilerOptions: {},
    },
};

export const BASE_NODE_20_PNPM_8: Partial<NodeProjectOptions> = {
    minNodeVersion: "18.12.0",
    maxNodeVersion: "20.10.0",
    workflowNodeVersion: "20.10.0",

    packageManager: javascript.NodePackageManager.PNPM,
    pnpmVersion: "8",
};

export const BASE_ESLINT_CONFIG: Partial<TypeScriptProjectOptions> = {
    eslint: true,
};

export const BASE_JEST_CONFIG: Partial<NodeProjectOptions> = {
    jest: true,
    jestOptions: {
        configFilePath: "jest.config.json",
        jestConfig: {
            globals: {
                "ts-jest": null, // Works with TSConfig switch
            },
        },
    },
};

export const BASE_PRETTIER_CONFIG: Partial<NodeProjectOptions> = {
    prettier: true,
    prettierOptions: {
        settings: {
            tabWidth: 4,
        },
    },
};

export const BASE_PROJECT_OPTIONS_NODE_20: Omit<
    ProjectOptions & NodeProjectOptions & TypeScriptProjectOptions,
    "defaultReleaseBranch" | "name"
> = merge(
    BASE_TSCONFIG_NODE_20,
    BASE_NODE_20_PNPM_8,
    BASE_JEST_CONFIG,
    BASE_PRETTIER_CONFIG,
);

export const enactBaseProjectConfig = (project: TypeScriptProject): void => {
    // Eslint
    const lintTask = project.tasks.tryFind("eslint");
    if (lintTask) {
        const currentLintCommand = lintTask.steps[0].exec;
        lintTask.reset(
            currentLintCommand?.replace(
                "--no-error-on-unmatched-pattern",
                "--no-error-on-unmatched-pattern --max-warnings 0", // Strict linting
            ),
        );

        const altLintTask = project.addTask("lint", {
            description: "Alternate lint command",
        });
        altLintTask.spawn(lintTask);
    }

    project.addDevDeps("eslint-plugin-jest", "eslint-plugin-sonarjs");
    project.eslint?.addPlugins("jest", "sonarjs");
    project.eslint?.addExtends(
        "plugin:jest/recommended",
        "plugin:sonarjs/recommended",
    );

    // TypeScript
    project.tsconfig?.addExclude("src/**/*.test.ts");
    project.tasks
        .tryFind("compile")
        ?.reset(`tsc --build ${project.tsconfig?.fileName}`);
};
