import { defineConfig } from "vite";
import Plugin from "./build/plugin";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Plugin(['server'])],
  resolve: {
    alias: { "sfc-server": "sfc-server/server" },
  },
  build: {
    outDir: "dist/server",
    lib: {
      formats: ["cjs"],
      entry: "src/server.ts",
    },
    rollupOptions: {
      external: ["sfc-server/server", "express"],
    },
  },
});
