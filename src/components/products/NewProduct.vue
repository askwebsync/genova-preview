<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container mx-auto">
    <div class="mt-6 p-6 md:px-2 lg:px-6 lg:py-12 xl:px-12">
      <div class="flex flex-row">
        <h1 class="text-left pcolor mb-3 font-semibold text-xl">NEW FLAVOUR</h1>
        <!-- <div class="rating space-y-6">
          <p class="slider1"></p>
          <p class="slider2"></p>
          <p class="slider3"></p>
        </div> -->
      </div>
      <hr class="h-1 rounded w-32 background-navbar border-0" />
      <div
        class="grid md:grid-cols-3 lg:grid-cols-4 justify-items-center justify-center gap-12 mt-10 mb-5"
      >
        <div
          class="flex flex-col max-w-lg mx-4 p-4 card-color-satu md:p-6 items-center"
        >
          <router-link to="/detail-product">
            <img
              src="../../assets/images/product/powder/powder-cookiescream.png"
              alt="Product"
              class="w28 h-28 md:w-52 md:h-52 object-contain rounded-t-xl"
            />
          </router-link>
          <div class="flex flex-col gap-3 p-5">
            <p
              class="text-lg font-semibold text-black truncate block capitalize"
            >
              Cookies & Cream
            </p>
            <p class="text-lg text-gray-600">RP. 155,000</p>
            <div class="mt-6">
              <button
                class="rounded-lg px-4 py-2 background-yellow hover:bg-yellow-600 duration-300 text-white font-bold"
              >
                See More
              </button>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col max-w-lg mx-4 p-4 card-color-satu md:p-6 items-center"
        >
          <a href="#">
            <img
              src="../../assets/images/product/syrup/syrup_pineapple.png"
              alt="Product"
              class="w28 h-28 md:w-52 md:h-52 object-contain rounded-t-xl"
            />
          </a>
          <div class="flex flex-col gap-3 p-5">
            <p
              class="text-lg font-semibold text-black truncate block capitalize"
            >
              Pineapple
            </p>
            <p class="text-lg text-gray-600">RP. 97,000</p>
            <div class="mt-6">
              <button
                class="rounded-lg px-4 py-2 background-yellow hover:bg-yellow-600 duration-300 text-white font-bold"
              >
                See More
              </button>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col max-w-lg mx-4 p-4 card-color-satu md:p-6 items-center"
        >
          <a href="#">
            <img
              src="../../assets/images/product/syrup/syrup_raspberry.png"
              alt="Product"
              class="w28 h-28 md:w-52 md:h-52 object-contain rounded-t-xl"
            />
          </a>
          <div class="flex flex-col gap-3 p-5">
            <p
              class="text-lg font-semibold text-black truncate block capitalize"
            >
              Raspberry
            </p>
            <p class="text-lg text-gray-600">RP. 97,000</p>
            <div class="mt-6">
              <button
                class="rounded-lg px-4 py-2 background-yellow hover:bg-yellow-600 duration-300 text-white font-bold"
              >
                See More
              </button>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col max-w-lg mx-4 p-4 card-color-satu md:p-6 items-center"
        >
          <a href="#">
            <img
              src="../../assets/images/product/syrup/syrup_tiramisu.png"
              alt="Product"
              class="w28 h-28 md:w-52 md:h-52 object-contain rounded-t-xl"
            />
          </a>
          <div class="flex flex-col gap-3 p-5">
            <p
              class="text-lg font-semibold text-black truncate block capitalize"
            >
              Tiramisu
            </p>
            <p class="text-lg text-gray-600">RP. 97,000</p>
            <div class="mt-6">
              <button
                class="rounded-lg px-4 py-2 background-yellow hover:bg-yellow-600 duration-300 text-white font-bold"
              >
                See More
              </button>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col max-w-lg mx-4 p-4 card-color-satu md:p-6 items-center"
        >
          <a href="#">
            <img
              src="../../assets/images/product/syrup/syrup_coconut.png"
              alt="Product"
              class="w28 h-28 md:w-52 md:h-52 object-contain rounded-t-xl"
            />
          </a>
          <div class="flex flex-col gap-3 p-5">
            <p
              class="text-lg font-semibold text-black truncate block capitalize"
            >
              Coconut
            </p>
            <p class="text-lg text-gray-600">RP. 97,000</p>
            <div class="mt-6">
              <button
                class="rounded-lg px-4 py-2 background-yellow hover:bg-yellow-600 duration-300 text-white font-bold"
              >
                See More
              </button>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col max-w-lg mx-4 p-4 card-color-satu md:p-6 items-center"
        >
          <a href="#">
            <img
              src="../../assets/images/product/syrup/syrup_butterscotch.png"
              alt="Product"
              class="w28 h-28 md:w-52 md:h-52 object-contain rounded-t-xl"
            />
          </a>
          <div class="flex flex-col gap-3 p-5">
            <p
              class="text-lg font-semibold text-black truncate block capitalize"
            >
              Butterscotch
            </p>
            <p class="text-lg text-gray-600">RP. 97,000</p>
            <div class="mt-6">
              <button
                class="rounded-lg px-4 py-2 background-yellow hover:bg-yellow-600 duration-300 text-white font-bold"
              >
                See More
              </button>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col max-w-lg mx-4 p-4 card-color-satu md:p-6 items-center"
        >
          <a href="#">
            <img
              src="../../assets/images/product/syrup/syrup_lemon.png"
              alt="Product"
              class="w28 h-28 md:w-52 md:h-52 object-contain rounded-t-xl"
            />
          </a>
          <div class="flex flex-col gap-3 p-5">
            <p
              class="text-lg font-semibold text-black truncate block capitalize"
            >
              Lemon
            </p>
            <p class="text-lg text-gray-600">RP. 97,000</p>
            <div class="mt-6">
              <button
                class="rounded-lg px-4 py-2 background-yellow hover:bg-yellow-600 duration-300 text-white font-bold"
              >
                See More
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
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Syrup Pineapple",
          image: "syrup pineapple.png",
          price: "97,000",
        },
        {
          id: 2,
          name: "Syrup Raspberry",
          image: "syrup raspberry.png",
          price: "97,000",
        },
        {
          id: 4,
          name: "Syrup Banana",
          image: "syrup_banana-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 5,
          name: "Syrup Blue Curacao",
          image: "syrup_blue_curacao-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 6,
          name: "Syrup Bubblegum",
          image: "syrup_bubble_gum-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 7,
          name: "Syrup Butterscotch",
          image: "syrup_butterscotch-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 8,
          name: "Syrup Caramel",
          image: "syrup_caramel-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 9,
          name: "Syrup Coconut",
          image: "syrup_coconut-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 10,
          name: "Syrup Ginger",
          image: "syrup_ginger-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 11,
          name: "Syrup Green Apple",
          image: "syrup_green_apple-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 12,
          name: "Syrup Hazelnut",
          image: "syrup_hazelnut-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 13,
          name: "Syrup Irish",
          image: "syrup_irish-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 14,
          name: "Syrup Kiwi",
          image: "syrup_kiwi-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 15,
          name: "Syrup Lemon",
          image: "syrup_lemon-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 16,
          name: "Syrup Lemongrass",
          image: "syrup_lemongrass-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 17,
          name: "Syrup Lychee",
          image: "syrup_lychee-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 18,
          name: "Syrup Manggo",
          image: "syrup_mango-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 19,
          name: "Syrup Mojito",
          image: "syrup_mojito_mint-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 20,
          name: "Syrup Pandan",
          image: "syrup_pandan-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 21,
          name: "Syrup Passion Fruit",
          image: "syrup_passion_fruit-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 22,
          name: "Syrup Peach",
          image: "syrup_peach-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 23,
          name: "Syrup Peppermint",
          image: "syrup_peppermint-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 24,
          name: "Syrup Strawberry",
          image: "syrup_strawberry-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 25,
          name: "Syrup Tiramisu",
          image: "syrup_tiramisu-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 26,
          name: "Syrup Vanilla",
          image: "syrup_vanilla-removebg-preview.png",
          price: "97,000",
        },
      ],
      searchQuery: "",
    };
  },
  computed: {
    // Get the filtered projects
    resultQuery() {
      if (this.searchQuery) {
        return this.products.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.products;
      }
    },
  },
  methods: {
    shareData() {
      // this.$router.push({
      //   name: "detail-product",
      //   // eslint-disable-next-line no-undef
      //   params: JSON.stringify(product),
      // });
      this.$router.push({
        name: "detail-product",
        // params: {
        //   objectParam: JSON.stringify({ a: "a" }),
        // },
      });
    },
  },
};
</script>

<style scoped>
.carousel {
  width: 170px;
  overflow: hidden;
}

.inner {
  transition: transform 0.2s;
  white-space: nowrap;
}

/* optional */
button {
  margin-right: 5px;
  margin-top: 10px;
}
.background {
  background: #fffbe8;
}
</style>
