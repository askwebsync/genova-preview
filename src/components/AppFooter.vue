<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>

<template>
  <!-- Foooter -->
  <section class="bg-white">
    <div
      class="max-w-screen-xl p-4 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8"
    >
      <nav class="flex flex-wrap justify-center -mx-5 -my-2">
        <div class="px-5 py-2">
          <router-link
            :to="{ name: 'products' }"
            class="pcolor mb-3 text-base md:text-lg leading-6"
          >
            Product
          </router-link>
        </div>
        <div class="px-5 py-2">
          <router-link
            :to="{ name: 'recipe' }"
            class="pcolor mb-3 text-base md:text-lg leading-6"
          >
            Recipe
          </router-link>
        </div>
        <div class="px-5 py-2">
          <router-link
            :to="{ name: 'about' }"
            class="pcolor mb-3 text-base md:text-lg leading-6"
          >
            About
          </router-link>
        </div>
        <div class="px-5 py-2">
          <router-link
            :to="{ name: 'contact' }"
            class="pcolor mb-3 text-base md:text-lg leading-6"
          >
            Contact
          </router-link>
        </div>
        <div class="px-5 py-2">
          <router-link
            :to="{ name: 'location' }"
            class="pcolor mb-3 text-base md:text-lg leading-6"
          >
            Location
          </router-link>
        </div>
      </nav>
      <div class="flex justify-center mt-8 space-x-6">
        <a
          href="https://www.instagram.com/genova_indonesia/?next=%2F"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Instagram</span>
          <img src="../assets/images/icon/instagram.png" />
        </a>
        <a href="#" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Youtube</span>
          <img src="../assets/images/icon/youtube.png" />
        </a>
      </div>
      <p class="mt-8 text-base leading-6 text-center text-gray-400">
        © 2021 Genova Indonesia, Inc. All rights reserved.
      </p>
    </div>
  </section>
</template>

<style scoped></style>
