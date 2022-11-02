<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container mx-auto">
    <div class="mt-6 p-4 lg:p-6 lg:py-12 xl:p-12">
      <div class="flex flex-row">
        <h1 class="pcolor mb-3 text-lg md:text-xl lg:text-2xl">
          PRODUCT CATEGORY
        </h1>
        <!-- <img src="../../assets/images/icon/star.png" class="ml-4" /> -->
      </div>
      <hr class="h-1 rounded background-navbar w-32 bg-black border-0" />
      <div class="py-10 px-12">
        <div
          class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <div
            class="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
          >
            <router-link to="/product/fruit-bland">
              <div class="cursor-pointer">
                <figure>
                  <!-- Image -->
                  <img
                    src="../../assets/images/product/fruit-bland/fruit_bland_pineapple.png"
                    alt="Product"
                    class="rounded-t h-64 w-full object-contain"
                  />

                  <figcaption class="p-4">
                    <!-- Title -->
                    <h2
                      class="text-2xl mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"
                    >
                      Fruit Blend
                    </h2>
                    <div class="my-2">
                      <button
                        class="rounded-lg px-3 py-2 background-yellow hover:bg-yellow-600 duration-300 text-white font-bold"
                      >
                        See More
                      </button>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </router-link>
          </div>
          <div
            class="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
          >
            <router-link to="/product/liquid-syrup">
              <div class="cursor-pointer">
                <figure>
                  <!-- Image -->
                  <img
                    src="../../assets/images/product/syrup/syrup_bluecuracao.png"
                    alt="Product"
                    class="rounded-t h-64 w-full object-contain"
                  />

                  <figcaption class="p-4">
                    <!-- Title -->
                    <h2
                      class="text-2xl mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"
                    >
                      Liquid Syrup
                    </h2>
                    <div class="my-2">
                      <button
                        class="rounded-lg px-3 py-2 background-yellow hover:bg-yellow-600 duration-300 text-white font-bold"
                      >
                        See More
                      </button>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </router-link>
          </div>
          <div
            class="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
          >
            <router-link to="/product/powder-syrup">
              <div class="cursor-pointer">
                <figure>
                  <!-- Image -->
                  <img
                    src="../../assets/images/product/powder/powder-tiramisu.png "
                    alt="Product"
                    class="rounded-t h-64 w-full object-contain"
                  />

                  <figcaption class="p-4">
                    <!-- Title -->
                    <h2
                      class="text-2xl mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"
                    >
                      Powder Syrup
                    </h2>
                    <div class="my-2">
                      <button
                        class="rounded-lg px-3 py-2 background-yellow hover:bg-yellow-600 duration-300 text-white font-bold"
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
