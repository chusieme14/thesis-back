<template>
    <v-card>
        <v-card-text>
            <p></p>
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
                labels:['Single', 'Married', 'Separated', 'Widowed', 'No data'],
                title: {
                    text: "Civil status"
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