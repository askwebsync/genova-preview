<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flex-col gap-4">
    <div class="mx-auto" v-if="isLoaded">
      <PageLoader />
    </div>
    <div v-if="!isLoaded">
      <HomepageBanner />
      <TrendingProducts />
      <NewProducts />
      <HomepageProducts />
    </div>
  </div>
</template>

<script>
import TrendingProducts from "../components/homepage/TrendingProducts.vue";
import HomepageProducts from "../components/homepage/HomepageProducts.vue";
import NewProducts from "../components/homepage/NewProducts.vue";
import HomepageBanner from "../components/homepage/HomepageBanner.vue";
import PageLoader from "../components/PageLoader.vue";

export default {
  components: {
    TrendingProducts,
    HomepageProducts,
    NewProducts,
    HomepageBanner,
    PageLoader,
  },
  data() {
    return {
      isLoaded: true,
    };
  },
  mounted() {
    setTimeout(
      function () {
        this.isLoaded = !this.isLoaded;
      }.bind(this),
      3500
    );
  },
};
</script>

<style scoped></style>
