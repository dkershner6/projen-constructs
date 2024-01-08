/* eslint-disable sonarjs/no-duplicate-string */
import { TextFile } from "projen";
import { NpmAccess } from "projen/lib/javascript";

import { WorkflowJobMerger } from "./packages/projen-github-workflows/src";
import { Nvmrc } from "./packages/projen-nvm/src";
import { VsCodeWorkspaces } from "./packages/projen-vscode-workspaces/src";
import { ProjenConstructTsLib } from "./projenrc/common/ProjenConstructTsLib";
import { RootMonorepo } from "./projenrc/rootMonorepo";

const rootProject = new RootMonorepo();

const cSpellProject = new ProjenConstructTsLib(rootProject, {
    name: "projen-cspell",
    keywords: ["cspell", "projen", "spellchecker"],
    description: "Helpers for Projen projects that use cSpell.",
});

const gitHubWorkflowsProject = new ProjenConstructTsLib(rootProject, {
    name: "projen-github-workflows",
    keywords: ["projen", "github", "workflows", "workflow"],
    description: "Helpers for Projen projects that use GitHub Workflows.",
});

const nodeProject = new ProjenConstructTsLib(rootProject, {
    name: "projen-node",
    keywords: ["projen", "node", "config", "configs"],
    description: "Helpers for Projen Node projects.",
});

const nvmProject = new ProjenConstructTsLib(rootProject, {
    name: "projen-nvm",
    keywords: ["projen", "nvm", "node", "version", "manager"],
    description: "Helpers for Projen projects that use NVM.",
});

const sstProject = new ProjenConstructTsLib(rootProject, {
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

const vsCodeWorkspacesProject = new ProjenConstructTsLib(rootProject, {
    name: "projen-vscode-workspaces",
    keywords: ["projen", "monorepo", "vscode", "workspaces", "workspace"],
    description: "Helpers for Projen projects that use VSCode workspaces.",
});

const dkershnerTypescriptProject = new ProjenConstructTsLib(rootProject, {
    name: "dkershner6-projen-typescript",
    keywords: ["projen", "typescript", "ts", "config", "configs"],
    description:
        "DKershner's preferred constructs for Projen TypeScript projects.",
    devDeps: ["@types/clone-deep"],
    peerDeps: ["clone-deep"],
});

const dkershnerReactProject = new ProjenConstructTsLib(rootProject, {
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

const dkershnerAwsCdkLibraryProject = new ProjenConstructTsLib(rootProject, {
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

const dkershnerGithubActionProject = new ProjenConstructTsLib(rootProject, {
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

const dkershnerCdkAppCoreProject = new ProjenConstructTsLib(rootProject, {
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

const dkershnerCdkAppProject = new ProjenConstructTsLib(rootProject, {
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

const dkershnerSstAppProject = new ProjenConstructTsLib(rootProject, {
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

const dkershnerMonorepoProject = new ProjenConstructTsLib(rootProject, {
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

const ALL_SUBPROJECTS = [
    cSpellProject,
    dkershnerAwsCdkLibraryProject,
    dkershnerCdkAppCoreProject,
    dkershnerCdkAppProject,
    dkershnerGithubActionProject,
    dkershnerMonorepoProject,
    dkershnerReactProject,
    dkershnerSstAppProject,
    dkershnerTypescriptProject,
    gitHubWorkflowsProject,
    nodeProject,
    nvmProject,
    sstProject,
    vsCodeWorkspacesProject,
];
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
            return `(Lib) ${project?.name.replace("projen-", "")}`;
        }

        throw new Error("Unknown project type");
    },
});

new Nvmrc(rootProject);

new TextFile(rootProject, "docs/index.html", {
    lines: [
        "<html>",
        "<body>",
        "<h1>Projen Constructs Docs</h1>",
        "<ul>",
        ...ALL_SUBPROJECTS.map(
            (subProject) =>
                `<li><a href="https://dkershner6.github.io/projen-constructs/${subProject.name}">${subProject.name}</a></li>`,
        ),
        "</ul>",
        "</body>",
        "</html>",
    ],
});

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
