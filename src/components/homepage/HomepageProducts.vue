<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="px-4 py-3 md:py-6 md:px-8 lg:px-24 lg:py-12">
    <div class="flex flex-col gap-4 md:gap-8 lg:gap-12">
      <div class="flex flex-col items-center lg:items-start">
        <h1 class="pcolor mb-1 text-xl lg:text-2xl">Product Category</h1>
        <hr class="h-1 rounded background-navbar w-32 bg-black border-0" />
        <!-- <img src="/assets/images/icon/star.png" class="ml-4" /> -->
      </div>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-3">
        <router-link :to="{ name: 'fruit-bland' }">
          <div
            class="flex flex-col items-center justify-center cursor-pointer shadow-md"
          >
            <figure>
              <!-- Image -->
              <img
                src="/assets/images/product/fruit-bland/fruitbland_pineapple.jpg"
                alt="Product"
                class="h-64 object-cover rounded-t-xl"
              />

              <figcaption class="py-4 px-2 center">
                <!-- Title -->
                <h2
                  class="mb-2 text-lg lg:text-xl tracking-tighter text-black font-medium"
                >
                  Fruit Blend
                </h2>
                <div class="my-4">
                  <button
                    class="rounded-lg px-3 py-2 md:px-4 md:py-3 background-yellow hover:bg-yellow-600 duration-300 text-white font-bold"
                  >
                    See More
                  </button>
                </div>
              </figcaption>
            </figure>
          </div>
        </router-link>

        <router-link :to="{ name: 'flavoured-syrup' }">
          <div
            class="flex flex-col items-center justify-center cursor-pointer shadow-md"
          >
            <figure>
              <!-- Image -->
              <img
                src="/assets/images/product/syrup/syrup_bluecuracao.jpg"
                alt="Product"
                class="h-64 object-cover rounded-t-xl"
              />
              <figcaption class="py-4 px-2 center">
                <!-- Title -->
                <h2
                  class="mb-2 text-lg lg:text-xl tracking-tighter text-black font-medium"
                >
                  Flavoured Syrup
                </h2>
                <div class="my-4">
                  <button
                    class="rounded-lg px-3 py-2 md:px-4 md:py-3 background-yellow hover:bg-yellow-600 duration-300 text-white font-bold"
                  >
                    See More
                  </button>
                </div>
              </figcaption>
            </figure>
          </div>
        </router-link>

        <router-link :to="{ name: 'powder-syrup' }">
          <div
            class="flex flex-col items-center justify-center cursor-pointer shadow-md"
          >
            <figure>
              <!-- Image -->
              <img
                src="/assets/images/product/powder/powder_tiramisu.jpg"
                alt="Product"
                class="h-64 object-cover rounded-t-xl"
              />

              <figcaption class="py-4 px-2 center">
                <!-- Title -->
                <h2
                  class="mb-2 text-lg lg:text-xl tracking-tighter text-black font-medium"
                >
                  Powder Drink
                </h2>
                <div class="my-4">
                  <button
                    class="rounded-lg px-3 py-2 md:px-4 md:py-3 background-yellow hover:bg-yellow-600 duration-300 text-white font-bold"
                  >
                    See More
                  </button>
                </div>
              </figcaption>
            </figure>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped></style>
