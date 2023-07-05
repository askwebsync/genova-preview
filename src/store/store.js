import { createStore } from "vuex";
import allProducts from "@/product/allProduct";

export default createStore({
  state: {
    products: allProducts,
    trendingProducts: [],
    newProducts: [],
    powderSyrupProducts: [],
    fruitBlendProducts: [], // Added a new state for fruitBlendProducts
    flavouredProducts: [], // Added a new state for flavouredProducts
    selectedProduct: null,
  },
  mutations: {
    setTrendingProducts(state, products) {
      state.trendingProducts = products;
    },
    setNewProducts(state, products) {
      state.newProducts = products;
    },
    setPowderSyrupProducts(state, products) {
      state.powderSyrupProducts = products;
    },
    setFruitBlendProducts(state, products) {
      state.fruitBlendProducts = products;
    },
    setFlavouredProducts(state, products) {
      state.flavouredProducts = products; // Added a new mutation for flavouredProducts
    },
    setSelectedProduct(state, product) {
      console.log("Product selected:", product);
      state.selectedProduct = product;
    },
    clearSelectedProduct(state) {
      state.selectedProduct = null;
    },
  },
  actions: {
    fetchTrendingProducts({ commit, state }) {
      const trendingProducts = state.products.filter(
        (product) => product.trending === "yes"
      );
      commit("setTrendingProducts", trendingProducts);
    },
    fetchPowderSyrupProducts({ commit, state }) {
      const powderSyrupProducts = state.products.filter(
        (product) => product.category === "powder"
      );
      commit("setPowderSyrupProducts", powderSyrupProducts);
    },
    fetchNewProducts({ commit, state }) {
      const newProducts = state.products.filter(
        (product) => product.new === "yes"
      );
      commit("setNewProducts", newProducts);
    },
    fetchFruitBlendProducts({ commit, state }) {
      const fruitBlendProducts = state.products.filter(
        (product) => product.category === "fruitBlend"
      );
      commit("setFruitBlendProducts", fruitBlendProducts);
    },
    fetchFlavouredProducts({ commit, state }) {
      // Added a new action for fetching flavouredProducts
      const flavouredProducts = state.products.filter(
        (product) => product.category === "Flavoured"
      );
      commit("setFlavouredProducts", flavouredProducts);
    },
  },
  getters: {
    selectedProduct(state) {
      return state.selectedProduct;
    },
    fruitBlendProducts(state) {
      return state.fruitBlendProducts;
    },
    flavouredProducts(state) {
      // Added a new getter for flavouredProducts
      return state.flavouredProducts;
    },
  },
});
