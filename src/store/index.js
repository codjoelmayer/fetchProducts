import { createStore } from 'vuex'

// URL
const productUrl = "https://codjoelmayer.github.io/productsAPI/data.json";
export default createStore({
  state: {
    products: null
  },
  getters: {
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    }
  },
  actions: {
    fetchProducts : async (context)=> {
      const res = await fetch(`${productUrl}`);
      const results = await res.json();
      context.commit('setProducts', results);
    }
  },
  modules: {
  }
})
