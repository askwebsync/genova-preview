<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="px-4 py-6 md:px-8 lg:px-24 lg:py-12">
    <div class="flex flex-col gap-4 md:gap-8 lg:gap-12">
      <div class="flex flex-col items-center lg:items-start">
        <h1 class="pcolor mb-1 text-xl lg:text-2xl uppercase">
          Product Category
        </h1>
        <hr
          class="h-1 rounded w-full lg:w-40 background-yellow border-0 mx-auto lg:mx-0"
        />
        <!-- <img src="/assets/images/icon/star.png" class="ml-4" /> -->
      </div>
      <div
        class="grid grid-cols-1 gap-12 lg:gap-24 md:grid-cols-3 px-10 sm:px-20 md:px-0"
      >
        <router-link :to="{ name: 'fruit-bland' }">
          <div
            class="flex flex-col items-center justify-center cursor-pointer shadow-md bg-product-home"
          >
            <figure>
              <!-- Image -->
              <img
                src="/assets/images/product/fruit-bland/fruitbland_pineapple.png"
                alt="Product"
                class="w-auto h-60 md:h-64 object-cover"
              />

              <figcaption class="flex flex-col gap-2 py-4 px-2 center">
                <!-- Title -->
                <h2
                  class="text-lg lg:text-xl tracking-tighter text-black font-medium"
                >
                  Fruit Blend
                </h2>
                <div class="my-4">
                  <button
                    class="rounded-lg px-3 py-2 md:px-4 background-yellow hover:bg-yellow-600 duration-300 text-white font-bold"
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
            class="flex flex-col items-center justify-center cursor-pointer shadow-md bg-product-home"
          >
            <figure>
              <!-- Image -->
              <img
                src="/assets/images/product/syrup/syrup_bluecuracao.png"
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
                    class="rounded-lg px-3 py-2 md:px-4 background-yellow hover:bg-yellow-600 duration-300 text-white font-bold"
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
            class="flex flex-col items-center justify-center cursor-pointer shadow-md bg-product-home"
          >
            <figure>
              <!-- Image -->
              <img
                src="/assets/images/product/powder/powder_tiramisu.png"
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
                    class="rounded-lg px-3 py-2 md:px-4 background-yellow hover:bg-yellow-600 duration-300 text-white font-bold"
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
  name: "ProductCategory",
  components: {},
};
</script>
<style scoped></style>
