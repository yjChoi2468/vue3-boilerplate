import { PERMISSION_TYPE } from "@/constants/permission.constants";
import { RouteRecordRaw } from "vue-router";
import { lazyLoadView } from "./util/helper";

export const homeRouteNames = {
  homePage: "homePage",
  aboutPage: "aboutPage",
} as const;

export const homeRoutes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: homeRouteNames.homePage,
    component: () => lazyLoadView("Home"),
  },
  {
    path: "/about",
    name: homeRouteNames.aboutPage,
    component: () => lazyLoadView("About"),
    meta: {
      permission: PERMISSION_TYPE.ADMIN,
    },
  },
];
