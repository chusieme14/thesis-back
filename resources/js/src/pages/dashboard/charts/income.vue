<template>
    <v-card >
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
                labels:['below 5,000', '5,000 - 10,000', '10,000 - 15,000', '15,000 - 20,000', '20,000 - 25,000', 'above 25,000','No data'],
                title:{
                    text: "Gross Monthly Income",
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