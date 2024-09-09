import { createRouter, createWebHistory } from "vue-router";
import indexPage from "../view/index.vue";

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
      component: indexPage,
    },
  ],
});

export default router;
