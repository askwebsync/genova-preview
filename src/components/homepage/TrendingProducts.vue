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
          <!-- <div class="rating space-y-6">
          <p class="slider1"></p>
          <p class="slider2"></p>
          <p class="slider3"></p>
        </div> -->
        </div>
        <hr class="h-1 rounded w-32 background-yellow border-0" />
        <div
          class="justify-items-center justify-center gap-12 mt-12 mb-5 mx-auto"
        >
          <vueper-slides
            class="no-shadow"
            :breakpoints="{
              1400: {
                slideRatio: 1 / 1,
                visibleSlides: 3,
                slideMultiple: 3,
              },
              1200: {
                slideRatio: 1 / 1,
                visibleSlides: 3,
                slideMultiple: 3,
              },
              900: {
                slideRatio: 1 / 1,
                visibleSlides: 2,
                slideMultiple: 2,
              },
              600: {
                slideRatio: 1 / 1,
                visibleSlides: 1,
                slideMultiple: 1,
              },
            }"
            :dragging-distance="70"
          >
            <vueper-slide v-for="product in products" :key="product.id">
              <template #content>
                <div
                  class="mx-4 mb-2 rounded-lg p-4 text-center items-center justify-center"
                >
                  <div class="">
                    <img
                      :src="product.image"
                      :alt="product.name"
                      class="w-full h-40 md:h-52 object-contain rounded-t-xl"
                    />
                  </div>
                  <div class="px-6 py-4">
                    <h3
                      class="mb-3 text-lg md:text-xl font-semibold tracking-tight text-black"
                    >
                      {{ product.name }}
                    </h3>
                    <p class="text-lg text-gray-600">RP. {{ product.price }}</p>
                    <div class="mt-2">
                      <button
                        class="rounded-lg px-4 py-2 bg-yellow-400 hover:bg-yellow-600 duration-300 text-white font-bold"
                      >
                        See More
                      </button>
                    </div>
                  </div>
                </div>
              </template>
            </vueper-slide>
          </vueper-slides>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: { VueperSlides, VueperSlide },
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
        },
        {
          id: 5,
          name: "Syrup Blue Curacao",
          image: "syrup_blue_curacao-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 6,
          name: "Syrup Bubblegum",
          image: "syrup_bubble_gum-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 7,
          name: "Syrup Butterscotch",
          image: "syrup_butterscotch-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 8,
          name: "Syrup Caramel",
          image: "syrup_caramel-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 9,
          name: "Syrup Coconut",
          image: "syrup_coconut-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 10,
          name: "Syrup Ginger",
          image: "syrup_ginger-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 11,
          name: "Syrup Green Apple",
          image: "syrup_green_apple-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 12,
          name: "Syrup Hazelnut",
          image: "syrup_hazelnut-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 13,
          name: "Syrup Irish",
          image: "syrup_irish-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 14,
          name: "Syrup Kiwi",
          image: "syrup_kiwi-removebg-preview.png",
          price: "97,000",
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
    };
  },
};
</script>

<style scoped></style>
