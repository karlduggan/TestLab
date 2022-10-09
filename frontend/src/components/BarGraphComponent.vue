<template>
    <div class="chart-wrapper">
            <canvas id="myChart" height="400"></canvas>
        </div>
</template>

<script>
    import Chart from 'chart.js/auto';
    export default {
        name: "BarGraphComponent",

        mounted() {
            const ctx = document.getElementById('myChart')
            const myChart = new Chart(ctx, {
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
                }
            }
    
</script>
<style scoped>
     /* IMPORTANT for resizing width*/
     .chart-wrapper {
        display: inline-block;
        position: relative;
        width: 100%; 
       
    }
    #myChart {
       max-height: 270px;
    }
</style>