<template>
  <div>
    <div v-if="isLoaded">
      <PageLoader />
    </div>

    <div v-else>
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
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import PageLoader from "./components/PageLoader.vue";

export default {
  components: {
    "app-header": AppHeader,
    "app-footer": AppFooter,
    PageLoader,
  },
  data() {
    return {
      isLoaded: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoaded = !this.isLoaded;
    }, 1000);
  },
};
</script>
