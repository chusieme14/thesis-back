<template>
    <v-card >
        <v-card-title>Relevance of the Curriculum</v-card-title>
        <v-card-text class="dashboard-main-container">
            <div class="dashboard-inner-container">
                <apexchart v-if="iscurriculum" width="800" type="pie" :options="chartOptions" :series="series"></apexchart>
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
                labels:['Yes', 'No','No data'],
                // title:{
                //     text: "Relevance of the Curriculum",
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
            iscurriculum:false
        }
    },
    methods:{
        getCurriculum(){
            this.iscurriculum = false
            axios.get(`/admin/get-curriculum`).then(({data})=>{
                this.series = data
                this.iscurriculum = true
            })
        },
    },
    mounted(){
        this.getCurriculum()
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