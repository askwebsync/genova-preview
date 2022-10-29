<template>
  <div>
    <div class="background-navbar">
      <nav
        class="container px-4 py-7 mx-auto md:px-6 md:items-center lg:px-8 xl:px-12"
      >
        <div class="flex items-center justify-between">
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button type="button" class="text-black focus:outline-none">
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
          <router-link
            to="/"
            class="text-xl font-bold text-gray-800 md:text-2xl hover:text-yellow-600"
            ><img
              src="../assets/images/logo/Genova_Logo_no_bg.png"
              alt=""
              height="120"
              width="120"
              class="focus:outline-none"
            />
          </router-link>

          <div class="flex md:order-2 md:w-7/12 md:mx-auto">
            <div
              :class="showMenu ? 'flex' : 'hidden'"
              class="hidden relative md:block w-full"
            >
              <div
                class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
              >
                <svg
                  class="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                v-model="searchQuery"
                @focusout="showDiv = !showDiv"
                @focusin="showDiv = !showDiv"
              />
            </div>
          </div>
          <!-- list search item -->
          <div
            :class="showDiv ? 'fixed ' : 'hidden'"
            class="w-6/12 h-1/4 overflow-auto bg-slate-500 flex-col z-[100]"
          >
            <div
              v-for="product in resultQuery"
              :key="product.id"
              class="flex flex-col border"
            >
              <div class="item fruit">
                <div class="flex justify-around items-center py-1">
                  <img
                    :src="product.image"
                    :alt="product.name"
                    class="w-20 h-20"
                  />
                  <p>{{ product.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- search bar -->
        <!-- <div class="flex md:order-2">
          <div
            :class="showMenu ? 'flex' : 'hidden'"
            class="hidden relative md:block"
          >
            <div
              class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
            >
              <svg
                class="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              v-model="searchQuery"
              @focusout="showDiv = !showDiv"
              @focusin="showDiv = !showDiv"
            />
          </div>
        </div> -->
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col md:justify-around mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-4 md:order-1"
        >
          <li v-if="showMenu" class="relative mt-3 md:hidden">
            <div
              class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              v-model="searchQuery"
              class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              @focusout="showDiv = !showDiv"
              @focusin="showDiv = !showDiv"
            />
          </li>
          <li
            @click="showMenu = !showMenu"
            class="text-base font-semibold text-black hover:text-yellow-600 focus:outline-none"
          >
            <router-link to="/products">Product</router-link>
          </li>
          <li
            @click="showMenu = !showMenu"
            class="text-base font-semibold text-black hover:text-yellow-600 focus:outline-none"
          >
            <router-link to="/recipe">Recipe</router-link>
          </li>
          <li
            @click="showMenu = !showMenu"
            class="text-base font-semibold text-black hover:text-yellow-600 focus:outline-none"
          >
            <router-link to="/about">About Us</router-link>
          </li>
          <li
            @click="showMenu = !showMenu"
            class="text-base font-semibold text-black hover:text-yellow-600 focus:outline-none"
          >
            <router-link to="/contact">Contact</router-link>
          </li>
          <li
            @click="showMenu = !showMenu"
            class="text-base font-semibold text-black hover:text-yellow-600 focus:outline-none"
          >
            <router-link to="/location">Location</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: null,
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
      showMenu: false,
      showDiv: false,
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
  toggleNav: function () {
    this.showMenu = !this.showMenu;
    this.showDiv = !this.showDiv;
  },
};
</script>
