// App.vue
// Inyecta componente (padre), sobre el index.html principal 'container Ej. id='app' (reemplaza)

<template>
  <div id="app" class='container misClases'>
    <Cabecera></Cabecera>
    <!-- <Lista></Lista> -->
    <ListUsers></ListUsers>
    <AgregaItm></AgregaItm>
    <!-- <button class='btn btn-primary m-2' @click='reinicia'>Reinicia</button> -->
  </div>
</template>

<script>
console.log('App.vue');
import Cabecera from './components/Cabecera.vue'
// import Lista from './components/Lista.vue'
import ListUsers from './components/ListUsers.vue'
import AgregaItm from './components/Agrega-Itm.vue'


// App.vue

export default {
  name: 'App',
  components: {
    Cabecera,
    // Lista,
    AgregaItm,
    ListUsers

  },
  computed: {},
  methods: {}
}
</script>

<style scope >
  body {
    background-color: cornflowerblue;
  }
</style>
