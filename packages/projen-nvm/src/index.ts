import { TextFile } from "projen";
import { NodeProject } from "projen/lib/javascript";

export interface NvmrcOptions {
    /**
     * @default maxNodeVersion,  if none then minNodeVersion, if none then "lts/*"
     */
    readonly nodeVersion?: string;
}

export class Nvmrc extends TextFile {
    constructor(project: NodeProject, options: NvmrcOptions = {}) {
        super(project, ".nvmrc", {
            lines: [
                options?.nodeVersion ??
                    project?.maxNodeVersion ??
                    project?.minNodeVersion ??
                    "lts/*",
            ],
        });
    }
}
