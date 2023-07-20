<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <section class="container mx-auto px-4 py-6 md:px-8 lg:px-12 xl:px-24">
      <nav class="flex mb-24 md:mb-20 lg:mb-12" aria-label="Breadcrumb">
        <ol class="inline-flex items-center">
          <li class="inline-flex items-center">
            <a
              href="/"
              class="inline-flex items-center text-sm font-medium hover:text-yellow-600"
            >
              <svg
                class="w-4 h-4 mr-1"
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
          <li class="inline-flex items-center">
            <a
              href="/products"
              class="inline-flex items-center text-sm font-medium hover:text-yellow-600"
            >
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
              Products
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
              <span class="text-sm font-medium pcolor hover:text-yellow-600"
                >Premium Syrup</span
              >
            </div>
          </li>
        </ol>
      </nav>
    </section>
    <section
      class="container mx-auto px-4 py-6 md:px-8 lg:px-12 xl:px-24 lg:py-10"
    >
      <div class="flex flex-col gap-8 lg:gap-10">
        <div class="flex flex-row justify-between">
          <div class="flex flex-col items-center lg:items-start">
            <h1 class="pcolor mb-1 text-md md:text-lg lg:text-2xl uppercase">
              Premium Syrup
            </h1>
            <hr
              class="h-1 rounded w-full lg:w-46 background-yellow border-0 mx-auto lg:mx-0"
            />
          </div>
          <div class="relative flex items-center">
            <select
              v-model="sortOrder"
              @change="sortProducts"
              class="filter-text-size p-2 w-36 h-10 border border-solid border-yellow-600 rounded-md appearance-none focus:outline-none bg-transparent focus:bg-transparent"
            >
              <option disabled selected value="">Sort Items</option>
              <option
                value="high"
                class="focus:outline-none bg-transparent focus:bg-transparent"
              >
                Harga Tertinggi
              </option>
              <option
                value="low"
                class="focus:outline-none bg-transparent focus:bg-transparent"
              >
                Harga Terendah
              </option>
            </select>
            <div
              class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
            >
              <i class="fas fa-chevron-down text-sm"></i>
            </div>
          </div>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          <div
            v-for="product in premiumSyrupProducts"
            :key="product.id"
            class="bg-white center shadow-card-items"
          >
            <router-link
              class="focus:outline-none"
              :to="{
                name: 'productDetailPage',
                params: { productId: product.id },
              }"
              @click="selectProduct(product)"
            >
              <!-- Image -->
              <img
                :src="`/assets/images/product/${product.image}`"
                :alt="product.name"
                class="rounded-t h-48 sm:h-56 md:h-64 w-full object-contain"
              />
              <div class="flex flex-col items-center gap-1 px-4 py-4 md:py-5">
                <!-- Title -->
                <h3 class="text-lg lg:text-xl tracking-tighter">
                  {{ product.name }}
                </h3>
                <p class="text-lg lg:text-xl">Rp{{ product.price }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return { sortOrder: "" };
  },
  computed: {
    ...mapState(["premiumSyrupProducts"]),
  },
  mounted() {
    this.fetchPremiumSyrupProducts();
    this.sortProducts();
  },
  methods: {
    ...mapActions(["fetchPremiumSyrupProducts"]),
    ...mapMutations(["setSelectedProduct"]),
    selectProduct(product) {
      this.setSelectedProduct(product);
    },
    sortProducts() {
      if (this.sortOrder === "high") {
        this.premiumSyrupProducts.sort((a, b) => b.price - a.price);
      } else if (this.sortOrder === "low") {
        this.premiumSyrupProducts.sort((a, b) => a.price - b.price);
      }
    },
  },
};
</script>

<style scoped>
h3 {
  font-style: normal;
  font-weight: 500;
  color: #2b2b28;
}
p {
  color: #494945;
  /* Body/Body 1/Reguler */
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
}
</style>
