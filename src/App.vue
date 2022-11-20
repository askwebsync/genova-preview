<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import PageLoader from "./components/PageLoader.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    PageLoader
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
      5000
    );
  },
};
</script>

<template>
  <div class="min-h-screen">
    <div class="mx-auto" v-if="isLoaded">
      <PageLoader />
    </div>
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

<style>

.fade-enter-active {
  animation: coming 0.5s;
  animation-delay: 0.3s;
  opacity: 0;
}

.fade-leave-active {
  animation: going 0.5s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-15px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
