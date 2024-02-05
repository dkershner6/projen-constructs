import deepClone from "clone-deep";
import {
    RECOMMENDED_NODE_20_REACT_PROJECT_OPTIONS,
    Node20ReactTypescriptConfigurer,
} from "dkershner6-projen-react";
import { Node20SstApp, Node20SstAppOptions } from "dkershner6-projen-sst-app";
import {
    PROJEN_COMPILER_OPTION_DEFAULTS,
    RECOMMENDED_TSCONFIG_COMPILER_OPTIONS,
} from "dkershner6-projen-typescript";
import {
    TypescriptConfig,
    TypescriptConfigOptions,
} from "projen/lib/javascript";
import { deepMerge } from "projen/lib/util";
import {
    NEXTJS_TSCONFIG_OPTIONS,
    NextjsEslint,
    NextjsJestConfigFile,
    NextjsJestConfigFileOptions,
    NextjsTasks,
} from "projen-nextjs";

export interface Node20SstNextjsAppOptions extends Node20SstAppOptions {
    /**
     * Implement next/jest on the project's jestConfig.
     *
     * @default true
     */
    nextjsJest?: boolean;

    nextjsJestConfigFileOptions?: NextjsJestConfigFileOptions;

    /**
     * A custom tsconfig for nextjs development, separate from Projen's tsconfig.
     *
     * @default - Recommended tsconfig for Next.js development by Vercel.
     */
    nextjsTsconfig?: TypescriptConfigOptions;
}

export class Node20SstNextjsApp extends Node20SstApp {
    public readonly nextjsTsconfig: TypescriptConfig;

    constructor(options: Node20SstNextjsAppOptions) {
        const defaultNextjsOptions: Omit<
            Node20SstNextjsAppOptions,
            "defaultReleaseBranch" | "cdkVersion" | "name"
        > = {
            tsconfigDev: deepMerge([
                { fileName: "tsconfig.dev.json" },
                options.tsconfig ?? {},
            ]) as TypescriptConfigOptions,
        };

        const combinedOptions = deepMerge([
            deepClone(RECOMMENDED_NODE_20_REACT_PROJECT_OPTIONS),
            defaultNextjsOptions,
            options,
        ]) as Node20SstNextjsAppOptions;

        super(combinedOptions);

        this.gitignore.exclude(".next", "out");

        this.nextjsTsconfig = new TypescriptConfig(
            this,
            deepMerge([
                deepClone({
                    compilerOptions: {
                        ...PROJEN_COMPILER_OPTION_DEFAULTS,
                        ...RECOMMENDED_TSCONFIG_COMPILER_OPTIONS,
                        downlevelIteration: true,
                    },
                }),
                NEXTJS_TSCONFIG_OPTIONS,
                {
                    exclude: [
                        ...(NEXTJS_TSCONFIG_OPTIONS?.exclude ?? []),
                        ...this.tsconfigDev.exclude,
                    ],
                    include: [
                        ...(NEXTJS_TSCONFIG_OPTIONS?.include ?? []),
                        ...this.tsconfigDev.include,
                    ],
                },
                options?.nextjsTsconfig ?? {},
            ]) as TypescriptConfigOptions,
        );

        new Node20ReactTypescriptConfigurer(this, {
            projectType: "app",
        });
        new NextjsEslint(this);
        if (options.nextjsJest ?? true) {
            new NextjsJestConfigFile(this, options.nextjsJestConfigFileOptions);
        }
        new NextjsTasks(this);
    }
}
