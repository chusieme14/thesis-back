<template>
    <v-card max-height="92vh">
        <v-card-title>
            <span class="text-h5">Graduate Informations</span>
            <v-spacer></v-spacer>
            <v-btn color="success">Multiple add</v-btn>
        </v-card-title>
        <v-card-text>
            <v-form ref="form">
                <v-container>
                    <v-row>
                        <v-col class="class-images" cols="12" sm="12">
                            <v-col cols="12" sm="4">
                                <div class="graduate-image-container">
                                    <img
                                        @click="triggerUpload"
                                        class="graduate-avatar"
                                        :src="payload.image_base64?payload.image_base64:'/sample/no-image.png'"
                                    />
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
                                            :background-color="isdark?'#777':''"
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
                                            :background-color="isdark?'#777':''"
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
                                            :background-color="isdark?'#777':''"
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
                                            :background-color="isdark?'#777':''"
                                            dense
                                            filled
                                        ></v-text-field>
                                    </v-col>
                                    <v-col class="image-text-field" cols="12" sm="4">
                                        <label><span class="text-danger">*</span> Email </label>
                                        <v-text-field
                                            :rules="[() => !!payload.email ||  '']"
                                            v-model="payload.email"
                                            :background-color="isdark?'#777':''"
                                            dense
                                            filled
                                        ></v-text-field>
                                    </v-col>
                                    <v-col class="image-text-field" cols="12" sm="3">
                                        <label><span class="text-danger">*</span> Contact number </label>
                                        <v-text-field
                                            :rules="[() => !!payload.contact_number ||  '']"
                                            v-model="payload.contact_number"
                                            :background-color="isdark?'#777':''"
                                            dense
                                            filled
                                            type="number"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col class="image-text-field" cols="12" sm="2">
                                        <label>Civil status </label>
                                        <v-autocomplete
                                            v-model="payload.civil_status"
                                            :items="civil_status"
                                            hide-details="auto"
                                            :background-color="isdark?'#777':''"
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
                                                    v-model="payload.birthday"
                                                    readonly
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    dense
                                                    filled
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker
                                                v-model="payload.birthday"
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
                                            v-model="payload.residence"
                                            :background-color="isdark?'#777':''"
                                            filled
                                            dense
                                        ></v-text-field>
                                    </v-col>
                                    <v-col class="image-text-field" cols="12" sm="2">
                                        <label> Gender </label>
                                        <v-autocomplete
                                            v-model="payload.gender"
                                            :items="genders"
                                            hide-details="auto"
                                            :background-color="isdark?'#777':''"
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
                                        v-model="payload.attainment"
                                        :items="attainmentOptions"
                                        hide-details="auto"
                                        :background-color="isdark?'#777':''"
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
                                        v-model="payload.prof_exam_passed"
                                        :items="booleanOptions"
                                        hide-details="auto"
                                        :background-color="isdark?'#777':''"
                                        :menu-props="{'background-color':'#777'}"
                                        filled
                                        dense
                                    ></v-autocomplete>
                                </v-col>
                                <v-col class="image-text-field" cols="12" sm="4">
                                    <label> Award(s) </label>
                                    <v-text-field
                                        v-model="payload.awards"
                                        :background-color="isdark?'#777':''"
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
                                        item-text="display_name"
                                        item-value="id"
                                        hide-details="auto"
                                        :background-color="isdark?'#777':''"
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
                                        :background-color="isdark?'#777':''"
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
                                        :background-color="isdark?'#777':''"
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
                                        v-model="payload.employed"
                                        :items="booleanOptions"
                                        hide-details="auto"
                                        :background-color="isdark?'#777':''"
                                        :menu-props="{'background-color':'#777'}"
                                        filled
                                        dense
                                    ></v-autocomplete>
                                </v-col>
                                <v-col v-if="payload.employed=='Yes'" class="image-text-field" cols="12" sm="5">
                                    <label> Employment date </label>
                                    <v-menu
                                        :close-on-content-click="true"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field
                                                v-model="payload.employment_date"
                                                readonly
                                                v-bind="attrs"
                                                v-on="on"
                                                dense
                                            ></v-text-field>
                                        </template>
                                        <v-date-picker
                                            v-model="payload.employment_date"
                                            no-title
                                            scrollable
                                        >
                                        </v-date-picker>
                                    </v-menu>
                                </v-col>
                                <v-col v-if="payload.employed=='Yes'" class="image-text-field" cols="12" sm="5">
                                    <label>Status of Employment </label>
                                    <v-autocomplete
                                        v-model="payload.employment_status"
                                        :items="employmentStatus"
                                        hide-details="auto"
                                        :background-color="isdark?'#777':''"
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
            <v-btn color="error" class="mr-2">Cancel</v-btn>
            <v-btn @click="save" color="success">Save</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
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
            isfetching:true,
            search:null,
            isdark:false,
            seleted:[],
            ammunitions:[],
            errorMessages:'',
            unlimited:false,
            gunTypes:[],
            courses:[],
            defualt_image:"/sample/gun.png",
            payload:{
                prof_exam_passed:'No',
                details:{}
            },
            footerPages: {
                "items-per-page-options": [5,10], 
            },
            options:{
                itemsPerPage:5,
            },
            total: 0,
            headers:[
              {
                    text: 'Name',
                    align: 'start',
                    sortable: true,
                    value: 'name',
              },
              {
                    text: 'Type',
                    align: 'start',
                    sortable: false,
                    value: 'type',
              },
            ],
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
                'No',
                'Yes'
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
        pluck(items, key) {
          return items.map(item => item[key]);
        },

        getAmmunitions(){
          let params = this._createParams(this.options)
            if(this.search)
                params = params + '&keyword=' + this.search
            axios.get(`/admin/ammunitions?${params}`).then(({data})=>{
                this.ammunitions = data.data
                this.total = data.total
                this.isfetching = false
            })
        },

        getGunTypes(){
            axios.get(`/admin/gun-types?per_page=-1`).then(({data})=>{
                this.gunTypes = data.data
                if(!this.isedit){
                    this.payload.gun_type_id = this.gunTypes[0].id
                }
                this.isfetching = false
            })
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
        },
        cancel(){
            this.reset()
            this.$emit('cancel')
        },
        save(){
            if(!this.$refs.form.validate()) return;
            console.log(this.payload,"save payload")
            // if(this.isedit){
            //     this.$emit('edit',this.payload)
            //     return
            // }
            // this.$emit('save',this.payload)
            this.payload.password = 'password'
            axios.post(`/admin/graduates`,this.payload).then(({data})=>{
                this.$router.push({name:'graduates'})
            })
        },
        reset(){
            this.seleted = []
            this.unlimited = false
            this.isfetching = true
            this.payload.name = ''
            this.payload.price = 0
            this.payload.stocks = 1
            this.payload.unlimited = false
            this.payload.image_base64 = null
            this.$refs.form.resetValidation()
        }
    },
    watch:{
        "show":{
            handler(val){
                if(val){
                    if(!this.isedit)
                        if(this.payload.name||this.payload.short_name||this.payload.price > 0)
                            this.reset()
                    this.getGunTypes()
                }
                
            },immediate:true
        },
        "isedit":{
            handler(val){
                if (val) {
                    Object.assign(this.payload,this.selected_item)
                    this.payload.unlimited = this.selected_item.unlimited?true:false
                    this.payload.image_base64 = this.selected_item.image
                    this.seleted = this.payload.ammunitions
                    this.payload.ammunition_ids = this.pluck(this.payload.ammunitions, 'id')
                }
            },immediate:true
        },
    },
    computed:{
        years(){
            let schoolYear = []
            let year = new Date().getFullYear()
            let startYear = year - 5
            for (let start = year-1; start >= startYear; start--) {
                schoolYear.push(`${start} - ${start+1}`)
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