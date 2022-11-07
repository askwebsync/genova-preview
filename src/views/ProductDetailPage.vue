<template>
  <section class="container mx-auto">
    <div v-if="isLoaded">
      <PageLoader />
    </div>
    <div class="my-12 px-4 lg:px-6 lg:py-12 xl:px-12" v-if="!isLoaded">
      <nav class="flex ml-10 md:mb-10" aria-label="Breadcrumb">
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
      <div class="flex flex-col px-4 gap-y-12 items-center" v-if="productShow">
        <div class="flex flex-col md:flex-row mb-12 gap-12 lg:gap-24">
          <!-- image-->
          <div
            class="w-full md:w-1/2 center max-w-xl self-start lg:self-center lg:mr-12"
          >
            <img
              :src="productShow[1].image"
              :alt="productShow[1].name"
              class="w-full h-72 md:h-96 object-contain rounded-t-xl"
            />
          </div>

          <!-- items detail -->
          <div class="w-full md:w-1/2 flex flex-col md:ml-5">
            <!-- Name + Info -->
            <div class="flex flex-col text-left max-w-xl">
              <div class="mb-6">
                <h1 class="pcolor mb-1 text-2xl lg:text-2xl">
                  {{ productShow[1].name }}
                </h1>
                <hr class="h-1 rounded w-44 background-navbar border-0" />
              </div>

              <div class="flex flex-col gap-1 mb-2">
                <p class="text-lg text-gray-400 whitespace-pre-wrap">
                  {{ productShow[1].info }}
                </p>
              </div>
            </div>

            <!-- Rating + price -->
            <div class="flex flex-col gap-3 mt-2">
              <!-- <div class="flex gap-2 text-center">
                <div>
                  <span class="fa fa-star checked fa-sm md:fa-2x"></span>
                  <span class="fa fa-star checked fa-sm md:fa-2x"></span>
                  <span class="fa fa-star checked fa-sm md:fa-2x"></span>
                  <span class="fa fa-star checked fa-sm md:fa-2x"></span>
                  <span class="fa fa-star fa-sm md:fa-2x"></span>
                </div>
                <div class=""><p class="text-lg">(4,9)</p></div>
              </div> -->
              <p class="text-2xl text-black text-left">
                {{ "RP." + " " + productShow[1].price }}
              </p>
              <!-- Button-->
            </div>
            <div class="mt-6 md:mt-6 cursor-pointer w-full">
              <a
                :href="productShow[1].link"
                class="block text-center rounded-md p-3 text-white background-yellow hover:bg-yellow-600 duration-300"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div class="background-yellow self-start w-full mt-4">
          <h1
            class="mt-3 mb-8 text-white underline text-center underline-offset-8 decoration-white text-xl lg:text-2xl"
          >
            Details
          </h1>
          <table class="w-auto m-1 md:m-4">
            <tr class="border-b-2 border-white h-auto text-white">
              <td class="w-1/2 md:w-1/6 text-left py-2">
                <p class="m-2 text-lg md:text-xl lg:m-4 details">Category</p>
              </td>
              <td class="text-left px-2 md:px-4 lg:px-6">
                <p
                  class="m-2 text-lg md:text-xl lg:m-3"
                  v-if="productShow[1].category === 'fruitBlend'"
                >
                  Fruit Blend
                </p>
                <p
                  class="m-2 text-lg md:text-xl lg:m-3"
                  v-if="productShow[1].category === 'Flavoured'"
                >
                  Flavoured Syrup
                </p>
                <p
                  class="m-2 text-lg md:text-xl lg:m-3"
                  v-if="productShow[1].category === 'powder'"
                >
                  Powder
                </p>
              </td>
            </tr>
            <tr class="border-b-2 border-white h-auto text-white">
              <td class="w-1/2 md:w-1/6 text-left py-2">
                <p class="m-2 text-lg md:text-xl lg:m-4 details">Packaging</p>
              </td>
              <td class="text-left px-2 md:px-4 lg:px-6">
                <p class="m-2 text-lg md:text-xl lg:m-4">
                  {{ productShow[1].packaging }}
                </p>
              </td>
            </tr>
            <tr class="border-b-2 border-white h-16 text-white">
              <td class="w-1/2 md:w-1/6 text-left py-2">
                <p class="m-2 text-lg md:text-xl lg:m-4 details">Weight</p>
              </td>
              <td class="text-left px-2 md:px-4 lg:px-6">
                <p class="m-2 text-lg md:text-xl lg:m-4">
                  {{ productShow[1].weight }}
                </p>
              </td>
            </tr>
            <tr class="border-b-2 border-white h-16 text-white">
              <td class="w-1/2 md:w-1/6 text-left py-2">
                <p class="m-2 text-lg md:text-xl lg:m-4 details">Color</p>
              </td>
              <td class="text-left px-2 md:px-4 lg:px-6">
                <p class="m-2 text-lg md:text-xl lg:m-4">
                  {{ productShow[1].color }}
                </p>
              </td>
            </tr>
            <tr class="border-b-2 border-white h-16 text-white">
              <td class="w-1/2 md:w-1/6 text-left py-2">
                <p class="m-2 text-lg md:text-xl lg:m-4 details">Tasting</p>
              </td>
              <td class="text-left px-2 md:px-4 lg:px-6">
                <p class="m-2 text-lg md:text-xl lg:m-4">
                  {{ productShow[1].tasting }}
                </p>
              </td>
            </tr>
            <tr class="border-b-2 border-white h-16 text-white">
              <td class="w-1/2 md:w-1/6 text-left py-2">
                <p class="m-2 text-lg md:text-xl lg:m-4 details">
                  Serving Suggestions
                </p>
              </td>
              <td class="text-left px-2 md:px-4 lg:px-6">
                <p class="m-2 text-lg md:text-xl lg:m-4">
                  {{ productShow[1].serving }}
                </p>
              </td>
            </tr>
            <tr class="h-16 text-white">
              <td class="w-1/2 md:w-1/6 text-left py-2">
                <p class="m-2 text-lg md:text-xl lg:m-4 details">
                  Keeping Suggestions
                </p>
              </td>
              <td class="text-left px-2 md:px-4 lg:px-6">
                <p class="m-2 text-lg md:text-xl lg:m-4">
                  {{ productShow[1].penyimpanan }}
                </p>
              </td>
            </tr>
            <!-- <tr class="h-16">
                <td class="w-1/2 md:w-1/6 text-left">
                  <p class="m-2 text-lg lg:text-xl lg:m-4 ">Packaging</p>
                </td>
                <td class="text-left px-2 md:px-4 lg:px-6">
                  <p class="m-2 text-lg lg:text-xl lg:m-4 ">
                    {{ productShow[1].size }}
                  </p>
                </td>
              </tr> -->
          </table>
        </div>
      </div>
    </div>
  </section>
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
  mounted() {
    setTimeout(
      function () {
        this.isLoaded = !this.isLoaded;
      }.bind(this),
      1500
    );
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
        // if (this.products.length != 0) {
        //   this.products.image.substr(3);
        //   console.log(this.products);
        //   return this.products;
        // }
      }
      console.log(this.products);
      return this.products;
    },
  },
};
</script>
