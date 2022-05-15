<template>
    <v-card >
        <v-card-title>Employment
            <v-spacer></v-spacer>
            <v-autocomplete
                v-model="batch"
                :items="years"
                hide-details="auto"
                label="Year Graduated"
                class="class-year"
                @change="getEmployment"
                filled
                dense
            ></v-autocomplete>
        </v-card-title>
        <v-card-text class="dashboard-main-container">
            <div class="dashboard-inner-container">
                <apexchart v-if="isemployment" width="800" type="pie" :options="chartOptions" :series="series"></apexchart>
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
                labels:['Yes', 'No', 'No data'],
                // title:{
                //     text: "Employment",
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
            isemployment:false,
            batch:null
        }
    },
    methods:{
        getEmployment(){
            this.isemployment = false
            let params=''
            if(this.$route.params.department_id){
                params = params + '&department_id='+this.$route.params.department_id
            }
            if(this.$route.params.course_id){
                params = params + '&course_id='+this.$route.params.course_id
            }
            if(this.batch){
                params = params + '&batch='+this.batch
            }
            axios.get(`/admin/get-employment?${params}`).then(({data})=>{
                this.series = data
                this.isemployment = true
            })
        },
    },
    mounted(){
        this.getEmployment()
    },
    computed:{
        years(){
            let schoolYear = []
            let year = new Date().getFullYear()
            let startYear = year - 10
            for (let start = year-1; start >= startYear; start--) {
                schoolYear.push(`${start}-${start+1}`)
            }
            return schoolYear
        }
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