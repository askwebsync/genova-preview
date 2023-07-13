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
                class="inline-flex items-center text-xs md:text-sm font-medium hover:text-yellow-600"
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
                class="inline-flex items-center text-xs md:text-sm font-medium hover:text-yellow-600"
              >
                <svg
                  class="w-5 h-5 md:w-6 md:h-6 text-gray-400"
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
                class="inline-flex items-center text-xs md:text-sm font-medium hover:text-yellow-600"
              >
                <svg
                  class="w-5 h-5 md:w-6 md:h-6 text-gray-400"
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
                class="inline-flex items-center text-xs md:text-sm font-medium hover:text-yellow-600"
              >
                <svg
                  class="w-5 h-5 md:w-6 md:h-6 text-gray-400"
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
                class="inline-flex items-center text-xs md:text-sm font-medium hover:text-yellow-600"
              >
                <svg
                  class="w-5 h-5 md:w-6 md:h-6 text-gray-400"
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
                  class="w-5 h-5 md:w-6 md:h-6 text-gray-400"
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
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <!-- Item Image -->
            <div class="flex justify-center bg-gray-50 shadow">
              <img
                :src="productShow.image"
                :alt="productShow.name"
                class="object-cover object-center w-full h-64 md:h-full rounded-t-xl"
              />
            </div>
            <!-- Item Info -->
            <div class="flex flex-col gap-6">
              <div class="flex flex-col gap-6">
                <div class="flex flex-col gap-2">
                  <h1 class="text-xl lg:text-2xl tracking-wide font-semibold">
                    GENOVA {{ productShow.name }}
                  </h1>
                  <div class="flex flex-col">
                    <h2 class="pcolor text-xl lg:text-lg font-medium">Harga</h2>
                    <h2 class="pcolor text-2xl lg:text-3xl font-semibold">
                      {{ "Rp" + productShow.price }}
                    </h2>
                  </div>
                </div>

                <div>
                  <a :href="productShow.link">
                    <button
                      class="bg-yellow-600 hover:text-white px-4 py-2 rounded text-white text-md hover:border-transparent font-medium"
                    >
                      Go To Marketplace
                    </button>
                  </a>
                </div>
              </div>
              <div>
                <!-- Tabs navigation -->
                <ul class="w-full flex list-none flex-row border-b-0 pl-0">
                  <li class="flex-1 cursor-pointer">
                    <a
                      :class="{
                        'border-t-2 border-black': activeTab === 'keterangan',
                        'border-t-2 border-gray-300':
                          activeTab !== 'keterangan',
                      }"
                      @click="activeTab = 'keterangan'"
                      class="block px-4 md:px-5 pb-3.5 pt-2 text-xl font-medium"
                    >
                      Keterangan
                    </a>
                  </li>
                  <li class="flex-1 cursor-pointer">
                    <a
                      :class="{
                        'border-t-2 border-black':
                          activeTab === 'saran-penyajian',
                        'border-t-2 border-gray-300':
                          activeTab !== 'saran-penyajian',
                      }"
                      @click="activeTab = 'saran-penyajian'"
                      class="block px-4 md:px-5 pb-3.5 pt-2 text-xl font-medium"
                    >
                      Saran Penyajian
                    </a>
                  </li>
                </ul>

                <!--Tabs content-->
                <div class="my-6">
                  <div
                    v-if="activeTab === 'keterangan'"
                    class="flex flex-col gap-6 md:gap-8 block opacity-100 transition-opacity duration-150 ease-linear"
                  >
                    <div>
                      <h2 class="text-lg mb-1 font-medium">Kondisi Produk</h2>
                      <ul class="list-disc list-inside">
                        <li class="text-lg text-gray-600">
                          <span class="ml-[-0.45em]">
                            {{ productShow.kondisi }}</span
                          >
                        </li>
                        <li class="text-lg text-gray-600">
                          <span class="ml-[-0.45em]">
                            Min.Pemesanan: 1 Buah</span
                          >
                        </li>
                        <li class="text-lg text-gray-600">
                          <span class="ml-[-0.45em]">
                            Etalase : {{ productShow.category }}</span
                          >
                        </li>
                        <li class="text-lg text-gray-600">
                          <span class="ml-[-0.45em]">
                            Halal : {{ productShow.halal }}</span
                          >
                        </li>
                      </ul>
                    </div>
                    <!-- Keterangan tab content -->
                    <div>
                      <template v-if="Array.isArray(productShow.info)">
                        <h2 class="text-lg mb-1 font-medium">
                          Cocok Digunakan Untuk
                        </h2>
                        <ul
                          class="list-disc list-inside"
                          v-for="info in productShow.info"
                          :key="info"
                        >
                          <li class="text-lg text-gray-600">
                            <span class="ml-[-0.45em]"> {{ info }}</span>
                          </li>
                        </ul>
                      </template>
                      <template v-else>
                        <h2 class="text-lg mb-1 font-medium">
                          Informasi Produk
                        </h2>
                        <p class="text-lg text-gray-600">
                          {{ productShow.info }}
                        </p>
                      </template>
                    </div>
                  </div>
                  <div
                    v-if="activeTab === 'saran-penyajian'"
                    class="flex flex-col gap-4 block opacity-100 transition-opacity duration-150 ease-linear"
                  >
                    <!-- Saran Penyajian tab content -->
                    <div>
                      <template v-if="Array.isArray(productShow.penyajian)">
                        <h2 class="text-lg mb-1 font-medium">
                          Saran Penyajian
                        </h2>
                        <ul
                          class="list-disc list-inside"
                          v-for="penyajian in productShow.penyajian"
                          :key="penyajian"
                        >
                          <li class="text-lg text-gray-600">
                            <span class="ml-[-0.45em]"> {{ penyajian }}</span>
                          </li>
                        </ul>
                      </template>
                      <template v-else>
                        <p class="text-lg md:text-xl">
                          {{ productShow.penyajian }}
                        </p>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
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
      activeTab: "keterangan",
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
