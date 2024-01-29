/* eslint-disable @cspell/spellchecker */
/* eslint-disable sonarjs/no-duplicate-string */
import { TextFile } from "projen";
import { NpmAccess } from "projen/lib/javascript";

import { WorkflowJobMerger } from "./packages/projen-github-workflows/src";
import { Nvmrc } from "./packages/projen-nvm/src";
import { VsCodeWorkspaces } from "./packages/projen-vscode-workspaces/src";
import { ProjenConstructTsLib } from "./projenrc/common/ProjenConstructTsLib";
import { RootMonorepo } from "./projenrc/rootMonorepo";

const rootProject = new RootMonorepo();

new ProjenConstructTsLib(rootProject, {
    name: "projen-babel",
    keywords: ["babel", "projen", "compile"],
    description: "Helpers for Projen projects that use babel.",
    devDeps: ["@babel/core", "@types/babel__core"],
});

new ProjenConstructTsLib(rootProject, {
    name: "projen-cspell",
    keywords: ["cspell", "projen", "spellchecker"],
    description: "Helpers for Projen projects that use cSpell.",
});

new ProjenConstructTsLib(rootProject, {
    name: "projen-esm",
    keywords: ["esm", "projen"],
    description: "Helpers for Projen projects that use ESM.",
    peerDeps: ["projen-babel@^0.x"],
});

new ProjenConstructTsLib(rootProject, {
    name: "projen-github-workflows",
    keywords: ["projen", "github", "workflows", "workflow"],
    description: "Helpers for Projen projects that use GitHub Workflows.",
});

new ProjenConstructTsLib(rootProject, {
    name: "projen-graphql",
    keywords: ["projen", "graphql", "config", "configs"],
    description: "Helpers for Projen GraphQL projects.",

    devDeps: ["graphql-config"],
});

new ProjenConstructTsLib(rootProject, {
    name: "projen-nextjs",
    npmAccess: NpmAccess.PUBLIC,
    keywords: [
        "projen",
        "configs",
        "config",
        "constructs",
        "construct",
        "nextjs",
    ],
    description: "Helpers for Projen Nextjs Apps.",
    peerDeps: ["next@>=13.5.6"],
});

new ProjenConstructTsLib(rootProject, {
    name: "projen-node",
    keywords: ["projen", "node", "config", "configs"],
    description: "Helpers for Projen Node projects.",
});

new ProjenConstructTsLib(rootProject, {
    name: "projen-nvm",
    keywords: ["projen", "nvm", "node", "version", "manager"],
    description: "Helpers for Projen projects that use NVM.",
});

new ProjenConstructTsLib(rootProject, {
    name: "projen-sonar",
    keywords: [
        "projen",
        "sonar",
        "sonarcloud",
        "sonarqube",
        "quality",
        "qualitygate",
        "sonarjs",
    ],
    description: "Helpers for Projen projects that use SST.",
});

new ProjenConstructTsLib(rootProject, {
    name: "projen-sst",
    keywords: [
        "projen",
        "sst",
        "serverless",
        "stack",
        "framework",
        "aws",
        "cdk",
    ],
    description: "Helpers for Projen projects that use SST.",
});

new ProjenConstructTsLib(rootProject, {
    name: "projen-storybook",
    keywords: ["projen", "storybook", "docs", "documentation"],
    description: "Helpers for Projen projects that use Storybook.",
});

new ProjenConstructTsLib(rootProject, {
    name: "projen-typedoc",
    keywords: ["projen", "typedoc", "docs", "documentation"],
    description: "Helpers for Projen projects that use Typedoc (docgen).",
});

new ProjenConstructTsLib(rootProject, {
    name: "projen-vscode-workspaces",
    keywords: ["projen", "monorepo", "vscode", "workspaces", "workspace"],
    description: "Helpers for Projen projects that use VSCode workspaces.",
});

new ProjenConstructTsLib(rootProject, {
    name: "dkershner6-projen-typescript",
    keywords: ["projen", "typescript", "ts", "config", "configs"],
    description:
        "DKershner's preferred constructs for Projen TypeScript projects.",
    devDeps: ["@types/clone-deep"],
    peerDeps: ["clone-deep"],
});

new ProjenConstructTsLib(rootProject, {
    name: "dkershner6-projen-react",
    npmAccess: NpmAccess.PUBLIC,
    keywords: [
        "projen",
        "configs",
        "config",
        "constructs",
        "construct",
        "react",
    ],
    description: "DKershner's preferred constructs for Projen React projects.",
    devDeps: ["@types/clone-deep"],
    peerDeps: ["clone-deep", "dkershner6-projen-typescript@^0.x"],
});

new ProjenConstructTsLib(rootProject, {
    name: "dkershner6-projen-awscdk-construct-library",
    npmAccess: NpmAccess.PUBLIC,
    keywords: [
        "projen",
        "configs",
        "config",
        "constructs",
        "construct",
        "awscdk",
        "cdk",
        "awscdk-library",
    ],
    description:
        "DKershner's preferred constructs for Projen AWS CDK Construct Libraries.",
    devDeps: ["@types/clone-deep"],
    peerDeps: ["clone-deep", "dkershner6-projen-typescript@^0.x"],
});

new ProjenConstructTsLib(rootProject, {
    name: "dkershner6-projen-github-actions",
    npmAccess: NpmAccess.PUBLIC,
    keywords: ["projen", "github", "actions", "action"],
    description:
        "DKershner's preferred constructs for Projen GitHub Action projects.",
    devDeps: ["@types/clone-deep"],
    peerDeps: [
        "clone-deep",
        "dkershner6-projen-typescript@^0.x",
        "projen-github-action-typescript",
    ],
});

new ProjenConstructTsLib(rootProject, {
    name: "dkershner6-projen-awscdk-core",
    npmAccess: NpmAccess.PUBLIC,
    keywords: [
        "projen",
        "configs",
        "config",
        "constructs",
        "construct",
        "awscdk",
        "cdk",
    ],
    description: "DKershner's common constructs for Projen AWS CDK Apps.",
});

new ProjenConstructTsLib(rootProject, {
    name: "dkershner6-projen-awscdk-app",
    npmAccess: NpmAccess.PUBLIC,
    keywords: [
        "projen",
        "configs",
        "config",
        "constructs",
        "construct",
        "awscdk",
        "cdk",
        "awscdk-app",
    ],
    description: "DKershner's preferred constructs for Projen AWS CDK Apps.",
    devDeps: ["@types/clone-deep"],
    peerDeps: [
        "clone-deep",
        "dkershner6-projen-typescript@^0.x",
        "dkershner6-projen-awscdk-core@^0.x",
    ],
});

new ProjenConstructTsLib(rootProject, {
    name: "dkershner6-projen-sst-app",
    npmAccess: NpmAccess.PUBLIC,
    keywords: [
        "projen",
        "configs",
        "config",
        "constructs",
        "construct",
        "sst",
        "awscdk",
        "cdk",
        "awscdk-app",
    ],
    description: "DKershner's preferred constructs for Projen SST Apps.",
    devDeps: ["@types/clone-deep"],
    peerDeps: [
        "clone-deep",
        "dkershner6-projen-typescript@^0.x",
        "dkershner6-projen-awscdk-core@^0.x",
        "projen-sst@^0.x",
    ],
});

new ProjenConstructTsLib(rootProject, {
    name: "dkershner6-projen-awscdk-nextjs-app",
    npmAccess: NpmAccess.PUBLIC,
    keywords: [
        "projen",
        "configs",
        "config",
        "constructs",
        "construct",
        "awscdk",
        "cdk",
        "awscdk-app",
        "nextjs",
    ],
    description:
        "DKershner's preferred constructs for Projen AWS CDK Apps using Nextjs.",
    devDeps: ["@types/clone-deep"],
    peerDeps: [
        "clone-deep",
        "dkershner6-projen-react@^0.x",
        "dkershner6-projen-typescript@^0.x",
        "dkershner6-projen-awscdk-core@^0.x",
        "dkershner6-projen-awscdk-app@^0.x",
        "projen-esm@^0.x",
        "projen-nextjs@^0.x",
    ],
});

new ProjenConstructTsLib(rootProject, {
    name: "dkershner6-projen-sst-nextjs-app",
    npmAccess: NpmAccess.PUBLIC,
    keywords: [
        "projen",
        "configs",
        "config",
        "constructs",
        "construct",
        "sst",
        "awscdk",
        "cdk",
        "awscdk-app",
        "nextjs",
    ],
    description:
        "DKershner's preferred constructs for Projen SST Apps using Nextjs.",
    devDeps: ["@types/clone-deep"],
    peerDeps: [
        "clone-deep",
        "dkershner6-projen-react@^0.x",
        "dkershner6-projen-typescript@^0.x",
        "dkershner6-projen-awscdk-core@^0.x",
        "dkershner6-projen-sst-app@^0.x",
        "projen-esm@^0.x",
        "projen-nextjs@^0.x",
        "projen-sst@^0.x",
    ],
});

new ProjenConstructTsLib(rootProject, {
    name: "dkershner6-projen-nx-monorepo",
    npmAccess: NpmAccess.PUBLIC,
    keywords: [
        "projen",
        "configs",
        "config",
        "constructs",
        "construct",
        "nx",
        "monorepo",
    ],
    description: "DKershner's preferred constructs for Projen NX Monorepos.",
    devDeps: ["@types/clone-deep"],
    peerDeps: ["@aws/pdk", "clone-deep", "dkershner6-projen-typescript@^0.x"],
});

// Using the packages inside this repo, for this repo.
// Do not advise directly importing in a monorepo, but it is critical here for testing the packages.
// Not directly importing creates a circular dependency.

new VsCodeWorkspaces(rootProject, {
    filename: "Projen Constructs Monorepo.code-workspace",
    projectNamer: (project) => {
        if (project === rootProject) {
            return "ROOT";
        }

        if (project instanceof ProjenConstructTsLib) {
            return `Lib- ${project?.name.replace("projen-", "")}`;
        }

        throw new Error("Unknown project type");
    },
    additionalWorkspacesJsonSettings: {
        settings: { "cSpell.import": ["cspell-readonly.json"] },
    },
});

new Nvmrc(rootProject);

new TextFile(rootProject, ".github/CODEOWNERS", {
    lines: ["* @dkershner6"],
});

if (rootProject.github) {
    new WorkflowJobMerger(rootProject.github, {
        merges: [
            {
                prependSteps: [
                    {
                        run: "echo 'Go!'",
                        workingDirectory: ".",
                    },
                ],
            },
        ],
    });
}

rootProject.synth();
