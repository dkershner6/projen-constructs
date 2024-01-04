import deepClone from "clone-deep";
import {
    RECOMMENDED_NODE_20,
    RECOMMENDED_ESLINT_CONFIG,
    RECOMMENDED_JEST_CONFIG,
    RECOMMENDED_PRETTIER_CONFIG,
    DKBugFixes,
    EslintConfig,
    DKTasks,
    RenderWorkflowSetupOptions,
} from "dkershner6-projen-typescript";
import { ProjectOptions } from "projen";
import {
    AwsCdkConstructLibrary,
    AwsCdkConstructLibraryOptions,
} from "projen/lib/awscdk";
import { JobStep } from "projen/lib/github/workflows-model";
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

export class Node20AwsCdkConstructLibrary extends AwsCdkConstructLibrary {
    constructor(options: AwsCdkConstructLibraryOptions) {
        super(
            deepMerge([
                deepClone(RECOMMENDED_NODE_20_JSII_PROJECT_OPTIONS),
                options,
            ]) as AwsCdkConstructLibraryOptions,
        );

        new DKBugFixes(this);
        new EslintConfig(this);
        new DKTasks(this);
    }

    public override renderWorkflowSetup(
        options?: RenderWorkflowSetupOptions | undefined,
    ): JobStep[] {
        const { installJobStepOverrides, ...restOfOptions } = options ?? {};

        const originalSteps = super.renderWorkflowSetup(restOfOptions);

        return originalSteps.map((step) => {
            if (step.name?.toLowerCase?.()?.startsWith?.("install")) {
                return {
                    workingDirectory: this.parent ? "." : undefined,
                    ...step,
                    ...(installJobStepOverrides ?? {}),
                };
            }
            return step;
        });
    }
}
