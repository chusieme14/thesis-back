<template>
    <v-card>
        <v-card-title>Gender</v-card-title>
        <v-card-text class="dashboard-main-container">
            <div class="dashboard-inner-container">
                <apexchart v-if="isgender" width="800" type="pie" :options="chartOptions" :series="series"></apexchart>
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
                labels:['Male', 'Female', 'No data'],
                // title:{
                //     text: "Gender"
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
            isgender:false,
        }
    },
    methods:{
        getGender(){
            this.isgender = false
            axios.get(`/admin/get-gender`).then(({data})=>{
                this.series = data
                this.isgender = true
            })
        },
    },
    mounted(){
        this.getGender()
    },
    watch:{
        
    }
    
}
</script>