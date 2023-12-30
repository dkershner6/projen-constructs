import merge from "lodash.merge";
import { TextFile } from "projen";

import { TypeScriptProjectOptions } from "projen/lib/typescript";
import { Node20TypeScriptProject } from "../../packages/dkershner6-projen-typescript/src";
import { NodeMonorepoChildReleaseWorkflow } from "../../packages/projen-github-workflows/src/NodeMonorepoChildReleaseWorkflow";
import { RootMonorepo } from "../rootMonorepo";

export class ProjenConstructTsLib extends Node20TypeScriptProject {
    private readonly combinedOptions: TypeScriptProjectOptions;

    constructor(
        private readonly rootMonorepoProject: RootMonorepo,
        options: Omit<
            TypeScriptProjectOptions,
            "defaultReleaseBranch" | "outDir"
        >,
    ) {
        const combinedOptions: TypeScriptProjectOptions = merge(options, {
            parent: rootMonorepoProject,

            defaultReleaseBranch: "main",
            outdir: `packages/${options.name}`,
            releaseTagPrefix: `${options.name}@`,
            release: true,
            releaseToNpm: true,

            peerDeps: ["constructs", "projen", ...(options.peerDeps ?? [])],
            devDeps: ["constructs", "projen", ...(options.devDeps ?? [])],

            authorName: "Derek Kershner",
            authorUrl: "https://dkershner.com",
            docgen: true,
            docsDirectory: `../../docs/${options.name}`,
        });

        super(combinedOptions);

        this.combinedOptions = combinedOptions;

        new TextFile(this, "README.md", {
            lines: [
                `# ${this.name}`,
                "",
                `${this.combinedOptions.description}`,
                "",
                "## Docs",
                "",
                `See [${this.name} API Docs](https://dkershner6.github.io/projen-constructs/${this.name})`,
                "",
                "## Usage",
                "",
                "Install the module:",
                "",
                "```typescript",
                `devDeps: ["${this.name}"]`,
                "```",
                "",
                "Import into your code:",
                "",
                "```typescript",
                `import { WhateverConstruct } from "${this.name}";`,
                "```",
                "",
                "# Contributing",
                "",
                "Contributions welcome!",
                "",
                "This monorepo uses the AWS PDK, which is just a wrapper around projen. To get started, in the root, run `pnpm i` to install everything.",
                "",
                "Then, you can handle things normally with projen, or you can use the PDK CLI instead, which is essentially the same thing. You can install globally or use `npx pdk` as per normal.",
                "## License",
                "",
                "This project is licensed under the terms of the [MIT License](LICENSE.md).",
            ],
        });

        new NodeMonorepoChildReleaseWorkflow(this.rootMonorepoProject, this, {
            branches: ["main"],
            releaseToNpm: combinedOptions.releaseToNpm,
        });
    }
}
