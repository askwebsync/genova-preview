<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container mx-auto">
    <div class="flex flex-col p-4 lg:p-6 pb-12 xl:p-12">
      <div class="flex flex-col gap-8 lg:gap-12">
        <div class="flex flex-col items-center lg:items-start">
          <h1 class="mb-1 text-xl lg:text-2xl uppercase">Products</h1>
          <!-- <img src="/assets/images/icon/star.png" class="ml-4" /> -->
          <hr
            class="h-1 rounded w-full lg:w-32 bg-black border-0 mx-auto lg:mx-0"
          />
        </div>
        <div
          class="grid grid-cols-1 gap-12 lg:gap-24 md:grid-cols-3 px-10 sm:px-20 md:px-0"
        >
          <div
            class="flex flex-col items-center justify-center cursor-pointer shadow-md bg-product-home px-2 py-2"
          >
            <router-link :to="{ name: 'fruit-bland' }">
              <div class="cursor-pointer">
                <figure>
                  <!-- Image -->
                  <img
                    src="/assets/images/product/fruit-bland/fruitbland_pineapple.png"
                    alt="Product"
                    class="w-auto h-52 lg:h-56 object-cover"
                  />

                  <figcaption class="p-4 center">
                    <!-- Title -->
                    <h2
                      class="mb-2 text-lg lg:text-xl tracking-tight text-black"
                    >
                      Fruit Blend
                    </h2>
                  </figcaption>
                </figure>
              </div>
            </router-link>
          </div>
          <div
            class="flex flex-col items-center justify-center cursor-pointer shadow-md bg-product-home px-2 py-2"
          >
            <router-link :to="{ name: 'flavoured-syrup' }">
              <div class="cursor-pointer">
                <figure>
                  <!-- Image -->
                  <img
                    src="/assets/images/product/syrup/syrup_bluecuracao.png"
                    alt="Product"
                    class="w-auto h-52 lg:h-56 object-cover"
                  />

                  <figcaption class="p-4 center">
                    <!-- Title -->
                    <h2
                      class="mb-2 text-lg lg:text-xl tracking-tight text-black"
                    >
                      Flavoured Syrup
                    </h2>
                  </figcaption>
                </figure>
              </div>
            </router-link>
          </div>
          <div
            class="flex flex-col items-center justify-center cursor-pointer shadow-md bg-product-home px-2 py-2"
          >
            <router-link :to="{ name: 'powder-syrup' }">
              <div class="cursor-pointer">
                <figure>
                  <!-- Image -->
                  <img
                    src="/assets/images/product/powder/powder_tiramisu.png"
                    alt="Product"
                    class="w-auto h-52 lg:h-56 object-cover"
                  />

                  <figcaption class="p-4 center">
                    <!-- Title -->
                    <h2
                      class="mb-2 text-lg lg:text-xl tracking-tight text-black"
                    >
                      Powder Drink
                    </h2>
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
<style scoped>
.shadow-page-product {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
</style>
