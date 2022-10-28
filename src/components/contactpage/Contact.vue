<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container mx-auto">
    <div class="flex flex-col my-12">
      <div class="text-center mb-12 mt-6 center mx-6">
        <div class="flex flex-col max-w-xs">
          <h1 class="pcolor mb-3">Contact Us</h1>
          <p class="text-lg text-gray-800 md:text-xl">
            Get in touch with us for more information
          </p>
        </div>
      </div>

      <div
        class="grid md:grid-cols-2 lg:grid-cols-3 self-center gap-12 p-6 md:flex-row lg:px-12"
      >
        <div
          class="flex flex-col items-center gap-4 background-yellow p-8 card"
        >
          <i class="card-icon far fa-envelope"></i>
          <h3 class="text-lg font-semibold text-white mt-6">
            genovaindonesiaofficial@gmail.com
          </h3>
        </div>
        <div
          class="flex flex-col items-center gap-4 background-yellow p-8 card"
        >
          <i class="card-icon fas fa-phone"></i>
          <h3 class="text-lg font-semibold text-white mt-6">
            <a href="tel:081212128171" class="hover:text-gray-400"
              >+62 812-1212-8171</a
            >
          </h3>
        </div>
        <div
          class="flex flex-col items-center gap-4 background-yellow p-8 card"
        >
          <i class="card-icon fas fa-map-marker-alt"></i>

          <h3 class="text-lg font-semibold text-white my-6">
            Komplek PU Jl. B No. 18 RC Veteran - Tanah Kusir, Jakarta Selatan
            12330
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card-icon {
  margin-top: 12px;
  font-size: 28px;
  background: white;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px !important;
  border-radius: 50%;
  transition: 0.3s linear;
}

.card:hover .card-icon {
  transform: scale(1.6);
}

.card h3 {
  max-height: 0;
  opacity: 0;
  transition: 0.3s linear;
}

.card:hover h3 {
  max-height: 40px;
  opacity: 1;
}
</style>
