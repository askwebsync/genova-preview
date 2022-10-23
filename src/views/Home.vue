<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Banner></Banner>
  <TrendingProducts />
  <NewProducts />
  <HomepageProducts />
</template>

<script>
import Banner from "../components/homepage/HomepageBanner.vue";
import TrendingProducts from "../components/homepage/TrendingProducts.vue";
import HomepageProducts from "../components/homepage/HomepageProducts.vue";
import NewProducts from "../components/homepage/NewProducts.vue";

export default {
  components: { Banner, TrendingProducts, HomepageProducts, NewProducts },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
