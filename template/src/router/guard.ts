import type { Router } from "vue-router";

export function createGuard(router: Router) {
  router.beforeEach(async () => {
    // Switching the route will delete the previous request

    return true;
  });
}
