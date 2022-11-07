const path = require("path");
const { name, version } = require("./package.json");

const date = new Date();

module.exports = {
  name,
  version,
  metadata: {
    year: date.getFullYear(),
    month: String(date.getMonth() + 1).padStart(2, "0"),
    day: String(date.getDate()).padStart(2, "0"),
  },
  prompts: [
    {
      name: "name",
      type: "text",
      message: "Project name",
    },

    {
      name: "features",
      type: "multiselect",
      message: "Choose the features you need",
      instructions: false,
      choices: [
        { title: "是否添加库模式", value: "lib", selected: true },
        // { title: 'Rollup', value: 'rollup' },
        { title: "是否使用单元测试", value: "test", selected: true },
        { title: "是否使用vitepress", value: "docs", selected: true },
        { title: "是否使用e2e", value: "cypress" },
        { title: "是否添加服务端功能", value: "server" },
        { title: "是否添加动画效果", value: "anime" },
      ],
    },
    {
      name: "install",
      type: "confirm",
      message: "Install dependencies",
      initial: true,
    },
  ],
  filters: {
    "cypress/**": ({ features }) => features.includes("cypress"),
    "docs/**": ({ features }) => features.includes("docs"),
    "test/**": ({ features }) => features.includes("test"),
    "src/components/__tests__/**": ({ features }) => features.includes("test"),
    "src/server/**": ({ features }) => features.includes("server"),
    "src/server.ts": ({ features }) => features.includes("server"),
    "server.config.ts": ({ features }) => features.includes("server"),
    "src/micro.ts": ({ features }) => features.includes("lib"),
  },
  // install: "pnpm",
  // init: true,
  setup: async (ctx) => {
    // ctx.config.install = ctx.answers.install && ctx.answers.pm;
  },
  complete: async (ctx) => {},
};
