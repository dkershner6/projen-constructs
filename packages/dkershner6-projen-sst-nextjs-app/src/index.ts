import { NEXTJS_TSCONFIG_OPTIONS } from "dkershner6-projen-nextjs-core";
import { Node20SstApp, Node20SstAppOptions } from "dkershner6-projen-sst-app";
import { TypescriptConfigOptions } from "projen/lib/javascript";
import { deepMerge } from "projen/lib/util";

export interface Node20SstNextjsAppOptions extends Node20SstAppOptions {}

export class Node20SstNextjsApp extends Node20SstApp {
    constructor(options: Node20SstNextjsAppOptions) {
        super({
            ...options,
            tsconfig: deepMerge([
                NEXTJS_TSCONFIG_OPTIONS,
                options?.tsconfig,
            ]) as TypescriptConfigOptions,
        });
    }
}
