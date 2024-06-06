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

export const PROJEN_VERSION = "0.81.5";
export const CONSTRUCTS_VERSION = "10.3.0";

export const RECOMMENDED_NODE_20: Partial<TypeScriptProjectOptions> = {
    projenVersion: PROJEN_VERSION,
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

export const RECOMMENDED_JEST_CONFIG: Partial<TypeScriptProjectOptions> = {
    jest: true,
    jestOptions: {
        jestConfig: {
            testEnvironment: "node",
            testTimeout: 15000,
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

        project.addDevDeps(`constructs@${CONSTRUCTS_VERSION}`);

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
                `/${project.docsDirectory}${project.docsDirectory.endsWith("/") ? "" : "/"}**`,
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

export class DKEslintConfig extends Component {
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
                "error",
                { allow: ["debug", "info", "warn", "error"] },
            ],
            "no-trailing-spaces": "off", // Conflicts with Prettier
            "no-multiple-empty-lines": "off", // Conflicts with Prettier
            "import/no-unresolved": "off", // Handled by TS and it gets confused on @types packages.
            "import/namespace": "off",
            "no-duplicate-imports": "off", // Handled by import/no-duplicates
            "import/no-duplicates": "error",
            "import/no-named-as-default": "error",
            "import/no-named-as-default-member": "error",
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
                "error",
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
                "error",
                {
                    ignoreRestSiblings: true,
                },
            ],
        });

        project.eslint?.addOverride({
            files: ["*.ts", "*.tsx"],
            excludedFiles: [
                // Next.js forced default exports
                "**/app/**",
                "**/app/**",
                "**/pages/**",
                "**/pages/**",
                // Storybook Stories have a forced default export
                "**/.storybook/**",
                "*.stories.ts",
                "*.stories.tsx",
            ],
            rules: {
                "import/no-default-export": "warn", // Causes issues when using babel and tsc separately
            },
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
    CLEAN_COMPILE = "clean-compile",
    CI = "ci",
    I = "i",
    LINT = "lint",
    TEST_UNIT = "test-unit",
    TYPE_CHECK = "type-check",
}

export class DKTasks extends Component {
    public static readonly IS_NOT_RELEASE_CONDITION = `if [ "$RELEASE" = "true" ] ; then exit 1 ; fi`;

    declare project: TypeScriptProject;

    constructor(project: TypeScriptProject) {
        super(project);

        // Install
        project.addTask(DKTaskName.CI).spawn(project.package.installCiTask);
        project.addTask(DKTaskName.I).spawn(project.package.installTask);

        const typeCheckTask = project.tasks.addTask(DKTaskName.TYPE_CHECK);
        typeCheckTask.exec("tsc --noEmit");

        // Eslint
        const lintTask = project.eslint?.eslintTask;

        if (lintTask) {
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
            project.tasks.tryFind(DKTaskName.CLEAN_COMPILE) ??
            project.tasks.addTask(DKTaskName.CLEAN_COMPILE, {
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

export interface JestTransformerOptions {
    /**
     * Additional modules for jest to transform, typically ESM modules.
     *
     * @default - A list of known ESM modules commonly used in projects
     */
    readonly modulesToTransform?: string[];
}

export interface Node20TypeScriptProjectJestOptions
    extends JestOptions,
        JestTransformerOptions {}

export class JestTransformer extends Component {
    public static ESM_MODULES_TO_TRANSFORM = [
        "@babel/runtime",
        "@mui.*",
        "@panva/hkdf",
        "@sindresorhus/is",
        "@szmarczak/http-timer",
        "bail",
        "cacheable-lookup",
        "cacheable-request",
        "ccount",
        "character-entities.*",
        "comma-separated-tokens",
        "decode-named-character-reference",
        "devlop",
        "direction",
        "dom7",
        "escape-string-regexp",
        "file-type",
        "form-data-encoder",
        "github-slugger",
        "got",
        "hast.*",
        "html-void-elements",
        "is-plain-obj",
        "jose",
        "longest-streak",
        "lowercase-keys",
        "markdown.*",
        "mdast.*",
        "micromark.*",
        "mimic-response",
        "normalize-url",
        "p-cancelable",
        "peek-readable",
        "property-information",
        "rehype.*",
        "remark.*",
        "responselike",
        "separated-tokens",
        "space-separated-tokens",
        "ssr-window",
        "stringify-entities",
        "strip-markdown",
        "strtok3",
        "swiper",
        "swiper/react",
        "token-types",
        "trim-lines",
        "trough",
        "unified",
        "unist.*",
        "util-gfm.*",
        "uuid",
        "vfile.*",
        "web-namespaces",
        "zwitch",
    ];

    private readonly _modulesToTransform = new Set<string>();

    constructor(
        project: TypeScriptProject,
        options?: Node20TypeScriptProjectJestOptions,
    ) {
        super(project);

        if (options?.modulesToTransform) {
            this.addModulesToTransform(...options.modulesToTransform);
        }

        if (project.jest) {
            project.addDevDeps("jest-mock");

            project.jest.config.transformIgnorePatterns =
                this.buildTransformIgnorePatterns([
                    ...(
                        (project.jest.config.transformIgnorePatterns as
                            | string[]
                            | undefined) ?? new Array<string>()
                    ).filter((pattern) => !pattern.includes("node_modules")),
                    ...JestTransformer.ESM_MODULES_TO_TRANSFORM,
                    ...Array.from(this._modulesToTransform),
                ]);
        }
    }

    public get modulesToTransform(): Set<string> {
        return this._modulesToTransform;
    }

    public addModulesToTransform(...modules: string[]): void {
        for (const module of modules) {
            this._modulesToTransform.add(module);
        }
    }

    public removeModulesToTransform(...modules: string[]): void {
        for (const module of modules) {
            this._modulesToTransform.delete(module);
        }
    }

    private buildTransformIgnorePatterns(
        nodeModulesToTransform?: string[],
    ): string[] {
        const modulesRegex = [
            ...new Set([...(nodeModulesToTransform ?? [])]),
        ].join("|");

        return [
            `/node_modules/(?!.pnpm)(?!(${modulesRegex})/)`,
            `/node_modules/.pnpm/(?!(${modulesRegex.replace(/\//g, "\\+")})@)`, // default is just `node_modules`
            "\\.pnp\\.[^\\/]+$", // default
        ];
    }
}

export interface Node20TypeScriptProjectOptions
    extends TypeScriptProjectOptions {
    jestOptions?: Node20TypeScriptProjectJestOptions;
}

export class Node20TypeScriptProject extends TypeScriptProject {
    public readonly jestTransformer: JestTransformer;

    constructor(options: Node20TypeScriptProjectOptions) {
        super(
            deepMerge([
                deepClone(RECOMMENDED_NODE_20_PROJECT_OPTIONS),
                options,
            ]) as TypeScriptProjectOptions,
        );

        new DKBugFixes(this);
        new DKEslintConfig(this);
        new DKTasks(this);
        this.jestTransformer = new JestTransformer(this, options.jestOptions);
    }
}
