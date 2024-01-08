import deepClone from "clone-deep";
import {
    DEV_FILE_PATTERNS,
    DKBugFixes,
    DKTasks,
    EslintConfig,
    PUBLISH_FILE_PATTERNS,
    RECOMMENDED_ESLINT_CONFIG,
    RECOMMENDED_JEST_CONFIG,
    RECOMMENDED_NODE_20,
    RECOMMENDED_PNPM_8,
    RECOMMENDED_PRETTIER_CONFIG,
    RECOMMENDED_TSCONFIG_COMPILER_OPTIONS,
    RECOMMENDED_TSCONFIG_NODE_20,
    TEST_FILE_SUFFIXES,
    TEST_FOLDERS,
} from "dkershner6-projen-typescript";
import { Component, ProjectOptions, TextFile } from "projen";
import { NodeProjectOptions, TypeScriptJsxMode } from "projen/lib/javascript";
import {
    TypeScriptProject,
    TypeScriptProjectOptions,
} from "projen/lib/typescript";
import { deepMerge } from "projen/lib/util";

const JEST_ROOTDIR = "<rootDir>";

const changeAllTsToTsx = (strings: string[]): string[] => {
    return strings.map((s) => s.replace(".ts", ".tsx"));
};

const EXTEND_EXPECT_FILE_PATH = ".jest/setup-extend-expect.ts";

export const RECOMMENDED_TSCONFIG_NODE_20_REACT: Partial<TypeScriptProjectOptions> =
    deepMerge([
        deepClone(RECOMMENDED_TSCONFIG_NODE_20),
        {
            tsconfig: {
                compilerOptions: {
                    ...RECOMMENDED_TSCONFIG_COMPILER_OPTIONS,
                    lib: ["es2023", "dom"],
                    jsx: TypeScriptJsxMode.REACT,
                    types: ["jest", "node", "@testing-library/jest-dom"],
                },
                include: [...changeAllTsToTsx(PUBLISH_FILE_PATTERNS)],
            },
            tsconfigDev: {
                include: [
                    ...new Set([
                        ...DEV_FILE_PATTERNS,
                        ...changeAllTsToTsx(DEV_FILE_PATTERNS),
                    ]),
                ],
            },
        },
    ]);

export const RECOMMENDED_JEST_CONFIG_REACT: Partial<NodeProjectOptions> = {
    ...RECOMMENDED_JEST_CONFIG,
    jestOptions: {
        jestConfig: {
            ...RECOMMENDED_JEST_CONFIG.jestOptions?.jestConfig,
            testEnvironment: "jsdom",
            setupFilesAfterEnv: [`${JEST_ROOTDIR}/${EXTEND_EXPECT_FILE_PATH}`],
        },
    },
};

export const RECOMMENDED_NODE_20_REACT_PROJECT_OPTIONS: Omit<
    ProjectOptions & NodeProjectOptions & TypeScriptProjectOptions,
    "defaultReleaseBranch" | "name"
> = deepMerge([
    deepClone(RECOMMENDED_TSCONFIG_NODE_20_REACT),
    RECOMMENDED_NODE_20,
    RECOMMENDED_PNPM_8,
    RECOMMENDED_ESLINT_CONFIG,
    RECOMMENDED_JEST_CONFIG_REACT,
    RECOMMENDED_PRETTIER_CONFIG,
]);

export interface Node20ReactTypescriptConfigurerOptions {
    /**
     * The type of project to configure.
     * Determines how React is installed.
     *
     * @default "library"
     */
    readonly projectType?: "library" | "app";
}

export class Node20ReactTypescriptConfigurer extends Component {
    declare readonly project: TypeScriptProject;

    constructor(
        project: TypeScriptProject,
        options: Node20ReactTypescriptConfigurerOptions = {},
    ) {
        super(project);

        this.installDeps(options.projectType);

        if (this.project.eslint) {
            this.configureEslint();
        }
        if (this.project.jest) {
            this.configureJest();
        }
    }

    private installDeps(projectType: "library" | "app" | undefined): void {
        this.project.addDevDeps("@types/react", "@types/react-dom");

        if (projectType === "app") {
            this.project.addDeps("react", "react-dom");
            return;
        }

        this.project.addDevDeps("react", "react-dom");
        this.project.addPeerDeps("react", "react-dom");
    }

    private configureEslint(): void {
        for (const pattern of changeAllTsToTsx(DEV_FILE_PATTERNS)) {
            this.project.eslint?.allowDevDeps(pattern);
        }

        this.project.addDevDeps(
            "eslint-plugin-react",
            "eslint-plugin-react-hooks",
            "eslint-plugin-jsx-a11y",
        );
        this.project.eslint?.addPlugins("react", "react-hooks", "jsx-a11y");
        this.project.eslint?.addExtends(
            "plugin:react/recommended",
            "plugin:react-hooks/recommended",
            "plugin:jsx-a11y/recommended",
        );
        this.project.eslint?.addRules({
            "react/prop-types": 0, // Disabled to prefer use of Typescript<Props>
        });
        if (this.project.eslint?.config?.env) {
            this.project.eslint.config.env.browser = true;
            this.project.eslint.config.env.es6 = true;
        }

        if (this.project.eslint?.config?.settings) {
            this.project.eslint.config.settings.react = {
                pragma: "React",
                version: "detect",
            };
        }

        // Test files
        this.project.addDevDeps(
            "eslint-plugin-jest-dom",
            "eslint-plugin-testing-library",
        );
        const jtsFiles = [
            ...TEST_FOLDERS.map((folder) => `**/${folder}/**/*.[jt]s`),
            ...TEST_FILE_SUFFIXES.map((suffix) => `*.${suffix}.[jt]s`),
        ];
        this.project.eslint?.addOverride({
            files: [
                ...jtsFiles,
                ...jtsFiles.map((pattern) =>
                    pattern.replace(".[jt]s", ".[jt]sx"),
                ),
            ],
            plugins: ["jest-dom", "testing-library"],
            extends: [
                "plugin:testing-library/react",
                "plugin:jest-dom/recommended",
            ],
        });
    }

    private configureJest(): void {
        this.project.addDevDeps(
            "@testing-library/jest-dom",
            "@testing-library/react",
            "@testing-library/user-event",
            "jest-axe",
            "jest-environment-jsdom",
        );

        new TextFile(this, EXTEND_EXPECT_FILE_PATH, {
            lines: [
                "// Global extensions of expect",
                'import "@testing-library/jest-dom";',
                'import "jest-axe/extend-expect";',
            ],
        });

        for (const suffix of TEST_FILE_SUFFIXES) {
            this.project.tsconfig?.addExclude(`src/**/*.${suffix}.tsx`);
        }
    }
}

export class Node20ReactTypeScriptProject extends TypeScriptProject {
    constructor(options: TypeScriptProjectOptions) {
        super(
            deepMerge([
                deepClone(RECOMMENDED_NODE_20_REACT_PROJECT_OPTIONS),
                options,
            ]) as TypeScriptProjectOptions,
        );

        new DKBugFixes(this);
        new EslintConfig(this);
        new DKTasks(this);

        new Node20ReactTypescriptConfigurer(this);
    }
}
