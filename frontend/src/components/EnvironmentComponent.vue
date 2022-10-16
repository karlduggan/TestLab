<template>
    <div class="environment-wrapper">
        <div class="input-btn-wrapper">
            <input placeholder="Environment" id="env-input" type="text" v-model="urlInput">
            <button id="add-env-btn" @click="addToEnvironmentList">Add</button>
        </div>
        
        <div class="env-log" v-for="(idx, index) in urlList " :key="idx">
            <div class="row">
                <div class="left">
                    
                    <h3>{{idx.url}}</h3>
                    <button>Select</button>
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
                {"url": "www.google.com", "index": 0, "buglist": []}
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
    #env-input {
    width: 50%;
    background-color: rgb(243, 243, 243);
    border: 1px solid rgb(190, 190, 190);
    padding: 10px;

    box-sizing: border-box;
}
#env-input:focus {
    outline: none;
}
#add-env-btn{
    padding: 9.5px;
    width: 100px;
}
.input-btn-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
}
.env-log{
    overflow-y: auto;
    height: 100%;
    }
</style>