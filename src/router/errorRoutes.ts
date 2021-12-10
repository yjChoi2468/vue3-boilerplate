import { RouteRecordRaw } from "vue-router";
import { lazyLoadView } from "./helper";

export const errorRoutes: Array<RouteRecordRaw> = [
  {
    path: "/404",
    name: "NotFound",
    component: lazyLoadView("error/Error404"),
  },
  {
    path: "/403",
    name: "Forbidden",
    component: lazyLoadView("error/Error403"),
  },
];
