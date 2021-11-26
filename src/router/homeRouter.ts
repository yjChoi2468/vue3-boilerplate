import { RouteRecordRaw } from "vue-router";
import { lazyLoadView } from "./helper";

export const homeRouter: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => lazyLoadView("Home"),
  },
  {
    path: "/about",
    name: "About",
    component: () => lazyLoadView("About"),
  },
];
