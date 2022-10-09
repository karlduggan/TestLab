<template>
    <div class="options-wrapper">
        <button class="btn">Import</button>
        <button class="btn">Export</button>
        <button class="btn">Foo</button>
        <button class="btn">Bar</button>


    </div>
</template>

<script>
    export default {
        name: "OptionsComponent"
    }
</script>

<style scoped>
    .options-wrapper {
        padding: 15px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: stretch;
        align-content: stretch;
    }
    .btn{
        padding: 10px;
        width: 90px;
        border-radius: 5px;
        border: 1px solid grey;
        background-color: transparent;
        cursor: pointer;
    }

</style>