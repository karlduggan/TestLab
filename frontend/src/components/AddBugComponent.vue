<template>
    <div class="add-bug-container">
        <h3>Title:</h3>
        <input v-model="title_input" type="text" class="input-line">
        <h4>Description:</h4>
        <input v-model="description_input" type="text" name="" class="input-line">
        <h4>Steps to Reproduce</h4>
        <div v-for="(step, index) in this.steps " :key="step">
            {{index + 1}}: {{step}}
        </div>
        <input v-model="step_line" type="text" @keyup.enter="addStep" class="input-line">
        <h4>Expected Results:</h4>
        <textarea v-model="expected_input" type="text" name="" class="text-area" rows="4"></textarea>
        <h4>Actual Results:</h4>
        <textarea v-model="actual_input" type="text" name="" class="text-area" rows="4"></textarea>
        <button @click="addBug">Add</button>
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
                actual_input: "",
                show: false
            }
        },
        methods: {
            addStep: function(){
                console.log("Step added")
                this.steps.push(this.step_line)
                this.step_line = ""
            },
            addBug: function(){
                // Using the array length of list to create a new id
                let get_current_id = this.$store.state.selectedBugList.length
                let bug_payload = {
                    "id": get_current_id,
                    "title": this.title_input, 
                    "description": this.description_input,
                    "steps": this.steps,
                    "expected": this.expected_input,
                    "actual": this.actual_input
                }

                this.$store.state.selectedBugList.push(bug_payload);
                // Close modal
                this.$store.state.showModal = false;
                // Clear all inputs 
                this.title_input = ""
                this.description_input = ""
                this.step_line = ""
                this.steps = []
                this.expected_input = ""
                this.actual_input = ""
            },
            
        }
    }
</script>
<style scoped>
.input-line {
    width: 100%;
    background-color: rgb(243, 243, 243);
    border: none;
    padding: 5px;
    box-sizing: border-box;
}
.input-line:focus {
    outline: none;
}

.text-area {
    background-color: rgb(243, 243, 243);
    border: none;
    width: 100%;
    padding: 5px;
    resize: none;
    box-sizing: border-box;
}
.text-area:focus {
    outline: none;
}

</style>