<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container mx-auto">
    <div class="banner"></div>
    <div class="py-6 px-4 lg:px-6 lg:py-12 xl:px-12">
      <h1 class="text-left text-black mb-2 font-semibold text-xl">PRODUCTS</h1>
      <hr class="h-1 rounded w-28 bg-black border-0" />
      <div
        class="grid grid-cols-2 md:grid-cols-3 justify-items-center justify-center gap-y-6 mt-10 mb-5"
      >
        <div
          class="background-yellow-light flex flex-col h-fit bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <router-link to="/">
            <img
              src="../../assets/images/product/powder/powder-matchalatte.png"
              alt="Product"
              class="h-60 w-56 object-contain rounded-t-xl"
            />
          </router-link>
          <div class="p-5">
            <p class="text-lg font-bold text-black truncate block capitalize">
              Trending Flavors
            </p>
          </div>
        </div>

        <div
          class="flex flex-col background-yellow-light shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <router-link to="/">
            <img
              src="../../assets/images/product/powder/powder-greentea.png"
              alt="Product"
              class="h-60 w-56 object-contain rounded-t-xl"
            />
          </router-link>
          <div class="p-5">
            <p class="text-lg font-bold text-black truncate block capitalize">
              New Flavors
            </p>
          </div>
        </div>

        <div
          class="flex flex-col background-yellow-light shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <router-link to="/">
            <img
              src="../../assets/images/product/fruit-bland/fruit_bland_kiwi.png"
              alt="Product"
              class="h-60 w-56 object-contain rounded-t-xl"
            />
          </router-link>
          <div class="p-5">
            <p class="text-lg font-bold text-black truncate block capitalize">
              Beverage Boost
            </p>
          </div>
        </div>

        <div
          class="flex flex-col background-yellow-light shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <router-link to="/fruit-bland">
            <img
              src="../../assets/images/product/fruit-bland/fruit_bland_passion.png"
              alt="Product"
              class="h-60 w-56 object-contain rounded-t-xl"
            />
          </router-link>
          <div class="p-5">
            <p class="text-lg font-bold text-black truncate block capitalize">
              Fruit Bland
            </p>
          </div>
        </div>
        <div
          class="flex flex-col background-yellow-light shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <router-link to="/liquid-syrup">
            <img
              src="../../assets/images/product/fruit-bland/fruit_bland_kiwi.png"
              alt="Product"
              class="h-60 w-56 object-contain rounded-t-xl"
            />
          </router-link>
          <div class="p-5">
            <p class="text-lg font-bold text-black truncate block capitalize">
              Liquid Syrup
            </p>
          </div>
        </div>
        <div
          class="flex flex-col background-yellow-light shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <router-link to="/powder-syrup">
            <img
              src="../../assets/images/product/powder/powder-tiramisu.png"
              alt="Product"
              class="h-60 w-56 object-contain rounded-t-xl"
            />
          </router-link>
          <div class="p-5">
            <p class="text-lg font-bold text-black truncate block capitalize">
              Powder Syrup
            </p>
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
