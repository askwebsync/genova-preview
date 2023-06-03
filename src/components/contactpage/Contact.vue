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
              >Contact</span
            >
          </div>
        </li>
      </ol>
    </nav>
    <div class="flex flex-col my-12">
      <div class="mb-12 text-center center">
        <h1 class="pcolor text-2xl">Contact Us</h1>
        <hr class="h-1 rounded background-navbar w-32 bg-black border-0" />
        <div class="my-3">
          <p class="text-lg">Get in touch with us for more information</p>
        </div>
      </div>

      <div
        class="mb-12 grid md:grid-cols-2 lg:grid-cols-3 self-center gap-12 px-12 md:flex-row lg:px-12"
      >
        <div
          class="flex flex-col items-center gap-4 background-yellow p-8 card"
        >
          <i class="card-icon far fa-envelope"></i>
          <h3 class="text-white font-bold center mx-2">
            genovaindonesiaofficial@gmail.com
          </h3>
        </div>
        <div
          class="flex flex-col items-center gap-4 background-yellow p-8 card"
        >
          <i class="card-icon fas fa-phone"></i>
          <h3 class="text-white font-bold center mx-2">
            <a href="tel:081212128171" class="hover:text-black"
              >+62 812-1212-8171</a
            >
          </h3>
        </div>
        <div
          class="flex flex-col items-center gap-4 background-yellow p-8 card"
        >
          <i class="card-icon fas fa-map-marker-alt"></i>

          <h3 class="text-white font-bold center mx-2">
            Komplek PU Jl. B No. 18 RC Veteran - Tanah Kusir, Jakarta Selatan
            12330
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>
<script></script>

<style scoped>
.card-icon {
  margin-top: 12px;
  font-size: 28px;
  background: white;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px !important;
  border-radius: 50%;
  transition: 0.3s linear;
}
.card:hover .card-icon {
  transform: scale(1.4);
}

h3 {
  font-size: 1rem;
}
</style>
