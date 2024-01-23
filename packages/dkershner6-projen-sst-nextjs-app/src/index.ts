import deepClone from "clone-deep";
import {
    RECOMMENDED_NODE_20_REACT_PROJECT_OPTIONS,
    Node20ReactTypescriptConfigurer,
} from "dkershner6-projen-react";
import { Node20SstApp, Node20SstAppOptions } from "dkershner6-projen-sst-app";
import { TypescriptConfig } from "projen/lib/javascript";
import { deepMerge } from "projen/lib/util";
import {
    NEXTJS_TSCONFIG_OPTIONS,
    NextjsEslint,
    NextjsJest,
} from "projen-nextjs";

export interface Node20SstNextjsAppOptions extends Node20SstAppOptions {}

export class Node20SstNextjsApp extends Node20SstApp {
    constructor(options: Node20SstNextjsAppOptions) {
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
            ]) as Node20SstNextjsAppOptions,
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
