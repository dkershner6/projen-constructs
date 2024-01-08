import { Component, SampleDir, SampleFile, awscdk } from "projen";

export interface SstConfigurationOptions {
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
    public readonly sstConfig: SstConfiguration;
    public readonly sstVersion: string;

    constructor(options: SstTypescriptAppOptions) {
        super({ ...options, sampleCode: false });

        this.sstConfig = {
            sstOut: options.sstOut ?? ".sst/dist/",
        };
        this.sstVersion = options.sstVersion ?? "2.39.2";

        this.addDevDeps(`sst@${this.sstVersion}`);

        this.addIgnores();
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

    private overrideTasks(): void {
        const deployTask = this.tasks.tryFind("deploy");
        if (deployTask) {
            const { exec: _, ...restOfStep } = deployTask.steps[0];
            deployTask.reset("sst deploy", restOfStep);
        }

        const synthTask = this.tasks.tryFind("synth");
        if (synthTask) {
            const { exec: _, ...restOfStep } = synthTask.steps[0];
            synthTask.reset(
                `sst build --to ${this.sstConfig.sstOut}`,
                restOfStep,
            );
        }

        const synthSilentTask = this.tasks.tryFind("synth:silent");
        if (synthSilentTask) {
            const { exec: _, ...restOfStep } = synthSilentTask.steps[0];
            synthSilentTask.reset("sst build", restOfStep);
        }

        const destroyTask = this.tasks.tryFind("destroy");
        if (destroyTask) {
            const { exec: _, ...restOfStep } = destroyTask.steps[0];
            destroyTask.reset("sst remove", restOfStep);
        }
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
