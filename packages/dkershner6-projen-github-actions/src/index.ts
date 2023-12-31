import deepClone from "clone-deep";
import {
    RECOMMENDED_NODE_20_PROJECT_OPTIONS,
    enactNode20ProjectConfig,
} from "dkershner6-projen-typescript";
import { JobPermission } from "projen/lib/github/workflows-model";
import { deepMerge } from "projen/lib/util";
import {
    GitHubActionTypeScriptProject,
    GitHubActionTypeScriptOptions,
    RunsUsing,
} from "projen-github-action-typescript";

export const RECOMMENDED_GITHUB_ACTION_OPTIONS: Omit<
    GitHubActionTypeScriptOptions,
    "defaultReleaseBranch" | "name"
> = {
    actionMetadata: {
        runs: {
            using: RunsUsing.NODE_20,
            main: "dist/index.js",
        },
    },
};

export class Node20GitHubActionTypescriptProject extends GitHubActionTypeScriptProject {
    constructor(options: GitHubActionTypeScriptOptions) {
        const combinedOptions = deepMerge([
            deepClone(RECOMMENDED_NODE_20_PROJECT_OPTIONS),
            RECOMMENDED_GITHUB_ACTION_OPTIONS,
            options,
        ]) as GitHubActionTypeScriptOptions;

        super(combinedOptions);

        enactNode20ProjectConfig(this);

        const releaseWorkflow = this.github?.tryFindWorkflow("release");
        if (releaseWorkflow) {
            releaseWorkflow.addJob("major-release", {
                runsOn: ["ubuntu-latest"],
                needs: ["release_github"],
                permissions: {
                    contents: JobPermission.WRITE,
                },
                steps: [
                    {
                        uses: "actions/checkout@v3",
                        with: {
                            "fetch-depth": 0,
                        },
                    },
                    {
                        uses: "rickstaa/action-create-tag@v1",
                        with: {
                            force_push_tag: true,
                            tag: `v${combinedOptions.majorVersion ?? 0}`,
                        },
                    },
                    {
                        uses: "ncipollo/release-action@v1",
                        with: {
                            allowUpdates: true,
                            generateReleaseNotes: true,
                            tag: `v${combinedOptions.majorVersion ?? 0}`,
                            token: "${{ secrets.GITHUB_TOKEN }}",
                        },
                    },
                ],
            });
        }
    }
}
