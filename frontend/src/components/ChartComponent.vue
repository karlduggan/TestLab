<template>
    <div class="chart-container">
        <Pie
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"></Pie>
    </div>
</template>
<script>
    import { Pie } from 'vue-chartjs'
    import { Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale} from 'chart.js'

ChartJS.register( Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale)
  
    export default {
        name: "ChartComponent",
        components:{
            Pie
        },
        props:{
            props: {
            chartId: {
            type: String,
            default: 'pie-chart'
            },
            datasetIdKey: {
            type: String,
            default: 'label'
            },
            width: {
            type: Number,
            default: 10
            },
            height: {
            type: Number,
            default: 10
            },
            cssClasses: {
            default: '',
            type: String
            },
            styles: {
            type: Object,
            default: () => {}
            },
            plugins: {
            type: Object,
            default: () => {}
            }}
        },
        data(){
            return {
                chartData: {
                    labels: [ 'January', 'February', 'March', 'April' ],
                    
                    datasets: [ { 
                        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                        data: [40, 20, 12, 30] } ]
                },
                chartOptions: {
                responsive: false,
                maintainAspectRatio: true
                },
                
            }
        }
    }
</script>