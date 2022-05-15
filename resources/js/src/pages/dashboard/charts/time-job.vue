<template>
    <v-card>
        <v-card-title>Time to Get the Job</v-card-title>
        <v-card-text class="dashboard-main-container">
            <div class="dashboard-inner-container">
                <apexchart v-if="istime_jobs" width="800" type="pie" :options="chartOptions" :series="series"></apexchart>
            </div>
        </v-card-text>
    </v-card>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
export default {
    components:{
        'apexchart':VueApexCharts
    },
    // props:{
    //     data:{}
    // },
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
                // title:{
                //     text: "Time to Get the Job",
                // },
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
            istime_jobs:false
        }
    },
    methods:{
        getTimeJobs(){
            this.istime_jobs = false
            axios.get(`/admin/get-time-jobs`).then(({data})=>{
                this.series = data
                this.istime_jobs = true
            })
        },
    },
    mounted(){
        this.getTimeJobs()
    },
    // watch:{
    //     "data":{
    //         handler(val){
    //             this.series = val
    //         },immediate:true
    //     }
    // }
    
}
</script>