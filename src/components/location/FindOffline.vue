<template>
  <section class="container mx-auto">
    <div class="flex flex-col md:flex-row gap-4">
      <div class="flex flex-col items-start md:w-2/5">
        <!-- <div class="py-1 px-4 w-full border-search-bar mb-2">
          <div class="relative w-full">
            <input
              class="bg-white h-10 text-lg focus:border-2"
              :placeholder="placeholderText"
              type="text"
              ref="searchInput"
            />

            <button type="submit" class="absolute right-0 top-0 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1186_1217)">
                  <path
                    d="M15.4996 14.0001H14.7096L14.4296 13.7301C15.6296 12.3301 16.2496 10.4201 15.9096 8.39014C15.4396 5.61014 13.1196 3.39014 10.3196 3.05014C6.08965 2.53014 2.52965 6.09014 3.04965 10.3201C3.38965 13.1201 5.60965 15.4401 8.38965 15.9101C10.4196 16.2501 12.3296 15.6301 13.7296 14.4301L13.9996 14.7101V15.5001L18.2496 19.7501C18.6596 20.1601 19.3296 20.1601 19.7396 19.7501C20.1496 19.3401 20.1496 18.6701 19.7396 18.2601L15.4996 14.0001ZM9.49965 14.0001C7.00965 14.0001 4.99965 11.9901 4.99965 9.50014C4.99965 7.01014 7.00965 5.00014 9.49965 5.00014C11.9896 5.00014 13.9996 7.01014 13.9996 9.50014C13.9996 11.9901 11.9896 14.0001 9.49965 14.0001Z"
                    fill="#848480"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1186_1217">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div> -->
        <div
          class="group flex flex-col items-start bg-white gap-3 p-4 w-full border border-transparent rounded-lg hover:border-yellow-location cursor-pointer"
          @click.prevent="showMap('utama')"
        >
          <div class="flex flex-row justify-between items-center self-stretch">
            <h3 class="text-lg lg:text-xl tracking-tight">Genova Jakarta</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              title="Information"
            >
              <g clip-path="url(#clip0_1194_1838)">
                <path
                  d="M11 7.5H13V9.5H11V7.5ZM12 17.5C12.55 17.5 13 17.05 13 16.5V12.5C13 11.95 12.55 11.5 12 11.5C11.45 11.5 11 11.95 11 12.5V16.5C11 17.05 11.45 17.5 12 17.5ZM12 2.5C6.48 2.5 2 6.98 2 12.5C2 18.02 6.48 22.5 12 22.5C17.52 22.5 22 18.02 22 12.5C22 6.98 17.52 2.5 12 2.5ZM12 20.5C7.59 20.5 4 16.91 4 12.5C4 8.09 7.59 4.5 12 4.5C16.41 4.5 20 8.09 20 12.5C20 16.91 16.41 20.5 12 20.5Z"
                  fill="#848480"
                />
              </g>
              <defs>
                <clipPath id="clip0_1194_1838">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="max-w-sm">
            <p class="text-black text-sm md:text-md">
              Komplek PU jln B no 18 RC Veteran, Tanah kusir, Jakarta Selatan
              12330
            </p>
          </div>
        </div>
        <div
          class="group flex flex-col items-start bg-white gap-3 p-4 w-full border border-transparent rounded-lg hover:border-yellow-location cursor-pointer"
          @click.prevent="showMap('bogor')"
        >
          <div class="flex flex-row justify-between items-center self-stretch">
            <h3 class="text-lg lg:text-xl tracking-tight">Genova Bogor</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              title="This is an icon tooltip"
            >
              <g clip-path="url(#clip0_1194_1838)">
                <path
                  d="M11 7.5H13V9.5H11V7.5ZM12 17.5C12.55 17.5 13 17.05 13 16.5V12.5C13 11.95 12.55 11.5 12 11.5C11.45 11.5 11 11.95 11 12.5V16.5C11 17.05 11.45 17.5 12 17.5ZM12 2.5C6.48 2.5 2 6.98 2 12.5C2 18.02 6.48 22.5 12 22.5C17.52 22.5 22 18.02 22 12.5C22 6.98 17.52 2.5 12 2.5ZM12 20.5C7.59 20.5 4 16.91 4 12.5C4 8.09 7.59 4.5 12 4.5C16.41 4.5 20 8.09 20 12.5C20 16.91 16.41 20.5 12 20.5Z"
                  fill="#848480"
                />
              </g>
              <defs>
                <clipPath id="clip0_1194_1838">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="max-w-sm">
            <p class="text-black text-sm md:text-md">
              Jl. Raya Bojong Koneng No.157, Bojong Koneng, Kec. Babakan Madang,
              Kabupaten Bogor, Jawa Barat 16810
            </p>
          </div>
        </div>
        <div
          class="group flex flex-col items-start bg-white gap-3 p-4 w-full border border-transparent rounded-lg hover:border-yellow-location cursor-pointer"
          @click.prevent="showMap('palangkaraya')"
        >
          <div class="flex flex-row justify-between items-center self-stretch">
            <h3 class="text-lg lg:text-xl">Genova Palangkaraya</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <g clip-path="url(#clip0_1194_1838)">
                <path
                  d="M11 7.5H13V9.5H11V7.5ZM12 17.5C12.55 17.5 13 17.05 13 16.5V12.5C13 11.95 12.55 11.5 12 11.5C11.45 11.5 11 11.95 11 12.5V16.5C11 17.05 11.45 17.5 12 17.5ZM12 2.5C6.48 2.5 2 6.98 2 12.5C2 18.02 6.48 22.5 12 22.5C17.52 22.5 22 18.02 22 12.5C22 6.98 17.52 2.5 12 2.5ZM12 20.5C7.59 20.5 4 16.91 4 12.5C4 8.09 7.59 4.5 12 4.5C16.41 4.5 20 8.09 20 12.5C20 16.91 16.41 20.5 12 20.5Z"
                  fill="#848480"
                />
              </g>
              <defs>
                <clipPath id="clip0_1194_1838">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="flex flex-col max-w-sm mt-1">
            <h2 class="text-md">About Something Coffee Rostery</h2>
            <p class="text-black text-sm md:text-md">
              Jl. Cut Nyak Dien, Menteng, Kec. Jekan Raya, Kota Palangka Raya,
              Kalimantan Tengah 74784
            </p>
          </div>
        </div>
        <div
          class="group flex flex-col items-start bg-white gap-3 p-4 w-full border border-transparent rounded-lg hover:border-yellow-location cursor-pointer"
          @click.prevent="showMap('riau')"
        >
          <div class="flex flex-row justify-between items-center self-stretch">
            <h3 class="text-lg lg:text-xl">Genova Riau</h3>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <g clip-path="url(#clip0_1194_1838)">
                <path
                  d="M11 7.5H13V9.5H11V7.5ZM12 17.5C12.55 17.5 13 17.05 13 16.5V12.5C13 11.95 12.55 11.5 12 11.5C11.45 11.5 11 11.95 11 12.5V16.5C11 17.05 11.45 17.5 12 17.5ZM12 2.5C6.48 2.5 2 6.98 2 12.5C2 18.02 6.48 22.5 12 22.5C17.52 22.5 22 18.02 22 12.5C22 6.98 17.52 2.5 12 2.5ZM12 20.5C7.59 20.5 4 16.91 4 12.5C4 8.09 7.59 4.5 12 4.5C16.41 4.5 20 8.09 20 12.5C20 16.91 16.41 20.5 12 20.5Z"
                  fill="#848480"
                />
              </g>
              <defs>
                <clipPath id="clip0_1194_1838">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="flex flex-col max-w-sm mt-1">
            <h2 class="text-md">Samula Coffee & Eatery</h2>
            <p class="text-black text-sm md:text-md">
              Jl. Wisma PGRI No.29, Delima, Kec. Tampan, Kota Pekanbaru, Riau
              28292
            </p>
          </div>
        </div>
      </div>
      <div class="map-section md:w-3/5">
        <div
          class="map-responsive flex-grow"
          v-if="map === 'utama'"
          ref="mapContainerUtama"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0203262222835!2d106.76626831485463!3d-6.261052595468134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f0556e12d9e1%3A0xb7dee4c20b04d2f6!2sJl.%20RC.%20Veteran%20Raya%20No.18%2C%20RT.4%2FRW.1%2C%20Bintaro%2C%20Kec.%20Pesanggrahan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012330!5e0!3m2!1sen!2sid!4v1666345801834!5m2!1sen!2sid"
            width="100%"
            height="100%"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div
          class="map-responsive flex-grow"
          v-if="map === 'palangkaraya'"
          ref="mapContainerPalangkaraya"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.8326439098923!2d113.90558411484106!3d-2.2167132983842732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dfcb2fe5ab00ee5%3A0x4120bbd562d6b809!2sJl.%20Cut%20Nyak%20Dien%2C%20Menteng%2C%20Kec.%20Jekan%20Raya%2C%20Kota%20Palangka%20Raya%2C%20Kalimantan%20Tengah%2074874!5e0!3m2!1sen!2sid!4v1666346107663!5m2!1sen!2sid"
            width="100%"
            height="100%"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div
          class="map-responsive flex-grow"
          v-if="map === 'riau'"
          ref="mapContainerRiau"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.677324231581!2d101.41036891483925!3d0.4816880996485761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5a921c08f56d7%3A0xaa59c49e5ae75d4c!2sJl.%20Wisma%20Pgri%20No.29%2C%20Delima%2C%20Kec.%20Tampan%2C%20Kota%20Pekanbaru%2C%20Riau%2028292!5e0!3m2!1sen!2sid!4v1666355654764!5m2!1sen!2sid"
            width="100%"
            height="100%"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div
          class="map-responsive flex-grow"
          v-if="map === 'bogor'"
          ref="mapContainerBogor"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4728142611816!2d106.8844037148563!3d-6.58800029523558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c7a197cd003f%3A0xe7a8d9e110d2823c!2sJl.%20Raya%20Bojong%20Koneng%20No.157%2C%20RT.02%2FRW.01%2C%20Bojong%20Koneng%2C%20Kec.%20Babakan%20Madang%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat%2016810!5e0!3m2!1sen!2sid!4v1666355697729!5m2!1sen!2sid"
            width="100%"
            height="100%"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
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
      search: "",
    };
  },
  // computed: {
  //   placeholderText() {
  //     if (this.search === "") {
  //       return "Find Store";
  //     } else {
  //       return this.search === "" ? "Find Store" : "";
  //     }
  //   },
  // },
  methods: {
    showMap(map) {
      this.map = map;
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
  transition: all 0.2s ease;
}
td {
  text-align: left;
}
h3 {
  color: #000;
  /* Body/Body 1/Bold */
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
}
h2 {
  font-weight: 500;
  font-style: normal;
}
p {
  color: #000;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
}
input::placeholder {
  color: gray; /* Set the initial placeholder color to gray */
}
input:focus::placeholder {
  color: black; /* Set the focused placeholder color to black */
}
/* .border-search-bar {
  border-bottom: 1px solid #c79e2a;
} */
.map-section {
  flex: 1;
  display: flex;
  flex-direction: column;
}
/* Responsive style for the map iframe */
.map-responsive {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
}

.map-responsive iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}

/* Add the hover:border-yellow style for the .group container */
.group:hover {
  border-width: 1.5px;
  border-style: solid;
  border-color: #ca8a04;
  border-radius: 0.5rem;
  appearance: none;
  outline: none;
  background-color: transparent;
}

/* Add the specific style for the .hover:border-yellow-location class */
/* .hover\:border-yellow-location:hover {
  border-color: #c79e2a;
  border-width: 1.5px;
  border-style: solid;
  border-color: #ca8a04;
  border-radius: 0.5rem;
  appearance: none;
  outline: none;
  background-color: transparent;
} */
</style>
