import { Component, JsonFile } from "projen";
import { EslintOverride } from "projen/lib/javascript";
import { TypeScriptProject } from "projen/lib/typescript";

export interface GraphQLEslintOptions {
    /**
     * The file extensions to lint with graphql-eslint.
     *
     * @default - [".ts", ".tsx", ".graphql"]
     */
    fileExtensions?: string[];

    /**
     * Whether or not to enable graphql-eslint operations rules in eslint.
     *
     * @default true
     */
    operationsRules?: boolean;

    /**
     * Override some settings for the ts file graphql-eslint processor.
     */
    tsOverrideConfig?: EslintOverride;
}

const ESLINT_PLUGIN = "@graphql-eslint/eslint-plugin";

const GRAPHQL_ESLINT_OPERATIONS_RULES = {
    "@graphql-eslint/executable-definitions": "error",
    "@graphql-eslint/fields-on-correct-type": "error",
    "@graphql-eslint/fragments-on-composite-type": "error",
    "@graphql-eslint/known-argument-names": "error",
    "@graphql-eslint/known-directives": "error",
    "@graphql-eslint/known-type-names": "error",
    "@graphql-eslint/lone-anonymous-operation": "error",
    "@graphql-eslint/no-anonymous-operations": "error",
    "@graphql-eslint/no-duplicate-fields": "error",
    "@graphql-eslint/no-fragment-cycles": "error",
    "@graphql-eslint/one-field-subscriptions": "error",
    "@graphql-eslint/overlapping-fields-can-be-merged": "error",
    "@graphql-eslint/possible-fragment-spread": "error",
    "@graphql-eslint/provided-required-arguments": "error",
    "@graphql-eslint/scalar-leafs": "error",
    "@graphql-eslint/unique-argument-names": "error",
    "@graphql-eslint/unique-directive-names-per-location": "error",
    "@graphql-eslint/unique-input-field-names": "error",
    "@graphql-eslint/unique-variable-names": "error",
    "@graphql-eslint/value-literals-of-correct-type": "error",
    "@graphql-eslint/variables-are-input-types": "error",
    "@graphql-eslint/variables-in-allowed-position": "error",
};

export const GRAPHQL_ESLINT_TS_OVERRIDE: EslintOverride = {
    files: ["*.ts", "*.tsx"],
    // @ts-expect-error - this is a rarely used field
    processor: "@graphql-eslint/graphql",
};

export const GRAPHQL_ESLINT_GRAPHQL_OVERRIDE: EslintOverride = {
    files: ["*.graphql"],
    parser: ESLINT_PLUGIN,
    plugins: ["@graphql-eslint"],
    rules: GRAPHQL_ESLINT_OPERATIONS_RULES,
};

/**
 * Add graphql-eslint to your project.
 *
 * Currently only supports this as a separate config file and command, as there are issues with typescript-eslint and graphql-eslint.
 */
export class GraphQLEslint extends Component {
    constructor(
        project: TypeScriptProject,
        eslintConfigFilename: string,
        options?: GraphQLEslintOptions,
    ) {
        super(project);

        project.addDevDeps(ESLINT_PLUGIN);

        if (options?.operationsRules ?? true) {
            new JsonFile(project, eslintConfigFilename, {
                obj: {
                    overrides: [
                        {
                            ...GRAPHQL_ESLINT_TS_OVERRIDE,
                            ...(options?.tsOverrideConfig ?? {}),
                        },
                        GRAPHQL_ESLINT_GRAPHQL_OVERRIDE,
                    ],
                },
            });

            const eslintTask = project.tasks.tryFind("eslint");
            if (eslintTask) {
                const graphqlEslintTask = project.tasks.addTask(
                    "eslint:graphql",
                    {
                        exec: eslintTask.steps[0].exec?.replace(
                            /--ext ([.a-z,]*) /,
                            `--ext ${options?.fileExtensions?.join(",") ?? ".ts,.tsx,.graphql"} `,
                        ),
                        receiveArgs: true,
                    },
                );

                eslintTask.spawn(graphqlEslintTask);
            }
        }
    }
}
