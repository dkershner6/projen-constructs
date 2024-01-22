import { Component } from "projen";
import { TypeScriptProject } from "projen/lib/typescript";

export interface GraphQLEslintOptions {
    /**
     * Whether or not to enable graphql-eslint operations rules in eslint.
     *
     * @default true
     */
    operationsRules?: boolean;
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

export class GraphQLEslint extends Component {
    constructor(project: TypeScriptProject, options?: GraphQLEslintOptions) {
        super(project);

        if (project.eslint) {
            project.addDevDeps(ESLINT_PLUGIN);

            if (options?.operationsRules ?? true) {
                project.eslint.addOverride({
                    files: ["*.ts", "*.tsx"],
                    // @ts-expect-error - this is a rarely used field
                    processor: "@graphql-eslint/graphql",
                });
                project.eslint.addOverride({
                    files: ["*.graphql"],
                    parser: ESLINT_PLUGIN,
                    plugins: ["@graphql-eslint"],
                    rules: GRAPHQL_ESLINT_OPERATIONS_RULES,
                });
            }
        }
    }
}
