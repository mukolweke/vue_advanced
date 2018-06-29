<template>
    <div id="Home">
        <h1>Karibu HomePage</h1>
        <btn-counter></btn-counter>
    </div>
</template>

<script>
    //imports
    import Vue from 'vue';

    Vue.component('btn-counter',{
        data: function () {
            return {
                count: 0
            }
        },

        template: '<button v-on:click="count++">You have clicked {{count}} times.</button>'
    });

    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>