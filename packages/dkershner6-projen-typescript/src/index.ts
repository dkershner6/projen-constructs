import deepClone from "clone-deep";
import { javascript, ProjectOptions } from "projen";
import {
    AwsCdkConstructLibrary,
    AwsCdkConstructLibraryOptions,
} from "projen/lib/awscdk";
import {
    TypeScriptCompilerOptions,
    NodeProjectOptions,
} from "projen/lib/javascript";
import {
    TypeScriptProjectOptions,
    TypeScriptProject,
} from "projen/lib/typescript";
import { deepMerge } from "projen/lib/util";

export const PUBLISH_FILE_PATTERNS: string[] = ["src/**/*.ts"];

export const TEST_FILE_SUFFIXES = ["test", "spec"];
export const TEST_FOLDERS = ["__tests__", "__mocks__"];

export const DEV_FILE_PATTERNS = [
    ...TEST_FOLDERS.map((folder) => `src/**/${folder}/**/*`),
    ...TEST_FILE_SUFFIXES.map((suffix) => `src/**/*.${suffix}.ts`),
];
export const RECOMMENDED_TSCONFIG_COMPILER_OPTIONS: TypeScriptCompilerOptions =
    {
        lib: ["es2023"],
        target: "es2022",
        // Let lint handle these
        noUnusedLocals: false,
        noUnusedParameters: false,
        // We don't want to be responsible for external libs errors, change this if TS ever allows checking OUR declaration files but not node_modules
        skipLibCheck: true,

        types: ["jest", "node"],
    };

export const RECOMMENDED_TSCONFIG_NODE_20: Partial<TypeScriptProjectOptions> = {
    tsconfig: {
        fileName: "tsconfig.publish.json",
        compilerOptions: {
            ...RECOMMENDED_TSCONFIG_COMPILER_OPTIONS,
        },
    },
    tsconfigDev: {
        fileName: "tsconfig.json", // Shim for VSCode, dev file must be named this
        compilerOptions: {},
        include: DEV_FILE_PATTERNS,
    },
};

export const RECOMMENDED_NODE_20: Partial<TypeScriptProjectOptions> = {
    minNodeVersion: "18.12.0",
    maxNodeVersion: "20.10.0",
    workflowNodeVersion: "20.10.0",

    projenrcTs: true,
    sampleCode: false,

    devDeps: ["@types/clone-deep", "clone-deep"],
};

export const RECOMMENDED_PNPM_8: Partial<TypeScriptProjectOptions> = {
    packageManager: javascript.NodePackageManager.PNPM,
    pnpmVersion: "8",
};

export const RECOMMENDED_ESLINT_CONFIG: Partial<TypeScriptProjectOptions> = {
    eslint: true,
};

const ESM_MODULES_TO_TRANSFORM = [
    "@babel/runtime",
    "@buildresonance/global-lib-storefront-shared-components",
    "@buildresonance/global-lib-storefront-next-markdown",
    "@mui*",
    ".*separated-tokens",
    ".*util-gfm.*",
    "bail",
    "ccount",
    "character-entities.*",
    "decode-named-character-reference",
    "direction",
    "escape-string-regexp",
    "github-slugger",
    "hast.*",
    "html-void-elements",
    "is-plain-obj",
    "longest-streak",
    "markdown.*",
    "mdast.*",
    "micromark.*",
    "property-information",
    "rehype.*",
    "remark.*",
    "stringify-entities",
    "strip-markdown",
    "trim-lines",
    "trough",
    "unified",
    "unist.*",
    "vfile.*",
    "web-namespaces",
    "zwitch",
    "@panva/hkdf",
    "jose",
    "swiper",
    "swiper/react",
    "ssr-window",
    "dom7",
    "uuid",
];

export const RECOMMENDED_JEST_CONFIG: Partial<NodeProjectOptions> = {
    jest: true,
    jestOptions: {
        jestConfig: {
            testEnvironment: "node",
            transformIgnorePatterns: [
                `node_modules/(?!(${ESM_MODULES_TO_TRANSFORM.join("|")})/)`,
                "\\.pnp\\.[^\\/]+$",
            ],
        },
    },
};
export const RECOMMENDED_PRETTIER_CONFIG: Partial<NodeProjectOptions> = {
    prettier: true,
    prettierOptions: {
        settings: {
            tabWidth: 4,
        },
    },
};

export const RECOMMENDED_NODE_20_JSII_PROJECT_OPTIONS: Omit<
    ProjectOptions & NodeProjectOptions & TypeScriptProjectOptions,
    "defaultReleaseBranch" | "name"
> = deepMerge([
    deepClone(RECOMMENDED_NODE_20),
    RECOMMENDED_ESLINT_CONFIG,
    RECOMMENDED_JEST_CONFIG,
    RECOMMENDED_PRETTIER_CONFIG,
]);

export const RECOMMENDED_NODE_20_PROJECT_OPTIONS: Omit<
    ProjectOptions & NodeProjectOptions & TypeScriptProjectOptions,
    "defaultReleaseBranch" | "name"
> = deepMerge([
    deepClone(RECOMMENDED_TSCONFIG_NODE_20),
    RECOMMENDED_PNPM_8,
    RECOMMENDED_NODE_20_JSII_PROJECT_OPTIONS,
]);

export const enactNode20ProjectConfig = (project: TypeScriptProject): void => {
    // Install
    project.addTask("ci").spawn(project.package.installCiTask);
    project.addTask("i").spawn(project.package.installTask);

    // Eslint
    const lintTask = project.eslint?.eslintTask;
    if (lintTask) {
        const currentLintCommand = lintTask.steps[0];
        if (currentLintCommand?.args) {
            currentLintCommand.args?.push("--max-warnings 0"); // Strict linting
        } else {
            // @ts-expect-error - Violating read-only
            currentLintCommand.args = ["--max-warnings 0"]; // Strict linting
        }

        const altLintTask = project.addTask("lint", {
            description: "Alternate lint command",
        });
        altLintTask.spawn(lintTask);
    }

    project.addDevDeps("eslint-plugin-jest", "eslint-plugin-sonarjs");
    project.eslint?.addPlugins("jest", "sonarjs");
    project.eslint?.addExtends(
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jest/recommended",
        "plugin:sonarjs/recommended",
    );
    project.eslint?.addRules({
        "no-console": ["warn", { allow: ["debug", "info", "warn", "error"] }],
        "import/no-unresolved": "off", // Handled by TS and it gets confused on @types packages.
        "import/namespace": "off",
        "sonarjs/no-redundant-jump": "off",
        "sonarjs/no-small-switch": "warn",
        "@typescript-eslint/explicit-function-return-type": [
            "warn",
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
                allowHigherOrderFunctions: true,
                allowDirectConstAssertionInArrowFunctions: true,
                allowConciseArrowFunctionExpressionsStartingWithVoid: true,
            },
        ],
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                ignoreRestSiblings: true,
            },
        ],
    });

    project.eslint?.addOverride({
        files: ["*.js", "*.jsx"],
        rules: {
            "import/no-unresolved": "error",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-var-requires": "off",
        },
    });

    for (const pattern of DEV_FILE_PATTERNS) {
        project.eslint?.allowDevDeps(pattern);
    }

    // TypeScript
    if (!(project instanceof AwsCdkConstructLibrary)) {
        for (const suffix of TEST_FILE_SUFFIXES) {
            project.tsconfig?.addExclude(`src/**/*.${suffix}.ts`);
        }
        for (const folder of TEST_FOLDERS) {
            project.tsconfig?.addExclude(`**/${folder}/**/*`);
        }

        project.tasks
            .tryFind("compile")
            ?.reset(`tsc --build ${project.tsconfig?.fileName}`);
    }

    project.tasks.addTask("type-check").exec("tsc --noEmit");
};

export class Node20TypeScriptProject extends TypeScriptProject {
    constructor(options: TypeScriptProjectOptions) {
        super(
            deepMerge([
                deepClone(RECOMMENDED_NODE_20_PROJECT_OPTIONS),
                options,
            ]) as TypeScriptProjectOptions,
        );

        enactNode20ProjectConfig(this);
    }
}

export class Node20AwsCdkConstructLibrary extends AwsCdkConstructLibrary {
    constructor(options: AwsCdkConstructLibraryOptions) {
        super(
            deepMerge([
                deepClone(RECOMMENDED_NODE_20_JSII_PROJECT_OPTIONS),
                options,
            ]) as AwsCdkConstructLibraryOptions,
        );

        enactNode20ProjectConfig(this);
    }
}
