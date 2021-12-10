import { createRouter, createWebHashHistory } from "vue-router";
import { errorRoutes } from "./errorRoutes";
import { afterEachGuard, beforeEachGuard } from "./guard";
import { homeRoutes } from "./homeRoutes";
import { loginRoutes } from "./loginRoutes";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...loginRoutes,
    ...homeRoutes,
    ...errorRoutes,
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
    },
  ],
});

router.beforeEach(beforeEachGuard);
router.afterEach(afterEachGuard);

export default router;
