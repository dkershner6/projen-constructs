import deepClone from "clone-deep";
import {
    Node20AwsCdkApp,
    Node20AwsCdkAppOptions,
} from "dkershner6-projen-awscdk-app";
import {
    RECOMMENDED_NODE_20_REACT_PROJECT_OPTIONS,
    Node20ReactTypescriptConfigurer,
} from "dkershner6-projen-react";
import { TypescriptConfig } from "projen/lib/javascript";
import { deepMerge } from "projen/lib/util";
import {
    NEXTJS_TSCONFIG_OPTIONS,
    NextjsEslint,
    NextjsJest,
} from "projen-nextjs";

export interface Node20AwsCdkNextjsAppOptions extends Node20AwsCdkAppOptions {}

export class Node20AwsCdkNextjsApp extends Node20AwsCdkApp {
    constructor(options: Node20AwsCdkNextjsAppOptions) {
        super(
            deepMerge([
                deepClone(RECOMMENDED_NODE_20_REACT_PROJECT_OPTIONS),
                {
                    tsconfig: {
                        filename: "tsconfig.publish.json",
                    },
                    tsconfigDev: {
                        filename: "tsconfig.dev.json",
                    },
                },
                options,
            ]) as Node20AwsCdkNextjsAppOptions,
        );

        // Separate tsconfig for nextjs, too different from projen to coalesce
        new TypescriptConfig(this, {
            ...NEXTJS_TSCONFIG_OPTIONS,
        });

        new Node20ReactTypescriptConfigurer(this, {
            projectType: "app",
        });
        new NextjsEslint(this);
        new NextjsJest(this);
    }
}
