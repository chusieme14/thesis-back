<template>
    <v-card>
        <v-card-title>
            Add Announcements
        </v-card-title>
        <v-card-text>
            <div class="header-option mb-3">
                <div>
                    <v-icon
                        v-if="payload.option==1"
                        class="custom-checkbox"
                        @click="payload.option=1"
                        >
                        mdi-checkbox-marked
                    </v-icon>
                    <v-icon
                        v-else
                        class="custom-checkbox"
                        @click="payload.option=1"
                        >
                        mdi-checkbox-blank-outline
                    </v-icon>
                    By Section
                </div>
                <div>
                    <v-icon
                        v-if="payload.option==2"
                        class="custom-checkbox"
                        @click="payload.option=2"
                        >
                        mdi-checkbox-marked
                    </v-icon>
                    <v-icon
                        v-else
                        class="custom-checkbox"
                        @click="payload.option=2"
                        >
                        mdi-checkbox-blank-outline
                    </v-icon>
                    By Course
                </div>
                <div>
                    <v-icon
                        v-if="payload.option==3"
                        class="custom-checkbox"
                        @click="payload.option=3"
                        >
                        mdi-checkbox-marked
                    </v-icon>
                    <v-icon
                        v-else
                        class="custom-checkbox"
                        @click="payload.option=3"
                        >
                        mdi-checkbox-blank-outline
                    </v-icon>
                    By Department
                </div>
                <div>
                    <v-icon
                        v-if="payload.option==4"
                        class="custom-checkbox"
                        @click="payload.option=4"
                        >
                        mdi-checkbox-marked
                    </v-icon>
                    <v-icon
                        v-else
                        class="custom-checkbox"
                        @click="payload.option=4"
                        >
                        mdi-checkbox-blank-outline
                    </v-icon>
                    Custom
                </div>
            </div>
            <v-card elevation="1" v-if="payload.option!=null">
                <v-card-text>
                    <div class="class-platform">
                        <!-- <div class="mr-2">
                            <v-icon
                                v-if="payload.withlink"
                                class="custom-checkbox"
                                @click="payload.withlink=false"
                                >
                                mdi-checkbox-marked
                            </v-icon>
                            <v-icon
                                v-else
                                class="custom-checkbox"
                                @click="payload.withlink=true"
                                >
                                mdi-checkbox-blank-outline
                            </v-icon>
                            With link
                        </div> -->
                        <div class="mr-2">
                            <v-icon
                                v-if="payload.platform==1"
                                class="custom-checkbox"
                                @click="payload.platform=1"
                                >
                                mdi-checkbox-marked
                            </v-icon>
                            <v-icon
                                v-else
                                class="custom-checkbox"
                                @click="payload.platform=1"
                                >
                                mdi-checkbox-blank-outline
                            </v-icon>
                            Email
                        </div>
                        <div>
                            <v-icon
                                v-if="payload.platform==2"
                                class="custom-checkbox"
                                @click="payload.platform=2"
                                >
                                mdi-checkbox-marked
                            </v-icon>
                            <v-icon
                                v-else
                                class="custom-checkbox"
                                @click="payload.platform=2"
                                >
                                mdi-checkbox-blank-outline
                            </v-icon>
                            SMS
                        </div>
                    </div>
                    <v-form ref="form" lazy-validation>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12">
                                    <label v-if="payload.option==2||payload.option==1"><span class="text-red">*</span> Course </label>
                                    <v-autocomplete
                                        v-if="payload.option==2||payload.option==1"
                                        :rules="[() => !!payload.course_id ||  '']"
                                        v-model="payload.course_id"
                                        :items="courses"
                                        item-text="name"
                                        item-value="id"
                                        filled
                                        dense
                                    ></v-autocomplete>
                                    <label v-if="payload.option==3"><span class="text-red">*</span> Department </label>
                                    <v-autocomplete
                                        v-if="payload.option==3"
                                        :rules="[() => !!payload.department_id ||  '']"
                                        v-model="payload.department_id"
                                        :items="departments"
                                        item-text="name"
                                        item-value="id"
                                        filled
                                        dense
                                    ></v-autocomplete>
                                    <label v-if="payload.option==1"><span class="text-red">*</span> Section</label>
                                    <v-text-field
                                        v-if="payload.option==1"
                                        :rules="[() => !!payload.section ||  '']"
                                        ref="section"
                                        v-model="payload.section"
                                        filled
                                        dense
                                    ></v-text-field>
                                    <label><span class="text-red">*</span> Title</label>
                                    <v-text-field
                                        :rules="[() => !!payload.title ||  '']"
                                        ref="title"
                                        v-model="payload.title"
                                        filled
                                        dense
                                    ></v-text-field>
                                    <label><span class="text-red">*</span> Content</label>
                                    <v-textarea
                                        :rules="[() => !!payload.content ||  '']"
                                        ref="content"
                                        v-model="payload.content"
                                        filled
                                        dense
                                    ></v-textarea>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="$emit('cancel')">Cancel</v-btn>
            <v-btn @click="saveSend" color="success">Save&Send</v-btn>
            <v-btn @click="save" color="success">Save</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    components:{
    },
    props:{
        payload:{

        }
    },
    data(){
        return{
            courses:[],
            departments:[],
            platforms:[
                {
                    id:1,
                    name:'Email'
                },
                {
                    id:2,
                    name:'SMS'
                }
            ]
        }
    },
    methods:{
        getAllCourse(){
            axios.get(`/admin/courses`).then(({data})=>{
                this.courses = data.data
            })
        },
        getAllDepartment(){
            axios.get(`/admin/departments`).then(({data})=>{
                this.departments = data.data
            })
        },
        clear(){

        },
        save(){
            if(!this.$refs.form.validate()) return;
            this.$emit('save')
        },
        saveSend(){
            if(!this.$refs.form.validate()) return;
            this.$emit('savesend')
        }
    },
    watch:{
        "payload.option":{
            handler(val){
                this.payload.course_id = null
                this.payload.department_id = null
                this.payload.section = null
                this.payload.title = null
                this.payload.content = null
            }
        }
    },
    created(){
        this.getAllCourse()
        this.getAllDepartment()
    }
}
</script>
<style lang="scss" scoped>
    .header-option{
        display: flex;
        justify-content: space-between;
        background: rgb(235, 234, 234);
        padding: 5px;
    }
    .class-platform{
        display: flex;
        justify-content: flex-end;
    }
</style>