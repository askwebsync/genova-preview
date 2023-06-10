<template>
  <div class="px-4 py-3 md:py-6 md:px-8 lg:px-24 lg:py-12">
    <div class="flex flex-col gap-4 md:gap-8 lg:gap-12">
      <div class="flex flex-col items-center lg:items-start">
        <h1 class="pcolor mb-1 text-xl lg:text-2xl uppercase">New Flavour</h1>
        <hr
          class="h-1 rounded w-full lg:w-40 background-yellow border-0 mx-auto lg:mx-0"
        />
      </div>
      <carousel :settings="settings" :breakpoints="breakpoints">
        <slide v-for="product in products" :key="product.id">
          <div class="flex flex-col items-center px-4 py-5 gap-5">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-64 object-cover rounded-t-xl"
            />
            <div class="flex flex-col items-center px-4 py-6 gap-5">
              <div class="">
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
                <div class="">
                  <button
                    class="rounded-lg px-3 py-2 md:px-4 md:py-3 background-yellow hover:bg-yellow-600 duration-300 text-white font-bold"
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
</template>

<script>
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
          image: "/assets/images/product/powder/powder_cookiescream.jpg",
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
          image: "/assets/images/product/syrup/syrup_pineapple.jpg",
          price: "105,000",
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
          image: "/assets/images/product/syrup/syrup_raspberry.jpg",
          price: "105,000",
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
          image: "/assets/images/product/syrup/syrup_tiramisu.jpg",
          price: "105,000",
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
          image: "/assets/images/product/syrup/syrup_coconut.jpg",
          price: "105,000",
          category: "Flavoured",
          info: "Terinspirasi dari kelapa asli yang berasal dari negara tropis dan sub-tropis seperti Indonesia, India dan Thailand, di mana kelapa dianggap sangat diperlukan dan berguna dalam banyak hal. Rasanya yang serbaguna menyegarkan. Juga rasa manis dan intensnya cocok untuk berbagai minuman tropis. Nikmati cita rasa minuman tropis ini dengan menambahkan sirup Coconut GENOVA ke dalam mocktail, kopi, smoothie, dan fruit punch, lalu hanyut di bawah naungan pohon kelapa",
          link: "https://www.tokopedia.com/genovaindonesia/genova-coconut-syrup-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Putih berawan",
          tasting:
            "Rasa kelapa yang sangat kuat, pekat, dan tahan lama yang membawa Anda pergi ke daerah tropis, di bawah rayuan pohon kelapa/assets/images/product/powder.",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung \n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 29,
          name: "Syrup Butterscotch",
          image: "/assets/images/product/syrup/syrup_butterscotch.jpg",
          price: "105,000",
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
          image: "/assets/images/product/syrup/syrup_lemon.jpg",
          price: "105,000",
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
