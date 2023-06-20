import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "Genova Indonesia",
      metaTags: [
        {
          name: "description",
          content:
            "Welcome to Genova Indonesia! Discover our range of premium syrups, powder drinks, and fruit blends. Explore our trending and new products, and browse through various product categories to find your favorite flavors. Join us and elevate your beverage experience.",
        },
        {
          name: "keywords",
          content:
            "Genova Indonesia, premium syrup, powder drink, fruit blend, trending product, new product, product categories",
        },
      ],
    },
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "Contact" */ "../views/About.vue"),
    meta: {
      title: "About Us", // Set the page title for the About page
      metaTags: [
        // Define the meta tags for the About page
        {
          name: "description",
          content: "This is the About Us page of our website",
        },
        // Add more meta tags as needed
      ],
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "Contact" */ "../views/Contact.vue"),
    meta: {
      title: "Contact Us", // Set the page title for the Contact page
      metaTags: [
        // Define the meta tags for the Contact page
        {
          name: "description",
          content: "Get in touch with us through our contact form",
        },
        // Add more meta tags as needed
      ],
    },
  },
  {
    path: "/products",
    name: "products",
    component: () =>
      import(/* webpackChunkName: "projects" */ "../views/Products.vue"),
    meta: {
      title: "Product Categories", // Set the page title for the Products page
      metaTags: [
        // Define the meta tags for the Products page
        {
          name: "description",
          content: "Explore our wide range of product categories",
        },
        // Add more meta tags as needed
      ],
    },
  },
  {
    path: "/recipe",
    name: "recipe",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Recipe.vue"),
    meta: {
      title: "Recipe Collection", // Set the page title for the Recipe page
      metaTags: [
        // Define the meta tags for the Recipe page
        {
          name: "description",
          content: "Explore our collection of delicious recipes",
        },
        // Add more meta tags as needed
      ],
    },
  },
  {
    path: "/location",
    name: "location",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Location.vue"),
    meta: {
      title: "Our Locations", // Set the page title for the Location page
      metaTags: [
        // Define the meta tags for the Location page
        {
          name: "description",
          content: "Find our nearest locations and visit us",
        },
        // Add more meta tags as needed
      ],
    },
  },
  {
    path: "/products/flavoured-syrup",
    name: "flavoured-syrup",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/FlavouredSyrupProduct.vue"
      ),
    meta: {
      title: "Flavoured Syrup", // Set the page title for the Flavoured Syrup product page
      metaTags: [
        // Define the meta tags for the Flavoured Syrup product page
        {
          name: "description",
          content: "Explore our range of flavoured syrups",
        },
        // Add more meta tags as needed
      ],
    },
  },
  {
    path: "/products/fruit-bland",
    name: "fruit-bland",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FruitBlandProduct.vue"),
    meta: {
      title: "Fruit Blend", // Set the page title for the Fruit Blend product page
      metaTags: [
        // Define the meta tags for the Fruit Blend product page
        {
          name: "description",
          content: "Discover our delicious fruit blend products",
        },
        // Add more meta tags as needed
      ],
    },
  },
  {
    path: "/products/powder-syrup",
    name: "powder-syrup",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PowderSyrupProduct.vue"),
    meta: {
      title: "Powder Syrup", // Set the page title for the Powder Syrup product page
      metaTags: [
        // Define the meta tags for the Powder Syrup product page
        {
          name: "description",
          content: "Browse our selection of powder syrups",
        },
        // Add more meta tags as needed
      ],
    },
  },
  {
    path: "/product/detail-product",
    name: "productDetailPage",
    props: (route) => ({
      dataProduk: route.query.dataProduk,
      ...route.query,
    }),
    component: () => import("../views/ProductDetailPage.vue"),
    meta: {
      dynamicTitle: true, // Set the dynamicTitle flag to indicate that the title will be dynamically generated
    },
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
