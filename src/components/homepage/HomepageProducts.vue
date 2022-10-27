<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container mx-auto">
    <div class="p-5 md:px-2 lg:px-6 lg:py-12 xl:px-12">
      <div class="flex flex-row">
        <h1 class="text-left text-black mb-2 pproduct text-lg pcolor">
          PRODUCTS
        </h1>
        <!-- <div class="rating space-y-6">
          <p class="slider1"></p>
          <p class="slider2"></p>
          <p class="slider3"></p>
        </div> -->
      </div>
      <hr class="h-1 rounded background-navbar w-32 bg-black border-0" />
      <div
        class="grid grid-cols-2 md:grid-cols-3 justify-center gap-4 md:gap-12 mt-10 mb-5"
      >
        <div
          class="flex flex-col max-w-lg shadow p-4 md:p-6 items-center center"
        >
          <router-link to="/product/trending-product">
            <img
              src="../../assets/images/product/powder/powder-tiramisu.png"
              alt="Product"
              class="w-24 h-24 md:w-52 md:h-52 object-contain rounded-t-xl"
            />

            <div class="p-2 mt-2">
              <p
                class="text-lg md:text-2xl pproduct text-black truncate block capitalize"
              >
                Trending Flavour
              </p>
            </div>
          </router-link>
        </div>
        <div
          class="flex flex-col max-w-lg shadow p-4 md:p-6 items-center center"
        >
          <router-link to="/product/new-product">
            <img
              src="../../assets/images/product/powder/powder-cottoncandy.png"
              alt="Product"
              class="w-24 h-24 md:w-52 md:h-52 object-contain rounded-t-xl"
            />

            <div class="max-w-lg p-2 mt-2">
              <p
                class="text-lg md:text-2xl pproduct text-black truncate block capitalize"
              >
                New Flavour
              </p>
            </div>
          </router-link>
        </div>

        <div
          class="flex flex-col max-w-lg shadow p-4 md:p-6 items-center center"
        >
          <a href="#">
            <img
              src="../../assets/images/product/powder/powder-cookiescream.png"
              alt="Product"
              class="w-24 h-24 md:w-52 md:h-52 object-contain rounded-t-xl"
            />
          </a>
          <div class="max-w-lg p-2 mt-2">
            <p
              class="text-lg md:text-2xl pproduct text-black truncate block capitalize"
            >
              Beverage Boost
            </p>
          </div>
        </div>
        <div
          class="flex flex-col max-w-lg shadow p-4 md:p-6 items-center center"
        >
          <router-link to="/product/fruit-bland">
            <img
              src="../../assets/images/product/fruit-bland/fruit_bland_passion.png"
              alt="Product"
              class="w-24 h-24 md:w-52 md:h-52 object-contain rounded-t-xl"
            />
          </router-link>
          <div class="max-w-lg p-2 mt-2">
            <p
              class="text-lg md:text-2xl pproduct text-black truncate block capitalize"
            >
              Fruit Blend
            </p>
          </div>
        </div>
        <div
          class="flex flex-col max-w-lg shadow p-4 md:p-6 items-center center"
        >
          <router-link to="/product/liquid-syrup">
            <img
              src="../../assets/images/product/syrup/syrup_bluecuracao.png"
              alt="Product"
              class="w-24 h-24 md:w-52 md:h-52 object-contain rounded-t-xl"
            />
          </router-link>
          <div class="max-w-lg p-2 mt-2">
            <p
              class="text-lg md:text-2xl pproduct text-black truncate block capitalize"
            >
              Liquid Syrup
            </p>
          </div>
        </div>
        <div
          class="flex flex-col max-w-lg shadow p-4 md:p-6 items-center center"
        >
          <router-link to="/product/powder-syrup">
            <img
              src="../../assets/images/product/powder/powder-redvelvet.png"
              alt="Product"
              class="w-24 h-24 md:w-52 md:h-52 object-contain rounded-t-xl"
            />
          </router-link>
          <div class="max-w-lg p-2 mt-2">
            <p
              class="text-lg md:text-2xl pproduct text-black truncate block capitalizee"
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
<style scoped>
.shadow {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
