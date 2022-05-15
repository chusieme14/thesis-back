<template>
    <v-form ref="form">
        <v-container>
            <v-row>
                <v-col class="image-text-field" cols="12" sm="12">
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
                        <v-col class="image-text-field" cols="12" sm="5">
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
                        <v-col class="image-text-field" cols="12" sm="5">
                            <label> Company name </label>
                            <v-text-field
                                v-model="payload.detail.company_name"
                                hide-details="auto"
                                filled
                                dense
                            ></v-text-field>
                            
                        </v-col>
                        <v-col class="image-text-field" cols="12" sm="3">
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
                        <v-col class="image-text-field" cols="12" sm="9">
                            <label> Address </label>
                            <v-text-field
                                v-model="payload.detail.c_address"
                                hide-details="auto"
                                filled
                                dense
                            ></v-text-field>
                        </v-col>
                        <v-col class="image-text-field" cols="12" sm="6">
                            <label> City </label>
                            <v-text-field
                                v-model="payload.detail.c_city"
                                hide-details="auto"
                                filled
                                dense
                            ></v-text-field>
                        </v-col>
                        <v-col class="image-text-field" cols="12" sm="6">
                            <label> Country </label>
                            <v-autocomplete
                                v-model="payload.detail.country_id"
                                :items="countries"
                                item-value="id"
                                item-text="name"
                                hide-details="auto"
                                filled
                                dense
                            ></v-autocomplete>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <div class="class-form-action">
                <v-btn @click="$emit('prev')" class="mr-2" color="error">Preview</v-btn>
                <v-btn @click="save" color="success">Save</v-btn>
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
            employmentStatus:[
                'Contractual',
                'Permanent',
                'Self-employed',
                'Casual',
                'Not Applicable',
            ],
            countries:[]
        }
    },
    methods:{
        save(){
            if(!this.$refs.form.validate()) return;
            this.$emit('save')
        },
        getCountries(){
            axios.get(`/admin/countries`).then(({data})=>{
                this.countries = data.data
            })
        },
    },
    mounted(){
        this.getCountries()
    }
}
</script>
<style lang="scss" scoped>
    .class-form-action{
        margin-top: 15px;
        display: flex;
        justify-content: flex-end;
    }
</style>