<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="">
    <div class="mx-auto" v-if="isLoaded">
      <PageLoader />
    </div>
    <div v-if="!isLoaded">
      <HomepageBanner />
      <div class="flex flex-col gap-6">
      <TrendingProducts />
      <NewProducts />
      <HomepageProducts />
      </div>
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
      4500
    );
  },
};
</script>

<style scoped></style>
