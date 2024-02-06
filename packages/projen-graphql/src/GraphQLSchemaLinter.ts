import { Component, JsonFile } from "projen";
import { NodeProject } from "projen/lib/javascript";

export interface GraphQLSchemaLinterConfig {
    customRulePaths?: string[];
    rules?: string[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ruleOptions?: Record<string, any>;
    schemaPaths?: string[];
}

export interface GraphQLSchemaLinterOptions {
    /**
     * The directory of the graphql-schema-lint other files.
     *
     * @default ".graphql-schema-lint"
     */
    readonly configFolder?: string;

    /**
     * The filename of the graphql-schema-lint configuration file.
     *
     * @default ".graphql-schema-linterrc"
     */
    readonly graphqlSchemaLintConfigFilename?: string;

    readonly graphqlSchemaLintConfig?: GraphQLSchemaLinterConfig;
}

export class GraphQLSchemaLinter extends Component {
    public readonly configFile: JsonFile;

    constructor(
        project: NodeProject,
        options: GraphQLSchemaLinterOptions = {},
    ) {
        super(project);

        project.addDevDeps("graphql-schema-linter");

        project.addTask("lint-schema", {
            description: "Lint the GraphQL schema",
            exec: "graphql-schema-linter",
        });

        this.configFile = new JsonFile(
            project,
            options?.graphqlSchemaLintConfigFilename ??
                ".graphql-schema-linterrc",
            {
                obj: options.graphqlSchemaLintConfig ?? {},
            },
        );
    }
}
