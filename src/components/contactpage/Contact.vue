<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container mx-auto px-4 py-6 md:px-8 lg:px-24 lg:py-10">
    <div class="flex flex-col gap-8 lg:gap-10">
      <div class="flex flex-col items-center text-center">
        <h1 class="pcolor mb-1 text-xl lg:text-2xl uppercase">Contact Us</h1>
        <hr
          class="h-1 rounded w-full lg:w-40 background-yellow border-0 mx-auto lg:mx-0"
        />
        <!-- <div class="my-3">
          <p class="text-lg font-semibold">
            Get in touch with us for more information
          </p>
        </div> -->
      </div>

      <div class="grid md:grid-cols-2 xl:grid-cols-3 self-center gap-12">
        <div
          class="flex flex-col items-center gap-4 bg-product-home p-5 md:p-8 rounded-lg shadow-lg max-w-sm"
        >
          <i class="card-icon far fa-envelope text-yellow-500"></i>
          <h3 class="text-black font-medium whitespace-normal">
            genovaindonesiaofficial@gmail.com
          </h3>
        </div>
        <div
          class="flex flex-col items-center gap-4 bg-product-home p-5 md:p-8 rounded-lg shadow-lg max-w-sm"
        >
          <i class="card-icon fas fa-phone text-yellow-500"></i>
          <h3 class="text-black font-medium">
            <a href="tel:081212128171" class=""> +62 812-1212-8171 </a>
          </h3>
        </div>
        <div
          class="flex flex-col items-center gap-4 bg-product-home p-5 md:p-8 rounded-lg shadow-lg max-w-sm"
        >
          <i class="card-icon fas fa-map-marker-alt text-yellow-500"></i>
          <h3 class="text-black font-medium">
            Komplek PU Jl. B No. 18 RC Veteran - Tanah Kusir, Jakarta Selatan
            12330
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>
<script></script>

<style scoped>
.card-icon {
  margin-top: 12px;
  font-size: 28px;
  background-color: whitesmoke;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px !important;
  border-radius: 50%;
  transition: 0.3s linear;
}
.card:hover .card-icon {
  transform: scale(1.4);
}

h3 {
  font-size: 1rem;
}
</style>
