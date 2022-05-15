<template>
    <v-card >
        <v-card-title>Employment status</v-card-title>
        <v-card-text class="dashboard-main-container">
            <div class="dashboard-inner-container">
                <apexchart v-if="isemploymentstatus" width="800" type="pie" :options="chartOptions" :series="series"></apexchart>
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
                labels:['Contractual', 'Permanent', 'Self-employed', 'Casual', 'Not Applicable'],
                // title:{
                //     text: "Employment status",
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
            isemploymentstatus:false
        }
    },
    methods:{
        getEmploymentStatus(){
            this.isemploymentstatus = false
            axios.get(`/admin/get-employment-status`).then(({data})=>{
                this.series = data
                this.isemploymentstatus = true
            })
        },
    },
    mounted(){
        this.getEmploymentStatus()
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