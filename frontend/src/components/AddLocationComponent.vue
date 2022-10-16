<template>
    <div class="all-location-wrapper">
        <input placeholder="Location" type="text" v-model="location" />
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
                // Don't add unless input is valid
                if(this.location != "" && this.location.length >= 4){
                    this.$emit("getLocationEmit", {
                    "location": this.location, 
                    "value": 0})
                    this.$store.state.graphLables.push(this.location)
                    this.$store.state.graphData.push[0]
                    this.location = ""
                }
                
               
            }
        }
    }
</script>
<style scoped>
.all-location-wrapper {
    display: flex;
    flex-direction: row;

}
input {
    width: 50%;
    background-color: rgb(243, 243, 243);
    border: 1px solid rgb(190, 190, 190);
    padding: 10px;
    
    box-sizing: border-box;
}
</style>