// store.js
console.log('store.js');

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({   // Instancia de Vuex.js
  state: {      // Datos Globales
      frutas: [
        {nombre:'Manzana', cantidad: 0},
        {nombre:'Pera', cantidad: 0},
        {nombre:'Naranja', cantidad: 0},
        {nombre:'Fresas', cantidad: 0},
        {nombre:'Melocoton', cantidad: 0}

      ],
      vegetales: [
        {nombre:'Lechuga', cantidad: 0},
        {nombre:'Maiz', cantidad: 0},
        {nombre:'Zanahoria', cantidad: 0},
        {nombre:'Esparragos', cantidad: 0}
      ],
      users: [{id: '001', name: 'Name', website: 'Bruno.com'}, {id: '002', name: 'Robert', website: 'Robert.com'}]
 
  },
  mutations: {  // Cambia el 'state' retornando nuevo valor
    aumentar: function(state, index){
      console.log('aumentar');
      state.frutas[index].cantidad++
    },
    reiniciar: function(state){
      console.log('reiniciar');
      state.frutas.forEach(function(ele){
        ele.cantidad = 0;
      }
      )
    },
    agregaItm: function(){
      console.log('agregaItm');

    }
  },
  actions: {    // commit a mutations (Ej. fetch->API )
 
  },
  modules: {
  }
})
