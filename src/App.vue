<template>
  <div>
    <div v-if="isLoaded">
      <PageLoader />
    </div>

    <div v-else class="app-container">
      <AllowCookies />
      <header class="bg-white border-b-2 sticky top-0 z-10">
        <app-header />
      </header>
      <main class="app-main">
        <router-view v-slot="{ Component }" :key="$route.fullPath">
          <transition name="fade" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </main>
      <footer class="app-footer">
        <app-footer />
      </footer>
      <a href="#" id="scroll" v-show="showScroll" @click="scrollToTop">
        <span></span>
      </a>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import PageLoader from "./components/PageLoader.vue";
import AllowCookies from "./components/AllowCookies.vue"; // Import the AllowCookies component

export default {
  components: {
    "app-header": AppHeader,
    "app-footer": AppFooter,
    PageLoader,
    AllowCookies,
  },
  data() {
    return {
      isLoaded: true,
      showScroll: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    setTimeout(() => {
      this.isLoaded = !this.isLoaded;
    }, 2000);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 100) {
        this.showScroll = true;
      } else {
        this.showScroll = false;
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
/* Layout */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-main {
  flex: 1;
}

.app-footer {
  margin-top: auto;
}
</style>
