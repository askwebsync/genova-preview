<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container mx-auto px-4 py-6 md:px-8 lg:px-24 lg:py-10">
    <div class="mb-6">
      <ul class="flex flex-row justify-center">
        <li class="text-center mx-6" @click.prevent="tab = 'offline'">
          <h2
            class="text-xl lg:text-2xl cursor-pointer block rounded py-3 px-4 transition underline pcolor hover:text-yellow-600"
            v-if="tab === 'offline'"
          >
            Offline Store
          </h2>
          <h2
            class="text-xl lg:text-2xl cursor-pointer block rounded py-3 px-4 transition pcolor hover:text-yellow-600"
            v-else
          >
            Offline Store
          </h2>
        </li>
        <li class="text-center mx-6" @click.prevent="tab = 'online'">
          <h2
            class="text-lg lg:text-2xl cursor-pointer block rounded py-3 px-4 transition pcolor hover:text-yellow-600"
            v-if="tab === 'offline'"
          >
            Online Store
          </h2>
          <h2
            class="text-lg lg:text-2xl cursor-pointer block rounded py-3 px-4 transition underline pcolor hover:text-yellow-600"
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
  name: "LocationPage",
  components: { FindOffline, FindOnline },
  data() {
    return { tab: "offline" };
  },
};
</script>
