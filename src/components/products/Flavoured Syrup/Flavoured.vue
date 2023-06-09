<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container mx-auto">
    <nav class="flex ml-3 mt-5 mb-10 md:ml-10" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <a
            href="/"
            class="inline-flex items-center text-sm font-medium hover:text-yellow-600"
          >
            <svg
              class="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              ></path>
            </svg>
            Home
          </a>
        </li>
        <li class="inline-flex items-center">
          <a
            href="/products"
            class="inline-flex items-center text-sm font-medium hover:text-yellow-600"
          >
            <svg
              class="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Products
          </a>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <svg
              class="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span
              class="ml-1 text-sm font-medium md:ml-2 pcolor hover:text-yellow-600"
              >Flavoured Syrup</span
            >
          </div>
        </li>
      </ol>
    </nav>
    <div class="p-4 lg:p-6 lg:pt-10 pb-12 xl:p-12">
      <div
        class="flex flex-col gap-y-12 md:flex md:flex-row md:justify-between md:gap-x-2"
      >
        <div class="p-2">
          <h1 class="pcolor mb-1 text-lg lg:text-xl">Flavoured Syrup</h1>
          <hr class="h-1 rounded w-28 background-navbar border-0" />
        </div>
        <!-- 
        <div class="flex justify-between pb-3 gap-2">
          <div class="max-w-md mx-auto">
            <div
              class="relative flex items-center w-full h-12 rounded-lg border-2 bg-white overflow-hidden"
            >
              <div class="grid place-items-center h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                v-model="searchQuery"
                class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search something/assets/images/product/syrup"
              />
            </div>
          </div>
        </div> -->
      </div>

      <div
        class="p-2 mt-2 grid grid-flow-row gap-12 text-neutral-600 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div
          v-for="product in resultQuery"
          :key="product.id"
          class="bg-white center shadow"
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
                  class="rounded-t h-56 md:h-64 w-full object-contain"
                />

                <figcaption class="p-2 md:p-3">
                  <!-- Title -->
                  <h2 class="mb-2 text-lg lg:text-xl tracking-tight text-black">
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
  </section>
</template>
<script>
export default {
  data() {
    return {
      products: [
        {
          id: 26,
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
            "Awal: Nanas segar\nTengah: Rasa nanas yang juicy dan segar\nPanjang di Mulut: Buah dengan rasa sedikit asam",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 27,
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
            "Awal: raspberry matang\nTengah: sedikit asam\nPanjang di mulut: rasa permen raspberry.",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 28,
          name: "Syrup Banana",
          image: "/assets/images/product/syrup/syrup_banana.jpg",
          price: "105,000",
          category: "Flavoured",
          info: "Buah pisang awalnya ditemukan di Asia Tenggara, terutama di India. Mereka dibawa ke barat oleh penakluk Arab pada 327 SM. dan dipindahkan dari Asia Kecil ke Afrika dan akhirnya dibawa ke Dunia Baru oleh para penjelajah dan misionaris pertama ke Karibia. Ada banyak alasan untuk menyukai pisang. Mereka mudah dibawa-bawa untuk camilan, rasanya enak, dan sarat dengan gula. Pisang tidak hanya membuat Anda tetap berenergi, tetapi juga dapat mengangkat suasana hati Anda/assets/images/product/syrup Sirup Banana GENOVA cocok untuk di buat rangkaian mocktail, minuman pencuci mulut, smoothie, kopi, cokelat, minuman susu beraroma, dan minuman buah lainnya",
          link: "https://www.tokopedia.com/genovaindonesia/genova-banana-syrup-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Emas terang bening",
          tasting: "Awal: rasa yang kuat dari pisang matang",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 29,
          name: "Syrup Blue Curacao",
          image: "/assets/images/product/syrup/syrup_bluecuracao.jpg",
          price: "105,000",
          category: "Flavoured",
          info: "Konon tempat kelahiran minuman ini adalah pulau Curacao, yang terletak di Laut Karibia dan merupakan bagian dari Kepulauan Belanda. Di sanalah jeruk pahit tumbuh - komponen minuman tak terpisahkan. Tapi di pasar dunia, minuman itu muncul tidak begitu lama - pertama kali diluncurkan pada tahun 1920 oleh De Kiper. Syrup Blue Curaçao dikenal dengan warna biru tua, rasa jeruk asam, dan ciri khas tropis. Warna biru tua yang menakjubkan dari sirup GENOVA Blue Curaçao membangkitkan lautan yang mengarungi pantai-pantai Curaçao yang indah dan menambahkan sentuhan eksotis pada mocktail dan soda dengan aroma kulit jeruk yang aromatik dan rasa manis yang sedikit asam.",
          link: "https://www.tokopedia.com/genovaindonesia/genova-blue-curacao-syrup-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Biru tua bahkan ketika diencerkan",
          tasting: "Rasa kulit jeruk, permen rasa jeruk segar",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 30,
          name: "Syrup Bubblegum",
          image: "/assets/images/product/syrup/syrup_bubblegum.jpg",
          price: "105,000",
          category: "Flavoured",
          info: "Dalam warna biru muda yang lucu, sirup GENOVA Bubble Gum mengemas rasa nostalgia masa kanak-kanak dan faktor kesenangan yang terkait dengan penganan yang selalu populer ini. Terinspirasi oleh permen karet Babol asal Indonesia yang legendaris, GENOVA Bubble Gum menghadirkan rasa permen karet asli yang kuat dan manis.\nSyrup GENOVA Bubble Gum memungkinkan Anda membuat kombinasi mocktail baru yang tak ada habisnya. Berani tampil beda dengan sirup GENOVA Bubble Gum dan biarkan imajinasi Anda menjadi liar dengan menambahkan gelembung Anda sendiri untuk membuat soda permen karet untuk pesta anak-anak atau penembak biru cantik untuk malam anak perempuan.",
          link: "https://www.tokopedia.com/genovaindonesia/genova-bubble-gum-syrup-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Biru muda mencolok",
          tasting:
            "Rasa awal permen, rasa Bubble Gum yang kuat dan manis mengingatkan Anda akan masa kecil Anda.",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 31,
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
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 32,
          name: "Syrup Caramel",
          image: "/assets/images/product/syrup/syrup_caramel.jpg",
          price: "105,000",
          category: "Flavoured",
          info: "Sirup Caramel GENOVA adalah flavour yang harus dimiliki oleh para profesional minuman, rasa karamel menghadirkan kombinasi rasa asin manis yang menggoda. Ada yang mengatakan, bahwa sejarah karamel bermula lebih dari seribu tahun yang lalu ke tahun 1000 M ketika suguhan manis itu ditemukan. Nama karamel pada saat itu adalah 'kurat al milh', yang berarti 'bola garam yang manis'. Versi asli ini adalah jenis karamel renyah yang dibuat dengan mengkristalkan gula dalam air mendidih, yang lebih mirip dengan apa yang dikenal sebagai toffee renyah saat ini. Sekarang, banyak digunakan untuk membumbui puding, kue, dan es krim, menambahkan sentuhan kesenangan yang manis, dengan sedikit rasa asin, kombinasi menarik yang meningkatkan dan meningkatkan rasa dan aroma. GENOVA mencoba menangkap kombinasi rasa yang memabukkan ini dalam sirup terbarunya, yang sangat cocok untuk kopi dan cokelat, serta dalam mocktail dan minuman pencuci mulut. Sirup Karamel GENOVA akan menambahkan rasa yang canggih dan tak tertahankan pada minuman khas Anda dan membuat pelanggan datang kembali untuk membeli lebih banyak lagi. Syrup Genova Caramel akan menambah sentuhan pada kopi klasik Anda. Kami suka kombinasi bau gula gosong dan rasa asin di lidah saya, unik.",
          link: "https://www.tokopedia.com/genovaindonesia/genova-caramel-syrup-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Warna kuning mengkilap dengan kilau kuning tembaga",
          tasting:
            "Awal: Karamel yang intens dengan nada bulat dari permen karamel\nTengah: Kaya dan rasa krim dengan nada asin\nPanjang di mulut: karamel mentega asin",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 33,
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
            "Rasa kelapa yang sangat kuat, pekat, dan tahan lama yang membawa Anda pergi ke daerah tropis, di bawah rayuan pohon kelapa/assets/images/product/syrup.",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 34,
          name: "Syrup Ginger",
          image: "/assets/images/product/syrup/syrup_ginger.jpg",
          price: "105,000",
          category: "Flavoured",
          info: "Sirup Genova merupakan sirup yang biasa digunakan di hotel, restaurant, dan cafe sebagai sirup gourmet. Rasa jahe yang khas dan pedas serta menghangatkan ini cocok jika dicampur dengan soda. Sirup GENOVA Ginger ini menghadirkan kepedasannya yang berani untuk dicampur mocktail, limun, es teh, dan soda buah yang eksotis. Aduk Dalam Beberapa Campuran: Sirup Jahe GENOVA menghadirkan rasa yang berani dan eksotis pada teh, limun, soda, dan koktail.",
          link: "https://www.tokopedia.com/genovaindonesia/genova-ginger-syrup-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Sedikit berawan",
          tasting: "Sedikit berawan",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 35,
          name: "Syrup Green Apple",
          image: "/assets/images/product/syrup/syrup_greenapple.jpg",
          price: "105,000",
          category: "Flavoured",
          info: "Buah apel adalah salah satu buah yang banyak digemari oleh masyarakat dunia. Rasanya yang manis dan segar adalah alasan yang membuat buah ini istimewa. Varietas yang paling terkenal dari jenis buah apel yaitu apel hijau yang buahnya renyah, berair dan manis asam dan sangat baik dimakan mentah atau dimasak dalam puding. Sirup apel hijau yang menyegarkan dapat lebih dinikmati dengan mencampur sirup varian asam atau manis lainnya dari Syrup Genova Syrup Green Apple GENOVA cocok juga untuk mocktail buah segar, limun, soda, dan teh dengan rasa buah apel yang menyegarkan",
          link: "https://www.tokopedia.com/genovaindonesia/genova-green-apple-syrup-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Hijau cerah jernih dengan kilau kuning",
          tasting:
            "Hidung apel hijau yang baru dipotong; asam, manis dan juicy rasa apel hijau, sangat menyegarkan",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 36,
          name: "Syrup Hazelnut",
          image: "/assets/images/product/syrup/syrup_hazelnut.jpg",
          price: "105,000",
          category: "Flavoured",
          info: "Syrup Hazelnut GENOVA adalah salah satu dari tiga rasa flavour kopi spesial teratas, bersama dengan vanilla dan karamel, sirup GENOVA Hazelnut menghadirkan rasa dan aroma hazelnut yang segar dengan sentuhan almond dan vanilla. Rasanya yang gurih dan manis seringkali memanjakan lidah kita sebagai pilihan yang pas untuk mocktail penutup atau minuman manis di saat santai. Seringkali beberapa orang pasti merasa bahwa rasa hazelnut hampir mirip dengan coklat yang sama manisnya. Tanaman ini banyak tumbuh di Turki, Italia, Yunani, Spanyol, Inggris, Amerika Serikat khususnya di Washington. Saat ini produsen terbesar penghasil hazelnut di dunia adalah negara Turki. Sempurnakan minuman kopi, cokelat, dan susu Anda serta ciptakan minuman pencuci mulut yang canggih dengan rasa kacang GENOVA Hazelnut yang lebih kaya.",
          link: "https://www.tokopedia.com/genovaindonesia/genova-hazelnut-syrup-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Emas",
          tasting:
            "Awal: Kacang segar dan bunga\nTengah: Rasa hazelnut segar dan nabati\nPanjang di Mulut: Sentuhan halus almond dan vanila",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 37,
          name: "Syrup Irish",
          image: "/assets/images/product/syrup/syrup_irish.jpg",
          price: "105,000",
          category: "Flavoured",
          info: "Syrup GENOVA Irish memiliki profil rasa yang mirip dengan krim Irlandia, minuman krim Irlandia ini cocok untuk campuran minuman kopi dan campuran susu. Syrup GENOVA Irish ini sempurna untuk membuat kopi hitam, kopi spesial, kopi susu, mocktail pencuci mulut, dan smoothie, sirup GENOVA Irish akan menambah cita rasa Irlandia pada minuman Anda!",
          link: "https://www.tokopedia.com/genovaindonesia/genova-irish-syrup-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Coklat tua",
          tasting:
            "Awal: mentega dengan sedikit kopi panggang\nTengah: lembut dengan kopi panggang yang kuat\nPanjang di Mulut: mocha",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 38,
          name: "Syrup Kiwi",
          image: "/assets/images/product/syrup/syrup_kiwi.jpg",
          price: "105,000",
          category: "Flavoured",
          info: "Buah kiwi ini aslinya dari negeri China, menjadi populer dengan nama Kiwi karena benih ini ditanam pada 1906 oleh seorang perawat di Whanganui New Zealand, Alexander Allison dan baru pertama panen pada 1910. Pada tahun 1959, Jack Turner mengusulkan nama kiwifruit yang digunakan di seluruh dunia. Ini karena Selanida Baru dikenal dengan burung Kiwi. Tidak ada buah lain yang menawarkan warna hijau zamrud yang lebih intens daripada kiwi. Dagingnya hampir lembut dalam konsistensi dengan rasa menyegarkan yang mengingatkan pada stroberi, melon, dan pisang, namun dengan rasa manis dan sedikit asam yang unik. Cobalah Sirup GENOVA Kiwi untuk menikmati rasa buah kiwi yang unik dan warna hijau yang indah pada minuman Anda.",
          link: "https://www.tokopedia.com/genovaindonesia/genova-kiwi-syrup-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Hijau terang",
          tasting: "Rasa awal kiwi matang, rasa kiwi juicy dan menyegarkan",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 39,
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
            "Hidung: Seimbang antara rasa lemon dan jeruk nipis segar\nTengah: Asam, perasan jeruk nipis\nPanjang di Mulut: Menyegarkan",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 40,
          name: "Syrup Lemongrass",
          image: "/assets/images/product/syrup/syrup_lemongrass.jpg",
          price: "105,000",
          category: "Flavoured",
          info: "Sirup Genova merupakan sirup yang biasa digunakan di hotel, restaurant, dan cafe sebagai sirup gourmet. Dengan aroma serai yang otentik, sirup GENOVA Lemongrass ini memberikan rasa otentik yang menyegarkan, cocok untuk membuat minuman dengan sentuhan Asia! Serai adalah bahan umum yang ada di seluruh masakan Asia Tenggara, serai menjadi semakin populer di seluruh dunia. Sirup GENOVA Lemongrass memiliki aroma herbal yang menarik untuk menciptakan kelezatan yang menyegarkan. Cocok untuk dicampur dengan syrup mojito mint yg inovatif, es teh, dan banyak lagi!",
          link: "https://www.tokopedia.com/genovaindonesia/genova-lemongrass-syrup-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Transparan dengan sedikit kekaburan",
          tasting:
            "Genova Lemongrass adalah pendamping yang hebat untuk membuat mocktail dan banyak lagi. Di Asia Tenggara, kami senang memadukannya dengan jeruk nipis, daun jeruk purut, mint, asam untuk menciptakan pengalaman Asia yang otentik.",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 41,
          name: "Syrup Lychee",
          image: "/assets/images/product/syrup/syrup_lychee.jpg",
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
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 42,
          name: "Syrup Mango",
          image: "/assets/images/product/syrup/syrup_mango.jpg",
          price: "105,000",
          category: "Flavoured",
          info: "Buah mangga ternyata berasal dari India yang ditemukan oleh Alexander Agung pada tahun 327 SM yang menemukan tanaman mangga di lembah Indus, India. Hal ini mendasari anggapan bahwa mangga berasal dari India dan menyebar ke Semenanjung Malaysia, Indonesia dan sekitarnya. Buah mangga di Indonesia tidak ada setiap saat karena biasanya hanya musim di sekitar bulan Oktober hingga Desember. Sirup Mango GENOVA hadir sebagai terobosan pelengkap sempurna cita rasa sensasi tropis buah mangga. Sirup Mango GENOVA berpadu sempurna dengan campuran mocktail tropis, soda, limun, dan minuman spesial favorit Anda.",
          link: "https://www.tokopedia.com/genovaindonesia/genova-mango-syrup-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Kuning",
          tasting:
            "Rasa awal buah mangga eksotis ringan, rasa mangga manis dengan sedikit keasaman",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 43,
          name: "Syrup Mojito",
          image: "/assets/images/product/syrup/syrup_mojitomint.jpg",
          price: "105,000",
          category: "Flavoured",
          info: "Sirup Genova merupakan sirup yang biasa digunakan di hotel, restaurant, dan cafe sebagai sirup gourmet. Dengan minuman rasa Mojito Mint ini membuat pencampuran Mojito lebih mudah. Dengan sirup GENOVA Mojito Mint anda dapat mengurangi waktu dan persiapan, dan mulai menikmati minuman campuran atau minuman dingin favorit Anda. Sirup GENOVA Mojito Mint adalah tambahan yang sempurna untuk mocktail dingin, dan minuman segar lainnya",
          link: "https://www.tokopedia.com/genovaindonesia/genova-mojito-mint-syrup-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Transparan",
          tasting:
            "Aroma spearmint, rasa gula tebu dan spearmint yang sangat seimbang.",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 44,
          name: "Syrup Pandan",
          image: "/assets/images/product/syrup/syrup_pandan.jpg",
          price: "105,000",
          category: "Flavoured",
          info: "Pandan di perkirakan berasal dari kepulauan di Lautan Pasifik, dengan penyebaran terbesar di Madagaskar dan Malesia. Untuk penyebarannya, Terdapat hampir di seluruh Indonesia, karena tumbuhan ini mudah tumbuh. Pandan banyak dibudidayakan karena biasa digunakan sebagai penambah rasa di banyak hidangan manis dan gurih. Sirup GENOVA Pandan memiliki aroma ringan dan menyegarkan dengan sentuhan aroma yang manis. Sangat cocok untuk membuat minuman teh susu, atau es teh sederhana dengan rasa manis yang seimbang. Sirup ini menjadi viral untuk campuran teh di Asia Tenggara hari ini dan menciptakan resep unik dengan rasa yang luar biasa.",
          link: "https://www.tokopedia.com/genovaindonesia/genova-pandan-syrup-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Rumput hijau tua",
          tasting:
            "Awal: aroma nabati yang wangi\nTengah: pandan masak hijau manis\nPanjang di Mulut: tradisional daun pandan",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 45,
          name: "Syrup Passion Fruit",
          image: "/assets/images/product/syrup/syrup_passionfruit.jpg",
          price: "105,000",
          category: "Flavoured",
          info: "Buah markisa adalah buah tropis seukuran telur dengan cangkang lunak berwarna kuning kemerahan yang membungkus biji renyah dan daging berair lembut, yang memiliki sensasi rasa yang unik juga rasa yang kuat dan harum. Buah markisa berasal dari Amerika Latin, terutama Brasil, kemudian menyebar ke daerah-daerah tropis di dunia termasuk Indonesia. Di Indonesia, markisa banyak ditanam di dataran tinggi di Goa, Malino (Sulawesi Selatan) dan Brastagi (Sumatera Utara). Untuk sensasi rasa tropis, tambahkan aroma buah dan rasa manis dan asam dari sirup Passion Fruit GENOVA ke mocktail, soda, limun, fruit punch, dan smoothie.",
          link: "https://www.tokopedia.com/genovaindonesia/genova-passion-fruit-syrup-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Kuning berawan",
          tasting:
            "Aroma buah yang eksotis, rasa manis dan asam yang akan membuat Anda merasa ingin memakan buah markisa yang segar.",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 46,
          name: "Syrup Peach",
          image: "/assets/images/product/syrup/syrup_peach.jpg",
          price: "105,000",
          category: "Flavoured",
          info: "Buah Persik (Prunus persica) merupakan tanaman yang diperkirakan oleh para ilmuwan berasal dari Cina lebih dari 8000 tahun yang lalu. Buah persik memiliki kulit buah yang tipis dan terasa halus karena terdapat bulu halus pada permukaannya. Setiap tahun, saat musim panas menandakan kedatangan buah peach yang manis dan berair. Tetapi dengan mencampurkan resep Anda dengan rasa manis yang tidak salah lagi dari Sirup Peach GENOVA warna keemasan yang kaya, tidak harus berakhir ketika hari-hari panjang musim panas memudar. Temukan bagaimana GENOVA Peach dapat menyempurnakan minuman Anda dengan rasa buah yang lezat!",
          link: "https://www.tokopedia.com/genovaindonesia/genova-peach-syrup-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Cemerlang, warna oranye emas muda",
          tasting: "Sensasi dan rasa persik putih tahan lama",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 47,
          name: "Syrup Peppermint",
          image: "/assets/images/product/syrup/syrup_peppermint.jpg",
          price: "105,000",
          category: "Flavoured",
          info: "Salah satu rasa paling populer di dunia mixologist, sirup GENOVA Peppermint digunakan untuk membuat campuran air atau limun dan sirup yang menyegarkan Daun mint memiliki asal-usul di Eropa dan Mediterania. Orang Romawi menggunakan mint untuk bumbu masakan dan digunakan untuk menjamu tamu-tamu mereka. Ramuan segar, manis, aromatik dengan rasa dingin, mint digunakan secara luas dalam hidangan, sebagai jeli atau saus, sebagai manisan, atau untuk meningkatkan makanan penutup buah seperti, es krim atau sebagai teh. Warna beningnya dan rasa aromatik alami dari sirup GENOVA Peppermint akan membuat mocktail berlapis yang menakjubkan, teh yang menyegarkan, serta minuman cokelat dan moka yang lezat.",
          link: "https://www.tokopedia.com/genovaindonesia/genova-mint-syrup-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Bening",
          tasting:
            "Bau peppermint yang kuat, rasa mint yang menyegarkan di mulut",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 48,
          name: "Syrup Strawberry",
          image: "/assets/images/product/syrup/syrup_strawberry.jpg",
          price: "105,000",
          category: "Flavoured",
          info: "Stroberi merupakan buah yang berasal dari daerah subtropics dimana pertama kali ditemukan di daerah Chili, Amerika Serikat. Memiliki warna, rasa dan aroma yang begitu kuat ketika dirasakan. Sirup stroberi GENOVA cocok ditambahkan ke air, mint hijau, dan limun untuk membuat mixologist Strawberry serta minuman susu rasa. Buah pertama Musim Semi, stroberi kebun dibudidayakan di seluruh dunia tetapi pertama kali diperkirakan tumbuh di Brittany, Prancis pada tahun 1750-an. Strawberry adalah rasa populer dalam produk susu seperti es krim, milkshake, smoothie, dan yogurt dengan stroberi dan krim sebagai hidangan penutup musim panas terbaik, yang terkenal di konsumsi di Kejuaraan Tenis di Inggris. Tambahkan rasa suguhan musim panas klasik ini dengan mencampur sirup GENOVA Strawberry untuk membuat mocktail pencuci mulut yang memanjakan, limun yang menyegarkan, dan milkshake yang menggugah selera.",
          link: "https://www.tokopedia.com/genovaindonesia/genova-strawberry-syrup-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Merah intens",
          tasting:
            "Rasa stroberi segar yang kaya, rasa lembut dan lembut dengan sentuhan rasa stroberi.",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 49,
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
            "Awal: Cokelat dengan sedikit biskuit\nTengah: Cokelat dengan aroma kacang\nBelakang: Terasa panjang rasa kacang di mulut",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
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
  methods: {
    shareData() {
      // this.$router.push({
      //   name: "detail-product",
      //   // eslint-disable-next-line no-undef
      //   params: JSON.stringify(product),
      // });
      this.$router.push({
        name: "detail-product",
        // params: {
        //   objectParam: JSON.stringify({ a: "a" }),
        // },
      });
    },
  },
};
</script>

<style scoped>
.carousel {
  width: 170px;
  overflow: hidden;
}
.inner {
  transition: transform 0.2s;
  white-space: nowrap;
}
/* optional */
button {
  margin-right: 5px;
  margin-top: 10px;
}
.background {
  background: #fffbe8;
}
</style>
