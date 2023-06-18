<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <HeroProducts />
    <Products></Products>
  </section>
</template>

<script>
import Products from "../components/products/Products.vue";
import HeroProducts from "../components/products/HeroProducts.vue";

export default {
  name: "ProductsPage",
  // eslint-disable-next-line vue/no-unused-components
  components: { Products, HeroProducts },
};
</script>
