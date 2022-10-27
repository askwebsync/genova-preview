<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="">
    <div class="container mx-auto">
      <div class="mt-2 p-4 lg:p-6 lg:py-12 xl:p-12">
        <div class="flex flex-row">
          <h1 class="text-left pcolor mb-2 font-semibold text-xl">
            TRENDING FLAVOUR
          </h1>
        </div>
        <hr class="h-1 rounded w-32 background-yellow border-0" />
        <div class="justify-items-center justify-center mt-10 mb-5">
          <carousel
            :settings="settings"
            :breakpoints="breakpoints"
            :wrap-around="true"
          >
            <slide v-for="product in products" :key="product.id">
              <div class="p-5 mx-4 mb-2 bg-gray-300 shadow carousel__item">
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="w-full h-40 lg:h-48 object-contain rounded-t-xl"
                />
                <div class="p-5">
                  <h2
                    class="mb-3 text-xl font-semibold tracking-tight text-black"
                  >
                    {{ product.name }}
                  </h2>
                  <p class="text-lg text-gray-600">RP. {{ product.price }}</p>
                  <div class="mt-6">
                    <a
                      :href="product.link"
                      class="rounded-lg px-4 py-2 background-yellow hover:bg-yellow-600 duration-300 text-white font-bold"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </slide>

            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Matcha Latte",
          image: "powder-matchalatte.png",
          price: "169,000",
          link: "https://www.tokopedia.com/genovaindonesia/genova-matcha-latte-frappe-powder-1000-gram?extParam=whid%3D8872969",
        },
        {
          id: 2,
          name: "Syrup Lychee",
          image: "syrup_lychee.png",
          price: "97,000",
          link: "https://www.tokopedia.com/genovaindonesia/genova-lychee-syrup-750-ml?extParam=whid%3D8872969",
        },
        {
          id: 3,
          name: "Dark Chocholate",
          image: "powder-darkchocolate.png",
          price: "139,000",
          link: "https://www.tokopedia.com/genovaindonesia/genova-dark-chocolate-frappe-powder-1000-gram?extParam=whid%3D8872969",
        },
        {
          id: 4,
          name: "Red Velvet",
          image: "powder-redvelvet.png",
          price: "139,000",
          link: "https://www.tokopedia.com/genovaindonesia/genova-red-velvet-frappe-powder-1000-gram?extParam=whid%3D8872969",
        },
        {
          id: 5,
          name: "Charchoal Frappe",
          image: "powder-charcoal.png",
          price: "159,000",
          link: "https://www.tokopedia.com/genovaindonesia/genova-charcoal-frappe-powder-1000-gram?extParam=whid%3D8872969",
        },
        {
          id: 6,
          name: "Syrup Pandan",
          image: "syrup_pandan.png",
          price: "97,000",
          link: "https://www.tokopedia.com/genovaindonesia/genova-pandan-syrup-750-ml?extParam=whid%3D8872969",
        },
        {
          id: 7,
          name: "Fruit Bland Strawberry",
          image: "fruit_bland_strawberry.png",
          price: "109,000",
          link: "https://www.tokopedia.com/genovaindonesia/genova-fruit-blend-strawberry-750-ml-fruit-puree?extParam=whid%3D8872969",
        },
      ],
      breakpoints: {
        // 700px and up
        400: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        700: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // settings: {
      //   itemsToShow: 1,
      //   snapAlign: "center",
      // },
    };
  },
};
</script>

<style>
.carousel__pagination {
  display: flex;
  justify-content: center;
  list-style: none;
  line-height: 0;
  margin: 20px 0 0;
}
</style>
