<template>
  <div class="px-4 py-6 md:px-8 lg:px-24 lg:py-10">
    <div class="flex flex-col gap-4 md:gap-8 lg:gap-12">
      <div class="flex flex-col items-center lg:items-start">
        <h1 class="pcolor mb-1 text-xl lg:text-2xl uppercase">
          Trending Flavour
        </h1>
        <hr
          class="h-1 rounded w-full lg:w-40 background-yellow border-0 mx-auto lg:mx-0"
        />
      </div>
      <carousel :settings="settings" :breakpoints="breakpoints">
        <slide v-for="product in products" :key="product.id">
          <div class="flex flex-col items-center px-4 py-4 md:py-5">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-auto h-60 lg:h-64 object-cover"
            />
            <div class="flex flex-col items-center px-4 py-4 md:py-6 gap-5">
              <div class="flex flex-col gap-1">
                <h3 class="text-lg lg:text-xl tracking-tighter text-black">
                  {{ product.name }}
                </h3>
                <p class="text-md md:text-lg lg:text-xl">
                  RP.{{ product.price }}
                </p>
              </div>
              <router-link
                class="focus:outline-none"
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
                <button
                  class="rounded px-3 py-2 md:px-4 background-yellow hover:bg-yellow-600 duration-300 text-white font-bold border-radius-6"
                >
                  Buy Now
                </button>
              </router-link>
            </div>
          </div>
        </slide>

        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  name: "TrendingProduct",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      products: [
        {
          id: 11,
          name: "Powder Matcha Latte",
          image: "/assets/images/product/powder/powder_matchalatte.png",
          price: "169,000",
          categoryId: "powder",
          info: "Cocok digunakan untuk:\n-Untuk Meng-explore minuman Terkini \n- Pembuatan kue \n- Pembuatan minuman \n- Aneka olahan lainnya",
          link: "https://www.tokopedia.com/genovaindonesia/genova-matcha-latte-frappe-powder-1000-gram?extParam=whid%3D8872969",
          packaging: "1 Pack Powder",
          weight: "1000 Gram",
          serving:
            "- Masukkan 20-30 Gram Powder\n - Dicampur 120-150ML Susu\n - Aduk/shake hingga tercampur rata dan sajikan",
          color: "",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung \n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 39,
          name: "Syrup Lychee",
          image: "/assets/images/product/syrup/syrup_lychee.png",
          price: "105,000",
          category: "Flavoured",
          info: "Lychee atau Litchi atau Buah leci adalah buah yang berasal dari pohon tropis dan sub tropis yang berasal dari daerah provinsi Fujian dan Guangdong, Cina. Kabarnya, pohon leci sudah dikembangbiakkan sejak abad ke-11 silam. Selain Cina, kawasan penghasil buah leci terbesar di dunia adalah India, Madagaskar, dan Afrika Selatan. Syrup GENOVA Lychee memiliki rasa aroma lychee yang kuat dan sensasi asam manis layaknya menikmati buah leci sehingga memiliki cita rasa sendiri khas product Genova Indonesia. Syrup GENOVA Lychee saat ini sudah menjadi sirup pilihan ter favorit pilihan customer setia Genova Indonesia. Tambahkan sirup ini untuk berbagai minuman teh, moctail, susu yakult, serta minuman dingin lainnya.",
          link: "https://www.tokopedia.com/genovaindonesia/genova-lychee-syrup-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Bening putih",
          tasting:
            "Awal: Aroma buah\nTengah: Rasa leci asli sedikit asam\nPanjang di Mulut: halus manis",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung \n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 7,
          name: "Powder Dark Chocolate",
          image: "/assets/images/product/powder/powder_darkchocolate.png",
          price: "139,000",
          categoryId: "powder",
          info: "Cocok Digunakan untuk : \n- Untuk Meng-explore Minuman Terkini \n- Pembuatan Kue \n- Pembuatan Minuman \n- Aneka Olahan Lainnya",
          link: "https://www.tokopedia.com/genovaindonesia/genova-dark-chocolate-frappe-powder-1000-gram?extParam=whid%3D8872969",
          packaging: "1 Pack Powder",
          weight: "1000 Gram",
          serving:
            "- Masukkan 20-30 Gram Powder\n - Dicampur 120-150ML Susu\n - Aduk/shake hingga tercampur rata dan sajikan",
          color: "",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung \n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 15,
          name: "Powder Red Velvet",
          image: "/assets/images/product/powder/powder_redvelvet.png",
          price: "139,000",
          categoryId: "powder",
          info: "Cocok Digunakan untuk : \n- Untuk Meng-explore Minuman Terkini \n- Pembuatan Kue \n- Pembuatan Minuman \n- Aneka Olahan Lainnya",
          link: "https://www.tokopedia.com/genovaindonesia/genova-red-velvet-frappe-powder-1000-gram?extParam=whid%3D8872969",
          packaging: "1 Pack Powder",
          weight: "1000 Gram",
          serving:
            "- Masukkan 20-30 Gram Powder\n - Dicampur 120-150ML Susu\n - Aduk/shake hingga tercampur rata dan sajikan",
          color: "",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung \n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 42,
          name: "Syrup Pandan",
          image: "/assets/images/product/syrup/syrup_pandan.png",
          price: "105,000",
          category: "Flavoured",
          info: "Pandan di perkirakan berasal dari kepulauan di Lautan Pasifik, dengan penyebaran terbesar di Madagaskar dan Malesia. Untuk penyebarannya, Terdapat hampir di seluruh Indonesia, karena tumbuhan ini mudah tumbuh. Pandan banyak dibudidayakan karena biasa digunakan sebagai penambah rasa di banyak hidangan manis dan gurih. Sirup GENOVA Pandan memiliki aroma ringan dan menyegarkan dengan sentuhan aroma yang manis. Sangat cocok untuk membuat minuman teh susu, atau es teh sederhana dengan rasa manis yang seimbang. Sirup ini menjadi viral untuk campuran teh di Asia Tenggara hari ini dan menciptakan resep unik dengan rasa yang luar biasa.",
          link: "https://www.tokopedia.com/genovaindonesia/genova-pandan-syrup-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Rumput hijau tua",
          tasting:
            "Awal: aroma nabati yang wangi\n Tengah: pandan masak hijau manis\n Panjang di Mulut: tradisional daun pandan",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung \n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 23,
          name: "Fruit Blend Strawberry",
          image: "/assets/images/product/fruit-bland/fruitbland_strawberry.png",
          price: "115,000",
          category: "fruitBlend",
          info: "Juicy, cerah, dan rasa manis yang tepat;  tidak heran jika stroberi segar adalah favorit di musim panas.  Nikmati sensasi musim panas sepanjang tahun ketika Anda menggunakan Genova Fruit Blend Strawberry untuk membuat mocktail, lemonade, es teh, dan smoothie. GENOVA Fruit Blend Strawberry memberikan rasa strawberry yang menyegarkan dan juicy/assets/images/product/powder!",
          link: "https://www.tokopedia.com/genovaindonesia/genova-fruit-blend-strawberry-750-ml-fruit-puree?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Merah ruby tua dengan beberapa kilau merah tembaga",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung \n- Hindari dari tempat yang berbau tajam.",
        },
      ],
      breakpoints: {
        600: {
          itemsToShow: 2,
          snapAlign: "start",
        },
        1100: {
          itemsToShow: 3,
          snapAlign: "start",
        },
        1200: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
      settings: {
        itemsToShow: 1,
        snapAlign: "start",
      },
    };
  },
};
</script>

<style>
button,
[type="button"],
[type="reset"],
[type="submit"] {
  background-color: #bdb76b;
}
</style>
