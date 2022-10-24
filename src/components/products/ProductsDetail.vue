<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container mx-auto">
    <div class="py-6 px-4 lg:px-6 lg:py-12 xl:px-12">
      <div class="flex flex-col md:flex-row my-12 px-4 gap-12 items-center">
        <!-- image-->
        <div class="w-1/2 center">
          <img
            src="../../assets/images/product/powder/powder-darkchocolate.png"
            alt="Product"
            class="w-auto h-auto object-contain rounded-t-xl"
          />
        </div>
        <!-- items detail -->
        <div class="w-1/2 flex flex-col gap-2">
          <!-- Name + Info -->
          <div class="flex flex-col gap-6 my-4 text-left max-w-xl">
            <h1 class="text-4xl md:text5xl">Genova Syrup</h1>
            <p class="text-lg">
              Syrup GENOVA Hazelnut 750 ML Syrup Hazelnut GENOVA adalah salah
              satu dari tiga rasa flavour kopi spesial teratas, bersama dengan
              vanilla dan karamel, sirup GENOVA Hazelnut menghadirkan rasa dan
              aroma hazelnut yang segar dengan sentuhan almond dan vanilla.
              Rasanya yang gurih dan manis seringkali memanjakan lidah kita
              sebagai pilihan yang pas untuk mocktail penutup atau minuman manis
              di saat santai. Seringkali beberapa orang pasti merasa bahwa rasa
              hazelnut hampir mirip dengan coklat yang sama manisnya. Tanaman
              ini banyak tumbuh di Turki, Italia, Yunani, Spanyol, Inggris,
              Amerika Serikat khususnya di Washington. Saat ini produsen
              terbesar penghasil hazelnut di dunia adalah negara Turki.
            </p>
          </div>
          <hr class="h-1 rounded w-full bg-black border-0" />
          <!-- Rating + price -->
          <div class="flex flex-col gap-6 text-left my-2">
            <div class="flex gap-2">
              <div>
                <span class="fa fa-star checked fa-2x"></span>
                <span class="fa fa-star checked fa-2x"></span>
                <span class="fa fa-star checked fa-2x"></span>
                <span class="fa fa-star fa-2x"></span>
                <span class="fa fa-star fa-2x"></span>
              </div>
              <div class=""><p class="text-lg">(4,9)</p></div>
            </div>
            <p class="text-xl text-gray-600">RP. 109,000</p>
          </div>
          <!-- Button-->
          <div class="text-left mt-6">
            <button
              class="rounded-lg px-4 py-2 bg-green-400 hover:bg-green-600 duration-300"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      //   productData: {
      //     id: JSON.parse(this.$route.params.product.id),
      //     nama: JSON.parse(this.$route.params.product.name),
      //     image: JSON.parse(this.$route.params.product.image),
      //     detailInfo: "",
      //   },
    };
  },
};
</script>
<style scoped></style>
