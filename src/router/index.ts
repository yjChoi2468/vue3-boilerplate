import {
  createRouter,
  createWebHashHistory,
  NavigationFailure,
  NavigationGuardNext,
  RouteLocationNormalized,
} from "vue-router";
import { homeRouter } from "./homeRouter";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...homeRouter],
});

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  // 라우팅 전
});

router.afterEach((to: RouteLocationNormalized, from: RouteLocationNormalized, failure?: NavigationFailure | void) => {
  // 라우팅 후
});

export default router;
