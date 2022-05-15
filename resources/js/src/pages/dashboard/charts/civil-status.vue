<template>
    <v-card >
        <v-card-title>Civil Status</v-card-title>
        <v-card-text class="dashboard-main-container">
            <div class="dashboard-inner-container">
                <apexchart v-if="iscivil" width="800" type="pie" :options="chartOptions" :series="series"></apexchart>
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
                    width: 800,
                    type: 'pie',
                    toolbar: {
                        show: true
                    },
                },
                stroke: {
                    colors: ['#fff']
                },
                labels:['Single', 'Married', 'Separated', 'Widowed', 'No data'],
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
            // civil_status:[],
            iscivil:false
        }
    },
    methods:{
        async getCivilStatus(){
            this.iscivil = false
            await axios.get(`/admin/get-civil-statistics`).then(({data})=>{
                this.series = data
                this.iscivil = true
            })
        },
    },
    created(){
        this.getCivilStatus()
    },
    // watch:{
    //     "civil_status":{
    //         handler(val){
    //             this.series = val
    //         },immediate:true
    //     }
    // }
    
}
</script>