<template>
    
        <div class="main-container">
            
            <div class="left-container">
                <BugLogComponent></BugLogComponent>
            </div>
            <div class="right-container">
            <div class="graph-container">
                <BarGraphComponent></BarGraphComponent>
            </div>
            <div class="mid-container">
                <OptionsComponent></OptionsComponent>
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

    export default {
    name: "DashboardPage",
    components: { BugLogComponent, BarGraphComponent, OptionsComponent, EnvironmentComponent }
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
</style>