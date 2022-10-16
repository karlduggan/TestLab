<template>
    <div class="main-container">
        <ModalComponent :open="this.$store.state.showModal" @close="this.$store.state.showModal = !this.$store.state.showModal">
            <AddBugComponent @bugAdded="incrementBugCount"></AddBugComponent>
        </ModalComponent>
        <div class="left-container">
            <div class="header-left-wrapper">
                <button class="add-bug-btn" @click="this.$store.state.showModal = true">Add Bug</button>
                <vSelect label="countryName" :options="locationList"></vSelect>
            </div>
        
            <BugLogComponent></BugLogComponent>
        </div>
        <div class="right-container">
        <div class="graph-container">
            <div class="chart-wrapper">
                <canvas id="myChart"></canvas>

            </div>
        </div>
        <div class="mid-container">
            <OptionsComponent></OptionsComponent>
            <div class="loaction-wrapper">
                <AddLocationComponent @getLocationEmit="getLocation"></AddLocationComponent>
            </div>
            <div class="environment-wrapper">
                <EnvironmentComponent></EnvironmentComponent>
            </div>
        </div>
    </div>

    </div>
   
</template>
<script>
import BugLogComponent from '@/components/BugLogComponent.vue';
import OptionsComponent from '@/components/OptionsComponent.vue';
import EnvironmentComponent from '@/components/EnvironmentComponent.vue';
import AddLocationComponent from '@/components/AddLocationComponent.vue';
import ModalComponent from '@/components/ModalComponent.vue';
import AddBugComponent from '@/components/AddBugComponent.vue';

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';



let myChart = null;
import Chart from 'chart.js/auto';
    
export default {
    name: "Dev2Page",
    components: { vSelect ,BugLogComponent, OptionsComponent, EnvironmentComponent, AddLocationComponent, ModalComponent, AddBugComponent },
    data(){
        return {
            graphData: this.$store.state.graphData,
            graphLables: this.$store.state.graphLables,
            currentLocationIndex: 0,
            locationList: ["Landing Page"],
            bugList: []
        }
    },
    mounted(){
        console.log("Component mounted")
            const ctx = document.getElementById('myChart')
            myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Landing Page"],
        datasets: [{
            label: 'Number of Bugs',
            data: [1],
            backgroundColor: [
                'rgba(255, 99, 132,1 )',
                'rgba(54, 162, 235,1 )',
                'rgba(255, 206, 86,1 )',
                'rgba(75, 192, 192,1 )',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1 )'
            ],
         
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,  
            ticks: {
                stepSize: 1,
            }
            }
        }
    }
});
myChart;
        },
        methods:{
            // Get the location data from component via emit 
            getLocation: function(data){
                console.log("Parent")
                // Update the location data to the chart
                console.log(data)
                this.addNewLabelToChart(data.location)
                // Increment location index
                this.currentLocationIndex += this.graphData.length
                
            },
            // Add new label to the chart and set vaue to zero
            addNewLabelToChart:function(newLabel){
                console.log("-> New Label added to chart")
                //this.$store.state.graphLables.push(newLabel)
                //this.$store.state.graphData.push(0)
                myChart.data['labels'].push(newLabel);
                // Update location selector list
                this.locationList.push(newLabel)
                // Set new label data to 0
                myChart.data['datasets'][0]['data'].push(0)
                myChart.update()
            },
            // Increment when adding bug
            incrementBugCount: function(){
                console.log("New bug added")
                myChart.data.datasets[0].data[this.currentLocationIndex] += 1
                myChart.update()
                console.log(this.currentLocationIndex)
                console.log(myChart.data.datasets[0].data)
            },
            loadInDataToChart:function(){
                let labels = this.graphLables;
                let data = this.graphData;
                for(let i = 0; i <= labels.length; i++){
                    this.addNewLabelToChart(labels[i])
                    // Increment location index
                    this.currentLocationIndex += this.graphData.length
                    myChart.data.datasets[0].data[this.currentLocationIndex] = data[i]

                }
            },
            // Save data to local storage
            saveToLocalStorage: function(){
                let payload = this.$store.state.selectedBugList
                // Check if TestLabData is already set
                if(JSON.parse(window.localStorage.getItem("TestLabData")) != null){
                    console.log(payload)
                } else {
                    // Payload should be a dictionary {"data": []}
                    window.localStorage.setItem("TestLabData", JSON.stringify(payload));
                }
            },
            // Load data from local storage 
            loadFromLocalStorage: function(){
                 let localStorageData = JSON.parse(window.localStorage.getItem("TestLabData"));
                 // Check if TestLabData is already set
                 if(localStorageData != null){
                    this.$store.state.selectedBugList = localStorageData;
                } else {
                    // Payload should be a dictionary {"data": []}
                    window.localStorage.setItem("TestLabData", JSON.stringify({}));
                }
            }
        }
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
    display: inline-flex;
}
.chart-wrapper {
        display: inline-block;
        position: relative;
        width: 100%; 
}
#myChart {
    max-height: 270px;
}
.loaction-wrapper {
    margin: 10px;
}
.environment-wrapper {
    margin: 5px;
}
</style>