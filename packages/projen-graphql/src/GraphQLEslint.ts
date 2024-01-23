import { Component } from "projen";
import { EslintOverride } from "projen/lib/javascript";
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
    declare project: TypeScriptProject;

    constructor(project: TypeScriptProject, options?: GraphQLEslintOptions) {
        super(project);

        if (project.eslint) {
            project.addDevDeps(ESLINT_PLUGIN);

            this.moveProjectNeedingRulesToOverride();

            if (options?.operationsRules ?? true) {
                const eslintTask = project.tasks.tryFind("eslint");
                if (eslintTask) {
                    const eslintArgs = eslintTask.steps[0].args;
                    // @ts-expect-error - Violating readonly
                    eslintTask.steps[0].args = [
                        ...(eslintArgs ?? []),
                        "--ext .graphql",
                    ];

                    project.eslint?.addOverride(GRAPHQL_ESLINT_TS_OVERRIDE);
                    project.eslint?.addOverride(
                        GRAPHQL_ESLINT_GRAPHQL_OVERRIDE,
                    );
                }
            }
        }
    }

    /**
     * Certain TS parser eslint rules require the project setting for the TS parser.
     * This moves those rules to an override to make the TS parser ignore .graphql files.
     */
    private moveProjectNeedingRulesToOverride(): void {
        const TS_ESLINT_PROJECT_NEEDING_RULES = [
            "@typescript-eslint/no-floating-promises",
            "@typescript-eslint/return-await",
        ];

        const ruleConfigs = TS_ESLINT_PROJECT_NEEDING_RULES.map(
            (ruleName) => this.project.eslint?.rules?.[ruleName] ?? "off",
        );

        // Turn off rules in normal config
        this.project.eslint?.addRules(
            Object.fromEntries(
                TS_ESLINT_PROJECT_NEEDING_RULES.map((ruleName) => [
                    ruleName,
                    "off",
                ]),
            ),
        );

        // Add back as overrides
        this.project.eslint?.addOverride({
            files: ["*.ts", "*.tsx"],
            rules: Object.fromEntries(
                TS_ESLINT_PROJECT_NEEDING_RULES.map((ruleName, index) => [
                    ruleName,
                    ruleConfigs[index],
                ]),
            ),
        });
    }
}
