import { createStore } from 'vuex'

// URL
const productUrl = "https://codjoelmayer.github.io/productsAPI/data.json";
export default createStore({
  state: {
    products: null,
    errMsg : null
  },
  getters: {
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setMsg(state, msg) {
      state.errMsg = msg;
    }

  },
  actions: {
    fetchProducts : async (context)=> {
      try {
        const res = await fetch(`${productUrl}`);
        const results = await res.json();
        context.commit('setProducts', results.products);
      }catch(e) {
        context.commit('setMsg', e);
      }
    }
  },
  modules: {
  }
})
