import { Component, SampleDir, SampleFile, awscdk } from "projen";

export interface SstConfigurationOptions {
    /**
     * Maps branchNames to SST Stages.
     *
     * @default - The branchName will be used as the stage name.
     */
    readonly branchNameToSstStageMap?: Record<string, string>;

    /**
     * Where to build .sst code to.
     *
     * @default ".sst/dist/"
     */
    sstOut?: string;

    /**
     * The version of SST to use.
     *
     * @default "2.39.2"
     */
    sstVersion?: string;
}

export interface SstConfiguration {
    /**
     * Where to build .sst code to.
     *
     * @default ".sst/dist/"
     */
    sstOut: string;
}

export interface SstTypescriptAppOptions
    extends awscdk.AwsCdkTypeScriptAppOptions,
        SstConfigurationOptions {}

const SST_CONFIG_FILE_NAME = "sst.config.ts";

export class SstTypescriptApp extends awscdk.AwsCdkTypeScriptApp {
    public readonly branchNameToSstStageMap?: Record<string, string>;
    public readonly sstConfig: SstConfiguration;
    public readonly sstVersion: string;

    constructor(private readonly options: SstTypescriptAppOptions) {
        super({ ...options, sampleCode: false });

        this.branchNameToSstStageMap = options.branchNameToSstStageMap;
        this.sstConfig = {
            sstOut: options.sstOut ?? ".sst/dist/",
        };
        this.sstVersion = options.sstVersion ?? "2.39.2";

        this.addDevDeps(`sst@${this.sstVersion}`);

        this.addIgnores();
        this.createPersonalTasks();
        this.overrideTasks();

        if (options.sampleCode) {
            new SstSampleCode(this);
        }
    }

    private addIgnores(): void {
        this.gitignore.exclude(".sst", ".build", ".open-next", ".DS_Store");
        this.eslint?.allowDevDeps(SST_CONFIG_FILE_NAME);
        this.tsconfig?.addExclude(SST_CONFIG_FILE_NAME);
        this.tsconfigDev?.addInclude(SST_CONFIG_FILE_NAME);
    }

    private createPersonalTasks(): void {
        const devTask =
            this.tasks.tryFind("dev")?.reset() ?? this.tasks.addTask("dev");

        devTask.description = "Start SST Dev Server for personal stage";
        devTask.exec(`sst dev --stage $(whoami|head -c 7)`);

        const startTask =
            this.tasks.tryFind("start")?.reset() ?? this.tasks.addTask("start");
        startTask.spawn(devTask);

        const destroyPersonalTask =
            this.tasks.tryFind("destroy:personal")?.reset() ??
            this.tasks.addTask("destroy:local");
        destroyPersonalTask.description = "Destroy personal SST stage";

        destroyPersonalTask.exec(`sst remove --stage $(whoami|head -c 7)`);
    }

    private overrideTasks(): void {
        this.overrideTasksForDefaultStage();

        const otherBranches = this.release?.branches?.filter(
            (branch) => branch !== this.options.defaultReleaseBranch,
        );

        if (otherBranches && otherBranches.length > 0) {
            for (const branch of otherBranches) {
                this.createTasksForBranch(branch);
            }
        }
    }

    private overrideTasksForDefaultStage(): void {
        const defaultStageName =
            this.branchNameToSstStageMap?.[this.options.defaultReleaseBranch] ??
            this.options.defaultReleaseBranch;

        const deployTask = this.tasks.tryFind("deploy");
        if (deployTask) {
            const { exec: _, ...restOfStep } = deployTask.steps[0];
            deployTask.reset(`sst deploy --stage ${defaultStageName}`, {
                ...restOfStep,
                receiveArgs: true,
            });
        }

        const synthTask = this.tasks.tryFind("synth");
        if (synthTask) {
            const { exec: _, ...restOfStep } = synthTask.steps[0];
            synthTask.reset(
                `sst build --stage ${defaultStageName} --to ${this.sstConfig.sstOut}`,
                {
                    ...restOfStep,
                    receiveArgs: true,
                },
            );
        }

        const synthSilentTask = this.tasks.tryFind("synth:silent");
        if (synthSilentTask) {
            const { exec: _, ...restOfStep } = synthSilentTask.steps[0];
            synthSilentTask.reset(
                `sst build --stage ${defaultStageName} --to ${this.sstConfig.sstOut}`,
                {
                    ...restOfStep,
                    receiveArgs: true,
                },
            );
        }

        const destroyTask = this.tasks.tryFind("destroy");
        if (destroyTask) {
            const { exec: _, ...restOfStep } = destroyTask.steps[0];
            destroyTask.reset(
                `sst remove sst build --stage ${defaultStageName}`,
                {
                    ...restOfStep,
                    receiveArgs: true,
                },
            );
        }
    }

    private createTasksForBranch(branchName: string): void {
        const stageName =
            this.branchNameToSstStageMap?.[branchName] ?? branchName;

        this.addTask(`deploy:${stageName}`, {
            description: `Deploy ${stageName} stage`,
            exec: `sst deploy --stage ${stageName}`,
            receiveArgs: true,
        });

        this.addTask(`synth:${stageName}`, {
            description: `Synth ${stageName} stage`,
            exec: `sst build --stage ${stageName} --to ${this.sstConfig.sstOut}`,
            receiveArgs: true,
        });

        this.addTask(`synth:silent:${stageName}`, {
            description: `Synth ${stageName} stage`,
            exec: `sst build --stage ${stageName} --to ${this.sstConfig.sstOut}`,
            receiveArgs: true,
        });

        this.addTask(`destroy:${stageName}`, {
            description: `Destroy ${stageName} stage`,
            exec: `sst remove sst build --stage ${stageName}`,
            receiveArgs: true,
        });
    }
}

export class SstSampleCode extends Component {
    constructor(project: SstTypescriptApp) {
        super(project);

        this.createSstConfigFile();
        this.createStackFile();
    }

    private createSstConfigFile(): void {
        new SampleFile(this.project, SST_CONFIG_FILE_NAME, {
            contents: `import { SSTConfig } from "sst";
import { MyStack } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "test-create-sst",
      region: "us-east-1",
    };
  },
  stacks(app) {
    new MyStack(app, "MyStack");
  }
} satisfies SSTConfig;
`,
        });
    }

    private createStackFile(): void {
        new SampleDir(this.project, "src", {
            files: {
                "MyStack.ts": `import { Api, App, Stack, StackProps } from "sst/constructs";

export class MyStack extends Stack {
    constructor(scope: App, id: string, props?: StackProps) {
        super(scope, id, props);

        const api = new Api(this, "MyApi");

        this.addOutputs({
            ApiEndpoint: api.url,
        });
    }
}
`,
            },
        });
    }
}
