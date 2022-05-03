<template>
    <v-card max-height="92vh">
        <v-card-title>
            <span class="text-h5">Graduate Informations</span>
            <v-spacer></v-spacer>
            <v-btn @click="triggerInputFile()" color="success">Multiple add</v-btn>
            <input @change="handleFileUpload()" ref="fileInput" type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" hidden>
        </v-card-title>
        <v-card-text>
            <v-form ref="form">
                <v-container>
                    <v-row>
                        <v-col class="class-images" cols="12" sm="12">
                            <v-col cols="12" sm="4">
                                <div class="graduate-image-container">
                                    <v-avatar
                                        size="250"
                                    >
                                        <img
                                            @click="triggerUpload"
                                            :src="payload.image_base64?payload.image_base64:'/sample/no-image.png'"
                                        />

                                    </v-avatar>
                                    <input 
                                        ref="file_input"
                                        type='file' class="hidden" 
                                        accept="image/x-png,image/gif,image/jpeg" 
                                        @change="onFileChange($event.target.files)"
                                    />
                                </div>
                            </v-col>
                            <v-col cols="12" sm="8">
                                <v-row class="mb-3">
                                    <v-col cols="12" sm="12"><h2>Personal Informations</h2></v-col>
                                </v-row>
                                <v-row>
                                    <v-col class="image-text-field" cols="12" sm="4">
                                        <label><span class="text-danger">*</span> First name </label>
                                        <v-text-field
                                            v-model="payload.first_name"
                                            :rules="[() => !!payload.first_name ||  '']"
    
                                            hide-details="auto"
                                            dense
                                            filled
                                        ></v-text-field>
                                    </v-col>
                                    <v-col class="image-text-field" cols="12" sm="4">
                                        <label><span class="text-danger">*</span> Last name </label>
                                        <v-text-field
                                            v-model="payload.last_name"
                                            :rules="[() => !!payload.last_name ||  '']"
    
                                            hide-details="auto"
                                            dense
                                            filled
                                        ></v-text-field>
                                    </v-col>
                                    <v-col class="image-text-field" cols="12" sm="4">
                                        <label><span class="text-danger">*</span> Middle name </label>
                                        <v-text-field
                                            v-model="payload.middle_name"
                                            :rules="[() => !!payload.middle_name ||  '']"
    
                                            dense
                                            filled
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col class="image-text-field" cols="12" sm="3">
                                        <label><span class="text-danger">*</span> Student number </label>
                                        <v-text-field
                                            :rules="[() => !!payload.student_number ||  '']"
                                            v-model="payload.student_number"
    
                                            dense
                                            filled
                                        ></v-text-field>
                                    </v-col>
                                    <v-col class="image-text-field" cols="12" sm="4">
                                        <label><span class="text-danger">*</span> Email </label>
                                        <v-text-field
                                            :rules="[() => !!payload.email ||  '']"
                                            v-model="payload.email"
    
                                            dense
                                            filled
                                        ></v-text-field>
                                    </v-col>
                                    <v-col class="image-text-field" cols="12" sm="3">
                                        <label><span class="text-danger">*</span> Contact number </label>
                                        <v-text-field
                                            :rules="[() => !!payload.contact_number ||  '']"
                                            v-model="payload.contact_number"
    
                                            dense
                                            filled
                                            type="number"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col class="image-text-field" cols="12" sm="2">
                                        <label>Civil status </label>
                                        <v-autocomplete
                                            v-model="payload.detail.civil_status"
                                            :items="civil_status"
                                            hide-details="auto"
    
                                            :menu-props="{'background-color':'#777'}"
                                            filled
                                            dense
                                        ></v-autocomplete>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col class="image-text-field" cols="12" sm="3">
                                        <label>Birthday </label>
                                        <v-menu
                                            :close-on-content-click="true"
                                            transition="scale-transition"
                                            offset-y
                                            min-width="auto"
                                        >
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field
                                                    v-model="payload.detail.birthday"
                                                    readonly
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    dense
                                                    filled
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker
                                                v-model="payload.detail.birthday"
                                                no-title
                                                scrollable
                                            >
                                            </v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    <v-col class="image-text-field" cols="12" sm="4">
                                        <label> Location of Residence </label>
                                        <v-text-field
                                            :error-messages="errorMessages"
                                            v-model="payload.detail.residence"
    
                                            filled
                                            dense
                                        ></v-text-field>
                                    </v-col>
                                    <v-col class="image-text-field" cols="12" sm="2">
                                        <label> Gender </label>
                                        <v-autocomplete
                                            v-model="payload.detail.gender"
                                            :items="genders"
                                            hide-details="auto"
    
                                            :menu-props="{'background-color':'#777'}"
                                            filled
                                            dense
                                        ></v-autocomplete>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="image-text-field" cols="12" sm="6">
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
                        <v-col class="image-text-field" cols="12" sm="6">
                            <v-row class="mb-3">
                                <v-col cols="12" sm="12"><h2>Employment Informations</h2></v-col>
                            </v-row>
                            <v-row>
                                <v-col class="image-text-field" cols="12" sm="2">
                                    <label>Employed </label>
                                    <v-autocomplete
                                        v-model="payload.detail.employed"
                                        :items="booleanOptions"
                                        item-text="name"
                                        item-value="id"
                                        hide-details="auto"
                                        :menu-props="{'background-color':'#777'}"
                                        filled
                                        dense
                                    ></v-autocomplete>
                                </v-col>
                                <v-col v-if="payload.detail.employed==1" class="image-text-field" cols="12" sm="5">
                                    <label> Employment date </label>
                                    <v-menu
                                        :close-on-content-click="true"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field
                                                v-model="payload.detail.employment_date"
                                                readonly
                                                v-bind="attrs"
                                                v-on="on"
                                                dense
                                                filled
                                            ></v-text-field>
                                        </template>
                                        <v-date-picker
                                            v-model="payload.detail.employment_date"
                                            no-title
                                            scrollable
                                        >
                                        </v-date-picker>
                                    </v-menu>
                                </v-col>
                                <v-col v-if="payload.employed=='Yes'" class="image-text-field" cols="12" sm="5">
                                    <label>Status of Employment </label>
                                    <v-autocomplete
                                        v-model="payload.detail.employment_status"
                                        :items="employmentStatus"
                                        hide-details="auto"
                                        :menu-props="{'background-color':'#777'}"
                                        filled
                                        dense
                                    ></v-autocomplete>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </v-card-text>
        <v-card-actions class="custom-card-action mr-5">
            <v-btn @click="cancel" color="error" class="mr-2">Cancel</v-btn>
            <v-btn @click="save" color="success">Save</v-btn>
        </v-card-actions>
        <v-dialog
            v-model="ismultiple"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
        >
            <con-form
                :show="ismultiple"
                @close="closeDialog"
                @save="saveMultiple"
            />
        </v-dialog>
    </v-card>
</template>
<script>
import ConForm from "./csv-form.vue"
export default {
    components:{
        ConForm,
    },
    props:{
        show:{
            type:Boolean
        },
        details:{

        },
        selected_item:{

        },
        isedit:{
            type:Boolean
        }
    },
    data(){
        return{
            file:null,
            ismultiple:false,
            isfetching:true,
            search:null,
            isdark:false,
            errorMessages:'',
            unlimited:false,
            gunTypes:[],
            courses:[],
            defualt_image:"/sample/gun.png",
            payload:{
                image_base64:null,
                prof_exam_passed:'No',
                detail:{}
            },
            civil_status:[
                'Single',
                'Married',
                'Separated',
                'Widowed',
            ],
            genders:[
                'Male',
                'Famale'
            ],
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
            employmentStatus:[
                'Contractual',
                'Permanent',
                'Self-employed',
                'Casual',
                'Not Applicable',
            ]
        }
    },
    methods:{
        closeDialog(){
            let session = localStorage.getItem("session")
            axios.delete(`/admin/graduates/temp-uploads/${session}/remove`).then(({})=>{
                this.ismultiple = false
                localStorage.removeItem("session");
            })
        },
        saveMultiple(){
            let session = localStorage.getItem("session")
            axios.get(`/admin/graduates/temp-uploads/${session}/save`).then(({data})=>{
                this.ismultiple = false
                localStorage.removeItem("session");
                this.$router.push({name:'graduates'})

            })
        },
        preventReload() {
            window.onbeforeunload = function(){
                return "Are you sure you want to refresh the window?, selected file will be removed!";
            }
            this.isimport = false
        },
        triggerInputFile() {
            this.$refs.fileInput.click();
            this.preventReload()
        },
        handleFileUpload(){
            this.file = this.$refs.fileInput.files[0];
            this.uploadFile()
        },
        uploadFile(){
            let session = new Date().getTime()
            let payload= new FormData();
            payload.append('file',this.file)
            payload.append('session',session)
            axios.post(`/admin/graduates/upload-file`,payload).then(({data})=>{
                if(data.message == 'success'){
                    localStorage.setItem('session',session)
                    this.ismultiple = true
                }
                this.file = null
                this.$refs.fileInput.value=null;
            })
        },
        getCourses(){
            let params = ''
            // if(this.data.keyword)
            //     params = params + '&keyword=' + this.data.keyword
            axios.get(`/admin/courses?${params}`).then(({data})=>{
                this.courses = data.data
            })
        },  
        pluck(items, key) {
          return items.map(item => item[key]);
        },

        triggerUpload() {
            this.$refs.file_input.click()
        },

        async onFileChange(file) {
            let imageFile = file[0]

            if (file.length>0) {
                if (!imageFile.type.match('image.*')) {
                this.errorDialog = true
                this.errorText = 'Please choose an image file'
                } else {
                let imageURL = URL.createObjectURL(imageFile)
                this.avatar_blob = imageURL
                this.payload.image_base64 = await this.createImageBase64(imageFile);
                }
            }
            console.log(this.payload.image_base64)
        },

        cancel(){
            this.reset()
            this.$router.push({name:'graduates'})
        },
        save(){
            if(!this.$refs.form.validate()) return;
            console.log(this.payload,"save payload")
            // if(this.isedit){
            //     this.$emit('edit',this.payload)
            //     return
            // }
            // this.$emit('save',this.payload)
            this.payload.section = this.payload.section.toUpperCase()
            axios.post(`/admin/graduates`,this.payload).then(({data})=>{
                this.$router.push({name:'graduates'})
            })
        },
        reset(){
            this.isfetching = true
            this.payload.image_base64 = null
            this.$refs.form.resetValidation()
        }
    },
    created(){
        this.getCourses()
    },
    mounted(){
        if(localStorage.getItem("session")){
            this.ismultiple = true
        }
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
<style lang="scss" scoped>
    .class-images{
        display: flex;
        justify-content: center;

        .v-image{
            cursor: pointer;
        }
    }
    .image-text-field{
        margin-top: -19px !important;
    }
    .custom-card-action{
        display: flex;
        justify-content: flex-end;
    }
</style>