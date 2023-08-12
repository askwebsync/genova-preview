<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    class="container mx-auto px-4 py-6 md:px-8 lg:px-12 xl:px-24 lg:py-10"
  >
    <div class="grid md:grid-cols-2 self-center gap-6">
      <div
        class="flex flex-col gap-6 rounded-lg shadow-card-items mx-3 p-5 relative"
      >
        <h3 class="text-black text-xl md:text-2xl lg:text-3xl text-left">
          Bantuan
        </h3>
        <div class="my-2 h-56 md:h-32">
          <h2 class="text-left tracking-tight lg:tracking-wide">
            Punya pertanyaan atau butuh bantuan? Tim ahli kami siap memberikan
            jawaban dan dukungan yang Anda butuhkan. Jangan ragu untuk
            menghubungi kami dengan mengklik tombol di bawah ini.
          </h2>
        </div>
        <button
          class="bg-transparent border-yellow text-black font-semibold hover:border-2 py-2 px-4 rounded lg:py-3 lg:px-6 lg:text-lg lg:w-full md:mt-20 lg:mt-14 xl:mt-0"
        >
          <a href="tel:+6281212128171">Call</a>
        </button>
        <span class="bg-span-custom absolute top-0 left-0 w-1 h-20"></span>
      </div>
      <div
        class="flex flex-col gap-6 rounded-lg shadow-card-items mx-3 p-5 relative"
      >
        <h3 class="text-black text-xl md:text-2xl lg:text-3xl text-left">
          Kerjasama
        </h3>
        <div class="my-2 h-56 md:h-32">
          <h2 class="text-left tracking-tight lg:tracking-wide">
            Jika Anda tertarik untuk menjalin kerjasama dengan kami atau
            menggunakan produk sirup berkualitas tinggi kami, kami mengundang
            Anda untuk menemukan berbagai kemungkinan kolaborasi menarik yang
            menanti. Klik tombol di bawah ini untuk mengetahui lebih lanjut.
          </h2>
        </div>
        <button
          class="bg-transparent border-yellow text-black font-semibold hover:border-2 py-2 px-4 rounded lg:py-3 lg:px-6 lg:text-lg lg:w-full md:mt-20 lg:mt-14 xl:mt-0"
        >
          <a href="mailto:genovaindonesiaofficial@gmail.com">Email</a>
        </button>
        <span class="bg-span-custom absolute top-0 left-0 w-1 h-20"></span>
      </div>
    </div>
  </section>
</template>

<style scoped>
h3 {
  font-weight: 400;
}
h2 {
  color: #676763;
  font-family: Roboto;
  font-weight: 400;
}
.bg-span-custom {
  background-color: #c79e2a;
}
</style>
