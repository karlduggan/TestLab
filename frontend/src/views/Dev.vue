<template>
    <div class="dev-container">
        <h1>Dev Page</h1>
        <div class="chart-wrapper">
            <canvas id="myChart" height="200"></canvas>

        </div>
        <button @click="runTest">Test Update</button>
    </div>
</template>
<script>
    let myChart = null;
    import Chart from 'chart.js/auto';
    export default {
        name: "DevPage",
        mounted() {
            console.log("Component mounted")
            const ctx = document.getElementById('myChart')

            myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
                beginAtZero: true
            }
        }
    }
});
myChart;
        },
        methods: {
            addData: function(label, data) {
                myChart.data.labels.push(label);
                myChart.data.datasets.forEach((dataset) => {
                dataset.data.push(data);
        });
         myChart.update();
        },
        runTest: function(){
            console.log("testing button click")
            this.addData("blue2", 9)
        }
        },
        
    }
 
</script>
<style scoped>
    /* IMPORTANT for resizing width*/
    .chart-wrapper {
        display: inline-block;
        position: relative;
        width: 50%;   
    }
    #myChart {
        position: relative;
        
    }
</style>