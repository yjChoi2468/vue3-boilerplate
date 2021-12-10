import { RouteRecordRaw } from "vue-router";
import { lazyLoadView } from "./util/helper";

export const loginRoutes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: () => lazyLoadView("Login"),
  },
];
