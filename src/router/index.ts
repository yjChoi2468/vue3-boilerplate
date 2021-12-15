import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { errorRoutes } from "./errorRoutes";
import { afterEachGuard, beforeEachGuard } from "./guard";
import { homeRoutes } from "./homeRoutes";
import { loginRoutes } from "./loginRoutes";
import { lazyLoadView } from "./util/helper";

const routes: Array<RouteRecordRaw> = [
  ...loginRoutes,
  ...homeRoutes,
  ...errorRoutes,
  {
    path: "/",
    name: "Main",
    component: () => lazyLoadView("Main"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => lazyLoadView("error/Error404"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(beforeEachGuard);
router.afterEach(afterEachGuard);

export default router;
