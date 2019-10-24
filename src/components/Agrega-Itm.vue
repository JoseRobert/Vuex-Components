// Agrega-Itm

<template>
    <button class='btn btn-primary m-2' @click='agregaItm'>Agrega Item</button>
</template>
<script src=''></script>
<script>
console.log('Agrega-Itm.vue');

import { mapState, mapMutations } from 'vuex';

export default {
    name: 'AgregaItm',
    data(){ return {} },
    computed: {},
    methods: {
        ...mapMutations(['agregaItm'])
    }
}
</script>