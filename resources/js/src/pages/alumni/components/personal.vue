<template>
    <v-form ref="form">
        <v-container>
            <v-row>
                <v-row>
                    <v-col class="class-images" cols="12" sm="12">
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
                </v-row>
                <v-col cols="12" sm="12">
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
                            <label>Middle name </label>
                            <v-text-field
                                v-model="payload.middle_name"
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
            </v-row>
            <div class="class-form-action">
                <v-btn @click="$emit('cancel')" class="mr-2" color="error">Cancel</v-btn>
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
            civil_status:[
                'Single',
                'Married',
                'Separated',
                'Widowed',
            ],
            genders:[
                'Male',
                'Famale',
                'Transgender',
                'Non-binary',
                'Prefer not to respond',
            ],
        }
    },
    methods:{
        next(){
            if(!this.$refs.form.validate()) return;
            this.$emit('next')
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
    .class-form-action{
        display: flex;
        justify-content: flex-end;
    }
</style>