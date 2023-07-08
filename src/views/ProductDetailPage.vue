<template>
  <div>
    <div v-if="loading">
      <!-- Show loading state -->
      <div class="flex justify-center items-center h-screen">
        <div
          class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"
        ></div>
      </div>
    </div>
    <section class="container mx-auto" v-else>
      <div class="px-4 py-6 md:px-8 lg:px-12 xl:px-24 lg:py-10">
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
            <li
              class="inline-flex items-center"
              v-if="productShow && productShow.category === 'fruitBlend'"
            >
              <a
                href="/products/fruit-blend"
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
                Fruit Blend
              </a>
            </li>
            <li
              class="inline-flex items-center"
              v-if="productShow && productShow.category === 'powder'"
            >
              <a
                href="/products/powder-syrup"
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
                Powder
              </a>
            </li>
            <li
              class="inline-flex items-center"
              v-if="productShow && productShow.category === 'flavoured'"
            >
              <a
                href="/products/flavoured-syrup"
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
                Flavoured Syrup
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
                  class="text-sm font-medium pcolor hover:text-yellow-600"
                  >{{ productShow ? productShow.name : "" }}</span
                >
              </div>
            </li>
          </ol>
        </nav>
        <div class="flex flex-col gap-y-12" v-if="productShow">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- Item Image -->
            <div class="flex justify-center bg-gray-50 shadow">
              <img
                :src="productShow.image"
                :alt="productShow.name"
                class="object-cover object-center h-72 md:h-96 rounded-t-xl"
              />
            </div>
            <!-- Item Info -->
            <div class="flex flex-col justify-between gap-6">
              <div class="flex flex-col gap-4">
                <div class="flex flex-col">
                  <h1 class="text-black mb-1 text-lg lg:text-2xl font-semibold">
                    {{ productShow.name }}
                  </h1>
                  <hr
                    class="h-1 rounded bg-yellow-500 w-full lg:w-56 mx-auto lg:mx-0"
                  />
                </div>
                <div>
                  <template v-if="Array.isArray(productShow.info)">
                    <h2 class="text-lg md:text-xl mb-1">
                      Cocok Digunakan Untuk:
                    </h2>
                    <ul
                      class="list-disc list-inside"
                      v-for="info in productShow.info"
                      :key="info"
                    >
                      <li class="text-md lg:text-lg my-1 text-gray-600">
                        {{ info }}
                      </li>
                    </ul>
                  </template>
                  <template v-else>
                    <p class="text-lg md:text-xl">{{ productShow.info }}</p>
                  </template>
                </div>
              </div>

              <div>
                <a :href="productShow.link" class="w-full">
                  <button
                    class="bg-black hover:text-white p-3 text-white hover:border-transparent w-full font-semibold"
                  >
                    Buy Now
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="self-start w-full">
            <div class="">
              <h1
                class="text-center text-xl lg:text-2xl background-yellow text-white py-2"
              >
                Details
              </h1>
            </div>
            <div class="overflow-x-auto">
              <table class="table-auto bg-white">
                <tbody>
                  <tr class="border h-auto border-[#bdb76b]">
                    <td
                      class="w-1/2 md:w-1/6 px-4 lg:px-6 py-3 font-semibold text-lg md:text-xl"
                    >
                      Category
                    </td>
                    <td class="px-4 lg:px-6 py-3">
                      {{
                        productShow.category === "fruitBlend"
                          ? "Fruit Blend"
                          : productShow.category === "Flavoured"
                          ? "Flavoured Syrup"
                          : "Powder"
                      }}
                    </td>
                  </tr>
                  <!-- Add styling for other rows -->
                  <tr class="border h-auto border-[#bdb76b]">
                    <td
                      class="w-1/2 md:w-1/6 px-4 lg:px-6 py-3 font-semibold text-lg md:text-xl"
                    >
                      Packaging
                    </td>
                    <td class="px-4 lg:px-6 py-3">
                      {{ getFieldValue(productShow.packaging) }}
                    </td>
                  </tr>
                  <tr class="border h-auto border-[#bdb76b]">
                    <td
                      class="w-1/2 md:w-1/6 px-4 lg:px-6 py-3 font-semibold text-lg md:text-xl"
                    >
                      Weight
                    </td>
                    <td class="px-4 lg:px-6 py-3">
                      {{ getFieldValue(productShow.weight) }}
                    </td>
                  </tr>
                  <tr class="border h-auto border-[#bdb76b]">
                    <td
                      class="w-1/2 md:w-1/6 px-4 lg:px-6 py-3 font-semibold text-lg md:text-xl"
                    >
                      Color
                    </td>
                    <td class="px-4 lg:px-6 py-3">
                      {{ getFieldValue(productShow.color) }}
                    </td>
                  </tr>
                  <tr class="border h-auto border-[#bdb76b]">
                    <td
                      class="w-1/2 md:w-1/6 px-4 lg:px-6 py-3 font-semibold text-lg md:text-xl"
                    >
                      Tasting
                    </td>
                    <td class="px-4 lg:px-6 py-3">
                      {{ getFieldValue(productShow.tasting) }}
                    </td>
                  </tr>
                  <tr class="border h-auto border-[#bdb76b]">
                    <td
                      class="w-1/2 md:w-1/6 px-4 lg:px-6 py-3 font-semibold text-lg md:text-xl"
                    >
                      Serving Suggestions
                    </td>
                    <td class="px-4 lg:px-6 py-3">
                      <ul v-if="Array.isArray(productShow.serving)">
                        <li
                          v-for="suggestion in productShow.serving"
                          :key="suggestion"
                          class="list-disc my-1"
                        >
                          <p class="">{{ suggestion }}</p>
                        </li>
                      </ul>
                      <p v-else>{{ productShow.serving }}</p>
                    </td>
                  </tr>
                  <tr class="border h-auto border-[#bdb76b]">
                    <td
                      class="w-1/2 md:w-1/6 px-4 lg:px-6 py-3 font-semibold text-lg md:text-xl"
                    >
                      Keeping Suggestions
                    </td>
                    <td class="px-4 lg:px-6 py-3">
                      {{ getFieldValue(productShow.keeping) }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ProductDetailPage",
  data() {
    return {
      loading: true,
    };
  },
  components: {},
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  computed: {
    ...mapState(["selectedProduct"]),
    productShow() {
      if (this.selectedProduct) {
        // Create a copy of the selectedProduct object
        const product = { ...this.selectedProduct };
        // Modify the image path in the copied object
        if (product.image) {
          product.image = "/assets/images/product" + product.image;
        }
        return product;
      }
      return null;
    },
  },
  created() {
    console.log("ProductDetailPage created");
    this.updateDocumentTitle(); // Call the method to update the document title
  },
  methods: {
    updateDocumentTitle() {
      if (this.productShow && this.productShow.name) {
        const productName = this.productShow.name;
        document.title = productName;
      } else {
        console.log("productShow or productShow.name is undefined");
      }
    },

    getFieldValue(field) {
      return field ? field : "-";
    },
  },
};
</script>
