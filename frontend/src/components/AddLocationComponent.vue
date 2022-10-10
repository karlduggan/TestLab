<template>
    <div class="all-location-wrapper">
        <h2>location</h2>
        <input type="text" v-model="location" />
        <button @click="addLocation">Add Location</button>
    </div>
</template>
<script>
   
    export default {
        name: "AddLocationComponent",
        data(){
            return {
                location: "",
                data: this.$store.state.graphData
                
            }
        },
        methods:{
            
            addLocation: function(){
                
                
                this.$store.state.graphLables.push(this.location)
                this.$store.state.graphData = [0]
                
                //this.$store.dispatch('addLable', this.location)
                //this.$store.dispatch('addData', 3)
                console.log(this.$store.state.graphData)
                //this.location = ""
               
            }
        }
    }
</script>
<style scoped>

</style>