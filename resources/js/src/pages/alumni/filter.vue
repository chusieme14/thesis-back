<template>
    <div class="filter-main-container">
        <div>
            <v-flex xs12>
                <v-flex xs12 sm6 class="d-block mb-5 mr-3">
                    <label>Batch</label>
                    <v-autocomplete
                        v-model="filter.batch"
                        :items="years"
                        hide-details="auto"
                        :menu-props="{'background-color':'#777'}"
                        filled
                        dense
                        clearable
                    ></v-autocomplete>
                </v-flex>
                <v-flex xs12 sm6 class="d-block mb-5">
                    <label>Course</label>
                    <v-autocomplete
                        v-model="filter.course_id"
                        :items="courses"
                        item-text="code"
                        item-value="id"
                        hide-details="auto"
                        filled
                        dense
                        required
                        clearable
                    ></v-autocomplete>
                </v-flex>
            </v-flex>
        </div>
        <!-- <v-flex xs12>
            <v-flex xs12 sm6 class="d-block mr-3">
                <label>Price_from</label>
                <v-text-field
                    v-model="filter.min_price"
                    filled
                    dense
                    hide-details="auto"
                    type="number"
                ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 class="d-block">
                <label>Price_to</label>   
                <v-text-field
                    v-model="filter.max_price"
                    filled
                    dense
                    hide-details="auto"
                    type="number"
                ></v-text-field>
            </v-flex>
        </v-flex> -->
    </div>
</template>

<script>
export default {
    data(){
        return {
            courses:[],
            search_sub: '',
            gun_types: [],
            ammunitions: []
        }
    },
    mounted(){
        this.getCourses();
    },
    methods:{
        getCourses(){
            let params = ''
            // if(this.data.keyword)
            //     params = params + '&keyword=' + this.data.keyword
            axios.get(`/admin/courses?${params}`).then(({data})=>{
                this.courses = data.data
            })
        },
    },
    props:{
        filter:{
            type: Object,
            default() {
                return {}
            }
        },
    },
    watch:{
        "filter.created_at"(val){
            if(val){
                if(val[0] > val[1]){
                    this.filter.created_at = [
                        val[1], val[0]
                    ]
                }
            }
        },
        "filter.sub_start_date"(val){
            if(val){
                if(val[0] > val[1]){
                    this.filter.sub_start_date = [
                        val[1], val[0]
                    ]
                }
            }
        },    
        "filter.sub_end_date"(val){
            if(val){
                if(val[0] > val[1]){
                    this.filter.sub_end_date = [
                        val[1], val[0]
                    ]
                }
            }
        },     
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
    }
}
</script>