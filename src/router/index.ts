import {
  createRouter,
  createWebHashHistory,
  NavigationFailure,
  NavigationGuardNext,
  RouteLocationNormalized,
} from "vue-router";
import { errorRoutes } from "./errorRoutes";
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

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  // 라우팅 전
  // 권한 검사 - store
  return next();
});

router.afterEach((to: RouteLocationNormalized, from: RouteLocationNormalized, failure?: NavigationFailure | void) => {
  // 라우팅 후
});

export default router;
