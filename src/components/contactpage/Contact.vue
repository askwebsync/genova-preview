<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container mx-auto">
    <div class="flex flex-col py-6">
      <div
        class="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
      >
        <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div class="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div
              class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
            >
              <h2
                class="max-w-lg mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
              >
                Contact Us
              </h2>
              <p class="text-lg text-gray-800 md:text-xl">
                Get in touch with us for more information
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="grid md:grid-cols-2 lg:grid-cols-3 self-center gap-6 p-6 md:flex-row lg:px-12"
      >
        <div class="flex flex-col items-center gap-6 card p-6 max-w-lg">
          <i class="card-icon far fa-envelope"></i>
          <p class="text-base md:text-lg font-semibold text-white mt-6">
            genovaindonesiaofficial@gmail.com
          </p>
        </div>
        <div class="flex flex-col items-center gap-6 card p-6 max-w-lg">
          <i class="card-icon fas fa-phone"></i>
          <p class="text-base md:text-lg font-semibold text-white mt-6">
            <a href="tel:081212128171" class="hover:text-blue-400"
              >081212128171</a
            >
          </p>
        </div>
        <div class="flex flex-col items-center gap-6 card p-6 max-w-lg">
          <i class="card-icon fas fa-map-marker-alt"></i>
          <p class="text-base md:text-lg font-semibold text-white mt-6">
            Komplek PU jln B no 18 RC Veteran - tanah kusir jakarta Selatan
            12330
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  background: #2f3542;
}

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

.card p {
  max-height: 0;
  opacity: 0;
  transition: 0.3s linear;
}

.card:hover p {
  max-height: 40px;
  opacity: 1;
}
</style>
