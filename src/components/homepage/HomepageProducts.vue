<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container mx-auto">
    <div class="py-6 px-4 lg:px-6 lg:py-12 xl:px-12">
      <h1 class="text-left text-black mb-2 font-semibold text-xl">PRODUCTS</h1>
      <hr class="h-1 rounded w-28 bg-black border-0" />
      <div
        class="grid grid-cols-2 md:grid-cols-3 justify-items-center justify-center gap-6 mt-10 mb-5"
      >
        <div
          class="flex flex-col background-yellow-light p-5 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <router-link to="/liquid-syrup" class="p-2">
            <img
              src="../../assets/images/product/fruit-bland/fruit_bland_pineapple.png"
              alt="Product"
              class="h-60 w-56 object-contain rounded-t-xl"
            />
          </router-link>
          <div class="p-5">
            <p
              class="text-lg lg:text-xl font-semibold text-black truncate block capitalize"
            >
              Trending Flavor
            </p>
          </div>
        </div>

        <div
          class="flex flex-col background-yellow-light p-5 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <router-link to="/powder-syrup" class="p-2">
            <img
              src="../../assets/images/product/powder/powder-charcoal.png"
              alt="Product"
              class="h-60 w-56 object-contain rounded-t-xl"
            />
          </router-link>
          <div class="p-5">
            <p
              class="text-lg lg:text-xl font-semibold text-black truncate block capitalize"
            >
              New Flavor
            </p>
          </div>
        </div>

        <div
          class="flex flex-col background-yellow-light p-5 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <router-link to="/fruit-bland" class="p-2">
            <img
              src="../../assets/images/product/fruit-bland/fruit_bland_strawberry.png"
              alt="Product"
              class="h-60 w-56 object-contain rounded-t-xl"
            />
          </router-link>
          <div class="p-5">
            <p
              class="text-lg lg:text-xl font-semibold text-black truncate block capitalize"
            >
              Beverage Boost
            </p>
          </div>
        </div>

        <div
          class="flex flex-col background-yellow-light p-5 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <router-link to="/liquid-syrup" class="p-2">
            <img
              src="../../assets/images/product/fruit-bland/fruit_bland_mango.png"
              alt="Product"
              class="h-60 w-56 object-contain rounded-t-xl"
            />
          </router-link>
          <div class="p-5">
            <p
              class="text-lg lg:text-xl font-semibold text-black truncate block capitalize"
            >
              Liquid Syrup
            </p>
          </div>
        </div>

        <div
          class="flex flex-col background-yellow-light p-5 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <router-link to="/powder-syrup" class="p-2">
            <img
              src="../../assets/images/product/powder/powder-charcoal.png"
              alt="Product"
              class="h-60 w-56 object-contain rounded-t-xl"
            />
          </router-link>
          <div class="p-5">
            <p
              class="text-lg lg:text-xl font-semibold text-black truncate block capitalize"
            >
              Powder Syrup
            </p>
          </div>
        </div>

        <div
          class="flex flex-col background-yellow-light p-5 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <router-link to="/fruit-bland" class="p-2">
            <img
              src="../../assets/images/product/fruit-bland/fruit_bland_kiwi.png"
              alt="Product"
              class="h-60 w-56 object-contain rounded-t-xl"
            />
          </router-link>
          <div class="p-5">
            <p
              class="text-lg lg:text-xl font-semibold text-black truncate block capitalize"
            >
              Fruit Bland
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
