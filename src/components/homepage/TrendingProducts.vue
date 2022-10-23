<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container mx-auto background-yellow-light">
    <div class="p-6 lg:px-6 lg:py-12 xl:px-12">
      <div class="flex flex-row">
        <h1 class="text-left text-black mb-2 font-semibold text-xl">
          TRENDING PRODUCTS
        </h1>
        <!-- <div class="rating space-y-6">
          <p class="slider1"></p>
          <p class="slider2"></p>
          <p class="slider3"></p>
        </div> -->
      </div>
      <hr class="h-1 rounded w-32 bg-black border-0" />
      <div
        class="grid grid-cols-2 md:grid-cols-4 justify-items-center justify-center gap-12 mt-10 mb-5"
      >
        <div class="flex flex-col h-fit">
          <a href="#">
            <img
              src="../../assets/images/product/powder/powder-matchalatte.png"
              alt="Product"
              class="h-60 w-56 object-contain rounded-t-xl"
            />
          </a>
          <div class="flex flex-col gap-3 p-5">
            <p
              class="text-lg font-semibold text-black truncate block capitalize"
            >
              Matcha Latte
            </p>
            <p class="text-lg text-gray-600">RP. 97,000</p>
            <div class="">
              <button
                class="rounded-lg px-4 py-2 bg-yellow-400 hover:bg-yellow-600 duration-300"
              >
                See More
              </button>
            </div>
          </div>
        </div>

        <div class="flex flex-col h-fit">
          <a href="#">
            <img
              src="../../assets/images/product/fruit-bland/fruit_bland_kiwi.png"
              alt="Product"
              class="h-60 w-56 object-contain rounded-t-xl"
            />
          </a>
          <div class="flex flex-col gap-3 p-5">
            <p
              class="text-lg font-semibold text-black truncate block capitalize"
            >
              Fruit Bland Kiwi
            </p>
            <p class="text-lg text-gray-600">RP. 97,000</p>
            <div class="">
              <button
                class="rounded-lg px-4 py-2 bg-yellow-400 hover:bg-yellow-600 duration-300"
              >
                See More
              </button>
            </div>
          </div>
        </div>

        <div class="flex flex-col h-fit">
          <a href="#">
            <img
              src="../../assets/images/product/powder/powder-darkchocolate.png"
              alt="Product"
              class="h-60 w-56 object-contain rounded-t-xl"
            />
          </a>
          <div class="flex flex-col gap-3 p-5">
            <p
              class="text-lg font-semibold text-black truncate block capitalize"
            >
              Dark Chocolate
            </p>
            <p class="text-lg text-gray-600">RP. 109,000</p>
            <div class="">
              <button
                class="rounded-lg px-4 py-2 bg-yellow-400 hover:bg-yellow-600 duration-300"
              >
                See More
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-col h-fit">
          <a href="#">
            <img
              src="../../assets/images/product/powder/powder-redvelvet.png"
              alt="Product"
              class="h-60 w-56 object-contain rounded-t-xl"
            />
          </a>
          <div class="flex flex-col gap-3 p-5">
            <p
              class="text-lg font-semibold text-black truncate block capitalize"
            >
              Red Velvet
            </p>
            <p class="text-lg text-gray-600">RP. 109,000</p>
            <div class="">
              <router-link to="/detail-product">
                <button
                  class="rounded-lg px-4 py-2 bg-yellow-400 hover:bg-yellow-600 duration-300"
                >
                  See More
                </button>
              </router-link>
            </div>
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
      cards: [1, 2, 3, 4, 5, 6, 7, 8],
      //   products: [
      //     {
      //       productTitle: "ABCN",
      //       image: [
      //         require("../../assets/images/fruit bland mango.png"),
      //         require("../../assets/images/fruit bland mango.png"),
      //       ],
      //       productId: 1,
      //     },
      //     {
      //       productTitle: "KARMA",
      //       image: [require("../../assets/images/fruit bland mango.png")],
      //       productId: 2,
      //     },
      //     {
      //       productTitle: "Tino",
      //       image: [require("../../assets/images/fruit bland mango.png")],
      //       productId: 3,
      //     },
      //     {
      //       productTitle: "EFG",
      //       image: [require("../../assets/images/fruit bland mango.png")],
      //       productId: 4,
      //     },
      //   ],
      innerStyles: {},
      step: "",
      transitioning: false,
    };
  },
};
</script>

<style scoped></style>
