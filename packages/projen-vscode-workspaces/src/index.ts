import path from "path";

import { Construct } from "constructs";
import { Component, JsonFile, Project } from "projen";
import { NodeProject } from "projen/lib/javascript";

export type VsCodeWorkspacesJson = {
    extensions?: {
        recommendations?: string[];
    };
    folders: {
        name: string;
        path: string;
    }[];
    settings?: { [key: string]: unknown };
};

export interface VsCodeWorkspacesOptions {
    /**
     * @default none
     */
    additionalWorkspacesJsonSettings?: Omit<VsCodeWorkspacesJson, "folders">;
    /**
     * @default false
     */
    disableMonoRepoExtensionRecommendations?: boolean;
    /**
     * Should end with ".code-workspace"
     */
    filename: string;
    /**
     * @default (project) => project.name
     *
     * @param rootProject The root project definition to use for naming
     * @param project The project definition to use for naming
     * @returns The name of the project in the context of VSCode Workspaces
     */
    projectNamer?: (project: Project, rootProject: Project) => string;
    /**
     * @default ".vscode"
     */
    path?: string;
}

const DEFAULT_WORKSPACES_MONOREPO_EXTENSION_RECOMMENDATIONS = [
    // https://marketplace.visualstudio.com/items?itemName=q.typescript-mono-repo-import-helper
    "q.typescript-mono-repo-import-helper",
];

const DEFAULT_PATH = ".vscode";

export class VsCodeWorkspaces extends Component {
    constructor(rootProject: Construct, options: VsCodeWorkspacesOptions) {
        super(rootProject);

        if (rootProject instanceof Project) {
            const workspacesFilePath = options?.path ?? DEFAULT_PATH;
            const projectNamer =
                options?.projectNamer ?? ((project) => project.name);

            const workspacesJson: VsCodeWorkspacesJson = {
                ...(options?.additionalWorkspacesJsonSettings ?? {}),
                extensions: {
                    ...(options?.additionalWorkspacesJsonSettings?.extensions ??
                        {}),
                    recommendations: [
                        ...(options?.disableMonoRepoExtensionRecommendations
                            ? []
                            : DEFAULT_WORKSPACES_MONOREPO_EXTENSION_RECOMMENDATIONS),
                        ...(options?.additionalWorkspacesJsonSettings
                            ?.extensions?.recommendations ?? []),
                    ],
                },
                folders: [
                    {
                        name: projectNamer(rootProject, rootProject),
                        path: path.relative(
                            path.join(rootProject.outdir, workspacesFilePath),
                            rootProject.outdir,
                        ),
                    },
                    ...(rootProject.subprojects?.map((subProject) => ({
                        name: projectNamer(subProject, rootProject),
                        path: path.relative(
                            path.join(rootProject.outdir, workspacesFilePath),
                            subProject.outdir,
                        ),
                    })) ?? []),
                ],
                settings: {
                    ["eslint.workingDirectories"]:
                        rootProject.subprojects?.map(
                            (subProject) =>
                                `./${path.relative(
                                    rootProject.outdir,
                                    subProject.outdir,
                                )}`,
                        ) ?? [],
                    ["jest.disabledWorkspaceFolders"]: [
                        (rootProject as NodeProject).jest
                            ? rootProject.name
                            : null,
                        ...(rootProject.subprojects
                            ?.filter(
                                (subProject) =>
                                    subProject instanceof NodeProject &&
                                    !subProject.jest,
                            )
                            ?.map((subProject) => subProject.name) ?? []),
                    ].filter(Boolean),

                    ...(options?.additionalWorkspacesJsonSettings?.settings ??
                        {}),
                },
            };

            new JsonFile(
                rootProject,
                `${workspacesFilePath}/${options.filename}`,
                {
                    obj: workspacesJson,
                },
            );
        }
    }
}
