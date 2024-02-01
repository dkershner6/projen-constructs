import type { PluginItem, TransformOptions } from "@babel/core";
import { Component } from "projen";
import { Transform, TypeScriptModuleResolution } from "projen/lib/javascript";
import { TypeScriptProject } from "projen/lib/typescript";
import { BabelConfigFile, BabelConfigFileOptions } from "projen-babel";

export const TEST_BABEL_CONFIG_FILE = "babel.test.config.json";
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
            transform: {
                [TS_WITH_JS]: new Transform("babel-jest", {
                    configFile: `./${TEST_BABEL_CONFIG_FILE}`,
                }),
            },
        },
    },
    // just in case someone wants to use ts-jest
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

export interface EsmLibraryOptions {
    /**
     * Use babel instead of tsc to compile.
     */
    readonly babel?: boolean;

    /**
     * Options for the babel config file.
     *
     * @default - Typical options for an ESM library.
     */
    readonly babelConfigFileOptions?: BabelConfigFileOptions;

    /**
     * Options for the babel test config file.
     *
     * @default - Typical options for an ESM library.
     */
    readonly babelTestConfigFileOptions?: BabelConfigFileOptions;

    /**
     * Whether or not to setup eslint to enforce import file extensions.
     *
     * @example import { MyComponent } from "./MyComponent.js";
     */
    readonly setupEslintToEnforceImportFileExtensions?: boolean;
}

/**
 * Adds ESM support and linting to a projen TypeScript project.
 * Supports React as well.
 */
export class EsmLibrary extends Component {
    public static DEFAULT_BABEL_PUBLISH_IGNORES = [
        "**/*.stories.ts",
        "**/*.stories.tsx",
        "**/*.test.ts",
        "**/*.test.tsx",
    ];

    public static DEFAULT_BABEL_PRESETS: PluginItem[] = [
        "@babel/preset-react",
        [
            "@babel/preset-typescript",
            {
                isTSX: true,
                allExtensions: true,
            },
        ],
    ];

    public static DEFAULT_BABEL_TARGETS = {
        node: "current",
    };

    declare project: TypeScriptProject;

    public babelConfigFile?: BabelConfigFile;
    public babelTestConfigFile?: BabelConfigFile;

    constructor(
        project: TypeScriptProject,
        private readonly options: EsmLibraryOptions = {},
    ) {
        super(project);

        project.package.addField("type", "module");

        if (options?.babel ?? true) {
            this.useBabelInsteadOfTsc();
        }

        if (options?.setupEslintToEnforceImportFileExtensions ?? true) {
            this.setupEslintToEnforceImportFileExtensions();
        }
    }

    private useBabelInsteadOfTsc(): void {
        this.project.addDevDeps(
            "@babel/cli",
            "@babel/core",
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript",
            "babel-jest",
            "babel-loader",
            "babel-plugin-direct-import",
        );

        const compileBabelTask = this.project.addTask("compile:babel", {
            description: "Compile TypeScript to JavaScript using Babel",
            exec: `babel src --out-dir ${this.project.libdir} --extensions ".ts,.tsx"`,
            receiveArgs: true,
        });

        const compileTypesTask = this.project.addTask("compile:types", {
            description: "Compile TypeScript types only",
            exec: `tsc -p ${this.project.tsconfig?.fileName} --emitDeclarationOnly`,
            receiveArgs: true,
        });

        const compileTask =
            this.project.tasks.tryFind("compile") ??
            this.project.addTask("compile");

        compileTask.reset();
        compileTask.spawn(compileBabelTask);
        compileTask.spawn(compileTypesTask);

        const watch =
            this.project.tasks.tryFind("watch") ??
            this.project.addTask("watch");
        watch.reset();
        watch.spawn(compileBabelTask, { args: ["--watch"] });

        this.babelConfigFile = new BabelConfigFile(
            this.project,
            "babel.config.json",
            {
                transformOptions: this.buildBabelConfigTransformOptions({
                    ...(this.options?.babelConfigFileOptions
                        ?.transformOptions ?? {}),
                    ignore:
                        this.options?.babelConfigFileOptions?.transformOptions
                            ?.ignore ??
                        EsmLibrary.DEFAULT_BABEL_PUBLISH_IGNORES,
                }),
            },
        );
        this.babelTestConfigFile = new BabelConfigFile(
            this.project,
            TEST_BABEL_CONFIG_FILE,
            {
                transformOptions: this.buildBabelConfigTransformOptions({
                    ...(this.options?.babelTestConfigFileOptions
                        ?.transformOptions ?? {}),
                    presets: this.options?.babelTestConfigFileOptions
                        ?.transformOptions?.presets ?? [
                        "@babel/preset-env",
                        ...EsmLibrary.DEFAULT_BABEL_PRESETS,
                    ],
                }),
            },
        );
    }

    private buildBabelConfigTransformOptions(
        providedOptions: TransformOptions,
    ): TransformOptions {
        const targets = providedOptions?.targets ?? {
            node: "current",
        };
        const presets =
            providedOptions?.presets ?? EsmLibrary.DEFAULT_BABEL_PRESETS;

        return {
            ...providedOptions,
            targets,
            presets,
        };
    }

    private setupEslintToEnforceImportFileExtensions(): void {
        this.project.addDevDeps("eslint-plugin-file-extension-in-import-ts");

        this.project.eslint?.addPlugins("file-extension-in-import-ts");
        this.project.eslint?.addRules({
            "file-extension-in-import-ts/file-extension-in-import-ts": [
                "error",
                "always",
            ],
        });
    }
}
