import { NavigationFailure, RouteLocationNormalized } from "vue-router";

export const afterEachGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  failure?: NavigationFailure | void
) => {
  // 라우팅 후
};
