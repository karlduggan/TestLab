<template>
    <div class="environment-wrapper">
        <h2>Environment</h2>
        <input type="text" v-model="name" id="">
        <p>{{name}}</p>
    </div>
</template>
<script>
    export default {
        name: "EnvironmentComponent",
        data(){
            return {
               name: "testing"
            }
        }
    }
</script>

<style scoped>

</style>