<template>
  <section class="container mx-auto">
    <div class="p-4 lg:p-6 lg:py-12 xl:p-12">
      <div
        class="flex flex-col gap-y-12 md:flex md:flex-row md:justify-between md:gap-x-2"
      >
        <div class="p-2">
          <h1 class="pcolor mb-3 text-xs md:text-base">FRUIT BLEND</h1>
          <hr class="h-1 rounded w-28 background-navbar border-0" />
        </div>
        <!-- 
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
        </div> -->
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
                  link: product.image,
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
                class="w-full h-48 object-contain rounded-t-xl"
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
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Fruit Blend Kiwi",
          image: "../fruit_bland_kiwi.png",
          price: "109,000",
        },
        {
          id: 2,
          name: "Fruit Blend Manggo",
          image: "../fruit_bland_mango.png",
          price: "109,000",
        },
        {
          id: 3,
          name: "Fruit Blend Passion",
          image: "../fruit_bland_passion.png",
          price: "109,000",
        },
        {
          id: 4,
          name: "Fruit Blend Pineapple",
          image: "../fruit_bland_pineapple.png",
          price: "109,000",
        },
        {
          id: 5,
          name: "Fruit Blend Raspberry",
          image: "../fruit_bland_raspberry.png",
          price: "109,000",
        },
        {
          id: 6,
          name: "Fruit Blend Strawberry",
          image: "../fruit_bland_strawberry.png",
          price: "109,000",
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
  methods: {},
};
</script>

<style scoped></style>
