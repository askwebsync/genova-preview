<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container mx-auto">
    <div class="py-6 px-4 lg:px-6 lg:py-12 xl:px-12">
      <div
        class="flex flex-col md:flex-row my-12 px-4 gap-14 items-center"
        v-if="products"
      >
        <!-- image-->
        <div class="w-1/2 center card-shadow-tiga">
          <img
            :src="products.image"
            :alt="products.name"
            class="w-96 h-full object-contain rounded-t-xl"
          />
        </div>
        <!-- items detail -->
        <div class="w-1/2 flex flex-col gap-2">
          <!-- Name + Info -->
          <div class="flex flex-col gap-6 my-4 text-left max-w-xl">
            <h1 class="pcolor mb-3 text-xs md:text-base lg:text-lg xl:text-xl">
              {{ products.name }}
            </h1>

            <p class="text-lg p-1">
              Syrup GENOVA Hazelnut 750 ML Syrup Hazelnut GENOVA adalah salah
              satu dari tiga rasa flavour kopi spesial teratas, bersama dengan
              vanilla dan karamel, sirup GENOVA Hazelnut menghadirkan rasa dan
              aroma hazelnut yang segar dengan sentuhan almond dan vanilla
            </p>
            <p class="text-lg p-1">
              ini banyak tumbuh di Turki, Italia, Yunani, Spanyol, Inggris,
              Amerika Serikat khususnya di Washington. Saat ini produsen
              terbesar penghasil hazelnut di dunia adalah negara Turki.
            </p>
          </div>
          <hr class="h-1 rounded w-full background-navbar border-0" />
          <!-- Rating + price -->
          <div class="flex flex-col gap-3 text-left my-2">
            <div class="flex gap-2">
              <div>
                <span class="fa fa-star checked fa-sm md:fa-2x"></span>
                <span class="fa fa-star checked fa-sm md:fa-2x"></span>
                <span class="fa fa-star checked fa-sm md:fa-2x"></span>
                <span class="fa fa-star fa-sm md:fa-2x"></span>
                <span class="fa fa-star fa-sm md:fa-2x"></span>
              </div>
              <div class=""><p class="text-lg">(4,9)</p></div>
            </div>
            <p class="text-xl text-gray-600">
              {{ "RP" + " " + products.price }}
            </p>
            <!-- Button-->
            <div class="text-left md:mt-6">
              <a
                :href="products.link"
                class="rounded-md px-4 py-2 text-white background-yellow hover:bg-yellow-600 duration-300"
              >
                Buy Now
              </a>
            </div>
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
          price: "",
          categoryId: 0,
          productInfo: "",
          productLink: "",
        },
      ],
    };
  },
  mounted() {
    this.parsingProduct;
    this.checkID;
  },
  methods: {
    parsingProduct() {
      this.productShow.push(JSON.parse(this.dataProduk));
      console.log(this.productShow);
      return this.productShow;
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
