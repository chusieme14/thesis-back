<template>
    <v-card>
        <v-card-title>Location of Residents</v-card-title>
        <v-card-text class="dashboard-main-container">
            <div class="dashboard-inner-container">
                <apexchart v-if="isresidence" width="800" type="pie" :options="chartOptions" :series="series"></apexchart>
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
    props:{
        data:{}
    },
    data(){
        return{
            series: [],
            chartOptions: {
                chart: {
                    width:800,
                    type: 'pie',
                    toolbar: {
                        show: true
                    },
                },
                stroke: {
                    colors: ['#fff']
                },
                labels:['City', 'Municipalty', 'No data'],
                // title:{
                //     text: "Location of Residents",
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
            isresidence:false
        }
    },
    methods:{
        getResidence(){
        this.isresidence = false
        axios.get(`/admin/get-residence`).then(({data})=>{
          this.series = data
          this.isresidence = true
        })
      },
    },
    mounted(){
        this.getResidence()
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