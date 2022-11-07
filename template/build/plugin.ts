import compress from "./plugin/compress";
import pwa from "./plugin/pwa";
import unocss from "./plugin/unocss";
import visualizer from "./plugin/visualizer";
import autoImport from "./plugin/unplugin-auto";
import autoComponent from "./plugin/unplugin-component";
import imaginmin from "./plugin/imagemin";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { homePlugin, remotePlugin } from "vite-federation";
import vueInspector from "vite-plugin-vue-inspector";
import Inspector from "vite-plugin-inspect";
import vueMacros from "unplugin-vue-macros/vite";
import {pureServer} from "sfc-server"
import { sfc } from "vite-plugin-sfcmore";
import { splitVendorChunkPlugin, type PluginOption } from "vite";

type pluginType='vue'|'lib'|'build'|"debug"|'server'

export default function (modules: pluginType[]) {
  const vuePlugin = [
    vueMacros({
      plugins: {
        vue: vue({ reactivityTransform: true }),
        vueJsx: vueJsx(), // if needed
      },
    }),
  ];
  const basicPlugin = [
    unocss(),
    autoImport(),
    autoComponent(),
    homePlugin({
      remote: {},
      mode: "cold",
      cache: false,
      importMap: true,
    }),
  ];

  const buildPlugin = [
    imaginmin(),
    compress(),
    pwa(),
    splitVendorChunkPlugin(),
  ];

  const debugPlugin = [visualizer(), vueInspector(), Inspector()];

  const libPlugin = [
    sfc(),
    remotePlugin({
      entry: "src/micro.ts",
      importMap: true,
      externals: {},
    }),
  ];

  const plugins: PluginOption[] = [ ...basicPlugin];

if(modules.includes('server'))
plugins.push(pureServer);

  if (modules.includes('vue'))
    plugins.push(...vuePlugin);

  if (modules.includes('build'))
    plugins.push(...buildPlugin);


  if (modules.includes('debug'))
    plugins.push(...debugPlugin);


  if (modules.includes('lib')) plugins.push(...libPlugin);
  return plugins;
}
