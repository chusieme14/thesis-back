<template>
    <v-card height="92vh">
        <v-card-title>
            <span class="text-h5">Graduate Informations</span>
            <!-- <v-spacer></v-spacer>
            <v-btn @click="triggerInputFile()" color="success">Multiple add</v-btn>
            <input @change="handleFileUpload()" ref="fileInput" type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" hidden> -->
        </v-card-title>
        <v-card-text class="main-container">
            <v-stepper v-model="e1">
                <v-stepper-header>
                    <v-stepper-step
                        :complete="e1 > 1"
                        step="1"
                    >
                        Personal Information
                    </v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step
                        :complete="e1 > 2"
                        step="2"
                    >
                        Educational Information
                    </v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step
                        :complete="e1 > 3"
                        step="3"
                    >
                        Employment Information
                    </v-stepper-step>
                </v-stepper-header>
                <v-stepper-items>
                    <v-stepper-content step="1">
                        <personal 
                            :payload="payload"
                            @cancel="cancel"
                            @next="next"
                        ></personal>
                    </v-stepper-content>
                </v-stepper-items>
                <v-stepper-items>
                    <v-stepper-content step="2">
                        <educational 
                            :payload="payload"
                            @cancel="cancel"
                            @next="next"
                            @prev="prev"
                        ></educational>
                    </v-stepper-content>
                </v-stepper-items>
                <v-stepper-items>
                    <v-stepper-content step="3">
                        <employment 
                            :payload="payload"
                            @cancel="cancel"
                            @save="save"
                            @prev="prev"
                        ></employment>
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </v-card-text>
        <!-- <v-card-actions class="custom-card-action mr-5">
            <v-btn @click="cancel" color="error" class="mr-2">Cancel</v-btn>
            <v-btn @click="save" color="success">Save</v-btn>
        </v-card-actions> -->
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
import Personal from "./components/personal.vue"
import Educational from "./components/educational.vue"
import Employment from "./components/employment.vue"
export default {
    components:{
        ConForm,
        Personal,
        Educational,
        Employment
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
            e1:1,
            ismultiple:false,
            payload:{
                image_base64:null,
                prof_exam_passed:'No',
                detail:{}
            },
        }
    },
    methods:{
        next(){
            this.e1 += 1 
        },
        prev(){
            this.e1 -= 1
        },
        fetchGraduate(){
            console.log(this.$route.params.graduates_id,"this.$router.params.graduates_id");
            axios.get(`/admin/graduates/${this.$route.params.graduates_id}`).then(({data})=>{
                this.payload = data
                if(!this.payload.detail) this.payload.detail = {}
                if(this.payload.avatar) this.payload.image_base64 = this.payload.avatar
            })
        },
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
            console.log(this.payload.image_base64,"this.payload.image_base64")
        },

        cancel(){
            this.reset()
            this.$router.push({name:'graduates'})
        },
        save(){
            console.log(this.payload,"save payload")
            axios.put(`/admin/graduates/${this.payload.id}`,this.payload).then(({data})=>{
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
        this.fetchGraduate()
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
    },
    watch:{
        $route (to, from){
           this.fetchGraduate()
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
    .main-container{
        max-height: 87vh;
        overflow: auto;
    }
</style>