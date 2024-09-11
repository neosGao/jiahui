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
      path: "/allProducts",
      component: () => import("../view/product/allProduct.vue"),
    },
    {
      path: "/cut",
      component: () => import("../view/product/cut.vue"),
    },
    {
      path: "/potted",
      component: () => import("../view/product/potted.vue"),
    },
    {
      path: "/spice",
      component: () => import("../view/product/spice.vue"),
    },
    {
      path: "/seasonal",
      component: () => import("../view/product/seasonal.vue"),
    },
    {
      path: "/trees",
      component: () => import("../view/product/trees.vue"),
    },
    {
      path: "/ornaments",
      component: () => import("../view/product/ornaments.vue"),
    },
    {
      path: "/detail",
      component: () => import("../view/product/detail.vue"),
    },
  ],
});

export default router;
