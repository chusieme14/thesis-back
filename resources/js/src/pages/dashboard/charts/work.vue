<template>
    <v-card>
        <v-card-title>Place of work</v-card-title>
        <v-card-text class="dashboard-main-container">
            <div class="dashboard-inner-container">
                <apexchart v-if="iswork" width="800" type="pie" :options="chartOptions" :series="series"></apexchart>
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
                labels:['Local', 'Abroad', 'No data'],
                // title:{
                //     text: "Place of work",
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
            iswork:false
        }
    },
    methods:{
        getWork(){
            this.iswork = false
            axios.get(`/admin/get-work`).then(({data})=>{
                this.series = data
                this.iswork = true
            })
        },
    },
    mounted(){
        this.getWork()
    }
    // watch:{
    //     "data":{
    //         handler(val){
    //             this.series = val
    //         },immediate:true
    //     }
    // }
    
}
</script>