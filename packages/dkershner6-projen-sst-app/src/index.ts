import deepClone from "clone-deep";
import {
    AwsAppPublisher,
    AwsAppPublisherOptions,
    DeployJobStepBuilderParams,
} from "dkershner6-projen-awscdk-core";
import {
    DKBugFixes,
    DKTasks,
    EslintConfig,
    RECOMMENDED_NODE_20_PROJECT_OPTIONS,
} from "dkershner6-projen-typescript";
import { JobStep } from "projen/lib/github/workflows-model";
import { deepMerge } from "projen/lib/util";
import { SstTypescriptApp, SstTypescriptAppOptions } from "projen-sst";

export interface Node20SstAppOptions extends SstTypescriptAppOptions {
    /**
     * Whether or not to pin the version of constructs to the version specified in the
     * `constructsVersion` property.
     */
    constructsVersionPinning?: boolean;

    /**
     * Whether to publish this App to AWS.
     */
    readonly publishToAws?: boolean;

    /**
     * Populate in order to add a deploy to AWS job to the release workflow.
     */
    readonly publishToAwsOptions?: Omit<
        AwsAppPublisherOptions,
        "deployJobStepBuilder"
    >;

    /**
     * Maps branchNames to SST Stages.
     *
     * @default - The branchName will be used as the stage name.
     */
    readonly branchNameToSstStageMap?: Record<string, string>;
}

export class Node20SstApp extends SstTypescriptApp {
    public branchNameToSstStageMap?: Record<string, string>;

    constructor(options: Node20SstAppOptions) {
        const combinedOptions: Node20SstAppOptions = deepMerge([
            deepClone(RECOMMENDED_NODE_20_PROJECT_OPTIONS),
            options,
        ]) as Node20SstAppOptions;

        super(combinedOptions);

        this.branchNameToSstStageMap = options.branchNameToSstStageMap;

        new DKBugFixes(this);
        new DKTasks(this);
        new EslintConfig(this);

        this.eslint?.allowDevDeps("src/main.ts");
        this.eslint?.allowDevDeps("src/stacks/**/*Stack.ts");
        this.eslint?.allowDevDeps("src/stacks/**/*Stack/index.ts");

        if (options.constructsVersionPinning) {
            this.addDeps(`constructs@${options.constructsVersion}`);
        }

        if (
            this.release &&
            options.publishToAws &&
            options.publishToAwsOptions
        ) {
            const publishToAwsOptions: AwsAppPublisherOptions = {
                ...options.publishToAwsOptions,
                deployJobStepBuilder: (builderParams) =>
                    this.buildDeployToAwsJobStep(builderParams),
                runsOn:
                    options.publishToAwsOptions.runsOn ??
                    options.workflowRunsOn,
                runsOnGroup:
                    options.publishToAwsOptions.runsOnGroup ??
                    options.workflowRunsOnGroup,
            };

            new AwsAppPublisher(this, publishToAwsOptions);
        }
    }

    protected overridePackageTask(): void {
        this.packageTask.reset(`mkdir -p ${this.artifactsDirectory}`);
        this.packageTask.exec(
            `cp -r ${this.sstConfig.sstOut} ${this.artifactsDirectory}`,
        );
    }

    protected buildDeployToAwsJobStep({
        deployTask,
        branchName,
    }: DeployJobStepBuilderParams): JobStep {
        const exec = deployTask.steps[0].exec;
        const args = deployTask.steps[0].args;

        const branchNameToUse =
            // @ts-expect-error - Violate access
            (branchName ?? this.release?.defaultBranch) as string;

        return {
            name: "Deploy to AWS",
            run: [
                exec?.replace("sst", `npx sst@${this.sstVersion}`),
                ...(args ?? []),
                `--stage ${
                    this.branchNameToSstStageMap?.[branchNameToUse] ??
                    branchNameToUse
                }`,
                `--from ${this.artifactsDirectory}/${this.sstConfig.sstOut}`,
            ]
                .filter(Boolean)
                .join(" "),
        };
    }
}
