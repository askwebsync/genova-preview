<template>
  <section
    class="container mx-auto px-4 py-6 md:px-8 lg:px-12 xl:px-24 lg:py-10"
  >
    <div class="mt-6 mb-12">
      <ul class="flex flex-row justify-center">
        <li class="text-center mx-6" @click.prevent="setActiveTab('offline')">
          <h2
            :class="{
              'text-xl lg:text-2xl cursor-pointer block rounded py-3 px-4 transition coloryellow':
                tab === 'offline',
              'text-lg lg:text-2xl cursor-pointer block rounded py-3 px-4 transition colorgrey':
                tab !== 'offline',
            }"
          >
            Offline Store
          </h2>
        </li>
        <li class="text-center mx-6" @click.prevent="setActiveTab('online')">
          <h2
            :class="{
              'text-lg lg:text-2xl cursor-pointer block rounded py-3 px-4 transition coloryellow':
                tab === 'online',
              'text-xl lg:text-2xl cursor-pointer block rounded py-3 px-4 transition colorgrey':
                tab !== 'online',
            }"
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
  methods: {
    setActiveTab(tab) {
      this.tab = tab;
    },
  },
};
</script>

<style scoped>
h2 {
  font-family: Josefin Sans;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  position: relative;
}

.coloryellow {
  color: #c79e2a;
}

.colorgrey {
  color: #93938f;
}

/* Add the underline style directly to the active tab */
h2.coloryellow::after {
  content: "";
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #c79e2a;
}
</style>
