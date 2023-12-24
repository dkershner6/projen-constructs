import { Nvmrc } from "./packages/projen-nvm/src";
import { VsCodeWorkspaces } from "./packages/projen-vscode-workspaces/src";
import { ProjenConstructTsLib } from "./projects/common/ProjenConstructTsLib";
import { RootMonorepo } from "./projects/rootMonorepo";

const rootProject = new RootMonorepo();

new ProjenConstructTsLib(rootProject, {
    name: "projen-vscode-workspaces",
});

new ProjenConstructTsLib(rootProject, {
    name: "projen-nvm",
});

// Using the packages inside this repo, for this repo

new VsCodeWorkspaces(rootProject, {
    filename: "Projen Constructs Monorepo.code-workspace",
});

new Nvmrc(rootProject);

rootProject.synth();
