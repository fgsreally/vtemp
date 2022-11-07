import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// your plugin installation
export default function () {
  return Components({
    resolvers: [ElementPlusResolver()],
    dirs: ["src"],
    extensions: ["vue", "tsx"],
    deep: true,
    dts: true,
    include: [/\.vue$/, /\.vue\?vue/, /\.[tj]sx?$/],

    types: [
      {
        from: "vue-router",
        names: ["RouterLink", "RouterView"],
      },
    ],
  });
}
