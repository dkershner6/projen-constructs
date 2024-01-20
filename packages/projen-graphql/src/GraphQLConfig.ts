import type { IGraphQLConfig } from "graphql-config";
import { Component, JsonFile, JsonFileOptions, Project } from "projen";

export interface GraphQLConfigOptions extends Omit<JsonFileOptions, "obj"> {
    readonly config: IGraphQLConfig;
}

/**
 * Create a graphql.config.json file.
 */
export class GraphQLConfig extends Component {
    public config: IGraphQLConfig;

    constructor(project: Project, options: GraphQLConfigOptions) {
        super(project);

        this.config = options.config;

        new JsonFile(this.project, "graphql.config.json", {
            obj: this.config,
            ...options,
        });
    }
}
