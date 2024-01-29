import { Component } from "projen";
import { TypeScriptModuleResolution } from "projen/lib/javascript";
import { TypeScriptProject } from "projen/lib/typescript";
import { BabelConfigFile, BabelConfigFileOptions } from "projen-babel";

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
     * Whether or not to setup eslint to enforce import file extensions.
     *
     * @example import { MyComponent } from "./MyComponent.js";
     */
    readonly setupEslintToEnforceImportFileExtensions?: boolean;
}

/**
 * Adds ESM support and linting to a projen TypeScript project.
 */
export class EsmLibrary extends Component {
    declare project: TypeScriptProject;

    public babelConfigFile?: BabelConfigFile;

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
                ...(this.options?.babelConfigFileOptions ?? {}),
                transformOptions: {
                    ignore: [
                        "**/*.stories.ts",
                        "**/*.stories.tsx",
                        "**/*.test.ts",
                        "**/*.test.tsx",
                        ...(this.options?.babelConfigFileOptions
                            ?.transformOptions?.ignore ?? []),
                    ],
                    targets: {
                        node: "current",
                        ...(this.options?.babelConfigFileOptions ?? {}),
                    },
                    presets: [
                        "@babel/preset-react",
                        [
                            "@babel/preset-typescript",
                            {
                                isTSX: true,
                                allExtensions: true,
                            },
                        ],
                        ...(this.options?.babelConfigFileOptions
                            ?.transformOptions?.presets ?? []),
                    ],
                    plugins: [
                        // A little specific, but shouldn't hurt anything if not used.
                        [
                            "babel-plugin-direct-import",
                            {
                                modules: [
                                    "@mui/system",
                                    "@mui/material",
                                    "@mui/icons-material",
                                ],
                            },
                        ],
                        ...(this.options?.babelConfigFileOptions
                            ?.transformOptions?.plugins ?? []),
                    ],
                    ...(this.options?.babelConfigFileOptions
                        ?.transformOptions ?? {}),
                },
            },
        );
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
