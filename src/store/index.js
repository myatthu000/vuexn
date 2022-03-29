import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {

    products: [
      {name:"Banana Skin",price: 20},
      {name:"Star Skin",price: 40},
      {name:"Potato Skin",price: 80},
      {name:"Green Batman Skin",price: 98}
    ],
    
  },

  getters: {
    saleProducts: state => {
      var saleProducts = state.products.map(product  => {
        return {
            name: "**" + product.name + "**",
            price: product.price/2,
        }
      });
      return saleProducts;
    }
  },

  mutations: {
    reducePrice: (state,payload) => {
      state.products.forEach(product=>{
        product.price -= payload
      })
    }
  },

  actions: {
    reducePrice: (context,payload) => {
      setTimeout(function(){
        context.commit('reducePrice',payload);
      },2000);
    }
  },

  modules: {
  }

})
