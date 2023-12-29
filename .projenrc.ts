import { TextFile } from "projen";
import { NpmAccess } from "projen/lib/javascript";
import { Nvmrc } from "./packages/projen-nvm/src";
import { VsCodeWorkspaces } from "./packages/projen-vscode-workspaces/src";
import { ProjenConstructTsLib } from "./projects/common/ProjenConstructTsLib";
import { RootMonorepo } from "./projects/rootMonorepo";

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

const dkershnerConfigsProject = new ProjenConstructTsLib(rootProject, {
    name: "dkershner6-projen",
    npmAccess: NpmAccess.PUBLIC,
    keywords: ["projen", "configs", "config"],
    description: "DKershner's preferred configs for Projen projects.",
    devDeps: ["@types/clone-deep", "clone-deep"],
    peerDeps: ["clone-deep"],
});

dkershnerConfigsProject.eslint?.allowDevDeps("**/src/**");

const ALL_SUBPROJECTS = [
    gitHubWorkflowsProject,
    nvmProject,
    vsCodeWorkspacesProject,
    dkershnerConfigsProject,
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
            return `(Lib) ${project.name.replace("projen-", "")}`;
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
