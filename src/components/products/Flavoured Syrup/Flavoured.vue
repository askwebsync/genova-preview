<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container mx-auto px-4 py-6 md:px-8 lg:px-24 lg:py-10">
    <nav class="flex mb-24" aria-label="Breadcrumb">
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
            <span
              class="ml-1 text-sm font-medium md:ml-2 pcolor hover:text-yellow-600"
              >Fruit Blend</span
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
            class="filter-text-size p-2 md:p-3 w-full md:w-64 h-42 border border-solid border-yellow-600 rounded-md appearance-none focus:outline-none bg-transparent"
          >
            <option disabled selected value="">Filter</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
            <option value="new">New</option>
            <option value="old">Old</option>
          </select>
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
          >
            <svg
              class="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M9 13l-4-4 4-4 1.41 1.42L8.83 8H14v2H8.83l2.58 2.58L9 13z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
      >
        <div
          v-for="product in resultQuery"
          :key="product.id"
          class="bg-product-home center shadow-md"
        >
          <div class="cursor-pointer" @click="navigateToProductDetail(product)">
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
                RP. {{ product.price }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import allProducts from "@/product/allProduct";
export default {
  data() {
    return {
      products: allProducts,
    };
  },
  computed: {
    // Get the filtered products with "Fruit Blend" category
    resultQuery() {
      return this.products.filter(
        (product) => product.category === "Flavoured"
      );
    },
  },
  methods: {
    navigateToProductDetail(product) {
      this.$router.push({
        name: "productDetailPage",
        query: {
          dataProduk: JSON.stringify({
            name: product.name,
            price: product.price,
            category: product.category,
            info: product.info,
            packaging: product.packaging,
            weight: product.weight,
            color: product.color,
            image: product.image,
            link: product.link,
            serving: product.serving,
            tasting: product.tasting,
            penyimpanan: product.penyimpanan,
          }),
        },
      });
    },
  },
};
</script>

<style scoped></style>
