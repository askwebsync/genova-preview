<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="">
    <div class="container mx-auto">
      <div class="mt-2 p-4 lg:p-6 lg:py-12 xl:p-12">
        <div class="flex flex-row">
          <h1 class="text-left pcolor mb-2 font-semibold text-xl">
            NEW FLAVOUR
          </h1>
          <!-- <div class="rating space-y-6">
          <p class="slider1"></p>
          <p class="slider2"></p>
          <p class="slider3"></p>
        </div> -->
        </div>
        <hr class="h-1 rounded w-32 background-yellow border-0" />
        <div class="justify-items-center justify-center mt-10 mb-5">
          <carousel :settings="settings" :breakpoints="breakpoints">
            <slide v-for="product in products" :key="product.id">
              <div class="mx-4 mb-2 rounded-lg shadow-lg">
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="w-full h-40 md:h-48 object-contain rounded-t-xl"
                />
                <div class="p-5">
                  <h2
                    class="mb-3 text-xl font-semibold tracking-tight text-black"
                  >
                    {{ product.name }}
                  </h2>
                  <p class="text-lg text-gray-600">RP. {{ product.price }}</p>
                  <div class="my-4">
                    <a
                      :href="product.link"
                      class="rounded-lg px-4 py-2 bg-yellow-400 hover:bg-yellow-600 duration-300 text-white font-bold"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </slide>

            <template #addons>
              <navigation />
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
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Syrup Pineapple",
          image: "syrup pineapple.png",
          price: "97,000",
          link: "https://www.websync.id/",
        },
        {
          id: 2,
          name: "Syrup Raspberry",
          image: "syrup raspberry.png",
          price: "97,000",
          link: "https://www.websync.id/",
        },
        {
          id: 4,
          name: "Syrup Banana",
          image: "syrup_banana-removebg-preview.png",
          price: "97,000",
          link: "https://www.websync.id/",
        },
        {
          id: 5,
          name: "Syrup Blue Curacao",
          image: "syrup_blue_curacao-removebg-preview.png",
          price: "97,000",
          link: "https://www.websync.id/",
        },
        {
          id: 6,
          name: "Syrup Bubblegum",
          image: "syrup_bubble_gum-removebg-preview.png",
          price: "97,000",
          link: "https://www.websync.id/",
        },
        {
          id: 7,
          name: "Syrup Butterscotch",
          image: "syrup_butterscotch-removebg-preview.png",
          price: "97,000",
          link: "https://www.websync.id/",
        },
        {
          id: 8,
          name: "Syrup Caramel",
          image: "syrup_caramel-removebg-preview.png",
          price: "97,000",
          link: "https://www.websync.id/",
        },
        {
          id: 9,
          name: "Syrup Coconut",
          image: "syrup_coconut-removebg-preview.png",
          price: "97,000",
          link: "https://www.websync.id/",
        },
        {
          id: 10,
          name: "Syrup Ginger",
          image: "syrup_ginger-removebg-preview.png",
          price: "97,000",
          link: "https://www.websync.id/",
        },
        {
          id: 11,
          name: "Syrup Green Apple",
          image: "syrup_green_apple-removebg-preview.png",
          price: "97,000",
          link: "https://www.websync.id/",
        },
        {
          id: 12,
          name: "Syrup Hazelnut",
          image: "syrup_hazelnut-removebg-preview.png",
          price: "97,000",
          link: "https://www.websync.id/",
        },
        {
          id: 13,
          name: "Syrup Irish",
          image: "syrup_irish-removebg-preview.png",
          price: "97,000",
          link: "https://www.websync.id/",
        },
        {
          id: 14,
          name: "Syrup Kiwi",
          image: "syrup_kiwi-removebg-preview.png",
          price: "97,000",
          link: "https://www.websync.id/",
        },
        {
          id: 15,
          name: "Syrup Lemon",
          image: "syrup_lemon-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 16,
          name: "Syrup Lemongrass",
          image: "syrup_lemongrass-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 17,
          name: "Syrup Lychee",
          image: "syrup_lychee-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 18,
          name: "Syrup Manggo",
          image: "syrup_mango-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 19,
          name: "Syrup Mojito",
          image: "syrup_mojito_mint-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 20,
          name: "Syrup Pandan",
          image: "syrup_pandan-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 21,
          name: "Syrup Passion Fruit",
          image: "syrup_passion_fruit-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 22,
          name: "Syrup Peach",
          image: "syrup_peach-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 23,
          name: "Syrup Peppermint",
          image: "syrup_peppermint-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 24,
          name: "Syrup Strawberry",
          image: "syrup_strawberry-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 25,
          name: "Syrup Tiramisu",
          image: "syrup_tiramisu-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 26,
          name: "Syrup Vanilla",
          image: "syrup_vanilla-removebg-preview.png",
          price: "97,000",
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
    };
  },
};
</script>

<style>
.carousel__slide {
  padding: 10px;
}
</style>
