<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- Tabs -->
  <section class="container mx-auto">
    <div class="my-12">
      <ul class="flex flex-row justify-center">
        <li class="text-center mx-6" @click.prevent="tab = 'offline'">
          <h2
            class="text-xl lg:text-2xl cursor-pointer block rounded py-3 px-4 transition underline"
            v-if="tab === 'offline'"
          >
            Offline Store
          </h2>
          <h2
            class="text-xl lg:text-2xl cursor-pointer block rounded py-3 px-4 transition"
            v-else
          >
            Offline Store
          </h2>
        </li>
        <li class="text-center mx-6" @click.prevent="tab = 'online'">
          <h2
            class="text-lg lg:text-2xl cursor-pointer block rounded py-3 px-4 transition"
            v-if="tab === 'offline'"
          >
            Online Store
          </h2>
          <h2
            class="text-lg lg:text-2xl cursor-pointer block rounded py-3 px-4 transition underline"
            v-else
          >
            Online Store
          </h2>
        </li>
      </ul>
    </div>

    <FindOffline v-if="tab === 'offline'" />
    <FindOnline v-else />
  </section>
</template>

<script>
import FindOffline from "../components/location/FindOffline.vue";
import FindOnline from "../components/location/FindOnline.vue";

export default {
  components: { FindOffline, FindOnline },
  data() {
    return { tab: "offline" };
  },
};
</script>

<style scoped>
ul li.active-link > h2 {
  text-decoration: underline;
  color: YOUR-LINK-COLOR;
}
</style>
