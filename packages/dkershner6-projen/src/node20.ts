import merge from "lodash.merge";
import { ProjectOptions, javascript } from "projen";
import {
    AwsCdkConstructLibrary,
    AwsCdkConstructLibraryOptions,
} from "projen/lib/awscdk";
import { NodeProjectOptions } from "projen/lib/javascript";
import {
    TypeScriptProject,
    TypeScriptProjectOptions,
} from "projen/lib/typescript";

export const RECOMMENDED_TSCONFIG_NODE_20: Partial<TypeScriptProjectOptions> = {
    tsconfig: {
        fileName: "tsconfig.publish.json",
        compilerOptions: {
            lib: ["es2023"],
            target: "es2022",
            // Let lint handle these
            noUnusedLocals: false,
            noUnusedParameters: false,
        },
    },
    tsconfigDev: {
        fileName: "tsconfig.json", // Shim for VSCode, dev file must be named this
        compilerOptions: {},
    },
};

export const RECOMMENDED_NODE_20_PNPM_8: Partial<NodeProjectOptions> = {
    minNodeVersion: "18.12.0",
    maxNodeVersion: "20.10.0",
    workflowNodeVersion: "20.10.0",

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

export const RECOMMENDED_JSII_JEST_CONFIG = {
    jest: true,
    jestOptions: {
        jestConfig: {
            transformIgnorePatterns: [
                `node_modules/(?!(${ESM_MODULES_TO_TRANSFORM.join("|")})/)`,
                "\\.pnp\\.[^\\/]+$",
            ],
        },
    },
};

export const RECOMMENDED_JEST_CONFIG: Partial<NodeProjectOptions> = merge({
    jestOptions: {
        jestConfig: {
            globals: {
                "ts-jest": null, // Works with TSConfig switch
            },
        },
    },
});

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
> = merge(
    RECOMMENDED_NODE_20_PNPM_8,
    RECOMMENDED_JEST_CONFIG,
    RECOMMENDED_PRETTIER_CONFIG,
);

export const RECOMMENDED_NODE_20_PROJECT_OPTIONS: Omit<
    ProjectOptions & NodeProjectOptions & TypeScriptProjectOptions,
    "defaultReleaseBranch" | "name"
> = merge(
    RECOMMENDED_TSCONFIG_NODE_20,
    RECOMMENDED_NODE_20_JSII_PROJECT_OPTIONS,
);

export const enactNode20ProjectConfig = (project: TypeScriptProject): void => {
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

    // TypeScript
    if (!(project instanceof AwsCdkConstructLibrary)) {
        project.tsconfig?.addExclude("src/**/*.test.ts");

        project.tasks
            .tryFind("compile")
            ?.reset(`tsc --build ${project.tsconfig?.fileName}`);
    }

    project.tasks.addTask("type-check").exec("tsc --noEmit");
};

export class Node20TypeScriptProject extends TypeScriptProject {
    constructor(options: TypeScriptProjectOptions) {
        super(merge(options, RECOMMENDED_NODE_20_PROJECT_OPTIONS));

        enactNode20ProjectConfig(this);
    }
}

export class Node20AwsCdkConstructLibrary extends AwsCdkConstructLibrary {
    constructor(options: AwsCdkConstructLibraryOptions) {
        super(merge(options, RECOMMENDED_NODE_20_JSII_PROJECT_OPTIONS));

        enactNode20ProjectConfig(this);
    }
}
