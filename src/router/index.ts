import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  // 路由位置
  routes: [
    {
      path: "/",
      redirect: "/index",
    },
    {
      path: "/index",
      component: () => import("../view/index.vue"),
    },
    {
      path: "/catalogue",
      component: () => import("../view/catalogue.vue"),
    },
  ],
});

export default router;
