<template>
  <section class="container mx-auto">
    <div class="mt-2 p-8 lg:px-6 lg:py-12 xl:px-12">
      <div
        class="flex flex-col gap-y-12 md:flex md:flex-row md:justify-between md:gap-x-2"
      >
        <div class="">
          <h1
            class="text-left text-black mb-2 font-semibold text-xl md:text-2xl"
          >
            POWDER SYRUP
          </h1>
          <hr class="h-1 rounded w-28 bg-black border-0" />
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

      <div class="grid grid-cols-2 gap-6 my-6 md:grid-cols-3 lg:grid-cols-4">
        <div v-for="product in resultQuery" :key="product.id">
          <div
            class="max-w-xs mx-4 mb-2 rounded-lg shadow-lg background-yellow-light p-4"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-48 object-contain rounded-t-xl"
            />
            <div class="px-6 py-4">
              <h4
                class="mb-3 text-xl font-semibold tracking-tight text-gray-800"
              >
                {{ product.name }}
              </h4>
              <p class="leading-normal text-gray-700">
                RP. {{ product.price }}
              </p>
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
  data: () => {
    return {
      products: [
        {
          id: 1,
          name: "Powder Avocado",
          image: "powder-avocado.png",
          price: "150,000",
        },
        {
          id: 2,
          name: "Powder Cappuccino",
          image: "powder-cappuccino.png",
          price: "139,000",
        },
        {
          id: 4,
          name: "Powder Charcoal",
          image: "powder-charcoal.png",
          price: "159,000",
        },
        {
          id: 5,
          name: "Powder Chocolate",
          image: "powder-chocolateclassic.png",
          price: "139,000",
        },
        {
          id: 6,
          name: "Powder Cookies",
          image: "powder-cookiescream.png",
          price: "155,000",
        },
        {
          id: 7,
          name: "Powder Cotton Candy",
          image: "powder-cottoncandy.png",
          price: "139,000",
        },
        {
          id: 8,
          name: "Powder Dark Chocolate",
          image: "powder-darkchocolate.png",
          price: "139,000",
        },
        {
          id: 9,
          name: "Powder Frappe Base",
          image: "powder-frappebase.png",
          price: "139,000",
        },
        {
          id: 10,
          name: "Powder Greentea",
          image: "powder-greentea.png",
          price: "150,000",
        },
        {
          id: 11,
          name: "Powder Macchiato",
          image: "powder-macchiato.png",
          price: "139,000",
        },
        {
          id: 12,
          name: "Powder Matcha Latte",
          image: "powder-matchalatte.png",
          price: "169,000",
        },
        {
          id: 13,
          name: "Powder Matcha Premium",
          image: "powder-matchapremium.png",
          price: "245,000",
        },
        {
          id: 14,
          name: "Powder Mocha",
          image: "powder-mocha.png",
          price: "139,000",
        },
        {
          id: 15,
          name: "Powder Mochaccino",
          image: "powder-mochaccino.png",
          price: "139,000",
        },
        {
          id: 16,
          name: "Powder Red Velvet",
          image: "powder-redvelvet.png",
          price: "139,000",
        },
        {
          id: 17,
          name: "Powder Thai Tea",
          image: "powder-thaitea.png",
          price: "139,000",
        },
        {
          id: 18,
          name: "Powder Tiramisu",
          image: "powder-tiramisu.png",
          price: "139,000",
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

<style scoped></style>
