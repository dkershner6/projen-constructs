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
import { TypescriptConfigOptions } from "projen/lib/javascript";
import { deepMerge } from "projen/lib/util";
import { EsmRootOptions, EsmRoot } from "projen-esm";
import {
    NEXTJS_TSCONFIG_OPTIONS,
    NextjsEslint,
    NextjsJest,
    NextjsTasks,
} from "projen-nextjs";
export interface Node20SstNextjsAppOptions extends Node20SstAppOptions {
    esmOptions?: EsmRootOptions;
}

export class Node20SstNextjsApp extends Node20SstApp {
    public readonly esm: EsmRoot;

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

        this.esm = new EsmRoot(this, {
            ...(options?.esmOptions ?? {}),
            tsconfig: deepMerge([
                deepClone({
                    compilerOptions: {
                        ...PROJEN_COMPILER_OPTION_DEFAULTS,
                        ...RECOMMENDED_TSCONFIG_COMPILER_OPTIONS,
                        downlevelIteration: true,
                    },
                }),
                NEXTJS_TSCONFIG_OPTIONS,
                options?.esmOptions?.tsconfig ?? {},
            ]) as TypescriptConfigOptions,
        });

        new Node20ReactTypescriptConfigurer(this, {
            projectType: "app",
        });
        new NextjsEslint(this);
        new NextjsJest(this);
        new NextjsTasks(this);
    }
}
