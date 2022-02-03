<template>
    <v-card height="95vh">
        <v-card-title>
            <span class="text-h5">Graduate Informations</span>
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
                                            :rules="[() => !!payload.first_name ||  'this field is required']"
                                            ref="first_name"
                                            :error-messages="errorMessages"
                                            v-model="payload.first_name"
                                            required
                                            :background-color="isdark?'#777':''"
                                            hide-details="auto"
                                            solo
                                            dense
                                        ></v-text-field>
                                    </v-col>
                                    <v-col class="image-text-field" cols="12" sm="4">
                                        <label><span class="text-danger">*</span> Last name </label>
                                        <v-text-field
                                            :rules="[() => !!payload.last_name ||  'this field is required']"
                                            ref="last_name"
                                            :error-messages="errorMessages"
                                            v-model="payload.last_name"
                                            required
                                            :background-color="isdark?'#777':''"
                                            hide-details="auto"
                                            solo
                                            dense
                                        ></v-text-field>
                                    </v-col>
                                    <v-col class="image-text-field" cols="12" sm="4">
                                        <label><span class="text-danger">*</span> Middle name </label>
                                        <v-text-field
                                            :rules="[() => !!payload.middle_name ||  'this field is required']"
                                            ref="middle_name"
                                            :error-messages="errorMessages"
                                            v-model="payload.middle_name"
                                            required
                                            :background-color="isdark?'#777':''"
                                            solo
                                            dense
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col class="image-text-field" cols="12" sm="3">
                                        <label><span class="text-danger">*</span> Student number </label>
                                        <v-text-field
                                            :rules="[() => !!payload.student_number ||  'this field is required']"
                                            ref="student_number"
                                            :error-messages="errorMessages"
                                            v-model="payload.student_number"
                                            required
                                            :background-color="isdark?'#777':''"
                                            solo
                                            dense
                                        ></v-text-field>
                                    </v-col>
                                    <v-col class="image-text-field" cols="12" sm="4">
                                        <label><span class="text-danger">*</span> Email </label>
                                        <v-text-field
                                            :rules="[() => !!payload.email ||  'this field is required']"
                                            ref="email"
                                            :error-messages="errorMessages"
                                            v-model="payload.email"
                                            required
                                            :background-color="isdark?'#777':''"
                                            solo
                                            dense
                                        ></v-text-field>
                                    </v-col>
                                    <v-col class="image-text-field" cols="12" sm="3">
                                        <label><span class="text-danger">*</span> Contact number </label>
                                        <v-text-field
                                            :rules="[() => !!payload.contact_number ||  'this field is required']"
                                            ref="contact_number"
                                            :error-messages="errorMessages"
                                            v-model="payload.contact_number"
                                            required
                                            :background-color="isdark?'#777':''"
                                            solo
                                            dense
                                            type="number"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col class="image-text-field" cols="12" sm="2">
                                        <label><span class="text-danger">*</span> Civil status </label>
                                        <v-autocomplete
                                            v-model="payload.civil_status"
                                            :items="civil_status"
                                            hide-details="auto"
                                            :background-color="isdark?'#777':''"
                                            :menu-props="{'background-color':'#777'}"
                                            filled
                                            dense
                                            solo
                                            required
                                        ></v-autocomplete>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col class="image-text-field" cols="12" sm="3">
                                        <label><span class="text-danger">*</span> Birthday </label>
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
                                                    solo
                                                    dense
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
                                        <label><span class="text-danger">*</span> Location of Residence </label>
                                        <v-text-field
                                            :rules="[() => !!payload.residence ||  'this field is required']"
                                            ref="residence"
                                            :error-messages="errorMessages"
                                            v-model="payload.residence"
                                            required
                                            :background-color="isdark?'#777':''"
                                            solo
                                            dense
                                        ></v-text-field>
                                    </v-col>
                                    <v-col class="image-text-field" cols="12" sm="2">
                                        <label><span class="text-danger">*</span> Gender </label>
                                        <v-autocomplete
                                            v-model="payload.gender"
                                            :items="genders"
                                            hide-details="auto"
                                            :background-color="isdark?'#777':''"
                                            :menu-props="{'background-color':'#777'}"
                                            filled
                                            dense
                                            solo
                                            required
                                        ></v-autocomplete>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="image-text-field" cols="12" sm="6">
                            <v-row class="mb-3">
                                <v-col cols="12" sm="12"><h2>Employment Informations</h2></v-col>
                            </v-row>
                            <v-row>
                                <v-col class="image-text-field" cols="12" sm="2">
                                    <label><span class="text-danger">*</span> Employed </label>
                                    <v-autocomplete
                                        v-model="payload.employed"
                                        :items="booleanOptions"
                                        hide-details="auto"
                                        :background-color="isdark?'#777':''"
                                        :menu-props="{'background-color':'#777'}"
                                        filled
                                        dense
                                        solo
                                        required
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
                                                solo
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
                                    <label><span class="text-danger">*</span> Status of Employment </label>
                                    <v-autocomplete
                                        v-model="payload.employment_status"
                                        :items="employmentStatus"
                                        hide-details="auto"
                                        :background-color="isdark?'#777':''"
                                        :menu-props="{'background-color':'#777'}"
                                        filled
                                        dense
                                        solo
                                        required
                                    ></v-autocomplete>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col class="image-text-field" cols="12" sm="6">
                            <v-row class="mb-3">
                                <v-col cols="12" sm="12"><h2>Educational Informations</h2></v-col>
                            </v-row>
                            <v-row>
                                <v-col class="image-text-field" cols="12" sm="7" md="5">
                                    <label> High educational attainment </label>
                                    <v-autocomplete
                                        v-model="payload.highest_attainment"
                                        :items="attainmentOptions"
                                        hide-details="auto"
                                        :background-color="isdark?'#777':''"
                                        :menu-props="{'background-color':'#777'}"
                                        filled
                                        dense
                                        solo
                                        required
                                    ></v-autocomplete>
                                </v-col>
                                <v-col class="image-text-field" cols="12" sm="5" md="3">
                                    <label> Year Graduated </label>
                                    <v-autocomplete
                                        v-model="payload.year_Graduated"
                                        :items="years"
                                        hide-details="auto"
                                        :background-color="isdark?'#777':''"
                                        :menu-props="{'background-color':'#777'}"
                                        filled
                                        dense
                                        solo
                                        required
                                    ></v-autocomplete>
                                </v-col>
                                <v-col class="image-text-field" cols="12" sm="4">
                                    <label> Award(s) </label>
                                    <v-text-field
                                        v-model="payload.awards"
                                        required
                                        :background-color="isdark?'#777':''"
                                        solo
                                        dense
                                    ></v-text-field>
                                </v-col>
                                <v-col class="image-text-field" cols="12" sm="5" md="5">
                                    <label> Professional Examination Passed  </label>
                                    <v-autocomplete
                                        v-model="payload.prof_exam_passed"
                                        :items="booleanOptions"
                                        hide-details="auto"
                                        :background-color="isdark?'#777':''"
                                        :menu-props="{'background-color':'#777'}"
                                        filled
                                        dense
                                        solo
                                        required
                                    ></v-autocomplete>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </v-card-text>
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
            defualt_image:"/sample/gun.png",
            payload:{
                civil_status:'Single',
                gender:'Male',
                employed:'No',
                employment_date:null,
                highest_attainment:'Baccalaureate Degree',
                year_Graduated:null,
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
                'Baccalaureate Degree',
                'Masteral',
                'Doctorate',
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
            this.payload.ammunition_ids = this.pluck(this.seleted, 'id')
            if(this.isedit){
                this.$emit('edit',this.payload)
                return
            }
            this.$emit('save',this.payload)
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
</style>