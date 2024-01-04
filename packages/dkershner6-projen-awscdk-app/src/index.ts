import deepClone from "clone-deep";
import {
    RECOMMENDED_NODE_20_PROJECT_OPTIONS,
    DKBugFixes,
    DKTasks,
    EslintConfig,
    RenderWorkflowSetupOptions,
} from "dkershner6-projen-typescript";
import { awscdk } from "projen";
import { JobStep } from "projen/lib/github/workflows-model";
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

        const deployTask = this.tasks.tryFind("deploy");
        if (deployTask) {
            const { exec, ...restOfTaskStep } = deployTask.steps[0];
            deployTask.reset(exec, {
                ...restOfTaskStep,
                args: ["--all", "--require-approval never"],
            });
        }
        const synthTask = this.tasks.tryFind("synth");
        if (synthTask) {
            const { exec, ...restOfTaskStep } = synthTask.steps[0];
            synthTask.reset(exec, {
                ...restOfTaskStep,
                args: ["--all", "--require-approval never"],
            });
        }

        this.eslint?.allowDevDeps("src/main.ts");
        this.eslint?.allowDevDeps("src/stacks/**/*Stack.ts");
        this.eslint?.allowDevDeps("src/stacks/**/*Stack/index.ts");
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
