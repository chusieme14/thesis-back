<template>
    <v-app>
        <v-container grid-list-md>
            <v-layout class="class-container" justify-center row>
                <v-flex class="class-input-container" md4>
                    <v-layout justify-center wrap row>
                        <v-flex md12>
                            <v-card
                            elevation="2"
                            :loading="isloading"
                            >
                                <v-card-title>Log in</v-card-title>
                                <v-card-text>
                                    <v-layout justify-center row>
                                        <v-flex md10>
                                            <v-label>Emial</v-label>
                                            <v-text-field
                                                v-model="credential.email"
                                                solo
                                                dense
                                                color="success"
                                            ></v-text-field>
                                        </v-flex>
                                        <v-flex md10>
                                            <v-label>Password</v-label>
                                            <v-text-field
                                                v-model="credential.password"
                                                solo
                                                type="password"
                                                dense
                                                color="success"
                                            ></v-text-field>
                                        </v-flex>
                                        <v-flex class="class-text" md10>
                                            <small v-if="iserror" class="errormessege">Invalid email or password</small>
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn @click="login">login</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>
<script>
export default {
    data(){
        return{
            credential:{},
            isloading:false,
            iserror:false
        }
    },
    methods:{
        login(){
            this.$router.push({name:'dashboard'})
            return
            this.isloading=true
            let payload = this.credential
            // axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post(`/admin/api/loginrequest`,{...payload}).then(({data})=>{
                    if(!data.error_message){
                        this.$router.push({name:'waiting'})
                    }else {
                        this.iserror = true
                        setTimeout(() => {
                            this.iserror = false
                        }, 5000);
                    }
                })
                .finally(()=>{
                    this.isloading = false
                })
            // })
        }
    }
}
</script>
<style lang="scss" scoped>
.class-input-container{
    margin-top: 230px;
    // box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.42);
    // -webkit-box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.42);
    // -moz-box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.42);
    // padding: 55px;
}
.class-text{
    margin-top: -30px;
    .errormessege{
        color: red;
    }
}
</style>