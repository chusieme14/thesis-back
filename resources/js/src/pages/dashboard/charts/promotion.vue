<template>
    <v-card >
        <v-card-title>Promotion</v-card-title>
        <v-card-text class="dashboard-main-container">
            <div class="dashboard-inner-container">
                <apexchart v-if="ispromotion" width="800" type="pie" :options="chartOptions" :series="series"></apexchart>
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
                labels:['Yes', 'No','N/A'],
                // title:{
                //     text: "Promotion",
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
            ispromotion:true
        }
    },
    methods:{
        getPromotion(){
            this.ispromotion = false
            axios.get(`/admin/get-promotion`).then(({data})=>{
                this.series = data
                this.ispromotion = true
            })
        },
    },
    mounted(){
        this.getPromotion()
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