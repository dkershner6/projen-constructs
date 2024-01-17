import { GroupRunnerOptions } from "projen";
import { CheckoutOptions, WorkflowSteps } from "projen/lib/github";
import {
    ContainerOptions,
    Job,
    JobDefaults,
    JobPermissions,
    JobStep,
    JobStepOutput,
    JobStrategy,
    Tools,
} from "projen/lib/github/workflows-model";

export interface GithubPagesPublishJobOptions {
    readonly branchToPublishTo?: string;

    checkoutOptions?: CheckoutOptions;

    readonly folderToPublish?: string;

    readonly tokenSecret?: string;
}

export class GithubPagesPublishJob implements Job {
    public runsOn?: string[] | undefined;
    public runsOnGroup?: GroupRunnerOptions | undefined;
    public steps: JobStep[];
    public environment?: unknown;
    public outputs?: Record<string, JobStepOutput> | undefined;
    public env?: Record<string, string> | undefined;
    public defaults?: JobDefaults | undefined;
    public timeoutMinutes?: number | undefined;
    public continueOnError?: boolean | undefined;
    public container?: ContainerOptions | undefined;
    public services?: Record<string, ContainerOptions> | undefined;
    public tools?: Tools | undefined;
    public name?: string | undefined;
    public needs?: string[] | undefined;
    public permissions: JobPermissions;
    public concurrency?: unknown;
    public if?: string | undefined;
    public strategy?: JobStrategy | undefined;

    constructor(options?: GithubPagesPublishJobOptions, jobOptions?: Job) {
        this.runsOn = jobOptions?.runsOn;
        this.runsOnGroup = jobOptions?.runsOnGroup;
        this.steps = [
            WorkflowSteps.checkout(options?.checkoutOptions),
            ...(jobOptions?.steps ?? []),
            {
                name: "Deploy 🚀",
                uses: "JamesIves/github-pages-deploy-action@v4",
                with: {
                    folder: options?.folderToPublish ?? "docs",
                    branch: options?.branchToPublishTo ?? "gh-pages",
                    token:
                        options?.tokenSecret ?? "${{ secrets.GITHUB_TOKEN }}",
                },
            },
        ];
        this.environment = jobOptions?.environment;
        this.outputs = jobOptions?.outputs;
        this.env = jobOptions?.env;
        this.defaults = jobOptions?.defaults;
        this.timeoutMinutes = jobOptions?.timeoutMinutes;
        this.continueOnError = jobOptions?.continueOnError;
        this.container = jobOptions?.container;
        this.services = jobOptions?.services;
        this.tools = jobOptions?.tools;
        this.name = jobOptions?.name;
        this.needs = jobOptions?.needs;
        this.permissions = jobOptions?.permissions ?? {};
        this.concurrency = jobOptions?.concurrency;
        this.if = jobOptions?.if;
        this.strategy = jobOptions?.strategy;
    }
}
