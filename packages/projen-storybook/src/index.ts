import { Component, SampleFile, javascript } from "projen";

export class Storybook extends Component {
    declare readonly project: javascript.NodeProject;

    constructor(project: javascript.NodeProject) {
        super(project);

        this.project.addDevDeps(
            "@storybook/addon-essentials",
            "@storybook/addon-interactions",
            "@storybook/addon-links",
            "@storybook/addon-onboarding",
            "@storybook/blocks",
            "@storybook/test",
        );

        const eslint = javascript.Eslint.of(this.project);
        if (eslint) {
            this.project.addDevDeps("eslint-plugin-storybook");

            eslint.addOverride({
                files: ["*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
                extends: ["plugin:storybook/recommended"],
            });
        }
    }
}

export class StorybookNextjs extends Storybook {
    constructor(project: javascript.NodeProject) {
        super(project);

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
