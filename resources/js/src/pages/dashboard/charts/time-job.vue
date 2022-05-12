<template>
    <v-card height="292">
        <v-card-text>
            <apexchart type="pie" :options="chartOptions" :series="series"></apexchart>
        </v-card-text>
    </v-card>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
export default {
    components:{
        'apexchart':VueApexCharts
    },
    props:{
        data:{}
    },
    data(){
        return{
            series: [],
            chartOptions: {
                chart: {
                    type: 'pie',
                    toolbar: {
                        show: true
                    },
                },
                stroke: {
                    colors: ['#fff']
                },
                labels:['Less than a month', '1 - 6 months', '7 - 11 months', '1 - 2 years', '2 - 3 years', '3 - 4 years','No data'],
                title:{
                    text: "Time to Get the Job",
                },
                fill: {
                    opacity: 0.8
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                        width: 200
                        },
                        legend: {
                        position: 'bottom'
                        }
                    }
                }]
            },
        }
    },
    watch:{
        "data":{
            handler(val){
                this.series = val
            },immediate:true
        }
    }
    
}
</script>