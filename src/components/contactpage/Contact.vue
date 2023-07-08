<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    class="container mx-auto px-4 py-6 md:px-8 lg:px-12 xl:px-24 lg:py-10"
  >
    <div class="flex flex-col gap-10 lg:gap-12">
      <div class="flex flex-col items-center text-center">
        <h1 class="pcolor mb-1 text-xl lg:text-2xl uppercase">Contact Us</h1>
        <hr
          class="h-1 rounded w-full lg:w-40 background-yellow border-0 mx-auto lg:mx-0"
        />
        <!-- <div class="my-3">
          <p class="text-lg font-semibold">
            Get in touch with us for more information
          </p>
        </div> -->
      </div>
      <div class="grid md:grid-cols-2 self-center gap-8">
        <div
          class="flex flex-col gap-6 rounded-lg shadow-card-items mx-3 p-5 lg:p-6 relative"
        >
          <h3 class="text-gray-800 text-xl md:text-2xl lg:text-3xl text-left">
            Bantuan
          </h3>
          <div class="my-3 h-20 md:h-28">
            <h2
              class="font-medium text-gray-500 text-left tracking-tight lg:tracking-wide"
            >
              Punya pertanyaan atau butuh bantuan? Tim ahli kami siap memberikan
              jawaban dan dukungan yang Anda butuhkan. Jangan ragu untuk
              menghubungi kami dengan mengklik tombol di bawah ini.
            </h2>
          </div>
          <button
            class="bg-transparent border-yellow pcolor font-semibold hover:border-2 py-2 px-4 rounded lg:py-3 lg:px-6 lg:text-lg lg:w-full md:mt-20 lg:mt-14 xl:mt-0"
          >
            <a href="tel:+6281212128171">Call</a>
          </button>
          <span class="bg-yellow-500 absolute top-0 left-0 w-1 h-12"></span>
        </div>

        <div
          class="flex flex-col gap-6 rounded-lg shadow-card-items mx-3 p-5 lg:p-6 relative"
        >
          <h3 class="text-gray-800 text-xl md:text-2xl lg:text-3xl text-left">
            Kerjasama
          </h3>
          <div class="my-3 h-20 md:h-28">
            <h2
              class="font-medium text-gray-500 text-left tracking-tight lg:tracking-wide"
            >
              Jika Anda tertarik untuk menjalin kerjasama dengan kami atau
              menggunakan produk sirup berkualitas tinggi kami, kami mengundang
              Anda untuk menemukan berbagai kemungkinan kolaborasi menarik yang
              menanti. Klik tombol di bawah ini untuk mengetahui lebih lanjut.
            </h2>
          </div>
          <button
            class="bg-transparent border-yellow pcolor font-semibold hover:border-2 py-2 px-4 rounded lg:py-3 lg:px-6 lg:text-lg lg:w-full md:mt-20 lg:mt-14 xl:mt-0"
          >
            <a href="mailto:genovaindonesiaofficial@gmail.com">Email</a>
          </button>
          <span class="bg-yellow-500 absolute top-0 left-0 w-1 h-12"></span>
        </div>
      </div>
    </div>
  </section>
</template>
<script></script>

<style scoped>
h3 {
  font-weight: 500;
}
</style>
