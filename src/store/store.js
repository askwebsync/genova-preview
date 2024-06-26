import { createStore } from "vuex";
import { formatPrice } from "@/helpers/helper";
import allProducts from "@/product/allProduct";

export default createStore({
  state: {
    products: allProducts,
    trendingProducts: [],
    newProducts: [],
    powderSyrupProducts: [],
    fruitBlendProducts: [],
    premiumSyrupProducts: [],
    sameCategoryProducts: [],
    selectedProduct: null,
  },
  mutations: {
    setTrendingProducts(state, products) {
      state.trendingProducts = products;
    },
    setNewProducts(state, products) {
      state.newProducts = products;
    },
    setSelectedProduct(state, product) {
      state.selectedProduct = product;
    },
    setPowderSyrupProducts(state, products) {
      state.powderSyrupProducts = products;
    },
    setFruitBlendProducts(state, products) {
      state.fruitBlendProducts = products;
    },
    setPremiumSyrupProducts(state, products) {
      state.premiumSyrupProducts = products;
    },
    setSameCategoryProducts(state, product) {
      state.sameCategoryProducts = product;
    },
    clearSelectedProduct(state) {
      state.selectedProduct = null;
    },
  },
  actions: {
    fetchTrendingProducts({ commit, state }) {
      const trendingProducts = state.products
        .filter((product) => product.trending === "yes")
        .map((product) => ({
          ...product,
          price: formatPrice(product.price),
        }));
      commit("setTrendingProducts", trendingProducts);
    },
    fetchNewProducts({ commit, state }) {
      const newProducts = state.products
        .filter((product) => product.new === "yes")
        .map((product) => ({
          ...product,
          price: formatPrice(product.price),
        }));
      commit("setNewProducts", newProducts);
    },
    fetchProductById({ commit }, productId) {
      const product = allProducts.find((p) => p.id === productId);
      commit("setSelectedProduct", product);
    },
    fetchPowderSyrupProducts({ commit, state }) {
      const powderSyrupProducts = state.products
        .filter((product) => product.category === "powder")
        .map((product) => ({
          ...product,
          price: formatPrice(product.price),
        }));
      commit("setPowderSyrupProducts", powderSyrupProducts);
    },
    fetchFruitBlendProducts({ commit, state }) {
      const fruitBlendProducts = state.products
        .filter((product) => product.category === "fruitBlend")
        .map((product) => ({
          ...product,
          price: formatPrice(product.price),
        }));
      commit("setFruitBlendProducts", fruitBlendProducts);
    },
    fetchPremiumSyrupProducts({ commit, state }) {
      const premiumSyrupProducts = state.products
        .filter((product) => product.category === "syrup")
        .map((product) => ({
          ...product,
          price: formatPrice(product.price),
        }));
      commit("setPremiumSyrupProducts", premiumSyrupProducts);
    },
    fetchSameCategoryProducts({ commit, state }, productId) {
      let selectedProduct = state.selectedProduct;

      // If selectedProduct is not defined, find it using productId from route params
      if (!selectedProduct) {
        selectedProduct = allProducts.find((p) => p.id === productId);
        if (selectedProduct) {
          commit("setSelectedProduct", selectedProduct);
        } else {
          return; // If product is not found, exit early
        }
      }

      const category = selectedProduct.category;
      const sameCategoryProducts = allProducts
        .filter(
          (product) =>
            product.category === category && product.id !== selectedProduct.id
        )
        .map((product) => ({
          ...product,
          price: formatPrice(product.price),
        }))
        .slice(0, 4); // Limit the number of recommended products to 4

      commit("setSameCategoryProducts", sameCategoryProducts);
    },
  },
  getters: {
    selectedProduct(state) {
      return state.selectedProduct;
    },
    fruitBlendProducts(state) {
      return state.fruitBlendProducts;
    },
    PremiumSyrupProducts(state) {
      return state.flavouredProducts;
    },
  },
});
