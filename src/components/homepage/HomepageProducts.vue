<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container mx-auto">
    <div class="p-6 lg:px-6 lg:py-12 xl:px-12">
      <div class="flex flex-row">
        <h1 class="text-left text-black mb-2 font-semibold text-xl">
          PRODUCTS
        </h1>
        <!-- <div class="rating space-y-6">
          <p class="slider1"></p>
          <p class="slider2"></p>
          <p class="slider3"></p>
        </div> -->
      </div>
      <hr class="h-1 rounded w-32 bg-black border-0" />
      <div
        class="grid grid-cols-2 md:grid-cols-3 justify-items-center justify-center gap-12 mt-10 mb-5"
      >
        <div
          class="flex flex-col max-w-lg background-yellow-light p-6 justify-center"
        >
          <a href="#">
            <img
              src="../../assets/images/product/powder/powder-tiramisu.png"
              alt="Product"
              class="h-52 w-44 object-contain rounded-t-xl"
            />
          </a>
          <div class="max-w-lg p-2 mt-2">
            <p
              class="text-lg md:text-xl font-semibold text-black truncate block capitalize"
            >
              Trending Product
            </p>
          </div>
        </div>
        <div
          class="flex flex-col max-w-lg background-yellow-light p-6 justify-center"
        >
          <a href="#">
            <img
              src="../../assets/images/product/powder/powder-cottoncandy.png"
              alt="Product"
              class="h-52 w-44 object-contain rounded-t-xl"
            />
          </a>
          <div class="max-w-lg p-2 mt-2">
            <p
              class="text-lg md:text-xl font-semibold text-black truncate block capitalize"
            >
              New Product
            </p>
          </div>
        </div>
        <div
          class="flex flex-col max-w-lg background-yellow-light p-6 justify-center"
        >
          <a href="#">
            <img
              src="../../assets/images/product/powder/powder-cookiescream.png"
              alt="Product"
              class="h-52 w-44 object-contain rounded-t-xl"
            />
          </a>
          <div class="max-w-lg p-2 mt-2">
            <p
              class="text-lg md:text-xl font-semibold text-black truncate block capitalize"
            >
              Beverage Boost
            </p>
          </div>
        </div>
        <div
          class="flex flex-col max-w-lg background-yellow-light p-6 justify-center"
        >
          <router-link to="/fruit-bland">
            <img
              src="../../assets/images/product/powder/powder-redvelvet.png"
              alt="Product"
              class="h-52 w-44 object-contain rounded-t-xl"
            />
          </router-link>
          <div class="max-w-lg p-2 mt-2">
            <p
              class="text-lg md:text-xl font-semibold text-black truncate block capitalize"
            >
              Fruit Bland
            </p>
          </div>
        </div>
        <div
          class="flex flex-col max-w-lg background-yellow-light p-6 justify-center"
        >
          <router-link to="/liquid-syrup">
            <img
              src="../../assets/images/product/powder/powder-cookiescream.png"
              alt="Product"
              class="h-52 w-44 object-contain rounded-t-xl"
            />
          </router-link>
          <div class="max-w-lg p-2 mt-2">
            <p
              class="text-lg md:text-xl font-semibold text-black truncate block capitalize"
            >
              Liquid Syrup
            </p>
          </div>
        </div>
        <div
          class="flex flex-col max-w-lg background-yellow-light p-6 justify-center"
        >
          <router-link to="/powder-syrup">
            <img
              src="../../assets/images/product/powder/powder-redvelvet.png"
              alt="Product"
              class="h-52 w-44 object-contain rounded-t-xl"
            />
          </router-link>
          <div class="max-w-lg p-2 mt-2">
            <p
              class="text-lg md:text-xl font-semibold text-black truncate block capitalize"
            >
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
