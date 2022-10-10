<template>
    <div class="environment-wrapper">
        <h2>Environment</h2>
        <input type="text" v-model="urlInput" id="">
        <button @click="addToEnvironmentList">Add</button>
        <div v-for="(idx, index) in urlList " :key="idx">
            <div class="row">
                <div class="left">
                    
                    <h3>{{idx.url}}</h3>
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
        padding: 20px;
        margin: 10px;
        justify-content: space-between;
        
        border: 1px solid rgb(230, 228, 228);
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

        
    }
    .left {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    .left button {
        width: 100px;
        padding: 5px;
        border: none;
        cursor: pointer;
    }

</style>