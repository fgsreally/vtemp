import { createRouter, createWebHistory } from "vue-router";
import { allRoutes } from "./route";

const router = createRouter({
  history: createWebHistory(),
  routes: allRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
