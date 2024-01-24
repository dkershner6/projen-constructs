import deepClone from "clone-deep";
import {
    Node20AwsCdkApp,
    Node20AwsCdkAppOptions,
} from "dkershner6-projen-awscdk-app";
import {
    RECOMMENDED_NODE_20_REACT_PROJECT_OPTIONS,
    Node20ReactTypescriptConfigurer,
} from "dkershner6-projen-react";
import { TypescriptConfigOptions } from "projen/lib/javascript";
import { deepMerge } from "projen/lib/util";
import { EsmTypescriptConfigurer } from "projen-esm";
import {
    NEXTJS_TSCONFIG_OPTIONS,
    NextjsEslint,
    NextjsJest,
    NextjsTasks,
} from "projen-nextjs";

export interface Node20AwsCdkNextjsAppOptions extends Node20AwsCdkAppOptions {}

export class Node20AwsCdkNextjsApp extends Node20AwsCdkApp {
    constructor(options: Node20AwsCdkNextjsAppOptions) {
        const defaultNextjsOptions: Omit<
            Node20AwsCdkNextjsAppOptions,
            "defaultReleaseBranch" | "cdkVersion" | "name"
        > = {
            tsconfig: deepMerge([
                deepClone(NEXTJS_TSCONFIG_OPTIONS),
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

        new EsmTypescriptConfigurer(this);

        new Node20ReactTypescriptConfigurer(this, {
            projectType: "app",
        });
        new NextjsEslint(this);
        new NextjsJest(this);
        new NextjsTasks(this);
    }
}
