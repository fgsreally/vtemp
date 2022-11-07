import AutoImport from "unplugin-auto-import/vite";

export default function () {
  return AutoImport({
    // targets to transform
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/, // .vue
    ],

    // global imports to register
    imports: [
      // presets
      "vue",
      "vue-router",
      "pinia",

      // custom
      {
        "@vformore/model": ["Model", "Is", "Get", "Rule", "Any"],
        "@vueuse/core": ["useMouse"],
        axios: [
          // default imports
          ["default", "axios"], // import { default as axios } from 'axios',
        ],
      },
    ],

    // Auto import for module exports under directories
    // by default it only scan one level of modules under the directory
    dirs: ["src/utils/**"],

    resolvers: [],
  });
}
