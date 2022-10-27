<template>
  <div>
    <div class="bg-white-100">
      <nav
        class="container p-7 md::p-7 mx-auto md::flex md::justify-between md::items-center"
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="text-xl font-bold text-gray-800 md::text-2xl hover:text-blue-400"
            ><img
              src="../assets/images/logo/Genova_Logo_no_bg.png"
              alt=""
              height="100"
              width="100"
            />
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md::hidden">
            <button
              type="button"
              class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="flex md::order-2">
          <div :class="showMenu ? 'flex' : 'hidden'" class="hidden relative">
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
              class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-md border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </div>

        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4 md::flex md::space-y-0 md::flex-row md::items-center md::space-x-10 md::mt-0 md::order-1"
        >
          <li v-if="showMenu" class="relative mt-3 md::hidden">
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
            </div>
            <input
              type="text"
              id="search-navbar"
              class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-md border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </li>
          <li
            @click="showMenu = !showMenu"
            class="text-base font-semibold text-black hover:text-blue-400"
          >
            <router-link to="/products">Product</router-link>
          </li>
          <li
            @click="showMenu = !showMenu"
            class="text-base font-semibold text-black hover:text-blue-400"
          >
            <router-link to="/recipe">Recipe</router-link>
          </li>
          <li
            @click="showMenu = !showMenu"
            class="text-base font-semibold text-black hover:text-blue-400"
          >
            <router-link to="/about">About Us</router-link>
          </li>
          <li
            @click="showMenu = !showMenu"
            class="text-base font-semibold text-black hover:text-blue-400"
          >
            <router-link to="/contact">Contact</router-link>
          </li>
          <li
            @click="showMenu = !showMenu"
            class="text-base font-semibold text-black hover:text-blue-400"
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
      showMenu: false,
    };
  },
  toggleNav: function () {
    this.showMenu = !this.showMenu;
  },
};
</script>
