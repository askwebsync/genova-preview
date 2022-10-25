<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container mx-auto">
    <div class="mt-2 p-4 lg:p-6 lg:py-12 xl:p-12">
      <div
        class="flex flex-col gap-y-12 md:flex md:flex-row md:justify-between md:gap-x-2"
      >
        <div class="p-2">
          <h1 class="text-left pcolor mb-2 font-semibold text-xl md:text-2xl">
            LIQUID SYRUP
          </h1>
          <hr class="h-1 rounded w-28 background-navbar border-0" />
        </div>

        <div class="flex justify-between pb-3 gap-2">
          <div class="max-w-md mx-auto">
            <div
              class="relative flex items-center w-full h-12 rounded-lg border-2 bg-white overflow-hidden"
            >
              <div class="grid place-items-center h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                v-model="searchQuery"
                class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search something.."
              />
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-6 grid grid-cols-2 gap-6 my-6 md:grid-cols-3 lg:grid-cols-4"
      >
        <div v-for="product in resultQuery" :key="product.id">
          <div
            class="max-w-xs mx-4 mb-2 rounded-lg shadow-lg background-yellow-light"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-48 object-contain rounded-t-xl"
            />
            <div class="px-6 py-4">
              <h4 class="mb-3 text-xl font-semibold tracking-tight text-white">
                {{ product.name }}
              </h4>
              <p class="text-lg text-gray-600">RP. {{ product.price }}</p>
              <div class="mt-2">
                <button
                  @click="shareData()"
                  class="rounded-lg px-4 py-2 bg-green-400 hover:bg-green-600 duration-300 text-white font-bold"
                >
                  Buy
                </button>
              </div>
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
          image: "../syrup pineapple.png",
          price: "97,000",
        },
        {
          id: 2,
          name: "Syrup Raspberry",
          image: "../syrup raspberry.png",
          price: "97,000",
        },
        {
          id: 4,
          name: "Syrup Banana",
          image: "../syrup_banana-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 5,
          name: "Syrup Blue Curacao",
          image: "../syrup_blue_curacao-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 6,
          name: "Syrup Bubblegum",
          image: "../syrup_bubble_gum-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 7,
          name: "Syrup Butterscotch",
          image: "../syrup_butterscotch-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 8,
          name: "Syrup Caramel",
          image: "../syrup_caramel-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 9,
          name: "Syrup Coconut",
          image: "../syrup_coconut-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 10,
          name: "Syrup Ginger",
          image: "../syrup_ginger-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 11,
          name: "Syrup Green Apple",
          image: "../syrup_green_apple-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 12,
          name: "Syrup Hazelnut",
          image: "../syrup_hazelnut-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 13,
          name: "Syrup Irish",
          image: "../syrup_irish-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 14,
          name: "Syrup Kiwi",
          image: "../syrup_kiwi-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 15,
          name: "Syrup Lemon",
          image: "../syrup_lemon-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 16,
          name: "Syrup Lemongrass",
          image: "../syrup_lemongrass-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 17,
          name: "Syrup Lychee",
          image: "../syrup_lychee-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 18,
          name: "Syrup Manggo",
          image: "../syrup_mango-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 19,
          name: "Syrup Mojito",
          image: "../syrup_mojito_mint-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 20,
          name: "Syrup Pandan",
          image: "../syrup_pandan-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 21,
          name: "Syrup Passion Fruit",
          image: "../syrup_passion_fruit-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 22,
          name: "Syrup Peach",
          image: "../syrup_peach-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 23,
          name: "Syrup Peppermint",
          image: "../syrup_peppermint-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 24,
          name: "Syrup Strawberry",
          image: "../syrup_strawberry-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 25,
          name: "Syrup Tiramisu",
          image: "../syrup_tiramisu-removebg-preview.png",
          price: "97,000",
        },
        {
          id: 26,
          name: "Syrup Vanilla",
          image: "../syrup_vanilla-removebg-preview.png",
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
