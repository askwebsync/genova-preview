<template>
  <section class="container mx-auto">
    <div class="px-4 md:px-6 xl:px-12 z height">
      <Carousel :autoplay="2000" :wrap-around="true">
        <Slide v-for="image in images" :key="image.id">
          <img
            :src="image.url"
            :alt="image.alt"
            class="w-full h-full object-contain"
          />
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";

export default {
  name: "HomepageBanner",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      slide: [
        "home_1.png",
        "home_2.png",
        "home_3.png",
        "home_4.png",
        "home_5.png",
      ],
      images: [
        { url: "home_1.png", alt: "I love you nature" },
        { url: "home_2.png", alt: "Now with dog - Rosé" },
        { url: "home_3.png", alt: "Jeg er i Danmark" },
        { url: "home_4.png", alt: "Badabimbadabum" },
        { url: "home_5.png", alt: "Goodmorning el mundo" },
      ],
    };
  },
};
</script>
<style>
.height {
}
</style>
