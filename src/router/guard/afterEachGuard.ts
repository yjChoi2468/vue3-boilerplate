import { NavigationFailure, RouteLocationNormalized } from "vue-router";

export const afterEachGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  failure?: NavigationFailure | void
) => {
  // λΌμ°ν ν
  // send google analytics
};
