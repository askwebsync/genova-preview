// store/modules/product.js
const state = {
  productDetail: null,
};

const mutations = {
  setProductDetail(state, product) {
    state.productDetail = product;
  },
};

const actions = {
  setProductDetail({ commit }, product) {
    commit("setProductDetail", product);
  },
};

const getters = {
  getProductDetail: (state) => state.productDetail,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
