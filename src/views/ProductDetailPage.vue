<template>
  <ProductDetail></ProductDetail>
</template>

<script>
import ProductDetail from "../components/products/ProductsDetail.vue";
import PageLoader from "../components/PageLoader.vue";

export default {
  components: {
    ProductDetail,
    PageLoader
  },
  data: () => {
    return {};
  },
};
</script>