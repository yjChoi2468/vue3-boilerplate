import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export const beforeEachGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  // 라우팅 전
  // 권한 검사 - store
  return next();
};
