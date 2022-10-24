<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container mx-auto">
    <div class="container-awal py-12">
      <div class="about-section">
        <div class="inner-container inner-container-shadow justify-center p-24">
          <div class="text-left">
            <h1 class="mb-1 text-2xl md:text-3xl lg:text-4xl">About Us</h1>
            <hr class="h-1 rounded w-32 bg-black border-0" />
          </div>
          <ul class="text-left mt-12 space-y-12">
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
  background-color: #fdfdfd;
}

.inner-container-shadow {
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}

@media screen and (max-width: 1200px) {
  .inner-container {
    padding: 80px;
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
    padding: 60px;
  }
}
</style>
