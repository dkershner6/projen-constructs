import { Construct } from "constructs";
import { JsonFile } from "projen";
export type VsCodeWorkspacesJson = {
    extensions?: {
        recommendations?: string[];
    };
    folders: {
        name: string;
        path: string;
    }[];
    settings?: {
        [key: string]: unknown;
    };
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
     * @default ".vscode"
     */
    path?: string;
}
export declare const NON_MONOREPO_ERROR_MESSAGE = "VsCodeWorkspaces can only be used in a Project with subprojects";
export declare class VsCodeWorkspaces extends JsonFile {
    constructor(rootProject: Construct, options: VsCodeWorkspacesOptions);
}
