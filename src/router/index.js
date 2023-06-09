import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",

    component: () =>
      import(/* webpackChunkName: "Contact" */ "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "contact",

    component: () =>
      import(/* webpackChunkName: "Contact" */ "../views/Contact.vue"),
  },
  {
    path: "/products",
    name: "products",

    component: () =>
      import(/* webpackChunkName: "projects" */ "../views/Products.vue"),
  },
  {
    path: "/recipe",
    name: "recipe",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Recipe.vue"),
  },
  {
    path: "/location",
    name: "location",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Location.vue"),
  },
  {
    path: "/products/flavoured-syrup",
    name: "flavoured-syrup",

    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/FlavouredSyrupProduct.vue"
      ),
  },
  {
    path: "/products/fruit-bland",
    name: "fruit-bland",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FruitBlandProduct.vue"),
  },
  {
    path: "/products/powder-syrup",
    name: "powder-syrup",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PowderSyrupProduct.vue"),
  },
  {
    path: "/product/detail-product",
    name: "productDetailPage",
    props: (route) => ({
      dataProduk: route.query.dataProduk,
      ...route.query,
    }),
    component: () => import("../views/ProductDetailPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;

/**
 * Below code will display the component/active page title
 */

// This callback runs before every route change, including on page load.
// ...

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    (el) => el.parentNode.removeChild(el)
  );

  if (!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    .forEach((tag) => document.head.appendChild(tag));

  next();
});

// ...
