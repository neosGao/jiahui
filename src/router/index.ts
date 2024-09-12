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
    // personal
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
    {
      path: "/collection",
      component: () => import("../view/personal/collection.vue"),
    },
    // product
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
    // seasons
    {
      path: "/spring",
      component: () => import("../view/seasons/spring.vue"),
    },
    {
      path: "/summer",
      component: () => import("../view/seasons/summer.vue"),
    },
    {
      path: "/autumn",
      component: () => import("../view/seasons/autumn.vue"),
    },
    {
      path: "/winter",
      component: () => import("../view/seasons/winter.vue"),
    },
  ],
});

export default router;
