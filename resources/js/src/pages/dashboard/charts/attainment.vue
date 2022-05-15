<template>
    <v-card>
        <v-card-title>Highest Educational Attainment</v-card-title>
        <v-card-text class="dashboard-main-container">
            <div class="dashboard-inner-container">
                <apexchart v-if="isattainment" width="800" type="pie" :options="chartOptions" :series="series"></apexchart>
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
                labels:['Baccalaureate', 'Masteral', 'Doctorate', 'No data'],
                // title:{
                //     text: "Highest Educational Attainment"
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
            isattainment:false
        }
    },
    methods:{
        getAttainment(){
            this.isattainment = false
            axios.get(`/admin/get-attainment`).then(({data})=>{
                this.series = data
                this.isattainment = true
            })
        },
    },
    mounted(){
        this.getAttainment()
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