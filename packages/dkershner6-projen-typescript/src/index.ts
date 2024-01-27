import deepClone from "clone-deep";
import { Component, javascript, ProjectOptions } from "projen";
import { AwsCdkConstructLibrary } from "projen/lib/awscdk";
import {
    TypeScriptCompilerOptions,
    NodeProjectOptions,
    JestOptions,
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

export const PROJEN_COMPILER_OPTION_DEFAULTS: TypeScriptCompilerOptions = {
    alwaysStrict: true,
    declaration: true,
    esModuleInterop: true,
    experimentalDecorators: true,
    inlineSourceMap: true,
    inlineSources: true,
    lib: ["es2019"],
    module: "CommonJS",
    noEmitOnError: false,
    noFallthroughCasesInSwitch: true,
    noImplicitAny: true,
    noImplicitReturns: true,
    noImplicitThis: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    resolveJsonModule: true,
    strict: true,
    strictNullChecks: true,
    strictPropertyInitialization: true,
    stripInternal: true,
    target: "ES2019",
};

export const RECOMMENDED_TSCONFIG_COMPILER_OPTIONS: TypeScriptCompilerOptions =
    {
        lib: ["es2023"],
        target: "es2022",
        // Let lint handle these
        noUnusedLocals: false,
        noUnusedParameters: false,
        // We don't want to be responsible for external libs errors, change this if TS ever allows checking OUR declaration files but not node_modules
        skipLibCheck: true,
        // Opinions
        noImplicitOverride: true,
        forceConsistentCasingInFileNames: true,
        esModuleInterop: true,

        declaration: true, // Just to state it is different than tsconfigDev

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
        compilerOptions: {
            declaration: false, // This helps with certain type inference issues that more often come up in test and other non-published code
        },
        include: DEV_FILE_PATTERNS,
    },
};

export const RECOMMENDED_NODE_20: Partial<TypeScriptProjectOptions> = {
    minNodeVersion: "20.10.0",
    maxNodeVersion: "20.10.0",
    workflowNodeVersion: "20.10.0",

    projenrcTs: true,
    sampleCode: false,
    autoMerge: false,
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
    "@mui*",
    "separated-tokens",
    "util-gfm.*",
    "bail",
    "ccount",
    "character-entities.*",
    "decode-named-character-reference",
    "devlop",
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

export const buildJestTransformIgnorePatterns = (
    nodeModulesToTransform?: string[],
): string[] => {
    const modulesRegex = [
        ...new Set([
            ...ESM_MODULES_TO_TRANSFORM,
            ...(nodeModulesToTransform ?? []),
        ]),
    ]
        .map((module) => `.*${module}`) // .* is needed on front for pnpm nesting
        .join("|");
    return [
        `node_modules/(?!(${modulesRegex})/)`, // default is just `node_modules`
        "\\.pnp\\.[^\\/]+$", // default
    ];
};

export const RECOMMENDED_JEST_CONFIG: Partial<TypeScriptProjectOptions> = {
    jest: true,
    jestOptions: {
        jestConfig: {
            testEnvironment: "node",
            testTimeout: 15000,
            transformIgnorePatterns: buildJestTransformIgnorePatterns(),
        },
    },
    tsJestOptions: {
        transformOptions: {
            isolatedModules: true,
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
export const RECOMMENDED_NODE_20_PROJECT_OPTIONS: Omit<
    ProjectOptions & NodeProjectOptions & TypeScriptProjectOptions,
    "defaultReleaseBranch" | "name"
> = deepMerge([
    deepClone(RECOMMENDED_TSCONFIG_NODE_20),
    RECOMMENDED_PNPM_8,
    RECOMMENDED_NODE_20,
    RECOMMENDED_ESLINT_CONFIG,
    RECOMMENDED_JEST_CONFIG,
    RECOMMENDED_PRETTIER_CONFIG,
]);

export class DKBugFixes extends Component {
    constructor(project: TypeScriptProject) {
        super(project);

        // Why not? Always true.
        project.package.addField("sideEffects", false);

        // DevDeps (doesn't work in config)
        project.addDevDeps("@types/clone-deep", "clone-deep");

        project.addGitIgnore(".DS_Store");
        project.addPackageIgnore(".DS_Store");

        project.addPackageIgnore("/project.json");
        project.addPackageIgnore("/docs/");
        project.addPackageIgnore("**/*.md");
        project.addPackageIgnore("/.jest/");

        project.addPackageIgnore("/CONTRIBUTING.md");
        project.addPackageIgnore("/README.md");
        project.addPackageIgnore("/LICENSE");

        if (project.docgen) {
            project.gitattributes.addAttributes(
                `/${project.docsDirectory}`,
                "linguist-generated",
            );
        }

        // TypeScript
        if (!(project instanceof AwsCdkConstructLibrary)) {
            for (const suffix of TEST_FILE_SUFFIXES) {
                project.tsconfig?.addExclude(
                    `${project.srcdir}/**/*.${suffix}.ts`,
                );
            }
            for (const folder of TEST_FOLDERS) {
                project.tsconfig?.addExclude(`**/${folder}/**/*`);
            }
        }
    }
}

export class EslintConfig extends Component {
    constructor(project: TypeScriptProject) {
        super(project);

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
            "no-console": [
                "warn",
                { allow: ["debug", "info", "warn", "error"] },
            ],
            "no-trailing-spaces": "off", // Conflicts with Prettier
            "no-multiple-empty-lines": "off", // Conflicts with Prettier
            "import/no-unresolved": "off", // Handled by TS and it gets confused on @types packages.
            "import/namespace": "off",
            "import/order": [
                "error",
                {
                    groups: [
                        "builtin",
                        "external",
                        "parent",
                        "sibling",
                        "index",
                    ],
                    "newlines-between": "always",
                    pathGroups: [
                        {
                            pattern: "react",
                            group: "external",
                            position: "before",
                        },
                    ],
                    pathGroupsExcludedImportTypes: ["react"],
                    alphabetize: {
                        order: "asc",
                        caseInsensitive: true,
                    },
                },
            ],
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
            "@typescript-eslint/return-await": ["error", "always"],
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
    }
}

export enum DKTaskName {
    CI = "ci",
    I = "i",
    LINT = "lint",
    TEST_UNIT = "test-unit",
    TYPE_CHECK = "type-check",
}

export class DKTasks extends Component {
    public static readonly IS_NOT_RELEASE_CONDITION = `if [ "$RELEASE" = "true" ] ; then exit 1 ; fi`;

    constructor(project: TypeScriptProject) {
        super(project);

        // Install
        project.addTask(DKTaskName.CI).spawn(project.package.installCiTask);
        project.addTask(DKTaskName.I).spawn(project.package.installTask);

        const typeCheckTask = project.tasks.addTask(DKTaskName.TYPE_CHECK);
        typeCheckTask.exec("tsc --noEmit");

        // Eslint
        const maxWarningsZeroArg = "--max-warnings=0";
        const lintTask = project.eslint?.eslintTask;

        if (lintTask) {
            const lintTaskStepArgs = lintTask.steps[0].args;
            // @ts-expect-error - Violating readonly
            lintTask.steps[0].args = [
                ...(lintTaskStepArgs ?? []),
                maxWarningsZeroArg,
            ];
            lintTask.addCondition(DKTasks.IS_NOT_RELEASE_CONDITION);

            project
                .addTask(DKTaskName.LINT, {
                    condition: DKTasks.IS_NOT_RELEASE_CONDITION,
                    description: "Alternate lint command",
                    receiveArgs: true,
                })
                .spawn(lintTask);

            const originalTestTaskStep = project.testTask.steps[0];
            const { exec, ...restOfTestTaskStep } = originalTestTaskStep;

            const unitTestTask = project.addTask(DKTaskName.TEST_UNIT, {
                condition: DKTasks.IS_NOT_RELEASE_CONDITION,
                receiveArgs: true,
            });
            unitTestTask.exec(exec as string, { ...restOfTestTaskStep });

            project.testTask.reset();
            project.testTask.spawn(lintTask);
            project.testTask.spawn(typeCheckTask);
            project.testTask.spawn(unitTestTask);
        }

        // Compile
        const cleanCompileTask =
            project.tasks.tryFind("clean-compile") ??
            project.tasks.addTask("clean-compile", {
                description: "Clean up the compiled output",
            });
        cleanCompileTask.exec(
            `rm -rf ${project.libdir} && rm -rf ${project.artifactsDirectory}`,
        );

        // Docgen
        const docgenTask = project.tasks.tryFind("docgen");
        if (docgenTask) {
            docgenTask.addCondition(DKTasks.IS_NOT_RELEASE_CONDITION);
        }
    }
}

export interface Node20TypeScriptExtraJestOptions {
    /**
     * Additional modules for jest to transform, typically ESM modules.
     *
     * @default - A list of known ESM modules commonly used in projects
     */
    readonly modulesToTransform?: string[];
}

export interface Node20TypeScriptProjectJestOptions
    extends JestOptions,
        Node20TypeScriptExtraJestOptions {}

export class DKJest extends Component {
    constructor(
        project: TypeScriptProject,
        options?: Node20TypeScriptProjectJestOptions,
    ) {
        super(project);

        if (project.jest) {
            project.addDevDeps("jest-mock");
            if (options?.modulesToTransform) {
                project.jest.config.transformIgnorePatterns =
                    buildJestTransformIgnorePatterns([
                        ...ESM_MODULES_TO_TRANSFORM,
                        ...options.modulesToTransform,
                    ]);
            }
        }
    }
}

export interface Node20TypeScriptProjectOptions
    extends TypeScriptProjectOptions {
    jestOptions?: Node20TypeScriptProjectJestOptions;
}

export class Node20TypeScriptProject extends TypeScriptProject {
    constructor(options: Node20TypeScriptProjectOptions) {
        super(
            deepMerge([
                deepClone(RECOMMENDED_NODE_20_PROJECT_OPTIONS),
                options,
            ]) as TypeScriptProjectOptions,
        );

        new DKBugFixes(this);
        new EslintConfig(this);
        new DKTasks(this);
        new DKJest(this, options.jestOptions);
    }
}
