module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "storybook-addon-rtl",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "previewBody": (body) => (`
    <style>
      html {
        font-size: 62.5%;
      }
      
      body {
        font-size: 1.6rem;
      }
    </style>
    ${body}
  `),
}