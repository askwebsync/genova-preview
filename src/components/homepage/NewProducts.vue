<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container mx-auto">
    <div class="mt-2 p-6 md:px-2 lg:px-6 lg:py-12 xl:px-12">
      <div class="flex flex-row">
        <h1 class="text-left pcolor mb-2 font-semibold text-xl">NEW FLAVOUR</h1>
        <!-- <div class="rating space-y-6">
          <p class="slider1"></p>
          <p class="slider2"></p>
          <p class="slider3"></p>
        </div> -->
      </div>
      <hr class="h-1 rounded w-32 background-navbar border-0" />
      <div
        class="grid md:grid-cols-3 lg:grid-cols-4 justify-items-center justify-center gap-12 mt-10 mb-5"
      >
        <div
          class="flex flex-col max-w-lg mx-4 p-4 card-color-satu md:p-6 items-center"
        >
          <router-link to="/detail-product">
            <img
              src="../../assets/images/product/powder/powder-cookiescream.png"
              alt="Product"
              class="w-40 h-40 md:w-52 md:h-52 object-contain rounded-t-xl"
            />
          </router-link>
          <div class="flex flex-col gap-3 p-5">
            <p
              class="text-lg font-semibold text-black truncate block capitalize"
            >
              Cookies & Cream
            </p>
            <p class="text-lg text-gray-600">RP. 155,000</p>
            <div class="">
              <button
                class="rounded-lg px-4 py-2 bg-green-400 hover:bg-green-600 duration-300 text-white"
              >
                See More
              </button>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col max-w-lg mx-4 p-4 card-color-satu md:p-6 items-center"
        >
          <a href="#">
            <img
              src="../../assets/images/product/syrup/syrup_pineapple.png"
              alt="Product"
              class="w-40 h-40 md:w-52 md:h-52 object-contain rounded-t-xl"
            />
          </a>
          <div class="flex flex-col gap-3 p-5">
            <p
              class="text-lg font-semibold text-black truncate block capitalize"
            >
              Pineapple
            </p>
            <p class="text-lg text-gray-600">RP. 97,000</p>
            <div class="">
              <button
                class="rounded-lg px-4 py-2 bg-green-400 hover:bg-green-600 duration-300 text-white"
              >
                See More
              </button>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col max-w-lg mx-4 p-4 card-color-satu md:p-6 items-center"
        >
          <a href="#">
            <img
              src="../../assets/images/product/syrup/syrup_raspberry.png"
              alt="Product"
              class="w-40 h-40 md:w-52 md:h-52 object-contain rounded-t-xl"
            />
          </a>
          <div class="flex flex-col gap-3 p-5">
            <p
              class="text-lg font-semibold text-black truncate block capitalize"
            >
              Raspberry
            </p>
            <p class="text-lg text-gray-600">RP. 97,000</p>
            <div class="">
              <button
                class="rounded-lg px-4 py-2 bg-green-400 hover:bg-green-600 duration-300 text-white"
              >
                See More
              </button>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col max-w-lg mx-4 p-4 card-color-satu md:p-6 items-center"
        >
          <a href="#">
            <img
              src="../../assets/images/product/syrup/syrup_tiramisu.png"
              alt="Product"
              class="w-40 h-40 md:w-52 md:h-52 object-contain rounded-t-xl"
            />
          </a>
          <div class="flex flex-col gap-3 p-5">
            <p
              class="text-lg font-semibold text-black truncate block capitalize"
            >
              Tiramisu
            </p>
            <p class="text-lg text-gray-600">RP. 97,000</p>
            <div class="">
              <router-link to="/detail-product">
                <button
                  class="rounded-lg px-4 py-2 bg-green-400 hover:bg-green-600 duration-300 text-white"
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
  //   mounted() {
  //     this.setStep();
  //     this.resetTranslate();
  //   },

  //   methods: {
  //     setStep() {
  //       const innerWidth = this.$refs.inner.scrollWidth;
  //       const totalCards = this.cards.length;
  //       this.step = `${innerWidth / totalCards}px`;
  //     },

  //     next() {
  //       if (this.transitioning) return;

  //       this.transitioning = true;

  //       this.moveLeft();

  //       this.afterTransition(() => {
  //         const card = this.cards.shift();
  //         this.cards.push(card);
  //         this.resetTranslate();
  //         this.transitioning = false;
  //       });
  //     },

  //     prev() {
  //       if (this.transitioning) return;

  //       this.transitioning = true;

  //       this.moveRight();

  //       this.afterTransition(() => {
  //         const card = this.cards.pop();
  //         this.cards.unshift(card);
  //         this.resetTranslate();
  //         this.transitioning = false;
  //       });
  //     },

  //     moveLeft() {
  //       this.innerStyles = {
  //         transform: `translateX(-${this.step})
  //                     translateX(-${this.step})`,
  //       };
  //     },

  //     moveRight() {
  //       this.innerStyles = {
  //         transform: `translateX(${this.step})
  //                     translateX(-${this.step})`,
  //       };
  //     },

  //     afterTransition(callback) {
  //       const listener = () => {
  //         callback();
  //         this.$refs.inner.removeEventListener("transitionend", listener);
  //       };
  //       this.$refs.inner.addEventListener("transitionend", listener);
  //     },

  //     resetTranslate() {
  //       this.innerStyles = {
  //         transition: "none",
  //         transform: `translateX(-${this.step})`,
  //       };
  //     },
  //   },
};
</script>

<style scoped>
.carousel {
  width: 170px;
  overflow: hidden;
}

.inner {
  transition: transform 0.2s;
  white-space: nowrap;
}

/* optional */
button {
  margin-right: 5px;
  margin-top: 10px;
}
</style>
