<template>
  <section class="container mx-auto">
    <div class="flex flex-col gap-6">
      <div class="">
        <div
          class="text-center map-responsive"
          v-if="map === 'utama'"
          ref="mapContainer"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0203262222835!2d106.76626831485463!3d-6.261052595468134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f0556e12d9e1%3A0xb7dee4c20b04d2f6!2sJl.%20RC.%20Veteran%20Raya%20No.18%2C%20RT.4%2FRW.1%2C%20Bintaro%2C%20Kec.%20Pesanggrahan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012330!5e0!3m2!1sen!2sid!4v1666345801834!5m2!1sen!2sid"
            width="600"
            height="450"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div
          class="text-center map-responsive"
          v-if="map === 'palangkaraya'"
          ref="mapContainer"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.8326439098923!2d113.90558411484106!3d-2.2167132983842732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dfcb2fe5ab00ee5%3A0x4120bbd562d6b809!2sJl.%20Cut%20Nyak%20Dien%2C%20Menteng%2C%20Kec.%20Jekan%20Raya%2C%20Kota%20Palangka%20Raya%2C%20Kalimantan%20Tengah%2074874!5e0!3m2!1sen!2sid!4v1666346107663!5m2!1sen!2sid"
            width="600"
            height="450"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div
          class="text-center map-responsive"
          v-if="map === 'riau'"
          ref="mapContainer"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.677324231581!2d101.41036891483925!3d0.4816880996485761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5a921c08f56d7%3A0xaa59c49e5ae75d4c!2sJl.%20Wisma%20Pgri%20No.29%2C%20Delima%2C%20Kec.%20Tampan%2C%20Kota%20Pekanbaru%2C%20Riau%2028292!5e0!3m2!1sen!2sid!4v1666355654764!5m2!1sen!2sid"
            width="600"
            height="450"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div
          class="text-center map-responsive"
          v-if="map === 'bogor'"
          ref="mapContainer"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4728142611816!2d106.8844037148563!3d-6.58800029523558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c7a197cd003f%3A0xe7a8d9e110d2823c!2sJl.%20Raya%20Bojong%20Koneng%20No.157%2C%20RT.02%2FRW.01%2C%20Bojong%20Koneng%2C%20Kec.%20Babakan%20Madang%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat%2016810!5e0!3m2!1sen!2sid!4v1666355697729!5m2!1sen!2sid"
            width="600"
            height="450"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        <div
          class="flex flex-col border p-4 gap-6 items-center shadow-location md:px-5 md:py-3"
        >
          <div class="flex flex-col gap-2 h-14">
            <h3
              class="text-lg lg:text-xl tracking-tight text-gray-900 text-center"
            >
              Genova Jakarta
            </h3>
          </div>

          <div class="flex flex-col gap-3 md:gap-4 h-232">
            <div
              class="inline-flex space-x-6 bg-product-home p-4 md:p-4 text-left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                class="w-6 h-6"
                fill="black"
              >
                <path
                  d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"
                />
              </svg>
              <p class="text-black text-sm md:text-md">
                Komplek PU jln B no 18 RC Veteran - tanah kusir jakarta Selatan
                12330
              </p>
            </div>
            <div
              class="inline-flex space-x-6 bg-product-home p-4 md:p-4 text-left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                class="w-6 h-6"
                fill="black"
              >
                <path
                  d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                />
              </svg>
              <p class="text-black text-sm md:text-md">
                <a href="tel:081212128171" class="hover:text-gray-400"
                  >+6281212128171
                </a>
              </p>
            </div>
            <div
              class="inline-flex space-x-6 bg-product-home p-4 md:p-4 text-left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="w-6 h-6"
                fill="black"
              >
                <path
                  d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                />
              </svg>
              <p class="text-black text-sm md:text-md">10:00 AM - 17:00 PM</p>
            </div>
            <div
              class="inline-flex space-x-6 bg-product-home p-4 md:p-4 text-left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="w-6 h-6"
                fill="black"
              >
                <path
                  d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"
                />
              </svg>
              <p class="text-black text-sm md:text-md">Monday - Friday</p>
            </div>
          </div>
          <div class="">
            <a href="#"
              ><button
                @click.prevent="showMap('utama')"
                class="rounded-lg px-4 py-3 bg-product-home font-medium hover:bg-yellow-600 duration-300 text-black"
              >
                Direction
              </button></a
            >
          </div>
        </div>
        <div
          class="flex flex-col border p-4 gap-6 items-center shadow-location md:px-5 md:py-3"
        >
          <div class="flex flex-col gap-2 h-14">
            <h3
              class="text-lg lg:text-xl tracking-tight text-gray-900 text-center"
            >
              Genova Bogor
            </h3>
          </div>

          <div class="flex flex-col gap-3 md:gap-4">
            <div
              class="inline-flex space-x-6 bg-product-home p-4 md:p-4 text-left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                class="w-6 h-6"
                fill="black"
              >
                <path
                  d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"
                />
              </svg>
              <p class="text-black text-sm md:text-md">
                Jl. Raya Bojong Koneng No.157, Bojong Koneng, Kec. Babakan
                Madang, Kabupaten Bogor, Jawa Barat
              </p>
            </div>
            <div
              class="inline-flex space-x-6 bg-product-home p-4 md:p-4 text-left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                class="w-6 h-6"
                fill="black"
              >
                <path
                  d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                />
              </svg>
              <p class="text-black text-sm md:text-md">
                <a href="tel:081380367558" class="hover:text-gray-400">
                  +6281380367558
                </a>
              </p>
            </div>
            <div
              class="inline-flex space-x-6 bg-product-home p-4 md:p-4 text-left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="w-6 h-6"
                fill="black"
              >
                <path
                  d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                />
              </svg>
              <p class="text-black text-sm md:text-md">10:00 AM - 17:00 PM</p>
            </div>
            <div
              class="inline-flex space-x-6 bg-product-home p-4 md:p-4 text-left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="w-6 h-6"
                fill="black"
              >
                <path
                  d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"
                />
              </svg>
              <p class="text-black text-sm md:text-md">Monday - Friday</p>
            </div>
          </div>
          <div class="">
            <a href="#"
              ><button
                @click.prevent="showMap('bogor')"
                class="rounded-lg px-4 py-3 bg-product-home font-medium hover:bg-yellow-600 duration-300 text-black"
              >
                Direction
              </button></a
            >
          </div>
        </div>
        <div
          class="flex flex-col border p-4 gap-6 items-center shadow-location md:px-5 md:py-3"
        >
          <div class="flex flex-col gap-2 h-14">
            <h3
              class="text-lg lg:text-xl tracking-tight text-gray-900 text-center"
            >
              Genova Palangkaraya
            </h3>
            <h4 class="text-md lg:text-lg center">
              About Something Coffee Roastery
            </h4>
          </div>

          <div class="flex flex-col gap-3 md:gap-4 h-232">
            <div
              class="inline-flex space-x-6 bg-product-home p-4 md:p-4 text-left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                class="w-6 h-6"
                fill="black"
              >
                <path
                  d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"
                />
              </svg>
              <p class="text-black text-sm md:text-md">
                Jl. Cut Nyak Dien, Menteng, Kec. Jekan Raya, Kota Palangka Raya,
                Kalimantan Tengah
              </p>
            </div>
            <div
              class="inline-flex space-x-6 bg-product-home p-4 md:p-4 text-left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                class="w-6 h-6"
                fill="black"
              >
                <path
                  d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                />
              </svg>
              <p class="text-black text-sm md:text-md">
                <a href="tel:0812-1747-275" class="hover:text-gray-400">
                  +628121747275
                </a>
              </p>
            </div>
            <div
              class="inline-flex space-x-6 bg-product-home p-4 md:p-4 text-left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="w-6 h-6"
                fill="black"
              >
                <path
                  d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                />
              </svg>
              <p class="text-black text-sm md:text-md">10:00 AM - 17:00 PM</p>
            </div>
            <div
              class="inline-flex space-x-6 bg-product-home p-4 md:p-4 text-left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="w-6 h-6"
                fill="black"
              >
                <path
                  d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"
                />
              </svg>
              <p class="text-black text-sm md:text-md">Monday - Friday</p>
            </div>
          </div>
          <div class="">
            <a href="#"
              ><button
                @click.prevent="showMap('palangkaraya')"
                class="rounded-lg px-4 py-3 bg-product-home font-medium hover:bg-yellow-600 duration-300 text-black"
              >
                Direction
              </button></a
            >
          </div>
        </div>
        <div
          class="flex flex-col border p-4 gap-6 items-center shadow-location md:px-5 md:py-3"
        >
          <div class="flex flex-col gap-2 h-14">
            <h3
              class="text-lg lg:text-xl tracking-tight text-gray-900 text-center"
            >
              Genova Riau
            </h3>
            <h4 class="text-md lg:text-lg center">Samula Coffee & Eatery</h4>
          </div>
          <div class="flex flex-col gap-3 md:gap-4 h-232">
            <div
              class="inline-flex space-x-6 bg-product-home p-4 md:p-4 text-left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                class="w-6 h-6"
                fill="black"
              >
                <path
                  d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"
                />
              </svg>
              <p class="text-black text-sm md:text-md">
                Jl. Wisma PGRI No.29, Delima, Kec. Tampan, Kota Pekanbaru, Riau
              </p>
            </div>
            <div
              class="inline-flex space-x-6 bg-product-home p-4 md:p-4 text-left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                class="w-6 h-6"
                fill="black"
              >
                <path
                  d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                />
              </svg>
              <p class="text-black text-sm md:text-md">
                <a href="tel:081399021010" class="hover:text-gray-400">
                  +6281399021010
                </a>
              </p>
            </div>
            <div
              class="inline-flex space-x-6 bg-product-home p-4 md:p-4 text-left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="w-6 h-6"
                fill="black"
              >
                <path
                  d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                />
              </svg>
              <p class="text-black text-sm md:text-md">10:00 AM - 17:00 PM</p>
            </div>
            <div
              class="inline-flex space-x-6 bg-product-home p-4 md:p-4 text-left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="w-6 h-6"
                fill="black"
              >
                <path
                  d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"
                />
              </svg>
              <p class="text-black text-sm md:text-md">Monday - Friday</p>
            </div>
          </div>
          <div class="">
            <a href="#"
              ><button
                @click.prevent="showMap('riau')"
                class="rounded-lg px-4 py-3 bg-product-home font-medium hover:bg-yellow-600 duration-300 text-black"
              >
                Direction
              </button></a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      map: "utama",
    };
  },
  methods: {
    showMap(map) {
      this.map = map;
      // Scroll to the map section
      const mapContainer = this.$refs.mapContainer;
      mapContainer.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
td {
  text-align: left;
}
.shadow-location {
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
}
</style>
