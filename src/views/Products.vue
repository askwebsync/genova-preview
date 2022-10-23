<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <HeroProducts />
  <Products></Products>
</template>

<script>
import Products from "../components/products/Products.vue";
import HeroProducts from "../components/products/HeroProducts.vue";

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { Products, HeroProducts },
  data() {
    return {};
  },
};
</script>
