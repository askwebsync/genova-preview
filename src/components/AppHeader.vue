<template>
  <div>
    <div class="background-navbar">
      <nav
        class="container p-4 mx-auto lg:flex lg:justify-between lg:items-center lg:px-6 xl:px-12"
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="text-xl font-bold text-gray-800 lg:text-2xl hover:text-blue-400"
            ><img
              src="../assets/images/logo/genovalogooo.png"
              alt=""
              class="w-32 h-24"
            />
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex lg:hidden">
            <button
              type="button"
              class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current text-white">
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
          class="flex-col mt-8 space-y-4 lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:space-x-10 lg:mt-0 lg:order-1"
        >
          <li
            @click="showMenu = !showMenu"
            class="text-base font-semibold text-white hover:text-blue-400"
          >
            <router-link to="/products">Product</router-link>
          </li>
          <li
            @click="showMenu = !showMenu"
            class="text-base font-semibold text-white hover:text-blue-400"
          >
            <router-link to="/recipe">Recipe</router-link>
          </li>
          <li
            @click="showMenu = !showMenu"
            class="text-base font-semibold text-white hover:text-blue-400"
          >
            <router-link to="/about">About Us</router-link>
          </li>
          <li
            @click="showMenu = !showMenu"
            class="text-base font-semibold text-white hover:text-blue-400"
          >
            <router-link to="/contact">Contact</router-link>
          </li>
          <li
            @click="showMenu = !showMenu"
            class="text-base font-semibold text-white hover:text-blue-400"
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
