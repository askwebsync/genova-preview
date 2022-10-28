<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container mx-auto">
    <div class="mt-6 p-4 lg:p-6 lg:py-12 xl:p-12">
      <div class="my-4 text-center center mb-12">
        <h1 class="pcolor mb-4 text-xs md:text-sm lg:text-lg">About Us</h1>
        <hr class="h-1 rounded background-navbar w-32 bg-black border-0" />
      </div>
      <div class="about-section">
        <div
          class="inner-container bg-gray-300 inner-container-shadow justify-center p-24"
        >
          <ul class="text-left mt- space-y-12">
            <li>
              <p class="leading-6 font-semibold tracking-wide">
                GENOVA adalah perusahaan yang bergerak memproduksi Premium
                Sirup, Powder Drink dan Fruitblend dengan harga yang terjangkau.
                Menggunakan bahan baku impor berkualitas, bersertifikasi halal
                serta diproduksi di Jakarta, Indonesia.Sehingga ketersediaan
                stock untuk pasokan bahan baku minuman selalu terjaga.
              </p>
            </li>
            <li>
              <p class="leading-6 font-semibold tracking-wide">
                Produk Genova juga sudah memiliki sertifikat BPOM di beberapa
                produk unggulan dan terus mengupdate semua produknya agar
                memiliki sertifikat BPOM. Sehingga produk kami aman untuk
                digunakan sebagai bahan baku minuman
              </p>
            </li>
            <li>
              <p class="leading-6 font-semibold tracking-wide">
                GENOVA saat ini sudah dipercaya oleh lebih dari 1000 pelanggan
                setia dari hotel bintang lima maupun cafe papan atas di seluruh
                Indonesia. Product GENOVA banyak digunakan untuk campuran
                pembuatan mocktail, cocktail, milkshake, ice blend, hot drink
                dan lain-lain. Tersedia dalam ragam varian rasa.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container-awal {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.about-section {
  background: url(../../assets/images/banner/About-Banner.jpeg) no-repeat left;
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
