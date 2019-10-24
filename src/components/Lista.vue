//   Lista.vue

<template> 
    <div>
        <h1>Frutas</h1>
        <ul class="list-group">
            <li v-for="(fruta, index ) of frutas" :key="fruta.id" @click="aumentar(index)"
                class="list-group-item d-flex justify-content-between align-items-center">
                {{ index+1 }} - {{ fruta.nombre }}
                <span class="badge badge-primary badge-pill"> {{ fruta.cantidad }} </span>
            </li>
         </ul>
         <button class='btn btn-primary m-2' @click='reiniciar'>Reinicia</button> 
    </div>
</template>
// (fruta, index) el index es un variable que nos devuelve el for, asi como fruta (esto es en cada iteracion)

<script>
console.log('Lista.vue');

import { mapState, mapMutations } from 'vuex';

export default {
    name: 'Lista',
    computed: {
        ...mapState(['frutas']) //,         // Desde store.mutations, datos
        // arrayOrdenado(){    
        //     console.log(this.frutas);
        //     let newArray = this.frutas.sort( function(a, b){ return b.cantidad - a.cantidad} );
        //     return newArray;  // De mayor a menor
        // }
    },
    methods: {
        ...mapMutations(['aumentar','reiniciar'])    // Desde store.actions, metodos (Invocacion)

    }
}
</script>

<style scoped>
    div h1 {
        color: white;
    }
</style>