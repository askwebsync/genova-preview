<template>
  <section>
    <div
      class="relative w-full height-banner background flex items-center justify-center text-center bg-cover bg-center"
    >
      <div class="text-center bg-recipe px-4 py-2">
        <div class="border-h2 px-10 py-3">
          <h2
            class="text-2xl md:text-3xl lg:text-4xl tracking-tight text-white sm:leading-none"
          >
            Genova Products
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
};
</script>
<style scoped>
.background {
  background-image: url(../../assets/images/banner/Product/product-page-banner.jpg);
}
.border-h2 {
  border: 2px solid #997f11;
  border-radius: 8px;
}
h2 {
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 400;
  color: #997f11;
}
.bg-recipe {
  background: rgba(255, 255, 255, 0.65);
  border-radius: 6px;
}
</style>
