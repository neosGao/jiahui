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
    {
      path: "/contact",
      component: () => import("../view/contact.vue"),
    },
    {
      path: "/home",
      component: () => import("../view/home.vue"),
    },
    {
      path: "/login",
      component: () => import("../view/login.vue"),
    },
    {
      path: "/signup",
      component: () => import("../view/signup.vue"),
    },
    {
      path: "/personal",
      component: () => import("../view/personal/index.vue"),
    },
    {
      path: "/shoppingBag",
      component: () => import("../view/personal/shoppingBag.vue"),
    },
    {
      path: "/order",
      component: () => import("../view/personal/order.vue"),
    },
  ],
});

export default router;
