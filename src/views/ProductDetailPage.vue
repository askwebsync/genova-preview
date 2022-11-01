<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container mx-auto">
    <div class="py-6 px-4 lg:px-6 lg:py-12 xl:px-12">
      <div
        class="flex flex-col my-12 px-4 gap-y-6 items-center"
        v-if="productShow"
      >
        <div class="flex flex-col md:flex-row mb-12 gap-12">
          <!-- image-->
          <div
            class="w-full md:w-1/2 center card-shadow-tiga max-w-xl self-start"
          >
            <img
              :src="productShow[1].image"
              :alt="productShow[1].name"
              class="w-full h-full object-contain rounded-t-xl"
            />
          </div>

          <!-- items detail -->
          <div class="w-full md:w-1/2 flex flex-col md:ml-5">
            <!-- Name + Info -->
            <div class="flex flex-col my-4 text-left max-w-xl">
              <div class="mb-6">
                <h1 class="pcolor mb-2 text-lg md:text-xl lg:text-2xl">
                  {{ productShow[1].name }}
                </h1>
                <hr class="h-1 rounded w-28 background-navbar border-0" />
              </div>

              <div class="flex flex-col gap-1 mb-6">
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
              <div class="text-left mt-3 md:mt-6 cursor-pointer">
                <a
                  :href="productShow[1].link"
                  class="rounded-md px-4 py-3 text-white background-yellow hover:bg-yellow-600 duration-300"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="background-yellow">
          <div class="w-100 mt-4 mx-2">
            <!-- <h1
              class="text-white mb-4 text-xs md:text-base lg:text-lg xl:text-xxl"
            >
              Details
            </h1> -->

            <table class="text-left">
              <tr class="border-b-2 border-white h-16">
                <td class="w-1/2 md:w-1/6">
                  <p class="text-md my-1">Rating</p>
                </td>
                <td><p class="text-md my-1">94</p></td>
              </tr>
              <tr class="border-b-2 border-white h-16">
                <td class="w-1/2 md:w-1/6">
                  <p class="text-md my-1">Ingredient</p>
                </td>
                <td>
                  <p class="text-md my-1">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nam ratione sequi, saepe enim id suscipit illum ipsa vero
                    nisi, dolorem blanditiis! Explicabo expedita id nulla
                    adipisci ipsum aspernatur omnis repellat.
                  </p>
                </td>
              </tr>
              <tr class="border-b-2 border-white h-16">
                <td class="w-1/2 md:w-1/6">
                  <p class="text-md my-1">Tasting Notes</p>
                </td>
                <td>
                  <p class="text-md my-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae, expedita placeat, officia ex, earum minima libero
                    nisi corrupti labore sit laudantium porro possimus magnam
                    facere nulla repellat itaque corporis pariatur.
                  </p>
                </td>
              </tr>
              <tr class="h-16">
                <td class="w-1/2 md:w-1/6">
                  <p class="text-md my-1">Color</p>
                </td>
                <td>
                  <p class="text-md my-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus distinctio saepe quibusdam perspiciatis dolorem
                    animi, adipisci rem natus! Cupiditate aliquid, reiciendis
                    quibusdam ipsa et velit quas atque praesentium iure
                    nesciunt.
                  </p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "ProductDetailPage",
  props: {
    dataProduk: String,
  },
  components: {},
  data() {
    return {
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
<style scoped></style>
