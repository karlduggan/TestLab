<template>
    <div class="chart-wrapper">
            <canvas id="myChart" height="400"></canvas>
            <button @click="updateChart">Test</button>
        </div>
</template>

<script>
    import Chart from 'chart.js/auto';
    import store from '@/store/index.js';
   
    export default {
        name: "BarGraphComponent",
        props: ['data'],
        
        data(){
            return {
                myChart: null,
                props_data: this.data
            }
        },
        computed:{
            getData(){
                return store.state.graphData
            },
            getLables(){
                return store.state.graphLables
            },
        },
        methods:{
            
            updateChart:function(){
                console.log("testing updte")
                
                //this.myChart.update()
            }
        },
       
        mounted() {
            

            const ctx = document.getElementById('myChart')
            this.myChart = new Chart(ctx, {
            type: 'bar',
            
            data: {
                labels: this.getLables,
                datasets: [{
                    label: '# of Votes',
                    //data: [12, 19, 3, 5, 2, 3],
                    //data: this.getData,
                    data: this.getData,
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
        

                },
            unmounted(){
                this.myChart.destroy()
            },
            
                
            
        
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