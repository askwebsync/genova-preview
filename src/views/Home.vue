<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="">
    <HomepageBanner />
    <div class="flex flex-col gap-6">
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

export default {
  components: {
    TrendingProducts,
    HomepageProducts,
    NewProducts,
    HomepageBanner,
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
