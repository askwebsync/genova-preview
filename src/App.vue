<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data: () => {
    return {};
  },
};
</script>

<template>
  <div class="min-h-screen">
    <AppHeader class="sticky top-0 zdua" />
    <router-view v-slot="{ Component }" :key="$route.fullPath">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>

    <AppFooter class="sticky top-[100vh]" />
  </div>
</template>

<style>
.vue-back-to-top {
  @apply p-2 bg-yellow-500 hover:bg-yellow-600 text-white transition
        duration-500
        ease-in-out
        transform
        hover:-translate-y-1 hover:scale-110;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}

.fade-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}

.fade-leave-active {
  animation: going 0.4s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-10px);
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
