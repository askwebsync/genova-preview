<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="bg-gray-50">
    <HomepageBanner />
    <TrendingProducts />
    <NewProducts />
    <HomepageProducts />
  </section>
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
      2000
    );
  },
};
</script>

<style scoped></style>
