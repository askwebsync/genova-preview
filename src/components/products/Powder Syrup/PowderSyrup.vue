<template>
  <section class="container mx-auto">
    <div class="p-4 lg:p-6 lg:py-12 xl:p-12">
      <div
        class="flex flex-col gap-y-12 md:flex md:flex-row md:justify-between md:gap-x-2"
      >
        <div class="p-2">
          <h1 class="pcolor mb-3 text-lg md:text-xl lg:text-2xl">
            POWDER SYRUP
          </h1>
          <hr class="h-1 rounded w-28 background-navbar border-0" />
        </div>
      </div>

      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center justify-center gap-y-6 md:gap-12 mt-12 mb-5"
      >
        <div v-for="product in resultQuery" :key="product.id">
          <router-link
            :to="{
              name: 'productDetailPage',
              query: {
                dataProduk: JSON.stringify({
                  name: product.name,
                  price: product.price,
                  image: product.image,
                  link: product.link,
                }),
              },
            }"
          >
            <div
              class="max-w-xs mx-4 mb-3 rounded-lg shadow-lg background-yellow-light"
            >
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-40 lg:h-48 object-contain rounded-t-xl"
              />
              <div class="flex flex-col gap-2 px-6 py-4">
                <h2
                  class="mb-5 text-xl font-semibold tracking-tight text-black"
                >
                  {{ product.name }}
                </h2>
                <p class="text-lg text-gray-600">RP. {{ product.price }}</p>
              </div>
            </div>
          </router-link>
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
          image: "../powder-avocado.png",
          price: "150,000",
        },
        {
          id: 2,
          name: "Powder Cappuccino",
          image: "../powder-cappuccino.png",
          price: "139,000",
        },
        {
          id: 4,
          name: "Powder Charcoal",
          image: "../powder-charcoal.png",
          price: "159,000",
        },
        {
          id: 5,
          name: "Powder Chocolate",
          image: "../powder-chocolateclassic.png",
          price: "139,000",
        },
        {
          id: 6,
          name: "Powder Cookies",
          image: "../powder-cookiescream.png",
          price: "155,000",
        },
        {
          id: 7,
          name: "Powder Cotton Candy",
          image: "../powder-cottoncandy.png",
          price: "139,000",
        },
        {
          id: 8,
          name: "Powder Dark Chocolate",
          image: "../powder-darkchocolate.png",
          price: "139,000",
        },
        {
          id: 9,
          name: "Powder Frappe Base",
          image: "../powder-frappebase.png",
          price: "139,000",
        },
        {
          id: 10,
          name: "Powder Greentea",
          image: "../powder-greentea.png",
          price: "150,000",
        },
        {
          id: 11,
          name: "Powder Macchiato",
          image: "../powder-macchiato.png",
          price: "139,000",
        },
        {
          id: 12,
          name: "Powder Matcha Latte",
          image: "../powder-matchalatte.png",
          price: "169,000",
        },
        {
          id: 13,
          name: "Powder Matcha Premium",
          image: "../powder-matchapremium.png",
          price: "245,000",
        },
        {
          id: 14,
          name: "Powder Mocha",
          image: "../powder-mocha.png",
          price: "139,000",
        },
        {
          id: 15,
          name: "Powder Mochaccino",
          image: "../powder-mochaccino.png",
          price: "139,000",
        },
        {
          id: 16,
          name: "Powder Red Velvet",
          image: "../powder-redvelvet.png",
          price: "139,000",
        },
        {
          id: 17,
          name: "Powder Thai Tea",
          image: "../powder-thaitea.png",
          price: "139,000",
        },
        {
          id: 18,
          name: "Powder Tiramisu",
          image: "../powder-tiramisu.png",
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
