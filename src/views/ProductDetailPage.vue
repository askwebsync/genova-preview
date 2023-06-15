<template>
  <div>
    <PageLoader v-if="isLoaded" />
    <section class="container mx-auto">
      <div class="px-4 py-6 md:px-8 lg:px-24 lg:py-10" v-if="!isLoaded">
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
            <li
              class="inline-flex items-center"
              v-if="productShow[1].category === 'fruitBlend'"
            >
              <a
                href="/products/fruit-bland"
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
              v-if="productShow[1].category === 'powder'"
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
              v-if="productShow[1].category === 'Flavoured'"
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
                  class="ml-1 text-sm font-medium md:ml-2 pcolor hover:text-yellow-600"
                  >{{ productShow[1].name }}</span
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
                :src="productShow[1].image"
                :alt="productShow[1].name"
                class="object-cover object-center h-72 md:h-96 rounded-t-xl"
              />
            </div>
            <!-- Item Info -->
            <div class="flex flex-col justify-between gap-6">
              <div class="flex flex-col gap-4">
                <div class="flex flex-col">
                  <h1
                    class="text-black mb-1 text-lg lg:text-2xl uppercase font-semibold"
                  >
                    {{ productShow[1].name }}
                  </h1>
                  <hr
                    class="h-1 rounded bg-yellow-500 w-full lg:w-56 mx-auto lg:mx-0"
                  />
                </div>
                <div>
                  <p class="text-2xl text-black font-medium">
                    {{ "Rp" + productShow[1].price }}
                  </p>
                </div>
              </div>

              <p class="text-lg lg:text-xl text-gray-700 whitespace-pre-line">
                {{ productShow[1].info }}
              </p>
              <div>
                <a :href="productShow[1].link" class="w-full">
                  <button
                    class="bg-black hover:text-white p-3 lg:p-4 text-white hover:border-transparent rounded-lg w-full font-semibold"
                  >
                    Buy Now
                  </button>
                </a>
              </div>
            </div>
          </div>
          <!-- Item Detail Info -->
          <div class="self-start w-full mt-8">
            <div>
              <h1
                class="text-center text-xl lg:text-2xl rounded-t-lg bg-[#bdb76b] text-white py-2"
              >
                Details
              </h1>
              <hr
                class="border border-solid border-2 border-[#bdb76b] border-black"
              />
            </div>
            <table class="m-1 md:m-2 lg:m-3">
              <tr class="border-b-2 h-auto border-[#bdb76b]">
                <td class="w-1/2 md:w-1/6 text-left">
                  <p class="m-4 text-lg md:text-xl md:m-5 details font-bold">
                    Category
                  </p>
                </td>
                <td class="text-left px-4 lg:px-6">
                  <p class="m-3 text-lg md:text-xl">
                    {{
                      productShow[1].category === "fruitBlend"
                        ? "Fruit Blend"
                        : productShow[1].category === "Flavoured"
                        ? "Flavoured Syrup"
                        : "Powder"
                    }}
                  </p>
                </td>
              </tr>
              <tr class="border-b-2 h-auto border-[#bdb76b]">
                <td class="w-1/2 md:w-1/6 text-left py-2">
                  <p class="m-4 text-lg md:text-xl md:m-5 details font-bold">
                    Packaging
                  </p>
                </td>
                <td class="text-left px-4 lg:px-6">
                  <p class="my-6 text-lg md:text-xl">
                    {{ productShow[1].packaging }}
                  </p>
                </td>
              </tr>
              <tr class="border-b-2 h-16 border-[#bdb76b]">
                <td class="w-1/2 md:w-1/6 text-left py-2">
                  <p class="m-4 text-lg md:text-xl md:m-5 details font-bold">
                    Weight
                  </p>
                </td>
                <td class="text-left px-4 lg:px-6">
                  <p class="my-6 text-lg md:text-xl">
                    {{ productShow[1].weight }}
                  </p>
                </td>
              </tr>
              <tr class="border-b-2 h-16 border-[#bdb76b]">
                <td class="w-1/2 md:w-1/6 text-left py-2">
                  <p class="m-4 text-lg md:text-xl md:m-5 details font-bold">
                    Color
                  </p>
                </td>
                <td class="text-left px-4 lg:px-6">
                  <p class="my-6 text-lg md:text-xl">
                    {{ productShow[1].color }}
                  </p>
                </td>
              </tr>
              <tr class="border-b-2 h-16 border-[#bdb76b]">
                <td class="w-1/2 md:w-1/6 text-left py-2">
                  <p class="m-4 text-lg md:text-xl md:m-5 details font-bold">
                    Tasting
                  </p>
                </td>
                <td class="text-left px-4 lg:px-6">
                  <p class="my-6 text-lg md:text-xl">{{ isON2() }}</p>
                </td>
              </tr>
              <tr class="border-b-2 h-16 border-[#bdb76b]">
                <td class="w-1/2 md:w-1/6 text-left py-2">
                  <p class="m-4 text-lg md:text-xl md:m-5 details font-bold">
                    Serving Suggestions
                  </p>
                </td>
                <td class="text-left px-4 lg:px-6">
                  <p class="my-6 text-lg md:text-xl">{{ isON() }}</p>
                </td>
              </tr>
              <tr class="h-16">
                <td class="w-1/2 md:w-1/6 text-left py-2">
                  <p class="m-4 text-lg md:text-xl md:m-5 details font-bold">
                    Keeping Suggestions
                  </p>
                </td>
                <td class="text-left px-4 lg:px-6">
                  <p class="my-6 text-lg md:text-xl">
                    {{ productShow[1].penyimpanan }}
                  </p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageLoader from "../components/PageLoader.vue";
export default {
  name: "ProductDetailPage",
  props: {
    dataProduk: String,
  },
  components: {
    PageLoader,
  },
  data() {
    return {
      isLoaded: true,
      products: [],
      productID: 0,
      productShow: [
        {
          id: 0,
          name: "",
          image: "",
          imageDetail: "",
          price: "",
          categoryId: 0,
          productInfo: "",
          productLink: "",
        },
      ],
    };
  },
  created() {
    this.productShow.push(JSON.parse(this.dataProduk));
    // Fetch additional data or perform any other necessary actions
    // ...
    // Set isLoaded to false once all data has been loaded
    this.isLoaded = false;
  },
  mounted() {
    if (this.productShow.length != 0) {
      this.products.push(this.productShow.slice(-1));
      console.log(this.products);
      this.productShow.push(JSON.parse(this.dataProduk));
      console.log(this.productShow);
      return this.productShow[this.productShow.length - 1];
    }
  },
  methods: {
    parsingProduct() {
      if (this.productShow.length != 0) {
        this.products.push(this.productShow.slice(-1));
        console.log(this.products);
        this.productShow.push(JSON.parse(this.dataProduk));
        console.log(this.productShow);
        return this.productShow;
      }
    },
    checkID() {
      if (this.productShow.length != 0) {
        this.products.push(this.productShow.slice(-1));
      }
      console.log(this.products);
      return this.products;
    },
    isON() {
      if (this.productShow[1].serving) {
        return this.productShow[1].serving;
      }
      return "-";
    },
    isON2() {
      if (this.productShow[1].tasting) {
        return this.productShow[1].tasting;
      }
      return "-";
    },
  },
};
</script>
