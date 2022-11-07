<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container mx-auto">
    <nav class="flex ml-10 md:mt-10" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <a
            href="/"
            class="inline-flex items-center text-sm font-medium hover:text-yellow-600"
          >
            <svg
              class="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              ></path>
            </svg>
            Home
          </a>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <svg
              class="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span
              class="ml-1 text-sm font-medium md:ml-2 pcolor hover:text-yellow-600"
              >Products</span
            >
          </div>
        </li>
      </ol>
    </nav>
    <div class="p-4 lg:p-6 lg:py-12 xl:p-12">
      <div class="flex flex-row">
        <h1 class="pcolor mb-1 text-xl lg:text-2xl">Product Category</h1>
        <!-- <img src="../../assets/images/icon/star.png" class="ml-4" /> -->
      </div>
      <hr class="h-1 rounded background-navbar w-32 bg-black border-0" />
      <div class="py-10 px-12">
        <div
          class="grid grid-flow-row gap-8 lg:gap-12 text-neutral-600 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
        >
          <div class="my-8 rounded">
            <router-link :to="{ name: 'fruit-bland' }">
              <div class="cursor-pointer">
                <figure>
                  <!-- Image -->
                  <img
                    src="../../assets/images/product/fruit-bland/fruitbland_pineapple.jpg"
                    alt="Product"
                    class="rounded-t h-52 w-full object-contain"
                  />

                  <figcaption class="p-4 center">
                    <!-- Title -->
                    <h2
                      class="mb-2 text-xl lg:text-2xl tracking-tight text-black"
                    >
                      Fruit Blend
                    </h2>
                    <div class="my-4">
                      <button
                        class="rounded-lg px-3 py-2 background-yellow hover:bg-yellow-600 duration-300 text-white"
                      >
                        See More
                      </button>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </router-link>
          </div>
          <div class="my-8 rounded">
            <router-link :to="{ name: 'flavoured-syrup' }">
              <div class="cursor-pointer">
                <figure>
                  <!-- Image -->
                  <img
                    src="../../assets/images/product/syrup/syrup_bluecuracao.jpg"
                    alt="Product"
                    class="rounded-t h-52 w-full object-contain"
                  />

                  <figcaption class="p-4 center">
                    <!-- Title -->
                    <h2
                      class="mb-2 text-xl lg:text-2xl tracking-tight text-black"
                    >
                      Flavoured Syrup
                    </h2>
                    <div class="my-4">
                      <button
                        class="rounded-lg px-3 py-2 background-yellow hover:bg-yellow-600 duration-300 text-white"
                      >
                        See More
                      </button>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </router-link>
          </div>
          <div class="my-8 rounded">
            <router-link :to="{ name: 'powder-syrup' }">
              <div class="cursor-pointer">
                <figure>
                  <!-- Image -->
                  <img
                    src="../../assets/images/product/powder/powder_tiramisu.jpg"
                    alt="Product"
                    class="rounded-t h-52 w-full object-contain"
                  />

                  <figcaption class="p-4 center">
                    <!-- Title -->
                    <h2
                      class="mb-2 text-xl lg:text-2xl tracking-tight text-black"
                    >
                      Powder Drink
                    </h2>
                    <div class="my-4">
                      <button
                        class="rounded-lg px-3 py-2 background-yellow hover:bg-yellow-600 duration-300 text-white"
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
