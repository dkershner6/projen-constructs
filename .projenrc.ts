/* eslint-disable sonarjs/no-duplicate-string */
import { TextFile } from "projen";
import { NpmAccess } from "projen/lib/javascript";
import { Nvmrc } from "./packages/projen-nvm/src";
import { VsCodeWorkspaces } from "./packages/projen-vscode-workspaces/src";
import { ProjenConstructTsLib } from "./projenrc/common/ProjenConstructTsLib";
import { RootMonorepo } from "./projenrc/rootMonorepo";

const rootProject = new RootMonorepo();

const gitHubWorkflowsProject = new ProjenConstructTsLib(rootProject, {
    name: "projen-github-workflows",
    keywords: ["projen", "github", "workflows", "workflow"],
    description: "Helpers for Projen projects that use GitHub Workflows.",
});

const nvmProject = new ProjenConstructTsLib(rootProject, {
    name: "projen-nvm",
    keywords: ["projen", "nvm", "node", "version", "manager"],
    description: "Helpers for Projen projects that use NVM.",
});

const vsCodeWorkspacesProject = new ProjenConstructTsLib(rootProject, {
    name: "projen-vscode-workspaces",
    keywords: ["projen", "monorepo", "vscode", "workspaces", "workspace"],
    description: "Helpers for Projen projects that use VSCode workspaces.",
});

const dkershnerTypescriptConfigsProject = new ProjenConstructTsLib(
    rootProject,
    {
        name: "dkershner6-projen-typescript",
        release: false,
        github: false,
        keywords: ["projen", "typescript", "ts", "config", "configs"],
        description:
            "DKershner's preferred configs for Projen TypeScript projects.",
        devDeps: ["@types/clone-deep", "clone-deep"],
        peerDeps: ["clone-deep"],
    },
);

const dkershnerConstructsProject = new ProjenConstructTsLib(rootProject, {
    name: "dkershner6-projen-react",
    npmAccess: NpmAccess.PUBLIC,
    keywords: ["projen", "configs", "config", "constructs", "construct"],
    description: "DKershner's preferred constructs for Projen projects.",
    devDeps: [
        "@types/clone-deep",
        "clone-deep",
        "dkershner6-projen-typescript@0.0.0",
    ],
    peerDeps: ["clone-deep", "dkershner6-projen-typescript"],
});

const dkershnerGithubActionProject = new ProjenConstructTsLib(rootProject, {
    name: "dkershner6-projen-github-actions",
    npmAccess: NpmAccess.PUBLIC,
    keywords: ["projen", "github", "actions", "action"],
    description: "DKershner's preferred GitHub Actions for Projen projects.",
    devDeps: [
        "@types/clone-deep",
        "clone-deep",
        "dkershner6-projen-typescript@0.0.0",
        "projen-github-action-typescript",
    ],
    peerDeps: [
        "clone-deep",
        "dkershner6-projen-typescript",
        "projen-github-action-typescript",
    ],
});

dkershnerConstructsProject.eslint?.allowDevDeps("**/src/**");

const ALL_SUBPROJECTS = [
    gitHubWorkflowsProject,
    nvmProject,
    vsCodeWorkspacesProject,
    dkershnerTypescriptConfigsProject,
    dkershnerConstructsProject,
    dkershnerGithubActionProject,
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

rootProject.synth();
