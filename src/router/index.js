import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ProductDetailPage from "@/views/ProductDetailPage.vue";

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
            "Selamat datang di Genova Indonesia! Nikmati beragam varian sirup premium, minuman bubuk, dan campuran buah berkualitas terbaik. Telusuri koleksi produk terbaru dan populer kami, dan temukan rasa favorit Anda dalam berbagai kategori produk. Ayo bergabung dan tambahkan kesempurnaan pada pengalaman minuman Anda",
        },
        {
          name: "keywords",
          content:
            "Genova, Genova Indonesia, sirup premium, minuman bubuk, campuran buah, produk populer, produk baru, kategori produk",
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
      title: "Tentang Kami - Genova",
      metaTags: [
        // Define the meta tags for the About page
        {
          name: "description",
          content:
            "Selamat datang di halaman Tentang Kami. Temukan sejarah dan kualitas Genova Indonesia. Kami hadir dengan komitmen untuk menyajikan produk berkualitas terbaik kepada Anda. Temukan lebih lanjut tentang perjalanan kami dan bagaimana kami memberikan pengalaman minuman terbaik bagi pelanggan kami.",
        },
      ],
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "Contact" */ "../views/Contact.vue"),
    meta: {
      title: "Hubungi Kami - Genova",
      metaTags: [
        // Define the meta tags for the Contact page
        {
          name: "description",
          content:
            "Hubungi kami melalui kartu kontak untuk pertanyaan atau informasi lebih lanjut. Temukan alamat email, nomor telepon, dan lokasi toko utama kami. Kami siap membantu Anda!",
        },
      ],
    },
  },
  {
    path: "/products",
    name: "products",
    component: () =>
      import(/* webpackChunkName: "projects" */ "../views/Products.vue"),
    meta: {
      title: "Kategori Produk - Genova",
      metaTags: [
        // Define the meta tags for the Products page
        {
          name: "description",
          content:
            "Jelajahi berbagai kategori produk kami yang lengkap. Temukan kategori sirup premium, minuman bubuk, dan campuran buah. Pilih kategori favorit Anda dan temukan produk-produk berkualitas dari Genova Indonesia.",
        },
      ],
    },
  },
  {
    path: "/recipe",
    name: "recipe",
    component: () => import("../views/Recipe.vue"),
    meta: {
      title: "Koleksi Resep - Genova",
      metaTags: [
        // Define the meta tags for the Recipe page
        {
          name: "description",
          content:
            "Jelajahi koleksi resep lezat kami. Temukan resep-resep Ice Shakes, Ice Blended, Mocktail, Fruit Smoothies, dan Special Tea yang menggunakan produk-produk Genova Indonesia.",
        },
      ],
    },
  },
  {
    path: "/location",
    name: "location",
    component: () => import("../views/Location.vue"),
    meta: {
      title: "Lokasi Kami - Genova",
      metaTags: [
        {
          name: "description",
          content:
            "Temukan lokasi terdekat kami dan kunjungi kami. Belanja online melalui Tokopedia atau kunjungi salah satu dari 4 toko kami yang tersebar di seluruh Indonesia.",
        },
      ],
    },
  },
  {
    path: "/products/premium-syrup",
    name: "premium-syrup",
    component: () => import("../views/PremiumSyrupProduct.vue"),
    meta: {
      title: "Premium Syrup",
      metaTags: [
        {
          name: "description",
          content: "Temukan beragam pilihan sirup premium terbaik",
        },
      ],
    },
  },
  {
    path: "/products/fruit-blend",
    name: "fruit-blend",
    component: () => import("../views/FruitBlendProduct.vue"),
    meta: {
      title: "Fruit Blend", // Set the page title for the Fruit Blend product page
      metaTags: [
        // Define the meta tags for the Fruit Blend product page
        {
          name: "description",
          content: "Temukan beragam pilihan fruit blend terbaik",
        },
      ],
    },
  },
  {
    path: "/products/powder-syrup",
    name: "powder-syrup",
    component: () => import("../views/PowderSyrupProduct.vue"),
    meta: {
      title: "Powder Drinks", // Set the page title for the Powder Syrup product page
      metaTags: [
        // Define the meta tags for the Powder Syrup product page
        {
          name: "description",
          content: "Temukan beragam pilihan bubuk syrup terbaik",
        },
      ],
    },
  },
  {
    path: "/product/:productId",
    name: "productDetailPage",
    component: ProductDetailPage,
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
