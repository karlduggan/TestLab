<template>
    
        <div class="main-container">
            <ModalComponent :open="this.$store.state.showModal" @close="this.$store.state.showModal = !this.$store.state.showModal">
                <AddBugComponent></AddBugComponent>
            </ModalComponent>
            <div class="left-container">
                <div class="header-left-wrapper">
                    <button class="add-bug-btn" @click="this.$store.state.showModal = true">Add Bug</button>
                </div>
            
                <BugLogComponent></BugLogComponent>
            </div>
            <div class="right-container">
            <div class="graph-container">
                <BarGraphComponent></BarGraphComponent>
            </div>
            <div class="mid-container">
                <OptionsComponent></OptionsComponent>
                <AddLocationComponent></AddLocationComponent>
                <EnvironmentComponent></EnvironmentComponent>
            </div>
        </div>

        </div>
       
</template>
<script>
import BugLogComponent from '@/components/BugLogComponent.vue';
import BarGraphComponent from '@/components/BarGraphComponent.vue';
import OptionsComponent from '@/components/OptionsComponent.vue';
import EnvironmentComponent from '@/components/EnvironmentComponent.vue';
import AddLocationComponent from '@/components/AddLocationComponent.vue';
import ModalComponent from '@/components/ModalComponent.vue';
import AddBugComponent from '@/components/AddBugComponent.vue';


    export default {
    name: "DashboardPage",
    components: { BugLogComponent, BarGraphComponent, OptionsComponent, EnvironmentComponent, AddLocationComponent, ModalComponent, AddBugComponent }
}
</script>
<style scoped>
    .main-container{
        display: flex;
        width: 100%;
        height: 100%;
        position: absolute;
    }
    .left-container{
        display: block;
        width: 50%;
        margin: 10px;
    }
    .right-container{
        display: inline-block;
        width: 50%;
        border-left: 1px solid rgb(190, 190, 190);
    }
    .graph-container{
        height: 280px;
        padding-right: 10px; 
        border-bottom: 1px solid rgb(190, 190, 190);
    }
    .mid-container{
        display: block;
        height: 50%;
        width: 100%;
        margin: 5px;
    }
    .add-bug-btn{
        width: 150px;
        padding: 10px;
        cursor: pointer;
        background: none;
        border-radius: 5px;
        border: 1px solid grey;
    }
    .header-left-wrapper{
        margin-bottom: 10px;
    }
</style>