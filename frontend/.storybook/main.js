const path = require("path");
//　Next.jsプロジェクトにStorybookを導入したときに困ったこと
// https://dev.classmethod.jp/articles/tried-to-add-storybook-to-nextjs-project/
module.exports = {
  typescript: { reactDocgen: false },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/components": path.resolve(__dirname, "../src/components"),
    };
    return config;
  },
};
