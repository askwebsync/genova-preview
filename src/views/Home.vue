<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <HomepageBanner />
    <div class="container mx-auto">
      <TrendingProducts />
      <NewProducts />
      <!-- <HomepageProducts /> -->
    </div>
  </section>
</template>

<script>
import TrendingProducts from "../components/homepage/TrendingProducts.vue";
// import HomepageProducts from "../components/homepage/HomepageProducts.vue";
import NewProducts from "../components/homepage/NewProducts.vue";
import HomepageBanner from "../components/homepage/HomepageBanner.vue";

export default {
  name: "HomePage",
  components: {
    TrendingProducts,
    // HomepageProducts,
    NewProducts,
    HomepageBanner,
  },
};
</script>
