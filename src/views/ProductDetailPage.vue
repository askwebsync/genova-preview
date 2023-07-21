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
        <div class="flex flex-col gap-10">
          <div class="flex flex-col gap-y-12" v-if="productShow">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              <!-- Item Image -->
              <div class="flex justify-center">
                <div class="bg-gray-100 p-3 container-img-product">
                  <img
                    :src="productShow.image"
                    :alt="productShow.name"
                    class="img-product object-cover"
                  />
                </div>
              </div>

              <!-- Item Info -->
              <div class="flex flex-col gap-6">
                <div class="flex flex-col gap-6">
                  <div class="flex flex-col gap-2">
                    <h1 class="text-xl lg:text-2xl tracking-wide font-semibold">
                      GENOVA {{ productShow.name }}
                    </h1>
                    <div class="flex flex-col">
                      <h2 class="pcolor text-xl lg:text-lg font-medium">
                        Harga
                      </h2>
                      <h2 class="pcolor text-2xl lg:text-3xl font-semibold">
                        {{ "Rp" + productShow.price }}
                      </h2>
                    </div>
                  </div>

                  <div>
                    <a :href="productShow.link">
                      <button
                        class="bg-button hover:text-white text-white text-md hover:border-transparent"
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
                          'border-t-2 border-gray-400 text-gray-400':
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
                          'border-t-2 border-gray-400 text-gray-400':
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
                      class="flex flex-col gap-6 block opacity-100 transition-opacity duration-150 ease-linear"
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
                          <p class="text-lg text-gray-600 leading-6">
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
                          <p class="text-lg md:text-xl text-gray-600">
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
          <div class="flex flex-col gap-8">
            <div class="flex flex-col items-center lg:items-start">
              <h1 class="text-lg lg:text-2xl">Anda Mungkin Juga Mencari</h1>
            </div>
            <carousel
              :items-to-show="2.5"
              :wrap-around="true"
              :breakpoints="breakpoints"
              v-bind="settings"
              @after-slide="afterSlide"
            >
              <slide v-for="product in sameCategoryProducts" :key="product.id">
                <div class="flex flex-col items-center gap-5 px-4 py-4 md:py-5">
                  <div class="product-container p-3">
                    <img
                      :src="getImageSource(product)"
                      :alt="product.name"
                      class="w-auto h-48 md:h-52 lg:h-56 object-cover"
                    />
                  </div>
                  <div
                    class="flex flex-col items-center gap-5 px-4 py-4 md:py-5"
                  >
                    <div class="flex flex-col">
                      <h3 class="text-lg lg:text-xl tracking-tight">
                        {{ truncateProductName(product.name) }}
                      </h3>
                      <p class="text-lg lg:text-xl">Rp{{ product.price }}</p>
                    </div>
                    <router-link
                      class="focus:outline-none"
                      :to="{
                        name: 'productDetailPage',
                        params: { productId: product.id },
                      }"
                      @click="selectProduct(product)"
                    >
                      <button
                        class="rounded px-4 py-2 md:px-5 bg-button-homepage hover:bg-yellow-600 duration-300 text-white font-bold border-radius-6"
                      >
                        See Details
                      </button>
                    </router-link>
                  </div>
                </div>
              </slide>

              <template #addons>
                <navigation />
              </template>
            </carousel>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  name: "ProductDetailPage",
  data() {
    return {
      loading: true,
      activeTab: "keterangan",
      activeSlideIndex: 0, // Track the active slide index
      breakpoints: {
        600: {
          itemsToShow: 2,
          snapAlign: "start",
        },
        1000: {
          itemsToShow: 3,
          snapAlign: "start",
        },
        1200: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
      settings: {
        itemsToShow: 1,
        snapAlign: "start",
      },
    };
  },
  components: { Carousel, Slide, Navigation },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  computed: {
    ...mapState(["selectedProduct"]),
    ...mapState(["sameCategoryProducts"]),
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
    if (this.selectedProduct && this.selectedProduct.category) {
      this.fetchSameCategoryProducts(this.selectedProduct.category);
    }
    this.updateDocumentTitle(); // Call the method to update the document title
    console.log(this.selectedProduct);
  },
  methods: {
    ...mapActions(["fetchSameCategoryProducts"]),
    ...mapMutations(["setSelectedProduct"]),
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
    getImageSource(product) {
      const imagePath = `/assets/images/product/${product.image}`;
      return imagePath;
    },
    afterSlide(index) {
      this.activeSlideIndex = index;
    },
    selectProduct(product) {
      this.setSelectedProduct(product);
    },
    truncateProductName(name) {
      const maxLength = 18;
      if (name.length <= maxLength) {
        return name;
      } else {
        return name.substring(0, maxLength) + "...";
      }
    },
  },
};
</script>

<style scoped>
h1 {
  color: var(--primary-black, #2b2b28);
  font-weight: 500;
}
.img-product {
  width: 352.255px;
  height: 500px;
}
.container-img-product {
  width: 372.255px;
  height: 530px;
  transition: all 0.3s;
  background: #f8f8f8;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
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
.bg-button {
  border-radius: 6px;
  padding: 12px 20px;
  background: var(--primary-gold, #c79e2a);
}
</style>
