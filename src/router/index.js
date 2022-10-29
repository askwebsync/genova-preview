import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/Contact.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../views/Products.vue"),
    },
    {
      path: "/recipe",
      name: "recipe",
      component: () => import("../views/Recipe.vue"),
    },
    {
      path: "/location",
      name: "location",
      component: () => import("../views/Location.vue"),
    },
    {
      path: "/product/liquid-syrup",
      name: "liquid-syrup",
      component: () => import("../views/LiquidSyrupProduct.vue"),
    },
    {
      path: "/product/fruit-bland",
      name: "fruit-bland",
      component: () => import("../views/FruitBlandProduct.vue"),
    },
    {
      path: "/product/powder-syrup",
      name: "powder-syrup",
      component: () => import("../views/PowderSyrupProduct.vue"),
    },
    {
      path: "/product/new-product",
      name: "new-product",
      props: true,
      component: () => import("../views/NewProduct.vue"),
    },
    {
      path: "/product/trending-product",
      name: "trending-product",
      props: true,
      component: () => import("../views/TrendingProduct.vue"),
    },
    {
      path: "/detail-product",
      name: "productDetailPage",
      props: (route) => ({
        dataProduk: route.query.dataProduk,
        ...route.query,
      }),
      component: () => import("../views/ProductDetailPage.vue"),
    },
  ],
});

export default router;
