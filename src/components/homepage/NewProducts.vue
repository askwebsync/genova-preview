<template>
  <div class="px-4 py-6 md:px-8 lg:px-12 xl:px-24 lg:py-10">
    <div class="flex flex-col gap-8 lg:gap-10">
      <div class="flex flex-col items-center lg:items-start">
        <h1 class="pcolor mb-1 text-lg lg:text-2xl uppercase">New Flavour</h1>
        <hr
          class="h-1 rounded w-full lg:w-40 background-yellow border-0 mx-auto lg:mx-0"
        />
      </div>
      <carousel
        :items-to-show="2.5"
        :wrap-around="true"
        :breakpoints="breakpoints"
        v-bind="settings"
        @after-slide="afterSlide"
      >
        <slide v-for="product in newProducts" :key="product.id">
          <div class="flex flex-col items-center">
            <div class="product-container p-4">
              <img
                :src="getImageSource(product)"
                :alt="product.name"
                class="w-auto h-48 md:h-52 lg:h-56 object-cover"
              />
            </div>
            <div class="flex flex-col items-center gap-5 px-4 py-4 md:py-5">
              <div class="flex flex-col">
                <h3 class="text-lg lg:text-xl tracking-tighter">
                  {{ truncateProductName(product.name) }}
                </h3>
                <p class="text-lg lg:text-xl">Rp{{ product.price }}</p>
              </div>
              <router-link
                class="focus:outline-none"
                :to="{
                  name: 'productDetailPage',
                  params: { productId: product.id },
                }"
                @click="selectProduct(product)"
              >
                <button
                  type="button"
                  class="rounded px-4 py-2 md:px-5 bg-button-homepage hover:bg-yellow-600 duration-300 text-white font-bold border-radius-6"
                  aria-label="See Product Details"
                >
                  See Details
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
import { mapState, mapActions, mapMutations } from "vuex";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  name: "NewProduct",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      activeSlideIndex: 0, // Track the active slide index
      breakpoints: {
        700: {
          itemsToShow: 2,
          snapAlign: "start",
        },
        1000: {
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
    ...mapState(["newProducts"]),
  },
  methods: {
    ...mapActions(["fetchNewProducts"]),
    ...mapMutations(["setSelectedProduct"]),
    selectProduct(product) {
      this.setSelectedProduct(product);
    },
    getImageSource(product) {
      const imagePath = `/assets/images/product/${product.image}`;
      return imagePath;
    },
    afterSlide(index) {
      this.activeSlideIndex = index;
    },
    truncateProductName(name) {
      const maxLength = 16;
      if (name.length <= maxLength) {
        return name;
      } else {
        return name.substring(0, maxLength) + "...";
      }
    },
  },
  mounted() {
    this.fetchNewProducts();
  },
};
</script>

<style scoped>
h3 {
  font-style: normal;
  font-weight: 500;
  color: #2b2b28;
}
p {
  color: #494945;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
}
</style>
