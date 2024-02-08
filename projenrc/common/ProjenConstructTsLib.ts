/* eslint-disable @cspell/spellchecker */
import { ReleasableCommits, TextFile } from "projen";
import { TypeScriptProjectOptions } from "projen/lib/typescript";
import { deepMerge } from "projen/lib/util";

import { Node20TypeScriptProject } from "../../packages/dkershner6-projen-typescript/src";
import { CSpell } from "../../packages/projen-cspell/src";
import { TypedocMarkdown } from "../../packages/projen-typedoc/src";
import { RootMonorepo } from "../rootMonorepo";

export class ProjenConstructTsLib extends Node20TypeScriptProject {
    constructor(
        rootMonorepoProject: RootMonorepo,
        options: Omit<
            TypeScriptProjectOptions,
            "defaultReleaseBranch" | "outDir"
        >,
    ) {
        const defaultOptions: Omit<TypeScriptProjectOptions, "name"> = {
            parent: rootMonorepoProject,

            defaultReleaseBranch: "main",
            outdir: `packages/${options.name}`,
            releaseTagPrefix: `${options.name}@`,
            publishTasks: true,
            release: true,
            releaseToNpm: true,
            releaseWorkflowSetupSteps: [
                {
                    name: "Compile all libs",
                    run: `npx projen compile`,
                    workingDirectory: ".",
                },
            ],
            releasableCommits: ReleasableCommits.everyCommit("."),

            peerDeps: ["constructs", "projen", ...(options.peerDeps ?? [])],
            devDeps: ["constructs", "projen", ...(options.devDeps ?? [])],

            authorName: "Derek Kershner",
            authorUrl: "https://dkershner.com",
            docgen: true,
        };

        const combinedOptions: TypeScriptProjectOptions = deepMerge([
            defaultOptions,
            options,
        ]) as TypeScriptProjectOptions;

        super(combinedOptions);

        this.gitattributes.addAttributes("/docs/**", "linguist-generated");
        this.eslint?.allowDevDeps(`**/${this.srcdir}/**`);

        new TextFile(this, "README.md", {
            lines: [
                `# ${this.name}`,
                "",
                `${combinedOptions.description}`,
                "",
                "## Docs",
                "",
                `See [${this.name} API Docs](docs/modules.md)`,
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
                "",
                "## License",
                "",
                "This project is licensed under the terms of the [MIT License](LICENSE.md).",
            ],
        });

        new CSpell(this, {
            config: {
                words: [
                    "ccount",
                    "configurer",
                    "mdast",
                    "micromark",
                    "ncipollo",
                    "panva",
                    "rehype",
                    "rickstaa",
                    "sonarjs",
                    "vfile",
                    "zwitch",
                ],
            },
        });

        new TypedocMarkdown(this);
    }
}
