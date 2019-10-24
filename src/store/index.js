// index.js


import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({   // Instancia de Vuex.js
  state: {
      frutas: [
        {nombre:'manzana', cantidad: 10},
        {nombre:'Pera', cantidad: 0},
        {nombre:'Naranja', cantidad: 20}
      ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
