<template>
    <div class="add-bug-container">
        <h3>Title:</h3>
        <input type="text">
        <h4>Description:</h4>
        <input type="text" name="" id="">
        <h4>Steps to Reproduce</h4>
        <div v-for="(step, index) in this.steps " :key="step">
            {{index + 1}}: {{step}}
        </div>
        <input v-model="step_line" type="text" @keyup.enter="addStep">
        <h4>Expected Results:</h4>
        <input type="text" name="" id="">
        <h4>Actual Results:</h4>
        <input type="text" name="" id="">
    </div>
</template>
<script>
    export default {
        name: "AddBugComponent",
        data(){
            return {
                step_line: "",
                steps: []
            }
        },
        methods: {
            addStep: function(){
                console.log("Step added")
                this.steps.push(this.step_line)
                this.step_line = ""
            }
        }
    }
</script>
<style scoped>

</style>