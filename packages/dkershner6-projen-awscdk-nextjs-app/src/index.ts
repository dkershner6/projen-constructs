import {
    Node20AwsCdkApp,
    Node20AwsCdkAppOptions,
} from "dkershner6-projen-awscdk-app";
import { NEXTJS_TSCONFIG_OPTIONS } from "dkershner6-projen-nextjs-core";
import { TypescriptConfigOptions } from "projen/lib/javascript";
import { deepMerge } from "projen/lib/util";

export interface Node20AwsCdkNextjsAppOptions extends Node20AwsCdkAppOptions {}

export class Node20AwsCdkNextjsApp extends Node20AwsCdkApp {
    constructor(options: Node20AwsCdkNextjsAppOptions) {
        super({
            ...options,
            tsconfig: deepMerge([
                NEXTJS_TSCONFIG_OPTIONS,
                options?.tsconfig,
            ]) as TypescriptConfigOptions,
        });
    }
}
