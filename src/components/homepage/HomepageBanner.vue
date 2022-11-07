<template>
  <section class="container mx-auto">
    <div class="px-4 md:px-6 xl:px-12">
      <Carousel :autoplay="4000" :wrap-around="true" class="z">
        <Slide v-for="image in images" :key="image.id">
          <img
            :src="image.url"
            :alt="image.alt"
            class="w-full h-full object-cover"
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
      slide: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
      images: [
        { url: "1.jpg", alt: "Banner 1" },
        { url: "2.jpg", alt: "Banner 2" },
        { url: "3.jpg", alt: "Banner 3" },
        { url: "4.jpg", alt: "Banner 4" },
        { url: "5.jpg", alt: "Banner 5" },
      ],
    };
  },
};
</script>
<style>
.carousel__pagination-button {
  display: block;
  border: 0;
  margin: 1px;
  padding: 1px;
  cursor: pointer;
  background: transparent;
}
.carousel__slide {
  scroll-snap-stop: auto;
  flex-shrink: 0;
  margin: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
