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
      <div
        class="grid grid-cols-2 md:grid-cols-3 justify-center gap-4 md:gap-12 my-10"
      >
        <!-- <div
          class="flex flex-col max-w-lg  p-4 md:p-5 items-center center focus:outline-none"
        >
          <router-link to="/product/trending-product">
            <img
              src="../../assets/images/product/powder/powder-tiramisu.png"
              alt="Product"
              class="w-28 h28 md:w-48 md:h-48 object-cover rounded-t-xl"
            />

            <div class="p-2 mt-6">
              <p
                class="text-xl md:text-2xl pproduct text-black truncate block capitalize"
              >
                Trending Flavour
              </p>
            </div>
          </router-link>
        </div>
        <div
          class="flex flex-col max-w-lg  p-4 md:p-5 items-center center focus:outline-none"
        >
          <router-link to="/product/new-product">
            <img
              src="../../assets/images/product/powder/powder-cottoncandy.png"
              alt="Product"
              class="w-28 h28 md:w-48 md:h-48 object-cover rounded-t-xl"
            />

            <div class="max-w-lg p-2 mt-6">
              <p
                class="text-xl md:text-2xl pproduct text-black truncate block capitalize"
              >
                New Flavour
              </p>
            </div>
          </router-link>
        </div>

        <div
          class="flex flex-col max-w-lg  p-4 md:p-5 items-center center focus:outline-none"
        >
          <a href="#">
            <img
              src="../../assets/images/product/powder/powder-cookiescream.png"
              alt="Product"
              class="w-28 h28 md:w-48 md:h-48 object-cover rounded-t-xl"
            />
          </a>
          <div class="max-w-lg p-2 mt-6">
            <p
              class="text-xl md:text-2xl pproduct text-black truncate block capitalize"
            >
              Beverage Boost
            </p>
          </div>
        </div> -->
        <div
          class="col-span-1 flex flex-col bg-white border-2 p-4 md:p-5 items-center center focus:outline-none"
        >
          <router-link to="/product/fruit-bland">
            <img
              src="../../assets/images/product/fruit-bland/fruit_bland_pineapple.png"
              alt="Product"
              class="W-44 h-52 md:w-48 object-cover rounded-t-xl"
            />

            <div class="p-4">
              <p
                class="text-xl md:text-2xl pproduct text-black truncate block capitalizee"
              >
                Fruit Blend
              </p>
              <div class="mt-4 md:mt-6">
                <button
                  class="rounded-lg px-3 py-2 background-yellow hover:bg-yellow-600 duration-300 text-white font-bold"
                >
                  See More
                </button>
              </div>
            </div>
          </router-link>
        </div>
        <div
          class="col-span-1 flex flex-col bg-white border-2 p-4 md:p-5 items-center center focus:outline-none"
        >
          <router-link to="/product/liquid-syrup">
            <img
              src="../../assets/images/product/syrup/syrup_bluecuracao.png"
              alt="Product"
              class="W-44 h-52 md:w-48 object-cover rounded-t-xl"
            />

            <div class="p-4">
              <p
                class="text-xl md:text-2xl pproduct text-black truncate block capitalizee"
              >
                Liquid Syrup
              </p>
              <div class="mt-4 md:mt-6">
                <button
                  class="rounded-lg px-3 py-2 background-yellow hover:bg-yellow-600 duration-300 text-white font-bold"
                >
                  See More
                </button>
              </div>
            </div>
          </router-link>
        </div>
        <div
          class="col-span-1 flex flex-col bg-white border-2 p-4 md:p-5 items-center center focus:outline-none"
        >
          <router-link to="/product/powder-syrup">
            <img
              src="../../assets/images/product/powder/powder-redvelvet.png"
              alt="Product"
              class="W-44 h-52 md:w-48 object-cover rounded-t-xl"
            />
            <div class="p-4">
              <p
                class="text-xl md:text-2xl pproduct text-black truncate block capitalizee"
              >
                Powder Syrup
              </p>
              <div class="mt-4 md:mt-6">
                <button
                  class="rounded-lg px-3 py-2 background-yellow hover:bg-yellow-600 duration-300 text-white font-bold"
                >
                  See More
                </button>
              </div>
            </div>
          </router-link>
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
