import { fileURLToPath, URL } from "node:url";
import Plugin from "./build/plugin";
import type { ConfigEnv, UserConfig } from "vite";
import Alias from "./build/alias";
import Build from "./build/build"
// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  // const env = loadEnv(mode, root);
  // const isBuild = command === "build";

  return {
    define: {
      __INTLIFY_PROD_DEVTOOLS__: false,
    },

    optimizeDeps: {
      include: ["@vue/runtime-core", "@vue/shared"],
    },
 
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/common.scss";',
        },
      },
    },
    build: Build(),
    resolve: {
      alias: Alias(),
    },
    plugins: Plugin(mode==='lib'?['vue',"debug","build"]:['vue',"debug","lib"]),
  };
};
