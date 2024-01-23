import deepClone from "clone-deep";
import {
    RECOMMENDED_NODE_20_REACT_PROJECT_OPTIONS,
    Node20ReactTypescriptConfigurer,
} from "dkershner6-projen-react";
import { Node20SstApp, Node20SstAppOptions } from "dkershner6-projen-sst-app";
import {
    TypescriptConfig,
    TypescriptConfigOptions,
} from "projen/lib/javascript";
import { deepMerge } from "projen/lib/util";
import {
    NEXTJS_TSCONFIG_OPTIONS,
    NextjsEslint,
    NextjsJest,
} from "projen-nextjs";

export interface Node20SstNextjsAppOptions extends Node20SstAppOptions {
    /**
     * Configure the tsconfig file for Next.js.
     *
     * @default - Recommended config by Next.js
     */
    nextjsTsconfig?: TypescriptConfigOptions;
}

export class Node20SstNextjsApp extends Node20SstApp {
    public readonly nextjsTypescriptConfig: TypescriptConfig;

    constructor(options: Node20SstNextjsAppOptions) {
        const defaultNextjsOptions: Omit<
            Node20SstNextjsAppOptions,
            "defaultReleaseBranch" | "cdkVersion" | "name"
        > = {
            tsconfig: {
                fileName: "tsconfig.publish.json",
                compilerOptions: {},
            },
            tsconfigDev: {
                fileName: "tsconfig.dev.json",
                compilerOptions: {},
            },
        };

        const combinedOptions = deepMerge([
            deepClone(RECOMMENDED_NODE_20_REACT_PROJECT_OPTIONS),
            defaultNextjsOptions,
            options,
        ]) as Node20SstNextjsAppOptions;

        super(combinedOptions);

        // Separate tsconfig for nextjs, too different from projen to coalesce
        this.nextjsTypescriptConfig = new TypescriptConfig(this, {
            ...NEXTJS_TSCONFIG_OPTIONS,
            ...(options.nextjsTsconfig ?? {}),
        });

        new Node20ReactTypescriptConfigurer(this, {
            projectType: "app",
        });
        new NextjsEslint(this);
        new NextjsJest(this);
    }
}
