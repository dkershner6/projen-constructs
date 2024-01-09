import { Component } from "projen";
import { TypeScriptProject } from "projen/lib/typescript";

export class TypedocMarkdown extends Component {
    declare readonly project: TypeScriptProject;

    constructor(project: TypeScriptProject) {
        super(project);

        this.project.addDevDeps("typedoc-plugin-markdown");

        const docgenTask = this.project.tasks.tryFind("docgen");
        if (docgenTask) {
            const docgenCommand = docgenTask.steps[0];
            docgenTask.reset(docgenCommand.exec, {
                args: ["--plugin typedoc-plugin-markdown"],
                receiveArgs: true,
            });
        }
    }
}
