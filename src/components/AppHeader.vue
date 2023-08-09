<template>
  <nav
    class="container px-4 md:px-8 lg:px-12 xl:px-24 mx-auto md:flex md:justify-between md:items-center"
  >
    <div class="flex items-center justify-between">
      <router-link :to="{ name: 'home' }" @click="this.showMenu = false">
        <img
          src="/assets/images/logo/logo128.png"
          class="w-full h-20 md:h-24 object-contain focus:outline-none"
        />
      </router-link>
      <!-- Mobile menu button -->
      <div class="flex md:hidden">
        <button
          type="button"
          class="hover:text-gray-700 focus:outline-none"
          @click="toggleMenu"
        >
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
      class="flex-col my-1 space-y-3 items-center md:flex md:space-y-0 md:flex-row md:space-x-6 md:my-0 xl:space-x-10"
    >
      <li
        class="text-sm lg:text-base pcolor hover:text-yellow-600 focus:outline-none"
      >
        <router-link :to="{ name: 'products' }" @click="toggleMenu()"
          >Product</router-link
        >
      </li>
      <li
        class="text-sm lg:text-base pcolor hover:text-yellow-600 focus:outline-none"
      >
        <router-link :to="{ name: 'recipe' }" @click="toggleMenu()"
          >Recipe</router-link
        >
      </li>
      <li
        class="text-sm lg:text-base pcolor hover:text-yellow-600 focus:outline-none"
      >
        <router-link :to="{ name: 'about' }" @click="toggleMenu()"
          >About Us</router-link
        >
      </li>
      <li
        class="text-sm lg:text-base pcolor hover:text-yellow-600 focus:outline-none"
      >
        <router-link :to="{ name: 'contact' }" @click="toggleMenu()"
          >Contact</router-link
        >
      </li>
      <li
        class="text-sm lg:text-base pcolor hover:text-yellow-600 focus:outline-none"
      >
        <router-link :to="{ name: 'location' }" @click="toggleMenu()"
          >Location</router-link
        >
      </li>
    </ul>
    <div class="contain pb-3 md:pb-0 md:pt-0 md:w-1/5 xl:w-1/6 relative">
      <div class="relative">
        <input
          class="bg-white h-10 px-5 text-sm border-yellow focus:border-yellow-700 focus:border-2"
          :placeholder="placeholderText"
          type="text"
          v-model="search"
          @input="onQueryChange"
          @focus="toggleInput = true"
          @blur="toggleInput = false"
          @keydown.enter="handleEnterKey"
          ref="searchInput"
        />
        <button type="submit" class="absolute right-0 top-0 mt-3 mr-3">
          <svg
            class="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            xml:space="preserve"
            width="512px"
            height="512px"
          >
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
              fill="#c79e2a"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="results relative cursor-pointer overflow-y-scroll w-full bg-white shadow-md"
        v-if="toggle && search.length > 0 && filteredProducts.length > 0"
        :style="{ height: `${filteredProducts.length * 40}px` }"
        @keydown.down="incrementSelectedResultIndex"
        @keydown.up="decrementSelectedResultIndex"
        tabindex="0"
      >
        <div
          class="result"
          v-for="(product, index) in filteredProducts"
          :key="index"
          :class="{ selected: index === selectedResultIndex }"
          @click="selectProduct(product)"
        >
          {{ product.name }}
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      search: "",
      toggle: false,
      toggleInput: false,
      showMenu: false,
      selectedResultIndex: -1,
    };
  },
  computed: {
    ...mapState(["products"]),
    filteredProducts() {
      return this.products.filter((product) =>
        product.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    isSelected() {
      return this.selectedResultIndex !== -1;
    },
    placeholderText() {
      if (this.search === "" && !this.toggleInput) {
        return "Search Product";
      } else {
        return this.search === "" ? "Search Product" : "";
      }
    },
  },
  methods: {
    ...mapMutations(["setSelectedProduct"]),
    handleEnterKey() {
      if (this.isSelected) {
        const selectedProduct = this.filteredProducts[this.selectedResultIndex];
        this.selectProduct(selectedProduct);
        this.search = ""; // Reset the search bar value
      } else if (this.search.length > 0) {
        alert("Performing a generic search...");
        // Do something else (e.g., perform a generic search)
        this.search = ""; // Reset the search bar value
      }
    },
    onQueryChange() {
      this.toggle = true;
      this.selectedResultIndex = -1; // Reset the selected result index when query changes
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    incrementSelectedResultIndex() {
      if (this.selectedResultIndex < this.filteredProducts.length - 1) {
        this.selectedResultIndex++;
      } else {
        this.selectedResultIndex = 0;
      }
    },
    decrementSelectedResultIndex() {
      if (this.selectedResultIndex > 0) {
        this.selectedResultIndex--;
      } else {
        this.selectedResultIndex = this.filteredProducts.length - 1;
      }
    },
    selectProduct(product) {
      this.setSelectedProduct(product); // Set the selected product
      console.log("Selected Product:", product);
      this.$router.push({
        name: "productDetailPage",
        params: { productId: product.id },
      });
      this.search = ""; // Clear the search input field
      this.toggle = false; // Close the search results list
      this.selectedResultIndex = -1; // Reset the selected result index
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
  height: 37px;
  padding-left: 10px;
  padding-right: -10px;
  transition: all 0.2s ease;
}
.contain input:focus {
  outline: none;
}
.contain .results {
  background-color: white;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 999;
}
.contain .results .result {
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.contain .results .result:hover,
.contain .results .result.selected {
  background-color: #f5f5f5;
}

input::placeholder {
  color: gray; /* Set the initial placeholder color to gray */
}

input:focus::placeholder {
  color: black; /* Set the focused placeholder color to black */
}
</style>
