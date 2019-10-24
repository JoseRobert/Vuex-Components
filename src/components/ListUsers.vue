//  ListUsers.vue
  
<template>
    <div>
        <h3> Users </h3>
        <ul class="list-group">
            <li v-for="(user, index ) of users" :key="user.id" @click="aumentar(index)"
                class="list-group-item d-flex justify-content-between align-items-center">
                {{ user.id }} - {{ user.name }} - {{ user.website }}
            </li>
         </ul>
    </div>
</template>

<script>
console.log('ListUsers.vue');

import { mapState, mapMutations } from 'vuex';

export default {
    name: 'ListUsers',
    data(){ return {} },
    computed: {
        ...mapState(['users']) //,         // Desde store.mutations, datos
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
    div h3 {
        color: white;
        text-align: center;
    }
</style>