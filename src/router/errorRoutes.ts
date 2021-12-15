import { RouteRecordRaw } from "vue-router";
import { lazyLoadView } from "./util/helper";

export const errorRouteNames = {
  notFoundPage: "notFoundPage",
  forbiddenPage: "forbiddenPage",
} as const;

export const errorRoutes: Array<RouteRecordRaw> = [
  {
    path: "/error404",
    name: errorRouteNames.notFoundPage,
    component: () => lazyLoadView("error/Error404"),
  },
  {
    path: "/error403",
    name: errorRouteNames.forbiddenPage,
    component: () => lazyLoadView("error/Error403"),
  },
];
