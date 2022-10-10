<template>
    <div class="environment-wrapper">
        <h2>Environment</h2>
        <input type="text" v-model="urlInput" id="">
        <button @click="addToEnvironmentList">Add</button>
        <div v-for="(idx, index) in urlList " :key="idx">
            <div class="row">
                <div class="left">
                    <p>{{idx.url}}</p>
                    <button @click="removeEnvionmentFromList(index)">Remove</button>
                </div>
                
                <qrcode-vue :value="idx.url" :size="size" level="H" />
                
            </div>
           
        </div>
    </div>
</template>
<script>
   import QrcodeVue from 'qrcode.vue'
    export default {
        name: "EnvironmentComponent",
        components:{
            QrcodeVue
        },
        data(){
            
            return {
               urlInput: "",
               urlList: [
                {"url": "www.google.com", "index": 0}
               ]
              
            }
        },
        methods:{
            addToEnvironmentList: function(){
                let data = {
                    "url": this.urlInput,
                    "index": this.urlList.length,
                    "qrcode": ""
                }
                this.urlList.push(data)
                this.urlInput = "" 
            }, 
            removeEnvionmentFromList: function(index){
                console.log(index)
                this.urlList.splice(index, 1);
            }
        }
    }
</script>

<style scoped>
    .row {
        display: flex;
        flex-direction: row;
        padding: 5px;
        margin: 5px;
        justify-content: space-between;
        
    }

</style>