//  Cabeecera.vue
<template>
    <div class='text-center'>
       <img alt="Vue logo" src="@/assets/logo.png">
       {{ title }}
       <hr>
    </div>
</template>
<script>
    console.log('Cabecera.vue');
    export default {
        name: 'Cabecera'
    }
</script>
<style scoped>
    hr {
        background-color: white;
        size: 2px;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
    img {
        width: 100px;
        height: 100px;
    }
</style>