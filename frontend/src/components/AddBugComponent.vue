<template>
    <div class="add-bug-container">
        <h3>Title:</h3>
        <input v-model="title_input" type="text">
        <h4>Description:</h4>
        <input v-model="description_input" type="text" name="" id="">
        <h4>Steps to Reproduce</h4>
        <div v-for="(step, index) in this.steps " :key="step">
            {{index + 1}}: {{step}}
        </div>
        <input v-model="step_line" type="text" @keyup.enter="addStep">
        <h4>Expected Results:</h4>
        <input v-model="expected_input" type="text" name="" id="">
        <h4>Actual Results:</h4>
        <input v-model="actual_input" type="text" name="" id="">
        <button @click="addBug" >Add</button>
    </div>
</template>
<script>
    export default {
        name: "AddBugComponent",
        data(){
            return {
                title_input: "",
                description_input: "",
                step_line: "",
                steps: [],
                expected_input: "",
                actual_input: ""
            }
        },
        methods: {
            addStep: function(){
                console.log("Step added")
                this.steps.push(this.step_line)
                this.step_line = ""
            },
            addBug: function(){
                let bug_payload = {
                "title": this.title_input, 
                "description": this.description_input,
                "steps": this.steps,
                "expected": this.expected_input,
                "actual": this.actual_input}

                this.$store.state.selectedBugList.push(bug_payload);
            },
            
        }
    }
</script>
<style scoped>

</style>