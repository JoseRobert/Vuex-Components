// main.js
// Script inicial de nuestra aplicacion
console.log('main.js');

import Vue from 'vue'
import App from './App.vue'   // Componente que reemplaza 'injecta' html al contenedor principal del index.html (ambito Vue, Ej. #app)
import store from './store/store'   //  Por default de la carpeta 'store.js' importa  Vuex.Store.state (datos globales)
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  store: store,           // 
  data: {},
  computed: {},
  methods: {}, 
  created: function(){    // Carga de datos antes de renderizar
    console.log('created');
    let url='http://jsonplaceholder.typicode.com/users';
    // url='courses.txt';
    let options = {
        mode: 'no-cors',
        headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        },
        withCredentials: false,
        credentials: 'same-origin',
    };
    axios(url, options)
    .then(function(res){
        console.log(res.data);
        // this.store.users = res.data;
        // commit('users', res.data);
    })
    .catch(function(e){
        console.log(e, 'Error....');
    })    
  },
  // render: h => h(App)    // SSR - Renderizado del lado del cliente (seudo Servidor - sincrono)
  // Donde: h hyperscript (library)
  render: function(h){ return h(App); }   // Renderiza App.vue
 }).$mount('#app')          // Identificador del ambito/scope de Vue (Ej id='app')
