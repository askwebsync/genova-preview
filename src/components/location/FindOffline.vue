<template>
  <section class="container mx-auto">
    <div class="flex flex-col md:flex-row gap-3 md:p-4">
      <div class="map-section p-3 md:p-4 md:w-3/5">
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
      <div
        class="overlay"
        :class="{
          active: modalJakarta || modalBogor || modalRiau || modalPalangkaraya,
        }"
      ></div>
      <div class="flex flex-col items-start md:w-2/5">
        <div
          @click.prevent="scrollToMap('utama')"
          :class="{ 'group-yellow': map === 'utama' }"
          class="flex flex-col items-start bg-white gap-3 p-3 md:p-4 w-full border border-transparent rounded-lg cursor-pointer"
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
              @click="showModalJakarta($event)"
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

            <div
              v-if="modalJakarta"
              class="fixed top-0 left-0 right-0 z-100 w-full h-full flex items-center justify-center cursor-auto"
            >
              <div class="relative max-w-md md:max-w-4xl mx-4">
                <div class="relative bg-white rounded-lg shadow-custom-modal">
                  <div
                    class="flex items-start justify-between border-b rounded-t p-3 md:p-4 lg:p-6"
                  >
                    <div class="flex flex-col gap-2">
                      <h3 class="text-xl font-semibold text-gray-900">
                        Genova Jakarta
                      </h3>
                      <p class="text-black text-sm md:text-md max-w-md">
                        JL Komplek PU jln B no 18 RC Veteran, Tanah kusir,
                        Jakarta Selatan 12330
                      </p>
                    </div>
                    <button
                      type="button"
                      @click="showModalJakarta($event)"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div>
                    <div class="bg-gray-location px-6 py-3">
                      <h4
                        class="text-base lg:text-lg leading-relaxed text-black"
                      >
                        STORE HOURS
                      </h4>
                    </div>
                    <div class="flex flex-col gap-1 px-6 py-4">
                      <p class="text-base leading-relaxed text-gray-500">
                        Monday - Friday
                      </p>
                      <p class="text-base leading-relaxed text-gray-500">
                        10:00 AM - 17:00 PM
                      </p>
                    </div>
                  </div>
                  <div>
                    <div class="bg-gray-location px-6 py-3">
                      <h4
                        class="text-base lg:text-lg leading-relaxed text-black"
                      >
                        CONTACT PERSON
                      </h4>
                    </div>
                    <div class="flex flex-col gap-1 px-6 py-4">
                      <a
                        href="mailto:genovaindonesiaofficial@gmail.com"
                        class="text-base leading-relaxed text-black hover:opacity-75"
                      >
                        genovaindonesiaofficial@gmail.com
                      </a>
                      <a
                        href="tel:+6281212128171"
                        class="text-base leading-relaxed text-black hover:opacity-75"
                      >
                        +6281212128171
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="max-w-sm">
            <p class="text-black text-sm md:text-md">
              Komplek PU jln B no 18 RC Veteran, Tanah kusir, Jakarta Selatan
              12330
            </p>
          </div>
        </div>
        <div
          class="flex flex-col items-start bg-white gap-3 p-3 md:p-4 w-full border border-transparent rounded-lg cursor-pointer"
          @click.prevent="scrollToMap('bogor')"
          :class="{ 'group-yellow': map === 'bogor' }"
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
              @click="showModalBogor($event)"
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
            <div
              v-if="modalBogor"
              class="fixed top-0 left-0 right-0 z-50 w-full h-full flex items-center justify-center cursor-auto"
            >
              <div class="relative max-w-md md:max-w-4xl mx-4">
                <div class="relative bg-white rounded-lg shadow-custom-modal">
                  <div
                    class="flex items-start justify-between border-b rounded-t p-3 md:p-4 lg:p-6"
                  >
                    <div class="flex flex-col gap-2">
                      <h3 class="text-xl font-semibold text-gray-900">
                        Genova Bogor
                      </h3>
                      <p class="text-black text-sm md:text-md max-w-md">
                        Jl. Raya Bojong Koneng No.157, Bojong Koneng, Kec.
                        Babakan Madang, Kabupaten Bogor, Jawa Barat 16810
                      </p>
                    </div>
                    <button
                      type="button"
                      @click="showModalBogor($event)"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div>
                    <div class="bg-gray-location px-6 py-3">
                      <h4
                        class="text-base lg:text-lg leading-relaxed text-black"
                      >
                        STORE HOURS
                      </h4>
                    </div>
                    <div class="flex flex-col gap-1 px-6 py-4">
                      <p class="text-base leading-relaxed text-gray-500">
                        Monday - Friday
                      </p>
                      <p class="text-base leading-relaxed text-gray-500">
                        10:00 AM - 17:00 PM
                      </p>
                    </div>
                  </div>
                  <div>
                    <div class="bg-gray-location px-6 py-3">
                      <h4
                        class="text-base lg:text-lg leading-relaxed text-black"
                      >
                        CONTACT PERSON
                      </h4>
                    </div>
                    <div class="flex flex-col gap-1 px-6 py-4">
                      <a
                        href="mailto:genovaindonesiaofficial@gmail.com"
                        class="text-base leading-relaxed text-black hover:opacity-75"
                      >
                        genovaindonesiaofficial@gmail.com
                      </a>
                      <a
                        href="tel:+6281380367558"
                        class="text-base leading-relaxed text-black hover:opacity-75"
                      >
                        +6281380367558
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="max-w-sm">
            <p class="text-black text-sm md:text-md">
              Jl. Raya Bojong Koneng No.157, Bojong Koneng, Kec. Babakan Madang,
              Kabupaten Bogor, Jawa Barat 16810
            </p>
          </div>
        </div>
        <div
          class="flex flex-col items-start bg-white gap-3 p-3 md:p-4 w-full border border-transparent rounded-lg cursor-pointer"
          @click.prevent="scrollToMap('palangkaraya')"
          :class="{ 'group-yellow': map === 'palangkaraya' }"
        >
          <div class="flex flex-row justify-between items-center self-stretch">
            <h3 class="text-lg lg:text-xl">Genova Palangkaraya</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              @click="showModalPalangkaraya"
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
            <div
              v-if="modalPalangkaraya"
              class="fixed top-0 left-0 right-0 z-50 w-full h-full flex items-center justify-center cursor-auto"
            >
              <div class="relative max-w-md md:max-w-4xl mx-4">
                <div class="relative bg-white rounded-lg shadow-custom-modal">
                  <div
                    class="flex items-start justify-between border-b rounded-t p-3 md:p-4 lg:p-6"
                  >
                    <div class="flex flex-col gap-2">
                      <h3 class="text-xl font-semibold text-gray-900">
                        Genova Palangkaraya
                      </h3>
                      <div class="flex flex-col max-w-sm mt-1">
                        <h2 class="text-md">About Something Coffee Rostery</h2>
                        <p class="text-black text-sm md:text-md">
                          Jl. Cut Nyak Dien, Menteng, Kec. Jekan Raya, Kota
                          Palangka Raya, Kalimantan Tengah 74784
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      @click="showModalPalangkaraya($event)"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div>
                    <div class="bg-gray-location px-6 py-3">
                      <h4
                        class="text-base lg:text-lg leading-relaxed text-black"
                      >
                        STORE HOURS
                      </h4>
                    </div>
                    <div class="flex flex-col gap-1 px-6 py-4">
                      <p class="text-base leading-relaxed text-gray-500">
                        Monday - Friday
                      </p>
                      <p class="text-base leading-relaxed text-gray-500">
                        10:00 AM - 17:00 PM
                      </p>
                    </div>
                  </div>
                  <div>
                    <div class="bg-gray-location px-6 py-3">
                      <h4
                        class="text-base lg:text-lg leading-relaxed text-black"
                      >
                        CONTACT PERSON
                      </h4>
                    </div>
                    <div class="flex flex-col gap-1 px-6 py-4">
                      <a
                        href="mailto:genovaindonesiaofficial@gmail.com"
                        class="text-base leading-relaxed text-black hover:opacity-75"
                      >
                        genovaindonesiaofficial@gmail.com
                      </a>
                      <a
                        href="tel:+628121747275"
                        class="text-base leading-relaxed text-black hover:opacity-75"
                      >
                        +628121747275
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          class="flex flex-col items-start bg-white gap-3 p-3 md:p-4 w-full border border-transparent rounded-lg cursor-pointer"
          @click.prevent="scrollToMap('riau')"
          :class="{ 'group-yellow': map === 'riau' }"
        >
          <div class="flex flex-row justify-between items-center self-stretch">
            <h3 class="text-lg lg:text-xl">Genova Riau</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              @click="showModalRiau"
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
            <div
              v-if="modalRiau"
              class="fixed top-0 left-0 right-0 z-50 w-full h-full flex items-center justify-center cursor-auto"
            >
              <div class="relative max-w-md md:max-w-4xl mx-4">
                <div class="relative bg-white rounded-lg shadow-custom-modal">
                  <div
                    class="flex items-start justify-between border-b rounded-t p-3 md:p-4 lg:p-6"
                  >
                    <div class="flex flex-col gap-2">
                      <h3 class="text-xl font-semibold text-gray-900">
                        Genova Riau
                      </h3>
                      <div class="flex flex-col max-w-sm mt-1">
                        <h2 class="text-md">Samula Coffee & Eatery</h2>
                        <p class="text-black text-sm md:text-md">
                          Jl. Wisma PGRI No.29, Delima, Kec. Tampan, Kota
                          Pekanbaru, Riau 28292
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      @click="showModalRiau($event)"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div>
                    <div class="bg-gray-location px-6 py-3">
                      <h4
                        class="text-base lg:text-lg leading-relaxed text-black"
                      >
                        STORE HOURS
                      </h4>
                    </div>
                    <div class="flex flex-col gap-1 px-6 py-4">
                      <p class="text-base leading-relaxed text-gray-500">
                        Monday - Friday
                      </p>
                      <p class="text-base leading-relaxed text-gray-500">
                        10:00 AM - 17:00 PM
                      </p>
                    </div>
                  </div>
                  <div>
                    <div class="bg-gray-location px-6 py-3">
                      <h4
                        class="text-base lg:text-lg leading-relaxed text-black"
                      >
                        CONTACT PERSON
                      </h4>
                    </div>
                    <div class="flex flex-col gap-1 px-6 py-4">
                      <a
                        href="mailto:genovaindonesiaofficial@gmail.com"
                        class="text-base leading-relaxed text-black hover:opacity-75"
                      >
                        genovaindonesiaofficial@gmail.com
                      </a>
                      <a
                        href="tel:+6281399021010"
                        class="text-base leading-relaxed text-black hover:opacity-75"
                      >
                        +6281399021010
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      map: "utama",
      search: "",
      modalJakarta: false,
      modalBogor: false,
      modalRiau: false,
      modalPalangkaraya: false,
    };
  },

  methods: {
    async scrollToMap(map) {
      this.map = map;
      await new Promise((resolve) => setTimeout(resolve, 50));
      const mapContainer = this.$refs[`mapContainer${map}`];
      if (mapContainer) {
        mapContainer.scrollIntoView({ behavior: "smooth" });
      }
    },
    showModalJakarta(event) {
      event.stopPropagation();
      this.modalJakarta = !this.modalJakarta;
      console.log("modalJakarta is now:", this.modalJakarta);
    },
    showModalBogor(event) {
      event.stopPropagation();
      this.modalBogor = !this.modalBogor;
      console.log("modalBogor is now:", this.modalBogor);
    },
    showModalRiau(event) {
      event.stopPropagation();
      this.modalRiau = !this.modalRiau;
      console.log("modalRiau is now:", this.modalRiau);
    },
    showModalPalangkaraya(event) {
      event.stopPropagation();
      this.modalPalangkaraya = !this.modalPalangkaraya;
      console.log("modalPalangkaraya is now:", this.modalPalangkaraya);
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
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
}
h2 {
  font-weight: 500;
  font-style: normal;
}
h4 {
  font-family: Josefin Sans;
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
  color: gray;
}
input:focus::placeholder {
  color: black;
}
.map-section {
  flex: 1;
  display: flex;
  flex-direction: column;
}

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
.shadow-custom-modal {
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}
.group-yellow:active,
.group-yellow {
  border-width: 1.5px;
  border-style: solid;
  border-color: #ca8a04;
  border-radius: 0.5rem;
  appearance: none;
  outline: none;
  background-color: transparent;
}
.bg-gray-location {
  background-color: #e5e5e5;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Adjust the opacity as needed */
  z-index: 40px; /* Ensure the overlay is above everything else */
  display: none; /* Initially hide the overlay */
}

.overlay.active {
  display: block; /* Show the overlay when it's active */
}
</style>
