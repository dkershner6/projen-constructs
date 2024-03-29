import deepClone from "clone-deep";
import {
    RECOMMENDED_NODE_20,
    RECOMMENDED_ESLINT_CONFIG,
    RECOMMENDED_JEST_CONFIG,
    RECOMMENDED_PRETTIER_CONFIG,
    DKBugFixes,
    DKEslintConfig,
    DKTasks,
    Node20TypeScriptProjectJestOptions,
    JestTransformer,
} from "dkershner6-projen-typescript";
import { ProjectOptions } from "projen";
import {
    AwsCdkConstructLibrary,
    AwsCdkConstructLibraryOptions,
} from "projen/lib/awscdk";
import { NodeProjectOptions } from "projen/lib/javascript";
import { TypeScriptProjectOptions } from "projen/lib/typescript";
import { deepMerge } from "projen/lib/util";

export const RECOMMENDED_NODE_20_JSII_PROJECT_OPTIONS: Omit<
    ProjectOptions & NodeProjectOptions & TypeScriptProjectOptions,
    "defaultReleaseBranch" | "name"
> = deepMerge([
    deepClone(RECOMMENDED_NODE_20),
    RECOMMENDED_ESLINT_CONFIG,
    RECOMMENDED_JEST_CONFIG,
    RECOMMENDED_PRETTIER_CONFIG,
]);

export interface Node20AwsCdkConstructLibraryOptions
    extends AwsCdkConstructLibraryOptions {
    jestOptions?: Node20TypeScriptProjectJestOptions;
}

export class Node20AwsCdkConstructLibrary extends AwsCdkConstructLibrary {
    public readonly jestTransformer: JestTransformer;

    constructor(options: Node20AwsCdkConstructLibraryOptions) {
        super(
            deepMerge([
                deepClone(RECOMMENDED_NODE_20_JSII_PROJECT_OPTIONS),
                options,
            ]) as AwsCdkConstructLibraryOptions,
        );

        new DKBugFixes(this);
        new DKEslintConfig(this);
        new DKTasks(this);
        this.jestTransformer = new JestTransformer(this, options.jestOptions);
    }
}
