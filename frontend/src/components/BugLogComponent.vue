<template>
<div class="bug-log-wrapper">
   
    <div class="bug-log-container">
        <div v-for="(bug, index) in this.$store.state.selectedBugList " :key="bug">
            <div class="bug-container">
                <!--div @click="showDrop = !showDrop" class="bug-header" -->
                <div @click="isDisplayed(bug)" class="bug-header" >
                    <h3>{{bug.title}}</h3>
                    <p>{{bug.description}}</p>
                    
                </div>
                <!-- Dropdown Container BEGINS -->
                <transition name="fade">
                    <div v-if="bug.show" >
                        <h4>Steps to Reproduce</h4>
                        <div v-for="step in bug.steps" :key="step">
                            <p>{{step}}</p>
                        </div>
                        <h4>Expected Results</h4>
                        <p>{{bug.expected}}</p>
                        <h4>Actual Results</h4>
                        <p>{{bug.actual}}</p>
                        <button @click="deleteBug(index)">Delete</button>
                    </div>
                </transition>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: "BugLogComponent",
    setup(){
        const showDrop = ref(false);
        return {
            showDrop
        }
    },
    data(){
        return {

        }
    },
    methods:{
        deleteBug: function(index){
            console.log(index)
            this.$store.state.selectedBugList.splice(index, 1);
        },
        isDisplayed: function(bug){
            // Set bug show to the opposite value to display or close dropdown
            bug.show = !bug.show;
        }
    }

}
</script>

<style scoped>
    .bug-header {
        cursor: pointer;
    }
    .bug-container {
        
        padding: 20px;
        border: 1px solid rgb(230, 228, 228);
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
        margin-bottom: 10px;
    }
    /* Dropdown transition */
    .fade-enter-from {
        opacity: 0;
    }
    .fade-enter-to {
        opacity: 1;
    }
    .fade-enter-active {
        transition: all 1s ease;
    }
    .fade-leave-from {}
    .fade-leave-to {}
    .fade-leave-active {}

</style>