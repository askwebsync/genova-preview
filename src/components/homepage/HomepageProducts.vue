<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="px-4 py-6 md:px-8 lg:px-24 lg:py-10">
    <div class="flex flex-col gap-8 lg:gap-10">
      <div class="flex flex-col items-center lg:items-start">
        <h1 class="pcolor mb-1 text-lg lg:text-2xl uppercase">
          Product Category
        </h1>
        <hr
          class="h-1 rounded w-full lg:w-56 background-yellow border-0 mx-auto lg:mx-0"
        />
      </div>
      <div
        class="grid grid-cols-1 gap-12 px-10 sm:grid-cols-2 md:px-0 md:gap-10 md:grid-cols-3 lg:gap-24 xl:gap-36"
      >
        <router-link :to="{ name: 'fruit-bland' }">
          <div
            class="flex flex-col items-center justify-center cursor-pointer shadow-md bg-product-home container-animation px-2 py-3 md:px-4 md:py-6 gap-6"
          >
            <img
              src="/assets/images/product/fruit-bland/fruitbland_pineapple.png"
              alt="Product"
              class="w-auto h-48 md:h-52 lg:h-56 object-cover"
            />
            <div class="flex flex-col gap-4 center">
              <h2 class="text-lg lg:text-xl">Fruit Blend</h2>

              <button
                class="rounded-lg px-3 py-2 md:px-4 background-yellow hover:bg-yellow-600 duration-300 text-white"
              >
                See More
              </button>
            </div>
          </div>
        </router-link>
        <router-link :to="{ name: 'flavoured-syrup' }">
          <div
            class="flex flex-col items-center justify-center cursor-pointer shadow-md bg-product-home container-animation px-2 py-3 md:px-4 md:py-6 gap-6"
          >
            <img
              src="/assets/images/product/syrup/syrup_bluecuracao.png"
              alt="Product"
              class="w-auto h-48 md:h-52 lg:h-56 object-cover"
            />
            <div class="flex flex-col gap-4 center">
              <h2 class="text-lg lg:text-xl">Flavoured Syrup</h2>

              <button
                class="rounded-lg px-3 py-2 md:px-4 background-yellow hover:bg-yellow-600 duration-300 text-white"
              >
                See More
              </button>
            </div>
          </div>
        </router-link>
        <router-link :to="{ name: 'powder-syrup' }">
          <div
            class="flex flex-col items-center justify-center cursor-pointer shadow-md bg-product-home container-animation px-2 py-3 md:px-4 md:py-6 gap-6"
          >
            <img
              src="/assets/images/product/powder/powder_tiramisu.png"
              alt="Product"
              class="w-auto h-48 md:h-52 lg:h-56 object-cover"
            />

            <div class="flex flex-col gap-4 center">
              <h2 class="text-lg lg:text-xl">Powder Drink</h2>

              <button
                class="rounded-lg px-3 py-2 md:px-4 background-yellow hover:bg-yellow-600 duration-300 text-white"
              >
                See More
              </button>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductCategory",
  components: {},
};
</script>
<style scoped>
h2 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  color: #2b2b28;
}
</style>
