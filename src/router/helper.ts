export const lazyLoadLayout = (layout: string) =>
  import(
    /* webpackChunkName: "layouts-[request]" */
    `@/layouts/${layout}.vue`
  );

export const lazyLoadView = (view: string) =>
  import(
    /* webpackChunkName: "views-[request]" */
    `@/views/${view}.vue`
  );
