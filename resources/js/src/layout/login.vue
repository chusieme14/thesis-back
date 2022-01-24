<template>
    <div class="login-main-container">
        <div class="left-container">
        </div>
        <div class="right-container">
            <div class="right-inner-container">
                <h2>Sign in</h2>
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
                    <v-btn color="#89ABB5" @click="login">VALIDER</v-btn>
                </v-layout>
            </div>
        </div>
    </div>
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
            let payload = this.credential
                axios.post(`/admin/login`,{...payload}).then(({data})=>{
                    if(!data.error_message){
                        this.$router.push({name:'dashboard'})
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