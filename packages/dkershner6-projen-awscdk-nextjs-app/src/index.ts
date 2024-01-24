import deepClone from "clone-deep";
import {
    Node20AwsCdkApp,
    Node20AwsCdkAppOptions,
} from "dkershner6-projen-awscdk-app";
import {
    RECOMMENDED_NODE_20_REACT_PROJECT_OPTIONS,
    Node20ReactTypescriptConfigurer,
} from "dkershner6-projen-react";
import {
    PROJEN_COMPILER_OPTION_DEFAULTS,
    RECOMMENDED_TSCONFIG_COMPILER_OPTIONS,
} from "dkershner6-projen-typescript";
import { TypescriptConfigOptions } from "projen/lib/javascript";
import { deepMerge } from "projen/lib/util";
import { Esm, EsmOptions } from "projen-esm";
import {
    NEXTJS_TSCONFIG_OPTIONS,
    NextjsEslint,
    NextjsJest,
    NextjsTasks,
} from "projen-nextjs";

export interface Node20AwsCdkNextjsAppOptions extends Node20AwsCdkAppOptions {
    esmOptions?: EsmOptions;
}

export class Node20AwsCdkNextjsApp extends Node20AwsCdkApp {
    public readonly esm: Esm;

    constructor(options: Node20AwsCdkNextjsAppOptions) {
        const defaultNextjsOptions: Omit<
            Node20AwsCdkNextjsAppOptions,
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
        ]) as Node20AwsCdkNextjsAppOptions;

        super(combinedOptions);

        this.gitignore.exclude(".next", "out");

        this.esm = new Esm(this, {
            ...(options?.esmOptions ?? {}),
            tsconfig: deepMerge([
                deepClone({
                    compilerOptions: {
                        ...PROJEN_COMPILER_OPTION_DEFAULTS,
                        ...RECOMMENDED_TSCONFIG_COMPILER_OPTIONS,
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
