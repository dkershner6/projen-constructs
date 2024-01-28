import { Component, SampleFile, javascript, typescript } from "projen";
import { TypeScriptProject } from "projen/lib/typescript";

export interface StorybookOptions {
    /**
     * The directory where static files will be written to.
     *
     * @default "storybook-static"
     */
    readonly staticOutDir?: string;

    /**
     * The port that Storybook will run on.
     *
     * @default 6006
     */
    readonly port?: number;
}

export class Storybook extends Component {
    declare readonly project: javascript.NodeProject;

    constructor(
        project: javascript.NodeProject,
        options: StorybookOptions = {},
    ) {
        super(project);

        this.project.addPackageIgnore(".storybook");
        this.project.addPackageIgnore("*.stories.tsx");

        this.project.addGitIgnore(options.staticOutDir ?? "storybook-static");

        this.project.addDevDeps(
            "@storybook/addon-essentials",
            "@storybook/addon-interactions",
            "@storybook/addon-links",
            "@storybook/addon-onboarding",
            "@storybook/blocks",
            "@storybook/test",
            "storybook",
        );

        const eslint = javascript.Eslint.of(this.project);
        if (eslint) {
            this.project.addDevDeps("eslint-plugin-storybook");

            eslint.addOverride({
                files: ["*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
                extends: ["plugin:storybook/recommended"],
            });

            eslint.allowDevDeps(
                `${(this.project as TypeScriptProject)?.srcdir ?? "src"}/**/*.stories.tsx`,
            );
        }

        if (this.project instanceof typescript.TypeScriptProject) {
            const storyTsxPattern = "**/*.stories.tsx";
            this.project.tsconfig?.addExclude(storyTsxPattern);

            this.project.tsconfigDev?.addInclude(storyTsxPattern);
        }

        this.project.addTask("build-storybook", {
            exec: `storybook build -o ${options.staticOutDir ?? "storybook-static"}`,
            receiveArgs: true,
        });
        this.project.addTask("storybook", {
            exec: `storybook dev -p ${options.port ?? 6006}`,
            receiveArgs: true,
        });
    }
}

export class StorybookNextjs extends Storybook {
    constructor(
        project: javascript.NodeProject,
        options: StorybookOptions = {},
    ) {
        super(project, options);

        this.project.addDevDeps("@storybook/nextjs", "@storybook/react");

        new SampleFile(this.project, ".storybook/main.ts", {
            contents: `import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
`,
        });

        new SampleFile(this.project, ".storybook/preview.ts", {
            contents: `import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;`,
        });
    }
}
