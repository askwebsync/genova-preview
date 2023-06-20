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
        <div class="container-background-about">
          <!--First Col-->
          <div class="container-about p-8 md:p-10">
            <div class="flex flex-col gap-8">
              <div class="flex flex-col gap-4">
                <h2
                  class="tracking-tight text-xl md:text-2xl font-medium md:font-semibold"
                >
                  GENOVA
                </h2>
                <p
                  class="text-sm md:text-base lg:text-lg leading-6 tracking-normal"
                >
                  Saat ini, GENOVA adalah perusahaan yang memproduksi Premium
                  Syrup, Powder Drink, dan Fruitblend dengan harga terjangkau.
                  Kami menggunakan bahan baku impor berkualitas, bersertifikasi
                  halal, dan diproduksi di Jakarta, Indonesia. Ketersediaan stok
                  untuk pasokan bahan baku minuman selalu terjaga.
                </p>
              </div>
              <div class="flex flex-col gap-4">
                <h2
                  class="tracking-tight text-xl md:text-2xl font-medium md:font-semibold"
                >
                  Produk Genova
                </h2>
                <p
                  class="text-sm md:text-base lg:text-lg leading-6 tracking-normal"
                >
                  Produk Genova telah memiliki sertifikat BPOM pada beberapa
                  produk unggulan kami dan kami terus melakukan pembaruan untuk
                  memastikan semua produk kami memiliki sertifikat BPOM.
                  Sehingga, produk kami aman digunakan sebagai bahan baku
                  minuman.
                </p>
              </div>
              <div class="flex flex-col gap-4">
                <h2
                  class="tracking-tight text-xl md:text-2xl font-medium md:font-semibold"
                >
                  Kepercayaan dan Penggunaan
                </h2>
                <p
                  class="text-sm md:text-base lg:text-lg leading-6 tracking-normal"
                >
                  Sejak tahun 2016, GENOVA telah dipercaya oleh lebih dari 1000
                  pelanggan setia dari hotel bintang lima dan cafe papan atas di
                  seluruh Indonesia. Produk GENOVA banyak digunakan untuk
                  campuran pembuatan mocktail, cocktail, milkshake, ice blend,
                  hot drink, dan lain-lain. Tersedia dalam beragam varian rasa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container-background-about {
  background-image: url("/assets/images/banner/Homepage/homepage-banner.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.75;
}
.container-about {
  background: #ebebeb;
  border-radius: 6px;
}
p {
  color: #2b2b28;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
}
</style>
