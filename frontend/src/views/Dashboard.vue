<template>
    <div class="base-container">
        <div class="header-container">

        </div>
        <div class="main-container">
            
            <div class="left-container">
            </div>
            <div class="right-container">
            <div class="graph-container"></div>
            <div class="mid-container"></div>
        </div>

        </div>
       
    </div>
</template>
<script>
    export default {
        name: "DashboardPage"
    }
</script>
<style scoped>
    .base-container{
        width: 100%;
        height: 100%;
        position: absolute;
        
    }
    .header-container{
        width: 100%;
        height: 50px;
        border-bottom: 1px solid rgb(190, 190, 190);
    }
    .main-container{
        display: flex;
        width: 100%;
        height: 100%;
        
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
        display: block;
        height: 35%;
        width: 100%;
        border-bottom: 1px solid rgb(190, 190, 190);
    }
    .mid-container{
        display: block;
        height: 50%;
        width: 100%;
        margin: 5px;
    }
</style>