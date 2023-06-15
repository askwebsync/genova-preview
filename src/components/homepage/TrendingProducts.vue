<template>
  <div class="px-4 py-6 md:px-8 lg:px-24 lg:py-10">
    <div class="flex flex-col gap-8 lg:gap-10">
      <div class="flex flex-col items-center lg:items-start">
        <h1 class="pcolor mb-1 text-lg lg:text-2xl uppercase">
          Trending Flavour
        </h1>
        <hr
          class="h-1 rounded w-full lg:w-56 background-yellow border-0 mx-auto lg:mx-0"
        />
      </div>
      <carousel
        :items-to-show="2.5"
        :wrap-around="true"
        :breakpoints="breakpoints"
        v-bind="settings"
        @after-slide="afterSlide"
      >
        <slide v-for="product in resultQuery" :key="product.id">
          <div class="flex flex-col items-center px-4 py-4 md:py-5">
            <div class="product-container">
              <img
                :src="getImageSource(product)"
                :alt="product.name"
                class="w-auto h-48 md:h-52 lg:h-56 object-cover"
              />
            </div>
            <div class="flex flex-col items-center py-4 md:py-6 gap-5">
              <div class="flex flex-col gap-1">
                <h3 class="text-lg lg:text-xl">
                  {{ product.name }}
                </h3>
                <p class="text-md md:text-lg lg:text-xl">
                  RP. {{ product.price }}
                </p>
              </div>
              <router-link
                class="focus:outline-none"
                :to="{
                  name: 'productDetailPage',
                  query: {
                    dataProduk: JSON.stringify({
                      name: product.name,
                      price: product.price,
                      category: product.category,
                      info: product.info,
                      packaging: product.packaging,
                      weight: product.weight,
                      color: product.color,
                      image: getImageSource(product),
                      link: product.link,
                      serving: product.serving,
                      tasting: product.tasting,
                      penyimpanan: product.penyimpanan,
                    }),
                  },
                }"
              >
                <button
                  class="rounded px-3 py-2 md:px-4 bg-button-homepage hover:bg-yellow-600 duration-300 text-white font-bold border-radius-6"
                >
                  Buy Now
                </button>
              </router-link>
            </div>
          </div>
        </slide>

        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script>
import allProducts from "@/product/allProduct";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  name: "TrendingProduct",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      products: allProducts,
      activeSlideIndex: 0, // Track the active slide index
      breakpoints: {
        600: {
          itemsToShow: 2,
          snapAlign: "start",
        },
        1100: {
          itemsToShow: 3,
          snapAlign: "start",
        },
        1200: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
      settings: {
        itemsToShow: 1,
        snapAlign: "start",
      },
    };
  },
  computed: {
    // Get the filtered products with "Yes" category trending
    resultQuery() {
      const trendingProducts = this.products.filter(
        (product) => product.trending === "yes"
      );

      // Return the trending products
      return trendingProducts;
    },
  },
  methods: {
    getImageSource(product) {
      // Construct the image source path
      const imagePath = `/assets/images/product/${product.image}`;
      // Return the image source path
      return imagePath;
    },
    afterSlide(index) {
      this.activeSlideIndex = index;
    },
  },
};
</script>

<style scoped>
h3 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  color: #2b2b28;
}
</style>
