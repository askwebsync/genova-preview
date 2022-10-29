<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flex-col gap-4">
    <HomepageBanner />
    <TrendingProducts />
    <NewProducts />
    <HomepageProducts />
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
    return {};
  },
};
</script>

<style scoped></style>
