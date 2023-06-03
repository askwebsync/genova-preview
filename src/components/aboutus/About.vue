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
              >About Us</span
            >
          </div>
        </li>
      </ol>
    </nav>
    <div class="p-4 lg:p-6 lg:pt-10 pb-12 xl:p-12">
      <div class="text-center center mb-12">
        <h1 class="pcolor mb-1 text-xl lg:text-xxl">About Us</h1>
        <hr class="h-1 rounded background-navbar w-32 bg-black border-0" />
      </div>
      <div class="about-section">
        <div
          class="inner-container bg-gray-200 inner-container-shadow justify-center p-12"
        >
          <ul class="text-left space-y-12">
            <li>
              <p class="leading-6 tracking-normal font-medium">
                GENOVA saat ini adalah perusahaan yang bergerak memproduksi
                Premium Syrup, Powder Drink dan Fruitblend dengan harga yang
                terjangkau. Menggunakan bahan baku impor berkualitas,
                bersertifikasi halal serta diproduksi di Jakarta,
                Indonesia.Sehingga ketersediaan stock untuk pasokan bahan baku
                minuman selalu terjaga.
              </p>
            </li>
            <li>
              <p class="leading-6 tracking-normal font-medium">
                Produk Genova juga sudah memiliki sertifikat BPOM di beberapa
                produk unggulan dan terus mengupdate semua produknya agar
                memiliki sertifikat BPOM. Sehingga produk kami aman untuk
                digunakan sebagai bahan baku minuman
              </p>
            </li>
            <li>
              <p class="leading-6 tracking-normal font-medium">
                Berdiri sejak tahun 2016, GENOVA saat ini sudah dipercaya oleh
                lebih dari 1000 pelanggan setia dari hotel bintang lima maupun
                cafe papan atas di seluruh Indonesia. Product GENOVA banyak
                digunakan untuk campuran pembuatan mocktail, cocktail,
                milkshake, ice blend, hot drink dan lain-lain. Tersedia dalam
                ragam varian rasa.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background: url(/homepage-banner.png) no-repeat left;
  background-size: fill;
  background-position: center center;
  background-color: #fdfdfd;
  overflow: hidden;
  padding: 100px 0;
  border-radius: 10px;
}
.inner-container {
  width: 55%;
}
.inner-container-shadow {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

@media screen and (max-width: 1200px) {
  .inner-container {
    padding: 70px;
  }
}

@media screen and (max-width: 1000px) {
  .about-section {
    background-size: 100%;
    padding: 100px 40px;
  }
  .inner-container {
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .about-section {
    padding: 0;
  }
  .inner-container {
    padding: 50px;
  }
}
</style>
