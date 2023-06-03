<template>
  <div v-if="isLoaded">
    <PageLoader />
  </div>
  <div class="min-h-screen">
    <div v-if="!isLoaded">
      <AppHeader class="sticky top-0 zdua" />
      <router-view v-slot="{ Component }" :key="$route.fullPath">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
      <AppFooter class="sticky top-[100vh]" />
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
  data: () => {
    return {
      isLoaded: true,
    };
  },
  mounted() {
    setTimeout(
      function () {
        this.isLoaded = !this.isLoaded;
      }.bind(this),
      1500
    );
  },
};
</script>
