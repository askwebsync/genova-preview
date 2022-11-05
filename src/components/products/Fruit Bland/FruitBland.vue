<template>
  <section class="container mx-auto">
    <div class="p-4 lg:p-6 lg:py-12 xl:p-12">
      <div
        class="flex flex-col gap-y-12 md:flex md:flex-row md:justify-between md:gap-x-2"
      >
        <div class="p-2">
          <h1 class="pcolor mb-1 text-lg md:text-xl lg:text-2xl">
            FRUIT BLEND
          </h1>
          <hr class="h-1 rounded w-28 background-navbar border-0" />
        </div>
      </div>
      <div class="py-10 px-12">
        <div
          class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <div
            v-for="product in resultQuery"
            :key="product.id"
            class="my-8 rounded shadow-lg bg-white hover:-translate-y-1"
          >
            <router-link
              :to="{
                name: 'productDetailPage',
                query: {
                  dataProduk: JSON.stringify({
                    name: product.name,
                    price: product.price,
                    category: product.category,
                    info: product.info,
                    packaging: product.packaging,
                    weight: product.weight,
                    color: product.color,
                    image: product.image,
                    link: product.link,
                    serving: product.serving,
                    tasting: product.tasting,
                    penyimpanan: product.penyimpanan,
                  }),
                },
              }"
            >
              <div class="cursor-pointer">
                <figure>
                  <!-- Image -->
                  <img
                    :src="product.image + '?auto=format&fit=crop&w=400&q=50'"
                    :alt="product.name"
                    class="rounded-t h-72 w-full object-contain"
                  />

                  <figcaption class="p-4">
                    <!-- Title -->
                    <h2
                      class="mb-2 text-xl lg:text-2xl font-semibold tracking-tight text-black"
                    >
                      {{ product.name }}
                    </h2>

                    <p class="text-xl text-gray-600">RP. {{ product.price }}</p>
                  </figcaption>
                </figure>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      products: [
        {
          id: 20,
          name: "Fruit Blend Kiwi",
          image: "../fruitbland_kiwi.jpg",
          price: "109,000",
          category: "fruitBlend",
          info: "Velvety, sedikit asam, dan asam, buah kecil ini merupakan pemberi semangat revitalisasi yang menjadikannya sebagai tambahan yang bagus untuk menu minuman musim panas.  Bagikan keceriaan dan kesenangan dari GENOVA Fruit Blend Kiwi dalam minuman dingin, es teh, smoothie, dan soda, paling cocok untuk hari-hari ekstra panas sebagai minuman bermanfaat. Sedikit Tips dari kami Kita suka memadukannya dengan buah markisa dan irisan jeruk untuk mengawinkan rasa eksotis semuanya dalam campuran sebuah gelas.",
          link: "https://www.tokopedia.com/genovaindonesia/genova-fruit-blend-kiwi-750-ml-fruit-puree?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Hijau gelap intens, deep undertone",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung \n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 21,
          name: "Fruit Blend Manggo",
          image: "../fruitbland_mango.jpg",
          price: "109,000",
          category: "fruitBlend",
          info: "Buah Tropis, manis dan sangat lezat. Kita bersyukur mangga tumbuh di pohon.  Cabut cabangnya dan nikmati rasa mangga segar yang otentik dan baru ketika Anda menambahkan GENOVA Fruit Blend Mango ke dalam teh, lemonade, smoothie, atau koktail. Jadikan minuman mu itu mangga-licious..! GENOVA Fruit Blend Mango menghadirkan rasa mangga matang tropis dan tekstur lembut ke teh, limun, smoothie, mocktail, dan banyak lagi.",
          link: "https://www.tokopedia.com/genovaindonesia/genova-fruit-blend-mango-750-ml-fruit-puree?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Oranye terang dengan kilau kuning",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung \n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 22,
          name: "Fruit Blend Passion Fruit",
          image: "../fruitbland_passionfruit.jpg",
          price: "109,000",
          category: "fruitBlend",
          info: "Tidak ada yang bisa meniru cita rasa tropis seperti rasa eksotis dari buah Markisa. Buah kaya yang manis, tajam dan wangi pada dasarnya adalah rasa yang menyenangkan untuk selera anda dan GENOVA Fruit Blend Passion Fruit akan membawa kesegaran pada mocktail, lemonade, es teh, dan smoothie dalam perjalanan sensasi menyenangkan dahaga anda. Passion Fruit is Perfection..!",
          link: "https://www.tokopedia.com/genovaindonesia/genova-fruit-blend-passion-fruit-750-ml-fruit-puree?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Oranye tua",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung \n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 23,
          name: "Fruit Blend Pineapple",
          image: "../fruitbland_pineapple.jpg",
          price: "109,000",
          category: "fruitBlend",
          info: "Buah Nanas mencuri perhatian, bukan hanya oleh penampilan saja tetapi juga oleh jus rasa yang kuat dan asam yang membawa sensasi tropis anda di manapun anda berada di dunia. Temukan sensasi sinar matahari di GENOVA Fruit Blend Pineapple dan campur menjadi lemonade, es teh, dan smoothie untuk sentuhan tropis yang lembut.",
          link: "https://www.tokopedia.com/genovaindonesia/syrup-genova-pineapple-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Kuning bertekstur cerah",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung \n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 24,
          name: "Fruit Blend Raspberry",
          image: "../fruitbland_raspberry.jpg",
          price: "109,000",
          category: "fruitBlend",
          info: "Halus dan lezat. Selembut rasa asli, fruit blend raspberry benar-benar memberikan rasa yang luar biasa.  Nikmati rasa juicy segar dan manis dari raspberry segar ketika Anda menggunakan GENOVA Fruit Blend Raspberry untuk membuat lemonade, teh, smoothie, mocktail, dan banyak lagi. GENOVA Fruit Blend Raspberry adalah minuman lezat buah berry yang tak tertahankan segarnya dan aromanya untuk diaplikasikan pada minuman-minuman segar anda",
          link: "https://www.tokopedia.com/genovaindonesia/syrup-genova-pineapple-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Merah gelap dengan ungu, kilau merah muda.",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung \n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 25,
          name: "Fruit Blend Strawberry",
          image: "../fruitbland_strawberry.jpg",
          price: "109,000",
          category: "fruitBlend",
          info: "Juicy, cerah, dan rasa manis yang tepat;  tidak heran jika stroberi segar adalah favorit di musim panas.  Nikmati sensasi musim panas sepanjang tahun ketika Anda menggunakan Genova Fruit Blend Strawberry untuk membuat mocktail, lemonade, es teh, dan smoothie. GENOVA Fruit Blend Strawberry memberikan rasa strawberry yang menyegarkan dan juicy..!",
          link: "https://www.tokopedia.com/genovaindonesia/genova-fruit-blend-strawberry-750-ml-fruit-puree?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Merah ruby tua dengan beberapa kilau merah tembaga",
          tasting: "",
          penyimpanan:
            "-Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung \n-Hindari dari tempat yang berbau tajam.",
        },
      ],
      searchQuery: "",
    };
  },
  computed: {
    // Get the filtered projects
    resultQuery() {
      if (this.searchQuery) {
        return this.products.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.products;
      }
    },
  },
  methods: {},
};
</script>

<style scoped></style>
