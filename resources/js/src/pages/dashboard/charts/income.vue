<template>
    <v-card >
       <v-card-title>Gross Monthly Income</v-card-title>
        <v-card-text class="dashboard-main-container">
            <div class="dashboard-inner-container">
                <apexchart v-if="isincome" width="800" type="pie" :options="chartOptions" :series="series"></apexchart>
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
                    width:800,
                    type: 'pie',
                    toolbar: {
                        show: true
                    },
                },
                stroke: {
                    colors: ['#fff']
                },
                labels:['below 5,000', '5,000 - 10,000', '10,000 - 15,000', '15,000 - 20,000', '20,000 - 25,000', 'above 25,000','No data'],
                // title:{
                //     text: "Gross Monthly Income",
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
            isincome:false
        }
    },
    methods:{
        getIncome(){
            this.isincome = false
            axios.get(`/admin/get-income`).then(({data})=>{
                this.series = data
                this.isincome = true
            })
        },
    },
    mounted(){
        this.getIncome()
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