import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  // 路由位置
  routes: [
    {
      path: "/",
      component: () => import("../view/index.vue"),
    },
    // {
    //   path: "/index",
    //   component: () => import("../view/index.vue"),
    // },
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
      name: "allProducts",
      component: () => import("../view/product/allProduct.vue"),
    },
    {
      path: "/Products",
      name: "Products",
      component: () => import("../view/product/cut.vue"),
    },
    // {
    //   path: "/Potted plants",
    //   name: "Potted plants",
    //   // component: () => import("../view/product/potted.vue"),
    //   component: () => import("../view/product/cut.vue"),
    // },
    // {
    //   path: "/spice",
    //   name: "spice",
    //   // component: () => import("../view/product/spice.vue"),
    //   component: () => import("../view/product/cut.vue"),
    // },
    // {
    //   path: "/Seasonal items ",
    //   name: "Seasonal items ",
    //   // component: () => import("../view/product/seasonal.vue"),
    //   component: () => import("../view/product/cut.vue"),
    // },
    // {
    //   path: "/Trees",
    //   name: "Trees",
    //   // component: () => import("../view/product/trees.vue"),
    //   component: () => import("../view/product/cut.vue"),
    // },
    // {
    //   path: "/ornaments",
    //   name: "ornaments",
    //   // component: () => import("../view/product/ornaments.vue"),
    //   component: () => import("../view/product/cut.vue"),
    // },
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
    // story
    {
      path: "/story",
      component: () => import("../view/story.vue"),
    },
    {
      path: "/inspiration",
      component: () => import("../view/inspiration.vue"),
    },
    {
      path: "/aboutUs",
      component: () => import("../view/aboutAs.vue"),
    },
    {
      path: "/FAQ",
      component: () => import("../view/FAQ.vue"),
    },
    {
      path: "/ourProducts",
      component: () => import("../view/ourProducts.vue"),
    },
    {
      path: "/event",
      component: () => import("../view/event.vue"),
    },
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      // 滚动到页面顶部
      return { top: 0 };
    }
  },
});

export default router;
