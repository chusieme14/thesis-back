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
                labels:['Contractual', 'Permanent', 'Self-employed', 'Casual', 'Not Applicable'],
                title:{
                    text: "Employment status",
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