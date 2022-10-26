<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="t">
    <div class="container mx-auto">
      <div class="mt-2 p-4 lg:p-6 lg:py-12 xl:p-12">
        <div class="flex flex-row">
          <h1 class="text-left pcolor mb-2 font-semibold text-xl">
            TRENDING FLAVOUR
          </h1>
          <!-- <div class="rating space-y-6">
          <p class="slider1"></p>
          <p class="slider2"></p>
          <p class="slider3"></p>
        </div> -->
        </div>
        <hr class="h-1 rounded w-32 background-navbar border-0" />
        <div
          class="grid md:grid-cols-3 lg:grid-cols-4 justify-items-center justify-center gap-12 mt-12 mb-5"
        >
          <div class="flex flex-col p-4 max-w-lg mx-4 card-shadow md:p-6">
            <router-link to="/">
              <img
                src="../../assets/images/product/powder/powder-matchalatte.png"
                alt="Product"
                class="w-40 h-40 md:w-52 md:h-52 object-contain rounded-t-xl"
              />

              <div class="flex flex-col gap-3 p-5">
                <p
                  class="text-lg font-semibold text-black truncate block capitalize"
                >
                  Matcha Latte
                </p>
                <p class="text-lg text-gray-700">RP. 169,000</p>
                <div class="mt-2">
                  <button
                    class="rounded-lg px-4 py-2 bg-yellow-400 hover:bg-yellow-600 duration-300 text-white font-bold"
                  >
                    See More
                  </button>
                </div>
              </div>
            </router-link>
          </div>

          <div class="flex flex-col p-4 max-w-lg mx-4 card-shadow md:p-6">
            <a href="#">
              <img
                src="../../assets/images/product/syrup/syrup_lychee.png"
                alt="Product"
                class="w-40 h-40 md:w-52 md:h-52 object-contain rounded-t-xl"
              />
            </a>
            <div class="flex flex-col gap-3 p-5">
              <p
                class="text-lg font-semibold text-black truncate block capitalize"
              >
                Lychee
              </p>
              <p class="text-lg text-gray-700">RP. 97,000</p>
              <div class="mt-2">
                <button
                  class="rounded-lg px-4 py-2 bg-yellow-400 hover:bg-yellow-600 duration-300 text-white font-bold"
                >
                  See More
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-col p-4 max-w-lg mx-4 card-shadow md:p-6">
            <a href="#">
              <img
                src="../../assets/images/product/powder/powder-darkchocolate.png"
                alt="Product"
                class="w-40 h-40 md:w-52 md:h-52 object-contain rounded-t-xl"
              />
            </a>
            <div class="flex flex-col gap-3 p-5">
              <p
                class="text-lg font-semibold text-black truncate block capitalize"
              >
                Dark Chocolate
              </p>
              <p class="text-lg text-gray-700">RP. 139,000</p>
              <div class="mt-2">
                <button
                  class="rounded-lg px-4 py-2 bg-yellow-400 hover:bg-yellow-600 duration-300 text-white font-bold"
                >
                  See More
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-col p-4 max-w-lg mx-4 card-shadow md:p-6">
            <a href="#">
              <img
                src="../../assets/images/product/powder/powder-redvelvet.png"
                alt="Product"
                class="w-40 h-40 md:w-52 md:h-52 object-contain rounded-t-xl"
              />
            </a>
            <div class="flex flex-col gap-3 p-5">
              <p
                class="text-lg font-semibold text-black truncate block capitalize"
              >
                Red Velvet
              </p>
              <p class="text-lg text-gray-700">RP. 139,000</p>
              <div class="mt-2">
                <button
                  class="rounded-lg px-4 py-2 bg-yellow-400 hover:bg-yellow-600 duration-300 text-white font-bold"
                >
                  See More
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-col p-4 max-w-lg mx-4 card-shadow md:p-6">
            <router-link to="/">
              <img
                src="../../assets/images/product/powder/powder-charcoal.png"
                alt="Product"
                class="w-40 h-40 md:w-52 md:h-52 object-contain rounded-t-xl"
              />

              <div class="flex flex-col gap-3 p-5">
                <p
                  class="text-lg font-semibold text-black truncate block capitalize"
                >
                  Charcoal
                </p>
                <p class="text-lg text-gray-700">RP. 169,000</p>
                <div class="mt-2">
                  <button
                    class="rounded-lg px-4 py-2 bg-yellow-400 hover:bg-yellow-600 duration-300 text-white font-bold"
                  >
                    See More
                  </button>
                </div>
              </div>
            </router-link>
          </div>

          <div class="flex flex-col p-4 max-w-lg mx-4 card-shadow md:p-6">
            <a href="#">
              <img
                src="../../assets/images/product/syrup/syrup_pandan.png"
                alt="Product"
                class="w-40 h-40 md:w-52 md:h-52 object-contain rounded-t-xl"
              />
            </a>
            <div class="flex flex-col gap-3 p-5">
              <p
                class="text-lg font-semibold text-black truncate block capitalize"
              >
                Pandan
              </p>
              <p class="text-lg text-gray-700">RP. 97,000</p>
              <div class="mt-2">
                <button
                  class="rounded-lg px-4 py-2 bg-yellow-400 hover:bg-yellow-600 duration-300 text-white font-bold"
                >
                  See More
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-col p-4 max-w-lg mx-4 card-shadow md:p-6">
            <a href="#">
              <img
                src="../../assets/images/product/fruit-bland/fruit_bland_passion.png"
                alt="Product"
                class="w-40 h-40 md:w-52 md:h-52 object-contain rounded-t-xl"
              />
            </a>
            <div class="flex flex-col gap-3 p-5">
              <p
                class="text-lg font-semibold text-black truncate block capitalize"
              >
                Passion Fruit
              </p>
              <p class="text-lg text-gray-700">RP. 139,000</p>
              <div class="mt-2">
                <button
                  class="rounded-lg px-4 py-2 bg-yellow-400 hover:bg-yellow-600 duration-300 text-white font-bold"
                >
                  See More
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-col p-4 max-w-lg mx-4 card-shadow md:p-6">
            <a href="#">
              <img
                src="../../assets/images/product/powder/powder-greentea.png"
                alt="Product"
                class="w-40 h-40 md:w-52 md:h-52 object-contain rounded-t-xl"
              />
            </a>
            <div class="flex flex-col gap-3 p-5">
              <p
                class="text-lg font-semibold text-black truncate block capitalize"
              >
                Greentea
              </p>
              <p class="text-lg text-gray-700">RP. 139,000</p>
              <div class="mt-2">
                <button
                  class="rounded-lg px-4 py-2 bg-yellow-400 hover:bg-yellow-600 duration-300 text-white font-bold"
                >
                  See More
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-col p-4 max-w-lg mx-4 card-shadow md:p-6">
            <router-link to="/">
              <img
                src="../../assets/images/product/fruit-bland/fruit_bland_mango.png"
                alt="Product"
                class="w-40 h-40 md:w-52 md:h-52 object-contain rounded-t-xl"
              />

              <div class="flex flex-col gap-3 p-5">
                <p
                  class="text-lg font-semibold text-black truncate block capitalize"
                >
                  Manggo
                </p>
                <p class="text-lg text-gray-700">RP. 169,000</p>
                <div class="mt-2">
                  <button
                    class="rounded-lg px-4 py-2 bg-yellow-400 hover:bg-yellow-600 duration-300 text-white font-bold"
                  >
                    See More
                  </button>
                </div>
              </div>
            </router-link>
          </div>

          <div class="flex flex-col p-4 max-w-lg mx-4 card-shadow md:p-6">
            <a href="#">
              <img
                src="../../assets/images/product/syrup/syrup_caramel.png"
                alt="Product"
                class="w-40 h-40 md:w-52 md:h-52 object-contain rounded-t-xl"
              />
            </a>
            <div class="flex flex-col gap-3 p-5">
              <p
                class="text-lg font-semibold text-black truncate block capitalize"
              >
                Lychee
              </p>
              <p class="text-lg text-gray-700">RP. 97,000</p>
              <div class="mt-2">
                <button
                  class="rounded-lg px-4 py-2 bg-yellow-400 hover:bg-yellow-600 duration-300 text-white font-bold"
                >
                  See More
                </button>
              </div>
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

<style scoped>
.card-shadow {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
}
</style>
