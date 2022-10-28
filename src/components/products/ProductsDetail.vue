<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container mx-auto">
    <div class="py-6 px-4 lg:px-6 lg:py-12 xl:px-12">
      <div class="flex flex-col md:flex-row my-12 px-4 gap-14 items-center">
        <!-- image-->
        <div class="w-1/2 center card-shadow-tiga">
          <img
            src="../../assets/images/product/powder/powder-darkchocolate.png"
            alt="Product"
            class="w-96 h-full object-contain rounded-t-xl"
          />
        </div>
        <!-- items detail -->
        <div class="w-1/2 flex flex-col gap-2">
          <!-- Name + Info -->
          <div class="flex flex-col gap-6 my-4 text-left max-w-xl">
            <h1 class="text-4xl pcolor md:text5xl">
              {{ JSON.parse(product) }}
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
            <p class="text-xl text-gray-600">{{}}</p>
            <!-- Button-->
            <div class="text-left md:mt-6">
              <button
                class="rounded-md px-4 py-2 text-white background-yellow hover:bg-green-600 duration-300"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Powder Avocado",
          image: "powder-avocado.png",
          price: "150,000",
          categoryId: 1,
          productInfo: "",
          productLink: "",
        },
        {
          id: 2,
          name: "Powder Cappuccino",
          image: "powder-cappuccino.png",
          price: "139,000",
          categoryId: 1,
          productInfo: "",
          productLink: "",
        },
        {
          id: 3,
          name: "Powder Charcoal",
          image: "powder-charcoal.png",
          price: "159,000",
          categoryId: 1,
          productInfo: "",
          productLink: "",
        },
        {
          id: 4,
          name: "Powder Chocolate",
          image: "powder-chocolateclassic.png",
          price: "139,000",
          categoryId: 1,
          productInfo: "",
          productLink: "",
        },
        {
          id: 5,
          name: "Powder Cookies",
          image: "powder-cookiescream.png",
          price: "155,000",
          categoryId: 1,
          productInfo: "",
          productLink: "",
        },
        {
          id: 6,
          name: "Powder Cotton Candy",
          image: "powder-cottoncandy.png",
          price: "139,000",
          categoryId: 1,
          productInfo: "",
          productLink: "",
        },
        {
          id: 7,
          name: "Powder Dark Chocolate",
          image: "powder-darkchocolate.png",
          price: "139,000",
          categoryId: 1,
          productInfo: "",
          productLink: "",
        },
        {
          id: 8,
          name: "Powder Frappe Base",
          image: "powder-frappebase.png",
          price: "139,000",
          categoryId: 1,
          productInfo: "",
          productLink: "",
        },
        {
          id: 9,
          name: "Powder Greentea",
          image: "powder-greentea.png",
          price: "150,000",
          categoryId: 1,
          productInfo: "",
          productLink: "",
        },
        {
          id: 10,
          name: "Powder Macchiato",
          image: "powder-macchiato.png",
          price: "139,000",
          categoryId: 1,
          productInfo: "",
          productLink: "",
        },
        {
          id: 11,
          name: "Powder Matcha Latte",
          image: "powder-matchalatte.png",
          price: "169,000",
          categoryId: 1,
          productInfo: "",
          productLink: "",
        },
        {
          id: 12,
          name: "Powder Matcha Premium",
          image: "powder-matchapremium.png",
          price: "245,000",
          categoryId: 1,
          productInfo: "",
          productLink: "",
        },
        {
          id: 13,
          name: "Powder Mocha",
          image: "powder-mocha.png",
          price: "139,000",
          categoryId: 1,
          productInfo: "",
          productLink: "",
        },
        {
          id: 14,
          name: "Powder Mochaccino",
          image: "powder-mochaccino.png",
          price: "139,000",
          categoryId: 1,
          productInfo: "",
          productLink: "",
        },
        {
          id: 15,
          name: "Powder Red Velvet",
          image: "powder-redvelvet.png",
          price: "139,000",
          categoryId: 1,
          productInfo: "",
          productLink: "",
        },
        {
          id: 16,
          name: "Powder Thai Tea",
          image: "powder-thaitea.png",
          price: "139,000",
          categoryId: 1,
          productInfo: "",
          productLink: "",
        },
        {
          id: 17,
          name: "Powder Tiramisu",
          image: "powder-tiramisu.png",
          price: "139,000",
          categoryId: 1,
          productInfo: "",
          productLink: "",
        },
        {
          id: 18,
          name: "Fruit Blend Kiwi",
          image: "fruit_bland_kiwi.png",
          price: "109,000",
          categoryId: 2,
          productInfo: "",
          productLink: "",
        },
        {
          id: 19,
          name: "Fruit Blend Manggo",
          image: "fruit_bland_mango.png",
          price: "109,000",
          categoryId: 2,
          productInfo: "",
          productLink: "",
        },
        {
          id: 20,
          name: "Fruit Blend Passion",
          image: "fruit_bland_passion.png",
          price: "109,000",
          categoryId: 2,
          productInfo: "",
          productLink: "",
        },
        {
          id: 21,
          name: "Fruit Blend Pineapple",
          image: "fruit_bland_pineapple.png",
          price: "109,000",
          categoryId: 2,
          productInfo: "",
          productLink: "",
        },
        {
          id: 22,
          name: "Fruit Blend Raspberry",
          image: "fruit_bland_raspberry.png",
          price: "109,000",
          categoryId: 2,
          productInfo: "",
          productLink: "",
        },
        {
          id: 23,
          name: "Fruit Blend Strawberry",
          image: "fruit_bland_strawberry.png",
          price: "109,000",
          categoryId: 2,
          productInfo: "",
          productLink: "",
        },
        {
          id: 24,
          name: "Syrup Pineapple",
          image: "syrup pineapple.png",
          price: "97,000",
          categoryId: 3,
          productInfo: "",
          productLink: "",
        },
        {
          id: 25,
          name: "Syrup Raspberry",
          image: "syrup raspberry.png",
          price: "97,000",
          categoryId: 3,
          productInfo: "",
          productLink: "",
        },
        {
          id: 26,
          name: "Syrup Banana",
          image: "syrup_banana-removebg-preview.png",
          price: "97,000",
          categoryId: 3,
          productInfo: "",
          productLink: "",
        },
        {
          id: 27,
          name: "Syrup Blue Curacao",
          image: "syrup_blue_curacao-removebg-preview.png",
          price: "97,000",
          categoryId: 3,
          productInfo: "",
          productLink: "",
        },
        {
          id: 28,
          name: "Syrup Bubblegum",
          image: "syrup_bubble_gum-removebg-preview.png",
          price: "97,000",
          categoryId: 3,
          productInfo: "",
          productLink: "",
        },
        {
          id: 29,
          name: "Syrup Butterscotch",
          image: "syrup_butterscotch-removebg-preview.png",
          price: "97,000",
          categoryId: 3,
          productInfo: "",
          productLink: "",
        },
        {
          id: 30,
          name: "Syrup Caramel",
          image: "syrup_caramel-removebg-preview.png",
          price: "97,000",
          categoryId: 3,
          productInfo: "",
          productLink: "",
        },
        {
          id: 31,
          name: "Syrup Coconut",
          image: "syrup_coconut-removebg-preview.png",
          price: "97,000",
          categoryId: 3,
          productInfo: "",
          productLink: "",
        },
        {
          id: 32,
          name: "Syrup Ginger",
          image: "syrup_ginger-removebg-preview.png",
          price: "97,000",
          categoryId: 3,
          productInfo: "",
          productLink: "",
        },
        {
          id: 33,
          name: "Syrup Green Apple",
          image: "syrup_green_apple-removebg-preview.png",
          price: "97,000",
          categoryId: 3,
          productInfo: "",
          productLink: "",
        },
        {
          id: 34,
          name: "Syrup Hazelnut",
          image: "syrup_hazelnut-removebg-preview.png",
          price: "97,000",
          categoryId: 3,
          productInfo: "",
          productLink: "",
        },
        {
          id: 35,
          name: "Syrup Irish",
          image: "syrup_irish-removebg-preview.png",
          price: "97,000",
          categoryId: 3,
          productInfo: "",
          productLink: "",
        },
        {
          id: 36,
          name: "Syrup Kiwi",
          image: "syrup_kiwi-removebg-preview.png",
          price: "97,000",
          categoryId: 3,
          productInfo: "",
          productLink: "",
        },
        {
          id: 37,
          name: "Syrup Lemon",
          image: "syrup_lemon-removebg-preview.png",
          price: "97,000",
          categoryId: 3,
          productInfo: "",
          productLink: "",
        },
        {
          id: 38,
          name: "Syrup Lemongrass",
          image: "syrup_lemongrass-removebg-preview.png",
          price: "97,000",
          categoryId: 3,
          productInfo: "",
          productLink: "",
        },
        {
          id: 39,
          name: "Syrup Lychee",
          image: "syrup_lychee-removebg-preview.png",
          price: "97,000",
          categoryId: 3,
          productInfo: "",
          productLink: "",
        },
        {
          id: 40,
          name: "Syrup Manggo",
          image: "syrup_mango-removebg-preview.png",
          price: "97,000",
          categoryId: 3,
          productInfo: "",
          productLink: "",
        },
        {
          id: 41,
          name: "Syrup Mojito",
          image: "syrup_mojito_mint-removebg-preview.png",
          price: "97,000",
          categoryId: 3,
          productInfo: "",
          productLink: "",
        },
        {
          id: 42,
          name: "Syrup Pandan",
          image: "syrup_pandan-removebg-preview.png",
          price: "97,000",
          categoryId: 3,
          productInfo: "",
          productLink: "",
        },
        {
          id: 43,
          name: "Syrup Passion Fruit",
          image: "syrup_passion_fruit-removebg-preview.png",
          price: "97,000",
          categoryId: 3,
          productInfo: "",
          productLink: "",
        },
        {
          id: 44,
          name: "Syrup Peach",
          image: "syrup_peach-removebg-preview.png",
          price: "97,000",
          categoryId: 3,
          productInfo: "",
          productLink: "",
        },
        {
          id: 45,
          name: "Syrup Peppermint",
          image: "syrup_peppermint-removebg-preview.png",
          price: "97,000",
          categoryId: 3,
          productInfo: "",
          productLink: "",
        },
        {
          id: 46,
          name: "Syrup Strawberry",
          image: "syrup_strawberry-removebg-preview.png",
          price: "97,000",
          categoryId: 3,
          productInfo: "",
          productLink: "",
        },
        {
          id: 47,
          name: "Syrup Tiramisu",
          image: "syrup_tiramisu-removebg-preview.png",
          price: "97,000",
          categoryId: 3,
          productInfo: "",
          productLink: "",
        },
        {
          id: 48,
          name: "Syrup Vanilla",
          image: "syrup_vanilla-removebg-preview.png",
          price: "97,000",
          categoryId: 3,
          productInfo: "",
          productLink: "",
        },
      ],
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
  created() {
    this.checkID;
  },
  methods: {
    checkID() {
      console.log(this.$route.params.id);
      for (let i = 0; i < this.products.length; i++) {
        if (this.$route.params.id === this.products.id) {
          this.productShow.push(this.products);
          console.log(this.productShow);
          return this.productShow;
        }
      }
    },
  },
};
</script>
<style scoped></style>
