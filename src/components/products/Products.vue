<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="px-4 py-6 md:px-8 lg:px-24 lg:py-10">
    <div class="flex flex-col gap-8 lg:gap-10">
      <div class="flex flex-col items-center lg:items-start">
        <h1 class="pcolor mb-1 text-xl lg:text-2xl uppercase">Products</h1>
        <hr
          class="h-1 rounded w-full lg:w-32 background-yellow border-0 mx-auto lg:mx-0"
        />
      </div>
      <div
        class="grid grid-cols-1 gap-12 px-10 sm:grid-cols-2 md:px-0 md:gap-10 md:grid-cols-3 lg:gap-20 xl:gap-32"
      >
        <router-link :to="{ name: 'fruit-bland' }">
          <div
            class="flex flex-col items-center justify-center cursor-pointer bg-product-home shadow-md bg-gray-100 hover:bg-gray-200 transition-opacity duration-300 ease-in-out px-2 py-3 md:px-4 md:py-6 gap-6"
          >
            <img
              src="/assets/images/product/fruit-bland/fruitbland_pineapple.png"
              alt="Product"
              class="w-auto h-48 md:h-52 lg:h-56 object-cover"
            />
            <div class="flex flex-col gap-4 items-center">
              <h2 class="text-lg lg:text-xl">Fruit Blend</h2>
            </div>
          </div>
        </router-link>
        <router-link :to="{ name: 'flavoured-syrup' }">
          <div
            class="flex flex-col items-center justify-center cursor-pointer bg-product-home shadow-md bg-gray-100 hover:bg-gray-200 transition-opacity duration-300 ease-in-out px-2 py-3 md:px-4 md:py-6 gap-6"
          >
            <img
              src="/assets/images/product/syrup/syrup_bluecuracao.png"
              alt="Product"
              class="w-auto h-48 md:h-52 lg:h-56 object-cover"
            />
            <div class="flex flex-col gap-4 items-center">
              <h2 class="text-lg lg:text-xl">Flavoured Syrup</h2>
            </div>
          </div>
        </router-link>
        <router-link :to="{ name: 'powder-syrup' }">
          <div
            class="flex flex-col items-center justify-center cursor-pointer bg-product-home shadow-md bg-gray-100 hover:bg-gray-200 transition-opacity duration-300 ease-in-out px-2 py-3 md:px-4 md:py-6 gap-6"
          >
            <img
              src="/assets/images/product/powder/powder_tiramisu.png"
              alt="Product"
              class="w-auto h-48 md:h-52 lg:h-56 object-cover"
            />
            <div class="flex flex-col gap-4 items-center">
              <h2 class="text-lg lg:text-xl">Powder Drink</h2>
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
.hrborder {
  background: #2b2b28;
  border: 3px solid #2b2b28;
}
h1 {
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 500;
}
h2 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  color: #2b2b28;
}
</style>
