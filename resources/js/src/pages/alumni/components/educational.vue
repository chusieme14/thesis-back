<template>
    <v-form ref="form">
        <v-container>
            <v-row>
                <v-col class="image-text-field" cols="12" sm="12">
                    <v-row class="mb-3">
                        <v-col cols="12" sm="12"><h2>Educational Informations</h2></v-col>
                    </v-row>
                    <v-row>
                        <v-col class="image-text-field" cols="12" sm="7" md="5">
                            <label>High educational attainment </label>
                            <v-autocomplete
                                v-model="payload.detail.attainment"
                                :items="attainmentOptions"
                                hide-details="auto"

                                :menu-props="{'background-color':'#777'}"
                                item-text="name"
                                item-value="id"
                                filled
                                dense
                            ></v-autocomplete>
                        </v-col>
                        <v-col class="image-text-field" cols="12" sm="5" md="3">
                            <label> Prof. Exam Passed  </label>
                            <v-autocomplete
                                v-model="payload.detail.prof_exam_passed"
                                :items="booleanOptions"
                                item-text="name"
                                item-value="id"
                                hide-details="auto"

                                :menu-props="{'background-color':'#777'}"
                                filled
                                dense
                            ></v-autocomplete>
                        </v-col>
                        <v-col class="image-text-field" cols="12" sm="4">
                            <label> Award(s) </label>
                            <v-text-field
                                v-model="payload.detail.awards"

                                dense
                                filled
                            ></v-text-field>
                        </v-col>
                        <v-col class="image-text-field" cols="12" sm="5" md="7">
                            <label><span class="text-danger">*</span> Course  </label>
                            <v-autocomplete
                                v-model="payload.course_id"
                                :rules="[() => !!payload.course_id || '']"
                                :items="courses"
                                item-text="name"
                                item-value="id"
                                hide-details="auto"

                                :menu-props="{'background-color':'#777'}"
                                filled
                                dense
                            ></v-autocomplete>
                        </v-col>
                        <v-col class="image-text-field" cols="12" sm="5" md="2">
                            <label><span class="text-danger">*</span> Section  </label>
                            <v-text-field
                                v-model="payload.section"
                                :rules="[() => !!payload.section || '']"
                                hide-details="auto"
                                :menu-props="{'background-color':'#777'}"
                                filled
                                dense
                            ></v-text-field>
                        </v-col>
                        <v-col class="image-text-field" cols="12" sm="5" md="3">
                            <label><span class="text-danger">*</span> Year Graduated </label>
                            <v-autocomplete
                                v-model="payload.batch"
                                :rules="[() => !!payload.batch ||  '']"
                                :items="years"
                                hide-details="auto"
                                :menu-props="{'background-color':'#777'}"
                                filled
                                dense
                            ></v-autocomplete>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <div class="class-form-action">
                <v-btn @click="$emit('prev')" class="mr-2" color="error">Previous</v-btn>
                <v-btn @click="next" color="success">Next</v-btn>
            </div>
        </v-container>
    </v-form>
</template>
<script>
export default {
    props:{
        payload:{}
    },
    data(){
        return{
            courses:[],
            booleanOptions:[
                {
                    id:0,
                    name:'No'
                },
                {
                    id:1,
                    name:'Yes'
                }
            ],
            attainmentOptions:[
                {
                    id:1,
                    name:'Baccalaureate Degree',
                },
                {
                    id:2,
                    name:'Masteral',
                },
                {
                    id:3,
                    name:'Doctorate',
                }
            ],
        }
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
        next(){
            if(!this.$refs.form.validate()) return;
            this.$emit('next')
        },
    },
    mounted(){
        this.getCourses()
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
}
</script>
<style lang="scss" scoped>
    .class-form-action{
        margin-top: 15px;
        display: flex;
        justify-content: flex-end;
    }
</style>