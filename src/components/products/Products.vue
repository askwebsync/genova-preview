<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="">
    <div class="container mx-auto">
      <div class="mt-6 p-4 lg:p-6 lg:py-12 xl:p-12">
        <div class="flex flex-row">
          <h1 class="pcolor mb-3 text-xs md:text-base">PRODUCTS</h1>
        </div>
        <hr class="h-1 rounded w-32 background-navbar border-0" />
        <div
          class="grid grid-cols-2 md:grid-cols-3 justify-center gap-4 md:gap-12 my-10"
        >
          <div
            class="flex flex-col max-w-lg p-4 md:p-5 items-center center focus:outline-none"
          >
            <router-link to="/product/fruit-bland">
              <img
                src="../../assets/images/product/fruit-bland/fruit_bland_passion.png"
                alt="Product"
                class="w-28 h-28 md:w-52 h-52 object-contain rounded-t-xl"
              />
            </router-link>
            <div class="max-w-lg p-2 mt-2">
              <p
                class="text-2xl md:text-2xl pproduct text-black truncate block capitalize"
              >
                Fruit Blend
              </p>
            </div>
          </div>
          <div
            class="flex flex-col max-w-lg p-4 md:p-5 items-center center focus:outline-none"
          >
            <router-link to="/product/liquid-syrup">
              <img
                src="../../assets/images/product/syrup/syrup_bluecuracao.png"
                alt="Product"
                class="w-28 h-28 md:w-52 h-52 object-contain rounded-t-xl"
              />
            </router-link>
            <div class="max-w-lg p-2 mt-2">
              <p
                class="text-2xl md:text-2xl pproduct text-black truncate block capitalize"
              >
                Liquid Syrup
              </p>
            </div>
          </div>
          <div
            class="flex flex-col max-w-lg p-4 md:p-5 items-center center focus:outline-none"
          >
            <router-link to="/product/powder-syrup">
              <img
                src="../../assets/images/product/powder/powder-redvelvet.png"
                alt="Product"
                class="w-28 h-28 md:w-52 h-52 object-contain rounded-t-xl"
              />
            </router-link>
            <div class="max-w-lg p-2 mt-2">
              <p
                class="text-2xl md:text-2xl pproduct text-black truncate block capitalizee"
              >
                Powder Syrup
              </p>
            </div>
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
.shadow-page-product {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
</style>
