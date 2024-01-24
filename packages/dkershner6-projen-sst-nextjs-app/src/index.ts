import deepClone from "clone-deep";
import {
    RECOMMENDED_NODE_20_REACT_PROJECT_OPTIONS,
    Node20ReactTypescriptConfigurer,
} from "dkershner6-projen-react";
import { Node20SstApp, Node20SstAppOptions } from "dkershner6-projen-sst-app";
import { TypescriptConfigOptions } from "projen/lib/javascript";
import { deepMerge } from "projen/lib/util";
import { Esm, EsmOptions } from "projen-esm";
import {
    NEXTJS_TSCONFIG_OPTIONS,
    NextjsEslint,
    NextjsJest,
    NextjsTasks,
} from "projen-nextjs";
export interface Node20SstNextjsAppOptions extends Node20SstAppOptions {
    esmOptions?: EsmOptions;
}

export class Node20SstNextjsApp extends Node20SstApp {
    public readonly esm: Esm;

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

        this.esm = new Esm(this, {
            ...options.esmOptions,
            tsconfig: deepMerge([
                deepClone(NEXTJS_TSCONFIG_OPTIONS),
                {
                    ...NEXTJS_TSCONFIG_OPTIONS,
                    ...(options?.esmOptions?.tsconfig ?? {}),
                },
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
