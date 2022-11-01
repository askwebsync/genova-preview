<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="">
    <div class="container mx-auto">
      <div class="mt-6 p-4 lg:p-6 lg:py-12 xl:p-12">
        <div class="flex flex-row">
          <h1 class="pcolor mb-3 text-lg md:text-xl">NEW FLAVOUR</h1>
          <!-- <img src="../../assets/images/icon/star.png" class="ml-4" /> -->
        </div>
        <hr class="h-1 rounded w-32 background-yellow border-0" />
        <div class="justify-items-center justify-center mt-10 mb-5">
          <carousel :settings="settings" :breakpoints="breakpoints">
            <slide v-for="product in products" :key="product.id">
              <div class="p-5 mx-4 mb-3 carousel__item">
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
                  <router-link
                    :to="{
                      name: 'productDetailPage',
                      query: {
                        dataProduk: JSON.stringify({
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          link: product.link,
                        }),
                      },
                    }"
                  >
                    <div class="mt-6">
                      <button
                        :href="product.link"
                        class="rounded-lg px-3 py-3 background-yellow hover:bg-yellow-600 duration-300 text-white font-bold"
                      >
                        Buy Now
                      </button>
                    </div>
                  </router-link>
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
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";

export default {
  name: "NewProduct",
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
          name: "Cookies & Cream",
          image: "../powder-cookiescream.png",
          price: "155,000",
          link: "https://www.tokopedia.com/genovaindonesia/genova-cookies-cream-frappe-powder-1000-gram?extParam=whid%3D8872969",
        },
        {
          id: 2,
          name: "Syrup Pineapple",
          image: "../syrup_pineapple.png",
          price: "97,000",
          link: "https://www.tokopedia.com/genovaindonesia/syrup-genova-pineapple-750-ml?extParam=whid%3D8872969",
        },
        {
          id: 4,
          name: "Syrup Raspberry",
          image: "../syrup_raspberry.png",
          price: "97,000",
          link: "https://www.tokopedia.com/genovaindonesia/genova-rasbery-syrup-750-ml?extParam=whid%3D8872969",
        },
        {
          id: 5,
          name: "Syrup Tiramisu",
          image: "../syrup_tiramisu.png",
          price: "97,000",
          link: "https://www.tokopedia.com/genovaindonesia/genova-tiramisu-syrup-750-ml?extParam=whid%3D8872969",
        },
        {
          id: 6,
          name: "Syrup Coconut",
          image: "../syrup_coconut.png",
          price: "97,000",
          link: "https://www.tokopedia.com/genovaindonesia/genova-coconut-syrup-750-ml?extParam=whid%3D8872969",
        },
        {
          id: 7,
          name: "Syrup Butterscotch",
          image: "../syrup_butterscotch.png",
          price: "97,000",
          link: "https://www.tokopedia.com/genovaindonesia/genova-butterscotch-syrup-750-ml?extParam=whid%3D8872969",
        },
        {
          id: 8,
          name: "Syrup Lemon",
          image: "../syrup_lemon.png",
          price: "97,000",
          link: "https://www.tokopedia.com/genovaindonesia/genova-lemon-syrup-750-ml?extParam=whid%3D8872969",
        },
      ],
      breakpoints: {
        400: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        700: {
          itemsToShow: 2,
          snapAlign: "center",
        },

        1024: {
          itemsToShow: 3,
          snapAlign: "start",
        },
      },
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
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
.carousel__next {
  right: -20px;
  background-color: #bdb76b;
}
.carousel__prev {
  left: -20px;
  background-color: #bdb76b;
}
.carousel__icon {
  width: var(--vc-icn-width);
  height: var(--vc-icn-width);
  fill: white;
}
</style>
