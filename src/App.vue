<template>
  <div>
    <div v-if="isLoaded">
      <PageLoader />
    </div>

    <div v-else>
      <AppHeader class="bg-white border-b-2 sticky top-0 z-10" />
      <router-view v-slot="{ Component }" :key="$route.fullPath">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
      <AppFooter class="app-footer" />
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import PageLoader from "./components/PageLoader.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
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
