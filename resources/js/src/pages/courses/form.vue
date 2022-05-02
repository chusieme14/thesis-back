<template>
    <v-card v-if="show">
        <v-card-title><h3>{{details.title}}</h3></v-card-title>
        <v-card-text>
            <v-form ref="form" lazy-validation>
                <v-container>
                    <v-row>
                        <v-col class="col-text-field" cols="12" sm="12">
                            <label><span class="text-red">*</span> Name </label>
                            <v-text-field
                                :rules="[() => !!payload.name ||  '']"
                                v-model="payload.name"
                                maxlength="50"
                                counter
                                hide-details="auto"
                                filled
                                dense
                            ></v-text-field>
                            <label><span class="text-red-500">*</span> Code</label>
                            <v-text-field
                                :rules="[() => !!payload.code ||  '']"
                                ref="code"
                                v-model="payload.code"
                                counter
                                hide-details="auto"
                                filled
                                dense
                            ></v-text-field>
                            <label><span class="text-red-500">*</span> Department</label>
                            <v-autocomplete
                                :rules="[() => !!payload.department_id ||  '']"
                                ref="department_id"
                                item-value="id"
                                :items="departments"
                                item-text="abbreviation"
                                v-model="payload.department_id"
                                hide-details="auto"
                                filled
                                dense
                            ></v-autocomplete>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </v-card-text>
        <v-card-actions class="mr-2">
          <v-spacer></v-spacer>
          <v-btn
            class="mb-3"
            color="error"
            @click="cancel"
          >
            Cancel
          </v-btn>
          <v-btn
            class="mb-3"
            color="success"
            @click="save"
          >
            {{isedit?'Update':'Save'}}
          </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    props:{
        details:{

        },
        payload:{

        },
        show:{
            type:Boolean
        },
        isedit:{
            type:Boolean
        },
    },
    data(){
        return{
            isdark:false,
            departments:[]
        }
    },
    methods:{
        save(){
            if(!this.$refs.form.validate()) return;
            if(this.isedit){
                this.$emit('update')
                return
            }
            this.$emit('save');
        },
        getAllDepartment(){
            axios.get(`/admin/departments`).then(({data})=>{
                this.departments = data.data
            })
        },
        cancel(){
            this.$emit('cancel');
        }
    },
    watch:{
        "show":{
            handler(val){
                if(!val && this.$refs.form){
                    this.$refs.form.resetValidation()
                }else{
                    this.getAllDepartment()
                }
            },immediate:true
        }
    }
}
</script>
<style lang="scss" scoped>
    .col-text-field{
        padding: 0px !important;
    }
</style>