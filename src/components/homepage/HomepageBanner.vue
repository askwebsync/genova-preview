<template>
  <section class="container mx-auto">
    <div
      id="carouselExampleIndicators"
      class="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div
        class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 space-x-4"
      >
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div class="carousel-inner relative overflow-hidden">
        <div class="carousel-item active">
          <img
            src="../../assets/images/banner/1.jpg"
            class="w-full h-full object-cover"
            alt="Wild Landscape"
          />
        </div>
        <div class="carousel-item">
          <img
            src="../../assets/images/banner/2.jpg"
            class="w-full h-full object-cover"
            alt="Camera"
          />
        </div>
        <div class="carousel-item">
          <img
            src="../../assets/images/banner/3.jpg"
            class="w-full h-full object-cover"
            alt="Exotic Fruits"
          />
        </div>
        <div class="carousel-item">
          <img
            src="../../assets/images/banner/4.jpg"
            class="w-full h-full object-cover"
            alt="Exotic Fruits"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
</template>
<script>
export default {
  name: "HomepageBanner",
  components: {},
  data() {
    return {};
  },
};
</script>
<style>
.carousel-control-next-icon {
  width: 1.5rem !important;
  height: 1.5rem !important;
  background-position: 50%;
  background-size: 100% 100%;
}
.carousel-control-prev {
  z-index: 1;
  width: 15%;
  color: black;
  background: none;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}
.carousel-control-prev-icon {
  width: 1.5rem !important;
  height: 1.5rem !important;
  background-position: 50%;
  background-size: 100% 100%;
}
.carousel-control-next {
  z-index: 1;
  width: 15%;
  color: black;
  background: none;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}
</style>
