<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="">
    <div class="container mx-auto">
      <div class="px-4 lg:px-6 xl:px-12">
        <div class="flex flex-row">
          <h1 class="pcolor mb-1 text-xl lg:text-2xl">New Flavour</h1>
        </div>
        <hr class="h-1 rounded w-32 background-yellow border-0" />
        <div class="justify-items-center justify-center my-6">
          <carousel :settings="settings" :breakpoints="breakpoints" class="">
            <slide v-for="product in products" :key="product.id">
              <div class="md:p-5 md:mx-4 mb-3 carousel__item">
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="w-full h-52 md:h-48 object-contain rounded-t-xl"
                />
                <div class="md:p-5">
                  <h2 class="mb-2 text-lg lg:text-xl tracking-tight text-black">
                    {{ product.name }}
                  </h2>
                  <p class="text-xl text-gray-600">RP. {{ product.price }}</p>
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
                    <div class="mt-5">
                      <button
                        class="rounded-lg px-3 py-2 background-yellow hover:bg-yellow-600 duration-300 text-white font-bold"
                      >
                        Buy Now
                      </button>
                    </div>
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
    </div>
  </section>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  name: "NewProduct",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      products: [
        {
          id: 5,
          name: "Powder Cookies",
          image: "../powder_cookiescream.jpg",
          price: "155,000",
          categoryId: "powder",
          info: "Cocok Digunakan untuk : \n- Untuk Meng-explore Minuman Terkini \n- Pembuatan Kue \n- Pembuatan Minuman \n- Aneka Olahan Lainnya",
          link: "https://www.tokopedia.com/genovaindonesia/genova-cookies-cream-frappe-powder-1000-gram?extParam=whid%3D8872969",
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
          id: 24,
          name: "Syrup Pineapple",
          image: "../syrup_pineapple.jpg",
          price: "97,000",
          category: "Flavoured",
          info: "Nanas diyakini berasal dari hutan hujan Brasil. Nanas dipanen oleh suku asli dan menyebar ke seluruh Amerika Selatan dan Tengah. Ketika Christopher Columbus mendarat di dunia baru pada tahun 1493, orang Spanyol menamai buah itu 'piña' karena kemiripannya dengan biji pinus dari pohon konifer. Nanas adalah buah oval besar yang tumbuh di negara-negara tropis. Buah ini manis, berair, dan kuning di dalamnya, dan memiliki kulit kecoklatan yang tebal. Sirup Pineapple GENOVA dibuat untuk menambahkan minuman anda dengan sentuhan tropis pada banyak minuman dingin, soda, dan teh.",
          link: "https://www.tokopedia.com/genovaindonesia/syrup-genova-pineapple-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Kuning berawan",
          tasting:
            "Awal: Nanas segar\n Tengah: Rasa nanas yang juicy dan segar\n Panjang di Mulut: Buah dengan rasa sedikit asam",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung \n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 25,
          name: "Syrup Raspberry",
          image: "../syrup_raspberry.jpg",
          price: "97,000",
          category: "Flavoured",
          info: "Raspberry adalah buah yang asam dan manis juga lezat secara bersamaan, dan mereka tidak terlalu asam seperti blackberry. Namun, mereka bisa menjadi sedikit asam, terutama jika dipetik sebelum matang sepenuhnya. Semakin manis dan kuat rasanya, semakin matang mereka. Berry kecil berwarna dalam yang memiliki tekstur lembut, rasa manis yang lembut dan aroma yang menyenangkan. Musim puncak raspberry adalah selama pertengahan musim panas, tetapi mereka tersedia sepanjang tahun di beberapa pasar baik segar maupun beku. Varietas yang paling umum dan paling banyak dibudidayakan adalah Raspberry merah. Rasa sirup GENOVA Raspberry yang matang dan seimbang menjadikannya tambahan yang lezat untuk mocktail, soda, dan minuman kopi. Sirup Raspberry GENOVA menghadirkan cita rasa yang luar biasa pada es teh, mocktail special, atau minuman dingin",
          link: "https://www.tokopedia.com/genovaindonesia/genova-rasbery-syrup-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Warna alami jus raspberry",
          tasting:
            "Awal: raspberry matang\n Tengah: sedikit asam\n Panjang di mulut: rasa permen raspberry.",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung \n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 47,
          name: "Syrup Tiramisu",
          image: "../syrup_tiramisu.jpg",
          price: "97,000",
          category: "Flavoured",
          info: "Syrup Tiramisu awalnya terinspirasi dari sebuah cake legendaris yang nikmat yg berasal dari Siena, Italy. Syrup Tiramisu adalah krim yang nikmat dan simbol kesenangan masyarakat Italia dalam pengetahuan kuliner saat ini. Resepnya cukup sederhana, memadukan rasa biskuit, kopi, kakao, rasa marsala dan mascarpone, untuk hasil yang kaya dan creamy, penuh rasa. Sirup GENOVA Tiramisu menawarkan rasa tiramisu asli, dengan perpaduan aroma yang lembut dan menggugah selera untuk minuman istimewa yang tiada bandingnya.",
          link: "https://www.tokopedia.com/genovaindonesia/genova-tiramisnilla",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Cokelat pekat",
          tasting:
            "Awal: Cokelat dengan sedikit biskuit\n Tengah: Cokelat dengan aroma kacang\n Belakang: Terasa panjang rasa kacang di mulut",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung \n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 31,
          name: "Syrup Coconut",
          image: "../syrup_coconut.jpg",
          price: "97,000",
          category: "Flavoured",
          info: "Terinspirasi dari kelapa asli yang berasal dari negara tropis dan sub-tropis seperti Indonesia, India dan Thailand, di mana kelapa dianggap sangat diperlukan dan berguna dalam banyak hal. Rasanya yang serbaguna menyegarkan. Juga rasa manis dan intensnya cocok untuk berbagai minuman tropis. Nikmati cita rasa minuman tropis ini dengan menambahkan sirup Coconut GENOVA ke dalam mocktail, kopi, smoothie, dan fruit punch, lalu hanyut di bawah naungan pohon kelapa",
          link: "https://www.tokopedia.com/genovaindonesia/genova-coconut-syrup-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Putih berawan",
          tasting:
            "Rasa kelapa yang sangat kuat, pekat, dan tahan lama yang membawa Anda pergi ke daerah tropis, di bawah rayuan pohon kelapa...",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung \n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 29,
          name: "Syrup Butterscotch",
          image: "../syrup_butterscotch.jpg",
          price: "97,000",
          category: "Flavoured",
          info: "Syrup Butterscotch sebagian besar terbuat dari mentega dan gula merah, itulah sebabnya rasanya luar biasa enak. Krim kental, vanila, dan garam juga bisa ditambahkan. Gula merah memberikan rasa yang lebih kompleks karena molase yang dikandungnya, dibandingkan dengan gula pasir, yang digunakan karamel. Resep paling awal yang diketahui, pada pertengahan abad ke-19 Yorkshire, bekas tetes (molase) sebagai pengganti atau sebagai tambahan gula. Butterscotch mirip dengan gula-gula, tetapi untuk butterscotch, gula direbus hingga menjadi retak lembut panggang, tidak retak keras seperti toffee. Sering dikreditkan dengan penemuan mereka, Parkinson of Doncaster membuat permen rebus butterscotch dan menjualnya dalam kaleng, yang menjadi salah satu ekspor kota yang paling terkenal. Mereka menjadi terkenal pada tahun 1851 ketika Ratu Victoria disajikan dengan kaleng ketika dia mengunjungi kota. Saus butterscotch, terbuat dari butterscotch dan krim, digunakan sebagai taburan es krim (terutama sundae ). Sempurna sebagai topping es krim sundae yang indah, sirup GENOVA Butterscotch juga akan menciptakan minuman pencuci mulut panas dan dingin yang mewah",
          link: "https://www.tokopedia.com/genovaindonesia/genova-butterscotch-syrup-750-ml",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Warna bening dengan kilau kuning",
          tasting: "Awal: Mentega dan karamel",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung \n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 37,
          name: "Syrup Lemon",
          image: "../syrup_lemon.jpg",
          price: "97,000",
          category: "Flavoured",
          info: "Dari beberapa data diterangkan jika minuman lemon ini sebenarnya berasal dari Mesir yang pertama kali dibuat oleh bangsa Mesir sekitar 1.500 tahun yang lalu. Namun, ada keterangan lainnya yang berpendapat, jika minuman lemon pertama kali diperkenalkan di Perancis pada abad ke-16. Buah yang konon berasal dari kaki bukit Himalaya, timur laut India ini kemudian tersebar ke seluruh daerah Timur Tengah, Cina, Burma, benua Eropa, Amerika, bahkan juga sampai benua Afrika. Sedangkan di Irak dan Mesir, mulai 700 tahun sebelum Masehi. Syrup GENOVA Lemon ini sangat dibutuhkan oleh para bartender yang menggunakan rasa dan kenyamanan yang sebenarnya sebagai pengganti jus lemon.",
          link: "https://www.tokopedia.com/genovaindonesia/genova-lemon-syrup-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "kuning berawan",
          tasting:
            "Hidung: Seimbang antara rasa lemon dan jeruk nipis segar\n Tengah: Asam, perasan jeruk nipis\n Panjang di Mulut: Menyegarkan",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung \n- Hindari dari tempat yang berbau tajam.",
        },
      ],
      breakpoints: {
        400: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        700: {
          itemsToShow: 2,
          snapAlign: "center",
        },

        1024: {
          itemsToShow: 3,
          snapAlign: "start",
        },
      },
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
    };
  },
};
</script>

<style>
.carousel__prev, .carousel__next {
    box-sizing: content-box;
    background: var(--vc-nav-background);
    border-radius: var(--vc-nav-border-radius);
    width: var(--vc-nav-width);
    height: var(--vc-nav-height);
    text-align: center;
    font-size: var(--vc-nav-height);
    padding: 0;
    color: var(--vc-nav-color);
    display: flex;
    justify-content: space-between;
    align-items: revert;
    position: absolute;
    border: 0;
    cursor: pointer;
    margin: 0 10px;
    top: 30% !important;
    transform: translateY(-50%);
}
.carousel__next {
  right: -20px;
  bottom: -10px;
  background-color: #bdb76b !important;
}
.carousel__prev {
  left: -20px;
  bottom: -10px;
  background-color: #bdb76b !important;
}
.carousel__icon {
  width: var(--vc-icn-width);
  height: var(--vc-icn-width);
  fill: white !important;
}
button,
[type="button"],
[type="reset"],
[type="submit"] {
  background-color: #bdb76b;
}
</style>
