<!-- eslint-disable vue/require-v-for-key -->
<template>
  <nav
    class="container px-4 md:px-8 lg:px-24 mx-auto md:flex md:justify-between md:items-center"
  >
    <div class="flex items-center justify-between">
      <router-link :to="{ name: 'home' }"
        ><img
          src="/assets/images/logo/logo128.png"
          class="w-full h-24 object-contain focus:outline-none"
        />
      </router-link>
      <!-- Mobile menu button -->
      <div
        @click="showMenu = !showMenu"
        class="flex md:hidden focus:outline-none"
      >
        <button type="button" class="hover:text-gray-700 focus:outline-none">
          <svg viewBox="0 0 24 24" class="w-7 h-7 fill-current">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <ul
      :class="showMenu ? 'flex' : 'hidden'"
      class="flex-col my-2 space-y-4 items-center md:flex md:space-y-0 md:flex-row md:space-x-6 md:my-0 xl:space-x-10"
    >
      <li
        @click="showMenu = !showMenu"
        class="text-sm md:text-base pcolor hover:text-yellow-600 focus:outline-none"
      >
        <router-link :to="{ name: 'products' }">Product</router-link>
      </li>
      <li
        @click="showMenu = !showMenu"
        class="text-sm md:text-base pcolor hover:text-yellow-600 focus:outline-none"
      >
        <router-link :to="{ name: 'recipe' }">Recipe</router-link>
      </li>
      <li
        @click="showMenu = !showMenu"
        class="text-sm md:text-base pcolor hover:text-yellow-600 focus:outline-none"
      >
        <router-link :to="{ name: 'about' }">About Us</router-link>
      </li>
      <li
        @click="showMenu = !showMenu"
        class="text-sm md:text-base pcolor hover:text-yellow-600 focus:outline-none"
      >
        <router-link :to="{ name: 'contact' }">Contact</router-link>
      </li>
      <li
        @click="showMenu = !showMenu"
        class="text-sm md:text-base pcolor hover:text-yellow-600 focus:outline-none"
      >
        <router-link :to="{ name: 'location' }">Location</router-link>
      </li>
    </ul>
    <div class="contain pb-2 md:w-1/6" @click="clickSearchBar()">
      <div class="relative w-full">
        <input
          class="border-2 border-yellow h-12 px-5 rounded-lg text-sm hover:outline-none focus:outline-none text-black"
          placeholder="Search Item"
          type="text"
          v-model="search"
          @input="onQueryChange"
          @blur="toggle = false"
          @focus="toggle = true"
        />
        <button type="submit" class="absolute right-0 top-0 mt-3 mr-4 md:mr-2">
          <svg
            class="pcolor h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style="enable-background: new 0 0 56.966 56.966"
            xml:space="preserve"
            width="512px"
            height="512px"
          >
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
            />
          </svg>
        </button>
      </div>
      <div
        class="results relative cursor-pointer overflow-y-scroll h-32 w-full zterang md:absolute md:w-[30%]"
        v-if="toggle"
      >
        <div class="result" v-for="(product, id) in newProducts" :key="id">
          <div @click="selectResult(product)" @mousedown.prevent>
            <router-link
              :to="{
                name: 'productDetailPage',
                query: {
                  dataProduk: JSON.stringify({
                    name: product.name,
                    price: product.price,
                    info: product.info,
                    packaging: product.packaging,
                    weight: product.weight,
                    color: product.color,
                    size: product.size,
                    image: product.image,
                    link: product.link,
                    serving: product.serving,
                  }),
                },
              }"
            >
              <div class="">
                {{ product.name }}
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import allProducts from "@/product/allProduct";
export default {
  watch: {
    search(val) {
      this.newProducts = [];
      this.products.forEach((element) => {
        if (
          element.name.toLowerCase().includes(val.toLowerCase()) &&
          val != ""
        ) {
          this.newProducts.push(element);
        }
      });
    },
  },
  data() {
    return {
      search: "",
      toggle: false,
      products: allProducts,
      newProducts: [],
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
  mounted() {
    document.addEventListener("mousemove", this.hideResultsContainer);
  },
  unmounted() {
    document.removeEventListener("mousemove", this.hideResultsContainer);
  },
  toggleNav: function () {
    this.showMenu = !this.showMenu;
    this.showDiv = !this.showDiv;
  },
  methods: {
    clickSearchBar() {
      this.toggle = true;
      this.newProducts = this.products;
    },
    selectResult(product) {
      this.search = product.name;
    },
    hideResultsContainer() {
      this.toggle = false;
    },
  },
};
</script>
<style scoped>
input {
  width: 100%;
  height: 35px;
  padding-left: 10px;
  padding-right: -10px;
  border-radius: 6px;
  transition: all 0.2s ease;
}
.contain input:focus {
  outline: none;
}
.contain .results {
  background: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.results .result {
  padding: 10px;
}
.contain .results .result:hover {
  background: #efefef;
}
::placeholder {
  color: rgba(0, 0, 0, 0.6);
}
:-ms-input-placeholder {
  color: rgba(0, 0, 0, 0.8);
}
</style>
