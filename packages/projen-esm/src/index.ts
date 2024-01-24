import { Component } from "projen";
import {
    TypescriptConfig,
    TypescriptConfigOptions,
} from "projen/lib/javascript";
import { TypeScriptProject } from "projen/lib/typescript";

export interface EsmOptions {
    /**
     * ESM App specific tsconfig options.
     * Due to conflicts between projen, things like the AWS CDK, and ESM tsconfig settings, a separate tsconfig is used for ESM Apps.
     */
    readonly tsconfig?: TypescriptConfigOptions;
}

/**
 * Adds ESM support to a projen project.
 */
export class Esm extends Component {
    declare project: TypeScriptProject;

    public tsconfig: TypescriptConfig;

    constructor(project: TypeScriptProject, options: EsmOptions = {}) {
        super(project);

        this.tsconfig = new TypescriptConfig(project, {
            ...(options.tsconfig ?? { compilerOptions: {} }),
            fileName: options.tsconfig?.fileName ?? "tsconfig.esm.json",
        });
    }
}
