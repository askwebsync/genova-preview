<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- Tabs -->
  <section class="container mx-auto">
    <div class="my-12">
      <ul class="flex flex-row justify-center gap-6">
        <li class="text-center mx-8 p-2">
          <h2
            class="text-xl lg:text-2xl cursor-pointer block rounded py-3 px-4 transition underline"
            @click.prevent="tab = 'offline'"
          >
            Offline Store
          </h2>
        </li>
        <li class="text-center mx-8 p-2">
          <h2
            class="text-lg lg:text-2xl cursor-pointer block rounded py-3 px-4 transition"
            @click.prevent="tab = 'online'"
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
