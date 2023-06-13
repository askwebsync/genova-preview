<!-- eslint-disable vue/require-v-for-key -->
<template>
  <nav
    class="container px-4 md:px-8 lg:px-24 py-2 mx-auto md:flex md:justify-between md:items-center"
  >
    <div class="flex items-center justify-between">
      <router-link :to="{ name: 'home' }"
        ><img
          src="/assets/images/logo/logo.webp"
          class="w-28 h-12 object-contain focus:outline-none"
        />
      </router-link>
      <!-- Mobile menu button -->
      <div
        @click="showMenu = !showMenu"
        class="flex md:hidden focus:outline-none"
      >
        <button type="button" class="hover:text-gray-700 focus:outline-none">
          <svg viewBox="0 0 24 24" class="w-8 h-8 fill-current">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <ul
      :class="showMenu ? 'flex' : 'hidden'"
      class="flex-col mt-8 space-y-4 items-center md:flex md:space-y-0 md:flex-row md:space-x-5 xl:space-x-12 md:mt-0"
    >
      <li
        @click="showMenu = !showMenu"
        class="text-sm lg:text-md pcolor hover:text-yellow-600 focus:outline-none"
      >
        <router-link :to="{ name: 'products' }">Product</router-link>
      </li>
      <li
        @click="showMenu = !showMenu"
        class="text-sm lg:text-md pcolor hover:text-yellow-600 focus:outline-none"
      >
        <router-link :to="{ name: 'recipe' }">Recipe</router-link>
      </li>
      <li
        @click="showMenu = !showMenu"
        class="text-sm lg:text-md pcolor hover:text-yellow-600 focus:outline-none"
      >
        <router-link :to="{ name: 'about' }">About Us</router-link>
      </li>
      <li
        @click="showMenu = !showMenu"
        class="text-sm lg:text-md pcolor hover:text-yellow-600 focus:outline-none"
      >
        <router-link :to="{ name: 'contact' }">Contact</router-link>
      </li>
      <li
        @click="showMenu = !showMenu"
        class="text-sm lg:text-md pcolor hover:text-yellow-600 focus:outline-none"
      >
        <router-link :to="{ name: 'location' }">Location</router-link>
      </li>
    </ul>
    <div class="contain md:w-1/6">
      <div class="pt-5 md:pt-0 relative w-full">
        <input
          class="border-2 border-yellow h-12 px-5 rounded-lg text-sm hover:outline-none focus:outline-none"
          placeholder="Search Item"
          type="text"
          v-model="search"
          @input="onQueryChange"
          @blur="toggle = false"
          @focus="toggle = true"
        />
        <button
          type="submit"
          class="absolute right-0 top-0 mt-8 md:mt-3 mr-4 md:mr-2"
        >
          <svg
            class="pcolor h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style="enable-background: new 0 0 56.966 56.966"
            xml:space="preserve"
            width="512px"
            height="512px"
          >
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
            />
          </svg>
        </button>
      </div>
      <div
        class="results relative cursor-pointer overflow-y-scroll h-32 w-100 zterang md:absolute md:w-[30%]"
        v-if="toggle"
      >
        <div class="result" v-for="(product, id) in newProducts" :key="id">
          <div @click="selectResult(product)" @mousedown.prevent>
            <router-link
              :to="{
                name: 'productDetailPage',
                query: {
                  dataProduk: JSON.stringify({
                    name: product.name,
                    price: product.price,
                    info: product.info,
                    packaging: product.packaging,
                    weight: product.weight,
                    color: product.color,
                    size: product.size,
                    image: product.image,
                    link: product.link,
                    serving: product.serving,
                  }),
                },
              }"
            >
              <div class="" @click="clickSearchBar()">
                {{ product.name }}
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  watch: {
    search(val) {
      this.newProducts = [];
      this.products.forEach((element) => {
        if (
          element.name.toLowerCase().includes(val.toLowerCase()) &&
          val != ""
        ) {
          this.newProducts.push(element);
        }
      });
    },
  },
  data() {
    return {
      search: "",
      toggle: false,
      products: [
        {
          id: 1,
          name: "Powder Avocado",
          image: "../powder_avocado.png",
          price: "150,000",
          categoryId: "powder",
          info: "Cocok Digunakan untuk :\n- Untuk Meng-explore Minuman Terkini\n- Pembuatan Kue\n- Pembuatan Minuman\n- Aneka Olahan Lainnya",
          link: "https://www.tokopedia.com/genovaindonesia/genova-avocado-frappe-powder-1000-gram?extParam=whid%3D8872969",
          packaging: "1 Pack Powder",
          weight: "1000 Gram",
          serving:
            "- Masukkan 20-30 Gram Powder\n- Dicampur 120-150ML Susu\n- Aduk/shake hingga tercampur rata dan sajikan",
          color: "",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 2,
          name: "Powder Cappuccino",
          image: "../powder_cappuccino.png",
          price: "139,000",
          categoryId: "powder",
          info: "Cocok Digunakan untuk :\n- Untuk Meng-explore Minuman Terkini\n- Pembuatan Kue\n- Pembuatan Minuman\n- Aneka Olahan Lainnya",
          link: "https://www.tokopedia.com/genovaindonesia/genova-cappuccino-frappe-powder-1000-gram?extParam=whid%3D8872969",
          packaging: "1 Pack Powder",
          weight: "1000 Gram",
          serving:
            "- Masukkan 20-30 Gram Powder\n- Dicampur 120-150ML Susu\n- Aduk/shake hingga tercampur rata dan sajikan",
          color: "",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 3,
          name: "Powder Charcoal",
          image: "../powder_charcoal.png",
          price: "159,000",
          categoryId: "powder",
          info: "Cocok Digunakan untuk :\n- Untuk Meng-explore Minuman Terkini\n- Pembuatan Kue\n- Pembuatan Minuman\n- Aneka Olahan Lainnya",
          link: "https://www.tokopedia.com/genovaindonesia/genova-charcoal-frappe-powder-1000-gram?extParam=whid%3D8872969",
          packaging: "1 Pack Powder",
          weight: "1000 Gram",
          serving:
            "-Masukkan 20-30 Gram Powder\n-Dicampur 120-150ML Susu\n-Aduk/shake hingga tercampur rata dan sajikan",
          color: "",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 4,
          name: "Powder Chocolate",
          image: "../powder_chocolateclassic.png",
          price: "139,000",
          categoryId: "powder",
          info: "Cocok Digunakan untuk :\n- Untuk Meng-explore Minuman Terkini\n- Pembuatan Kue\n- Pembuatan Minuman\n- Aneka Olahan Lainnya",
          link: "https://www.tokopedia.com/genovaindonesia/genova-chocolate-classic-frappe-powder-1000-gram?extParam=whid%3D8872969",
          packaging: "1 Pack Powder",
          weight: "1000 Gram",
          serving:
            "- Masukkan 20-30 Gram Powder\n- Dicampur 120-150ML Susu\n- Aduk/shake hingga tercampur rata dan sajikan",
          color: "",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 5,
          name: "Powder Cookies",
          image: "../powder_cookiescream.png",
          price: "155,000",
          categoryId: "powder",
          info: "Cocok Digunakan untuk :\n- Untuk Meng-explore Minuman Terkini\n- Pembuatan Kue\n- Pembuatan Minuman\n- Aneka Olahan Lainnya",
          link: "https://www.tokopedia.com/genovaindonesia/genova-cookies-cream-frappe-powder-1000-gram?extParam=whid%3D8872969",
          packaging: "1 Pack Powder",
          weight: "1000 Gram",
          serving:
            "- Masukkan 20-30 Gram Powder\n- Dicampur 120-150ML Susu\n- Aduk/shake hingga tercampur rata dan sajikan",
          color: "",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 6,
          name: "Powder Cotton Candy",
          image: "../powder_cottoncandy.png",
          price: "139,000",
          categoryId: "powder",
          info: "Cocok Digunakan untuk :\n- Untuk Meng-explore Minuman Terkini\n- Pembuatan Kue\n- Pembuatan Minuman\n- Aneka Olahan Lainnya",
          link: "https://www.tokopedia.com/genovaindonesia/genova-cotton-candy-frappe-powder-1000-gram?extParam=whid%3D8872969",
          packaging: "1 Pack Powder",
          weight: "1000 Gram",
          serving:
            "- Masukkan 20-30 Gram Powder\n- Dicampur 120-150ML Susu\n- Aduk/shake hingga tercampur rata dan sajikan",
          color: "",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 7,
          name: "Powder Dark Chocolate",
          image: "../powder_darkchocolate.png",
          price: "139,000",
          categoryId: "powder",
          info: "Cocok Digunakan untuk :\n- Untuk Meng-explore Minuman Terkini\n- Pembuatan Kue\n- Pembuatan Minuman\n- Aneka Olahan Lainnya",
          link: "https://www.tokopedia.com/genovaindonesia/genova-dark-chocolate-frappe-powder-1000-gram?extParam=whid%3D8872969",
          packaging: "1 Pack Powder",
          weight: "1000 Gram",
          serving:
            "- Masukkan 20-30 Gram Powder\n- Dicampur 120-150ML Susu\n- Aduk/shake hingga tercampur rata dan sajikan",
          color: "",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 8,
          name: "Powder Frappe Base",
          image: "../powder_frappebase.png",
          price: "139,000",
          categoryId: "powder",
          info: "Cocok Digunakan untuk :\n- Untuk Meng-explore Minuman Terkini\n- Pembuatan Kue\n- Pembuatan Minuman\n- Aneka Olahan Lainnya",
          link: "https://www.tokopedia.com/genovaindonesia/genova-base-frappe-powder-1000-gram?extParam=whid%3D8872969",
          packaging: "1 Pack Powder",
          weight: "1000 Gram",
          serving:
            "- Masukkan 20-30 Gram Powder\n- Dicampur 120-150ML Susu\n- Aduk/shake hingga tercampur rata dan sajikan",
          color: "",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 9,
          name: "Powder Greentea",
          image: "../powder_greentea.png",
          price: "150,000",
          categoryId: "powder",
          info: "Cocok Digunakan untuk :\n- Untuk Meng-explore Minuman Terkini\n- Pembuatan Kue\n- Pembuatan Minuman\n- Aneka Olahan Lainnya",
          link: "https://www.tokopedia.com/genovaindonesia/genova-greentea-frappe-powder-1000-gram?extParam=whid%3D8872969",
          packaging: "1 Pack Powder",
          weight: "1000 Gram",
          serving:
            "- Masukkan 20-30 Gram Powder\n- Dicampur 120-150ML Susu\n- Aduk/shake hingga tercampur rata dan sajikan",
          color: "",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 10,
          name: "Powder Macchiato",
          image: "../powder_macchiato.png",
          price: "139,000",
          categoryId: "powder",
          info: "Cocok Digunakan untuk :\n- Untuk Meng-explore Minuman Terkini\n- Pembuatan Kue\n- Pembuatan Minuman\n- Aneka Olahan Lainnya",
          link: "https://www.tokopedia.com/genovaindonesia/genova-macchiato-frappe-powder-1000-gram?extParam=whid%3D8872969",
          packaging: "1 Pack Powder",
          weight: "1000 Gram",
          serving:
            "- Masukkan 20-30 Gram Powder\n- Dicampur 120-150ML Susu\n- Aduk/shake hingga tercampur rata dan sajikan",
          color: "",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 11,
          name: "Powder Matcha Latte",
          image: "../powder_matchalatte.png",
          price: "169,000",
          categoryId: "powder",
          info: "Cocok Digunakan untuk :\n- Untuk Meng-explore Minuman Terkini\n- Pembuatan Kue\n- Pembuatan Minuman\n- Aneka Olahan Lainnya",
          link: "https://www.tokopedia.com/genovaindonesia/genova-matcha-latte-frappe-powder-1000-gram?extParam=whid%3D8872969",
          packaging: "1 Pack Powder",
          weight: "1000 Gram",
          serving:
            "- Masukkan 20-30 Gram Powder\n- Dicampur 120-150ML Susu\n- Aduk/shake hingga tercampur rata dan sajikan",
          color: "",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 12,
          name: "Powder Matcha Premium",
          image: "../powder_matchapremium.png",
          price: "245,000",
          categoryId: "powder",
          info: "Cocok Digunakan untuk :\n- Untuk Meng-explore Minuman Terkini\n- Pembuatan Kue\n- Pembuatan Minuman\n- Aneka Olahan Lainnya",
          link: "https://www.tokopedia.com/genovaindonesia/genova-matcha-premium-frappe-powder-1000-gram?extParam=whid%3D8872969",
          packaging: "1 Pack Powder",
          weight: "1000 Gram",
          serving:
            "- Masukkan 20-30 Gram Powder\n- Dicampur 120-150ML Susu\n- Aduk/shake hingga tercampur rata dan sajikan",
          color: "",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 13,
          name: "Powder Mocha",
          image: "../powder_mocha.png",
          price: "139,000",
          categoryId: "powder",
          info: "Cocok Digunakan untuk :\n- Untuk Meng-explore Minuman Terkini\n- Pembuatan Kue\n- Pembuatan Minuman\n- Aneka Olahan Lainnya",
          link: "https://www.tokopedia.com/genovaindonesia/genova-mocha-frappe-powder-1000-gram?extParam=whid%3D8872969",
          packaging: "1 Pack Powder",
          weight: "1000 Gram",
          serving:
            "- Masukkan 20-30 Gram Powder\n- Dicampur 120-150ML Susu\n- Aduk/shake hingga tercampur rata dan sajikan",
          color: "",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 14,
          name: "Powder Mochaccino",
          image: "../powder_mochaccino.png",
          price: "139,000",
          categoryId: "powder",
          info: "Cocok Digunakan untuk :\n- Untuk Meng-explore Minuman Terkini\n- Pembuatan Kue\n- Pembuatan Minuman\n- Aneka Olahan Lainnya",
          link: "https://www.tokopedia.com/genovaindonesia/genova-mochaccino-frappe-powder-1000-gram?extParam=whid%3D8872969",
          packaging: "1 Pack Powder",
          weight: "1000 Gram",
          serving:
            "- Masukkan 20-30 Gram Powder\n- Dicampur 120-150ML Susu\n- Aduk/shake hingga tercampur rata dan sajikan",
          color: "",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 15,
          name: "Powder Red Velvet",
          image: "../powder_redvelvet.png",
          price: "139,000",
          categoryId: "powder",
          info: "Cocok Digunakan untuk :\n- Untuk Meng-explore Minuman Terkini\n- Pembuatan Kue\n- Pembuatan Minuman\n- Aneka Olahan Lainnya",
          link: "https://www.tokopedia.com/genovaindonesia/genova-red-velvet-frappe-powder-1000-gram?extParam=whid%3D8872969",
          packaging: "1 Pack Powder",
          weight: "1000 Gram",
          serving:
            "- Masukkan 20-30 Gram Powder\n- Dicampur 120-150ML Susu\n- Aduk/shake hingga tercampur rata dan sajikan",
          color: "",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 16,
          name: "Powder Swiss Chocholate",
          image: "../powder_swisschocholate.png",
          price: "139,000",
          category: 0,
          info: "Cocok Digunakan untuk : - Untuk Meng-explore Minuman Terkini - Pembuatan Kue - Pembuatan Minuman - Aneka Olahan Lainnya, Brand : Genova - Naturally Flavored Sertifikat Halal MUI : YA",
          link: "https://www.tokopedia.com/genovaindonesia/genova-swiss-chocolate-frappe-powder-1000-gram?extParam=whid%3D8872969",
          packaging: "1 Pack Powder",
          weight: "1000 Gram",
          serving:
            "- Masukkan 20-30 Gram Powder - Dicampur 120-150ML Susu - Aduk/shake hingga tercampur rata dan sajikan",
          color: "",
          tasting: "",
        },
        {
          id: 17,
          name: "Powder Taro",
          image: "../powder_taro.png",
          price: "139,000",
          category: 0,
          info: "Cocok Digunakan untuk : - Untuk Meng-explore Minuman Terkini - Pembuatan Kue - Pembuatan Minuman - Aneka Olahan Lainnya, Brand : Genova - Naturally Flavored Sertifikat Halal MUI : YA",
          link: "https://www.tokopedia.com/genovaindonesia/genova-taro-frappe-powder-1000-gram?extParam=whid%3D8872969",
          packaging: "1 Pack Powder",
          weight: "1000 Gram",
          serving:
            "- Masukkan 20-30 Gram Powder - Dicampur 120-150ML Susu - Aduk/shake hingga tercampur rata dan sajikan",
          color: "",
          tasting: "",
        },
        {
          id: 18,
          name: "Powder Thai Tea",
          image: "../powder_thaitea.png",
          price: "139,000",
          categoryId: "powder",
          info: "Cocok Digunakan untuk :\n- Untuk Meng-explore Minuman Terkini\n- Pembuatan Kue\n- Pembuatan Minuman\n- Aneka Olahan Lainnya",
          link: "https://www.tokopedia.com/genovaindonesia/genova-thai-tea-frappe-powder-1000-gram?extParam=whid%3D8872969",
          packaging: "1 Pack Powder",
          weight: "1000 Gram",
          serving:
            "- Masukkan 20-30 Gram Powder\n- Dicampur 120-150ML Susu\n- Aduk/shake hingga tercampur rata dan sajikan",
          color: "",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 19,
          name: "Powder Tiramisu",
          image: "../powder_tiramisu.png",
          price: "139,000",
          categoryId: "powder",
          info: "Cocok Digunakan untuk :\n- Untuk Meng-explore Minuman Terkini\n- Pembuatan Kue\n- Pembuatan Minuman\n- Aneka Olahan Lainnya",
          link: "https://www.tokopedia.com/genovaindonesia/genova-tiramisu-frappe-powder-1000-gram?extParam=whid%3D8872969",
          packaging: "1 Pack Powder",
          weight: "1000 Gram",
          serving:
            "- Masukkan 20-30 Gram Powder\n- Dicampur 120-150ML Susu\n- Aduk/shake hingga tercampur rata dan sajikan",
          color: "",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 20,
          name: "Fruit Blend Kiwi",
          image: "../fruitbland_kiwi.png",
          price: "115,000",
          category: "fruitBlend",
          info: "Velvety, sedikit asam, dan asam, buah kecil ini merupakan pemberi semangat revitalisasi yang menjadikannya sebagai tambahan yang bagus untuk menu minuman musim panas.  Bagikan keceriaan dan kesenangan dari GENOVA Fruit Blend Kiwi dalam minuman dingin, es teh, smoothie, dan soda, paling cocok untuk hari-hari ekstra panas sebagai minuman bermanfaat. Sedikit Tips dari kami Kita suka memadukannya dengan buah markisa dan irisan jeruk untuk mengawinkan rasa eksotis semuanya dalam campuran sebuah gelas.",
          link: "https://www.tokopedia.com/genovaindonesia/genova-fruit-blend-kiwi-750-ml-fruit-puree?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Hijau gelap intens, deep undertone",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 21,
          name: "Fruit Blend Mango",
          image: "../fruitbland_mango.png",
          price: "115,000",
          category: "fruitBlend",
          info: "Buah Tropis, manis dan sangat lezat. Kita bersyukur mangga tumbuh di pohon.  Cabut cabangnya dan nikmati rasa mangga segar yang otentik dan baru ketika Anda menambahkan GENOVA Fruit Blend Mango ke dalam teh, lemonade, smoothie, atau koktail. Jadikan minuman mu itu mangga-licious..! GENOVA Fruit Blend Mango menghadirkan rasa mangga matang tropis dan tekstur lembut ke teh, limun, smoothie, mocktail, dan banyak lagi.",
          link: "https://www.tokopedia.com/genovaindonesia/genova-fruit-blend-mango-750-ml-fruit-puree?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Oranye terang dengan kilau kuning",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 22,
          name: "Fruit Blend Passion Fruit",
          image: "../fruitbland_passionfruit.png",
          price: "115,000",
          category: "fruitBlend",
          info: "Tidak ada yang bisa meniru cita rasa tropis seperti rasa eksotis dari buah Markisa. Buah kaya yang manis, tajam dan wangi pada dasarnya adalah rasa yang menyenangkan untuk selera anda dan GENOVA Fruit Blend Passion Fruit akan membawa kesegaran pada mocktail, lemonade, es teh, dan smoothie dalam perjalanan sensasi menyenangkan dahaga anda. Passion Fruit is Perfection..!",
          link: "https://www.tokopedia.com/genovaindonesia/genova-fruit-blend-passion-fruit-750-ml-fruit-puree?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Oranye tua",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 23,
          name: "Fruit Blend Pineapple",
          image: "../fruitbland_pineapple.png",
          price: "115,000",
          category: "fruitBlend",
          info: "Buah Nanas mencuri perhatian, bukan hanya oleh penampilan saja tetapi juga oleh jus rasa yang kuat dan asam yang membawa sensasi tropis anda di manapun anda berada di dunia. Temukan sensasi sinar matahari di GENOVA Fruit Blend Pineapple dan campur menjadi lemonade, es teh, dan smoothie untuk sentuhan tropis yang lembut.",
          link: "https://www.tokopedia.com/genovaindonesia/syrup-genova-pineapple-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Kuning bertekstur cerah",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 24,
          name: "Fruit Blend Raspberry",
          image: "../fruitbland_raspberry.png",
          price: "115,000",
          category: "fruitBlend",
          info: "Halus dan lezat. Selembut rasa asli, fruit blend raspberry benar-benar memberikan rasa yang luar biasa.  Nikmati rasa juicy segar dan manis dari raspberry segar ketika Anda menggunakan GENOVA Fruit Blend Raspberry untuk membuat lemonade, teh, smoothie, mocktail, dan banyak lagi. GENOVA Fruit Blend Raspberry adalah minuman lezat buah berry yang tak tertahankan segarnya dan aromanya untuk diaplikasikan pada minuman-minuman segar anda",
          link: "https://www.tokopedia.com/genovaindonesia/syrup-genova-pineapple-750-ml?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Merah gelap dengan ungu, kilau merah muda.",
          tasting: "",
          penyimpanan:
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 25,
          name: "Fruit Blend Strawberry",
          image: "../fruitbland_strawberry.png",
          price: "115,000",
          category: "fruitBlend",
          info: "Juicy, cerah, dan rasa manis yang tepat;  tidak heran jika stroberi segar adalah favorit di musim panas.  Nikmati sensasi musim panas sepanjang tahun ketika Anda menggunakan Genova Fruit Blend Strawberry untuk membuat mocktail, lemonade, es teh, dan smoothie. GENOVA Fruit Blend Strawberry memberikan rasa strawberry yang menyegarkan dan juicy..!",
          link: "https://www.tokopedia.com/genovaindonesia/genova-fruit-blend-strawberry-750-ml-fruit-puree?extParam=whid%3D8872969",
          packaging: "Botol 750 ml",
          weight: "1.4 kg",
          serving: "20 ml",
          color: "Merah ruby tua dengan beberapa kilau merah tembaga",
          tasting: "",
          penyimpanan:
            "-Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n-Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 26,
          name: "Syrup Pineapple",
          image: "../syrup_pineapple.png",
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
          image: "../syrup_raspberry.png",
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
          image: "../syrup_banana.png",
          price: "105,000",
          category: "Flavoured",
          info: "Buah pisang awalnya ditemukan di Asia Tenggara, terutama di India. Mereka dibawa ke barat oleh penakluk Arab pada 327 SM. dan dipindahkan dari Asia Kecil ke Afrika dan akhirnya dibawa ke Dunia Baru oleh para penjelajah dan misionaris pertama ke Karibia. Ada banyak alasan untuk menyukai pisang. Mereka mudah dibawa-bawa untuk camilan, rasanya enak, dan sarat dengan gula. Pisang tidak hanya membuat Anda tetap berenergi, tetapi juga dapat mengangkat suasana hati Anda.. Sirup Banana GENOVA cocok untuk di buat rangkaian mocktail, minuman pencuci mulut, smoothie, kopi, cokelat, minuman susu beraroma, dan minuman buah lainnya",
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
          image: "../syrup_bluecuracao.png",
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
          image: "../syrup_bubblegum.png",
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
          image: "../syrup_butterscotch.png",
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
          image: "../syrup_caramel.png",
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
          image: "../syrup_coconut.png",
          price: "105,000",
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
            "- Simpan Produk ditempat yang sejuk dan terhindar dari Sinar Matahari langsung\n- Hindari dari tempat yang berbau tajam.",
        },
        {
          id: 34,
          name: "Syrup Ginger",
          image: "../syrup_ginger.png",
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
          image: "../syrup_greenapple.png",
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
          image: "../syrup_hazelnut.png",
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
          image: "../syrup_irish.png",
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
          image: "../syrup_kiwi.png",
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
          image: "../syrup_lemon.png",
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
          image: "../syrup_lemongrass.png",
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
          image: "../syrup_lychee.png",
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
          image: "../syrup_mango.png",
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
          image: "../syrup_mojitomint.png",
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
          image: "../syrup_pandan.png",
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
          image: "../syrup_passionfruit.png",
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
          image: "../syrup_peach.png",
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
          image: "../syrup_peppermint.png",
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
          image: "../syrup_strawberry.png",
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
          image: "../syrup_tiramisu.png",
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
      newProducts: [],
      showMenu: false,
      showDiv: false,
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
  toggleNav: function () {
    this.showMenu = !this.showMenu;
    this.showDiv = !this.showDiv;
  },
  methods: {
    selectResult(product) {
      this.search = product.name;
    },
    clickSearchBar() {
      // this.showMenu = !this.showMenu;
      // this.showDiv = !this.showDiv;
      this.toggle = !this.toggle;
    },
  },
};
</script>
<style scoped>
input {
  width: 100%;
  height: 38px;
  padding-left: 10px;
  padding-right: -10px;
  border-radius: 4px;
  transition: all 0.2s ease;
}
.contain input:focus {
  outline: none;
}
.contain .results {
  background: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.results .result {
  padding: 20px 0.75rem;
}
.contain .results .result:hover {
  background: #efefef;
}
::placeholder {
  color: #bdb76b;
}
:-ms-input-placeholder {
  color: #bdb76b;
}
</style>
