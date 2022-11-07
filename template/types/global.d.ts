declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
interface ViteEnv {
  VITE_DEBUG: "true" | "false";
  VITE_BUILD_LIB: "true" | "false";
  VITE_PERFORMANCE: "true" | "false";
}
