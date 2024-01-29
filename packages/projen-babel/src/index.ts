import type { TransformOptions } from "@babel/core";
import { Component, JsonFile, Project } from "projen";

export interface BabelConfigFileOptions {
    transformOptions?: TransformOptions;
}

export class BabelConfigFile extends Component {
    public transformOptions: TransformOptions;

    constructor(
        project: Project,
        fileName: string = "babel.config.json",
        options: BabelConfigFileOptions = {},
    ) {
        super(project);

        this.transformOptions = options.transformOptions ?? {};

        project.addPackageIgnore(fileName);

        new JsonFile(project, fileName, {
            allowComments: true,
            obj: this.transformOptions,
        });
    }
}
