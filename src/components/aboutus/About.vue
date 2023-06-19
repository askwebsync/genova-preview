<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <div class="container mx-auto px-4 py-6 md:px-8 lg:px-24 lg:py-10">
      <div class="flex flex-col gap-10 lg:gap-12">
        <div class="flex flex-col items-center text-center">
          <h1 class="pcolor mb-1 text-xl lg:text-2xl uppercase">About</h1>
          <hr
            class="h-1 rounded w-full lg:w-40 background-yellow border-0 mx-auto lg:mx-0"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            class="container-about justify-center p-12 col-span-2 md:col-span-1 md:order-1"
          >
            <!-- Content for the first column -->
            <div class="flex flex-col gap-8">
              <p class="leading-6 tracking-normal font-medium">
                GENOVA saat ini adalah perusahaan yang bergerak memproduksi
                Premium Syrup, Powder Drink dan Fruitblend dengan harga yang
                terjangkau. Menggunakan bahan baku impor berkualitas,
                bersertifikasi halal serta diproduksi di Jakarta,
                Indonesia.Sehingga ketersediaan stock untuk pasokan bahan baku
                minuman selalu terjaga.
              </p>
              <p class="leading-6 tracking-normal font-medium">
                Produk Genova juga sudah memiliki sertifikat BPOM di beberapa
                produk unggulan dan terus mengupdate semua produknya agar
                memiliki sertifikat BPOM. Sehingga produk kami aman untuk
                digunakan sebagai bahan baku minuman
              </p>
              <p class="leading-6 tracking-normal font-medium">
                Berdiri sejak tahun 2016, GENOVA saat ini sudah dipercaya oleh
                lebih dari 1000 pelanggan setia dari hotel bintang lima maupun
                cafe papan atas di seluruh Indonesia. Product GENOVA banyak
                digunakan untuk campuran pembuatan mocktail, cocktail,
                milkshake, ice blend, hot drink dan lain-lain. Tersedia dalam
                ragam varian rasa.
              </p>
            </div>
          </div>
          <div class="md:order-2">
            <!-- Image for the second column -->
            <img
              src="/assets/images/banner/Homepage/homepage-banner.png"
              alt="backgroundAbout"
              class="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container-about {
  background: #e5e7eb;
  border-radius: 6px;
}
p {
  color: #2b2b28;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
}
</style>
