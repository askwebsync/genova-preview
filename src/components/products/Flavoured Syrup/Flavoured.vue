<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    class="container mx-auto px-4 py-6 md:px-8 lg:px-12 xl:px-24 lg:py-10"
  >
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
              >Flavoured Syrup</span
            >
          </div>
        </li>
      </ol>
    </nav>
    <div class="flex flex-col gap-8 lg:gap-10">
      <div class="flex flex-row justify-between">
        <div class="flex flex-col items-center lg:items-start">
          <h1 class="pcolor mb-1 text-md md:text-lg lg:text-2xl uppercase">
            Flavoured Syrup
          </h1>
          <hr
            class="h-1 rounded w-full lg:w-56 background-yellow border-0 mx-auto lg:mx-0"
          />
        </div>
        <div class="relative">
          <select
            v-model="sortOrder"
            @change="sortProducts"
            class="filter-text-size p-2 w-32 h-10 border border-solid border-yellow-600 rounded-md appearance-none focus:outline-none bg-transparent focus:bg-transparent"
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
            <svg
              class="w-5 h-5 text-gray-500 transform rotate-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M11 7l-4 4-4-4 1.41-1.42L6 8.17V3h2v5.17l2.59-2.58L11 7z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
      >
        <div
          v-for="product in flavouredProducts"
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
            <div class="p-3 md:p-4">
              <!-- Title -->
              <h2 class="mb-1 text-lg lg:text-xl tracking-tight text-black">
                {{ product.name }}
              </h2>
              <p class="text-lg md:text-xl text-gray-600">
                Rp. {{ product.price }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return { sortOrder: "" };
  },
  computed: {
    ...mapState(["flavouredProducts"]),
  },
  mounted() {
    this.fetchFlavouredProducts();
    this.sortProducts();
  },
  methods: {
    ...mapActions(["fetchFlavouredProducts"]),
    ...mapMutations(["setSelectedProduct"]),
    selectProduct(product) {
      this.setSelectedProduct(product);
    },
    sortProducts() {
      if (this.sortOrder === "high") {
        this.flavouredProducts.sort((a, b) => b.price - a.price);
      } else if (this.sortOrder === "low") {
        this.flavouredProducts.sort((a, b) => a.price - b.price);
      }
    },
  },
};
</script>
