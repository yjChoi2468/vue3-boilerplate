import { PERMISSION_TYPE } from "@/constants/permission.constants";
import { RouteRecordRaw } from "vue-router";
import { lazyLoadView } from "./util/helper";

export const homeRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => lazyLoadView("Home"),
  },
  {
    path: "/about",
    name: "About",
    component: () => lazyLoadView("About"),
    meta: {
      permission: PERMISSION_TYPE.ADMIN,
    },
  },
];
