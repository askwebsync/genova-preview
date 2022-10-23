<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container mx-auto background">
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
              src="../../assets/images/product/syrup/syrup-banana.png"
              alt="Product"
              class="h-60 w-56 object-contain rounded-t-xl"
            />
          </a>
          <div class="flex flex-col gap-3 p-5">
            <p
              class="text-lg font-semibold text-black truncate block capitalize"
            >
              Lychee Syrup
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
.background {
  background: #fffbe8;
}

.rating {
  width: 40.19px;
  height: 42.98px;
  left: 403px;
  top: 40px;
}
.slider1 {
  width: 29.96px;
  height: 4px;
  left: 414.97px;
  top: 68px;
  background: #ffd31d;
  border-radius: 8px;
  transform: matrix(0.71, -0.71, 0.71, 0.71, 0, 0);
}
.slider2 {
  width: 16px;
  height: 3.99px;
  left: 403px;
  top: 56px;
  background: #ffd31d;
  border-radius: 8px;
  transform: rotate(-90deg);
}
.slider3 {
  width: 15.96px;
  height: 4px;
  left: 426.94px;
  top: 79px;
  background: #ffd31d;
  border-radius: 8px;
}
</style>
