<template>
  <section class="container mx-auto">
    <div
      class="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12"
    >
      <div
        class="flex flex-col items-center justify-between gap-6 md:gap-12 lg:flex-row"
      >
        <div
          class="max-w-xs text-center mb-10 lg:text-left lg:max-w-lg lg:pr-5 lg:mb-0"
        >
          <div class="flex flex-col gap-3 max-w-md mb-6">
            <h1
              class="mb-6 text-3xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
            >
              The quick, brown fox<br class="hidden md:block" />
              jumps over
            </h1>
            <p class="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-center md:flex-row lg:justify-start"
          >
            <div class="mt-6">
              <button
                class="rounded-lg px-5 py-3 bg-green-400 hover:bg-green-600 duration-300"
              >
                Explore Now
              </button>
            </div>
          </div>
        </div>
        <div class="relative lg:w-1/2">
          <img
            class="object-contain w-full h-56 rounded sm:h-96"
            src="../../assets/images/banner/homepage-banner.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped></style>
