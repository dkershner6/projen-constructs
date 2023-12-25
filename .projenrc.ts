import { TextFile } from "projen";
import { Nvmrc } from "./packages/projen-nvm/src";
import { VsCodeWorkspaces } from "./packages/projen-vscode-workspaces/src";
import { ProjenConstructTsLib } from "./projects/common/ProjenConstructTsLib";
import { RootMonorepo } from "./projects/rootMonorepo";

const rootProject = new RootMonorepo();

const vsCodeWorkspacesProject = new ProjenConstructTsLib(rootProject, {
    name: "projen-vscode-workspaces",
    keywords: ["projen", "monorepo", "vscode", "workspaces", "workspace"],
    description: "Helpers for Projen projects that use VSCode workspaces.",
});

const nvmProject = new ProjenConstructTsLib(rootProject, {
    name: "projen-nvm",
    keywords: ["projen", "nvm", "node", "version", "manager"],
    description: "Helpers for Projen projects that use NVM.",
});

const ALL_SUBPROJECTS = [vsCodeWorkspacesProject, nvmProject];

// Using the packages inside this repo, for this repo

new VsCodeWorkspaces(rootProject, {
    filename: "Projen Constructs Monorepo.code-workspace",
});

new Nvmrc(rootProject);

new TextFile(rootProject, "docs/index.html", {
    lines: [
        "<html>",
        "<body>",
        "<h1>Projen Constructs Docs</h1>",
        ...ALL_SUBPROJECTS.map(
            (subProject) =>
                `<a href="https://dkershner6.github.io/projen-constructs/${subProject.name}">${subProject.name}</a>`,
        ),
        "</body>",
        "</html>",
    ],
});

rootProject.synth();
