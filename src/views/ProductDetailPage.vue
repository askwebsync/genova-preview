<template>
  <section class="container mx-auto">
    <div v-if="isLoaded">
      <PageLoader />
    </div>
    <div class="my-12 px-4 lg:px-6 lg:py-12 xl:px-12" v-if="!isLoaded">
      <div class="flex flex-col px-4 gap-y-6 items-center" v-if="productShow">
        <div class="flex flex-col md:flex-row mb-12 gap-12 lg:gap-24">
          <!-- image-->
          <div class="w-full md:w-1/2 center max-w-xl self-start">
            <img
              :src="productShow[1].image"
              :alt="productShow[1].name"
              class="w-full h-full object-contain rounded-t-xl"
            />
          </div>

          <!-- items detail -->
          <div class="w-full md:w-1/2 flex flex-col md:ml-5">
            <!-- Name + Info -->
            <div class="flex flex-col text-left max-w-xl">
              <div class="mb-6">
                <h1 class="pcolor mb-2 text-2xl lg:text-2xl">
                  {{ productShow[1].name }}
                </h1>
                <hr class="h-1 rounded w-44 background-navbar border-0" />
              </div>

              <div class="flex flex-col gap-1 mb-2">
                <p class="text-lg md:text-xl">
                  {{ productShow[1].info }}
                </p>
              </div>
            </div>

            <!-- Rating + price -->
            <div class="flex flex-col gap-3 text-left my-2">
              <div class="flex gap-2">
                <div>
                  <span class="fa fa-star checked fa-sm md:fa-2x"></span>
                  <span class="fa fa-star checked fa-sm md:fa-2x"></span>
                  <span class="fa fa-star checked fa-sm md:fa-2x"></span>
                  <span class="fa fa-star checked fa-sm md:fa-2x"></span>
                  <span class="fa fa-star fa-sm md:fa-2x"></span>
                </div>
                <div class=""><p class="text-lg">(4,9)</p></div>
              </div>
              <p class="text-xl text-black">
                {{ "RP" + " " + productShow[1].price }}
              </p>
              <!-- Button-->
              <div class="text-left mt-4 md:mt-6 cursor-pointer">
                <a
                  :href="productShow[1].link"
                  class="rounded-md p-4 text-white background-yellow hover:bg-yellow-600 duration-300"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="background-yellow self-start w-full">
          <h1
            class="my-2 ml-7 text-white underline underline-offset-8 decoration-white text-xl lg:text-2xl"
          >
            Details
          </h1>
          <table class="w-auto md:m-4">
            <tr class="border-b-2 border-white h-auto text-white">
              <td class="w-1/2 md:w-1/6 text-left">
                <p class="m-2 text-lg md:text-xl lg:m-4 details ">Size</p>
              </td>
              <td class="text-left">
                <p class="m-2 text-lg md:text-xl lg:m-4">
                  {{ productShow[1].packaging }}
                </p>
              </td>
            </tr>
            <tr class="border-b-2 border-white h-16 text-white">
              <td class="w-1/2 md:w-1/6 text-left">
                <p class="m-2 text-lg md:text-xl lg:m-4 details">Weight</p>
              </td>
              <td class="text-left">
                <p class="m-2 text-lg md:text-xl lg:m-4">
                  {{ productShow[1].weight }}
                </p>
              </td>
            </tr>
            <tr class="h-16 text-white">
              <td class="w-1/2 md:w-1/6 text-left">
                <p class="m-2 text-lg md:text-xl lg:m-4 details">
                  Serving Suggestions
                </p>
              </td>
              <td class="text-left">
                <p class="m-2 text-lg md:text-xl lg:m-4">
                  {{ productShow[1].serving }}
                </p>
              </td>
            </tr>
            <!-- <tr class="h-16">
                <td class="w-1/2 md:w-1/6 text-left">
                  <p class="m-2 text-lg lg:text-xl lg:m-4 ">Packaging</p>
                </td>
                <td class="text-left">
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
