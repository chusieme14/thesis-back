<template>
    <v-card height="425">
        <v-card-text>
            <apexchart type="polarArea" :options="chartOptions" :series="series"></apexchart>
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
                    type: 'polarArea',
                    toolbar: {
                        show: true
                    },
                },
                stroke: {
                    colors: ['#fff']
                },
                labels:['Male', 'Female', 'No data'],
                title:{
                    text: "Gender"
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