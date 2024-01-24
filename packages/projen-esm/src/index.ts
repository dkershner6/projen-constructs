import { Component } from "projen";
import { TypeScriptProject } from "projen/lib/typescript";

export class EsmTypescriptConfigurer extends Component {
    constructor(project: TypeScriptProject) {
        super(project);

        project.tsconfig?.file?.addOverride?.(
            "ts-node.compilerOptions.module",
            "commonjs",
        );
        project.tsconfigDev?.file?.addOverride?.(
            "ts-node.compilerOptions.module",
            "commonjs",
        );
    }
}
