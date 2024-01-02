import deepClone from "clone-deep";
import {
    RECOMMENDED_NODE_20_PROJECT_OPTIONS,
    DKBugFixes,
    DKTasks,
    EslintConfig,
} from "dkershner6-projen-typescript";
import { awscdk } from "projen";
import { deepMerge } from "projen/lib/util";

export class Node20AwsCdkAppProject extends awscdk.AwsCdkTypeScriptApp {
    constructor(options: awscdk.AwsCdkTypeScriptAppOptions) {
        const combinedOptions = deepMerge([
            deepClone(RECOMMENDED_NODE_20_PROJECT_OPTIONS),
            options,
        ]) as awscdk.AwsCdkTypeScriptAppOptions;
        super(combinedOptions);

        new DKBugFixes(this);
        new DKTasks(this);
        new EslintConfig(this);
    }
}
