<template>
    <v-card>
        <v-card-title>Claim Points
            <v-spacer></v-spacer>
            <p>{{totalPoints+'Pts.'}}</p>
        </v-card-title>
        <v-card-text>
            <div>
                <v-icon
                    v-if="isall==1"
                    class="custom-checkbox"
                    @click="isall=0"
                >
                    mdi-checkbox-marked
                </v-icon>
                <v-icon
                    v-else
                    class="custom-checkbox"
                    @click="isall=1"
                >
                    mdi-checkbox-blank-outline
                </v-icon>
                All Points
            </div>
            <div class="form-main-container">
                <v-btn @click="claimId" class="mr-5" x-large color="success">Id</v-btn>
                <v-btn @click="claimLoad" x-large color="success">Load</v-btn>
            </div>
        </v-card-text>
        <!-- <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="$emit('cancel')" color="error">Cancel</v-btn>
            <v-btn color="success">Claim</v-btn>
        </v-card-actions> -->
        <v-snackbar
            :timeout="-1"
            v-model="isInsufficient"
            tile
            top
            color="red accent-2"
        >
            {{message}}
        </v-snackbar>
    </v-card>
</template>
<script>
export default {
    props:{
        payload:{}
    },
    data(){
        return{
            totalPoints:0,
            isall:0,
            isInsufficient:false,
            message:null
        }
    },
    methods:{
        getTotalPoints(){
            axios.get(`/admin/total-points/${this.payload.graduate_id}`).then(({data})=>{
                this.totalPoints = data
            })
        },
        claimId(){
            if(this.totalPoints < 300){
                this.message = 'Point\'s is not enough to get a free Id '+ this.totalPoints+'/300'
                this.isInsufficient = true
                setTimeout(() => {
                    this.isInsufficient = false
                }, 3000);
                return
            }
            this.payload.isall = this.isall
            this.$emit('claimId')
        },
        claimLoad(){
            this.payload.isall = this.isall
            this.$emit('claimLoad')
        }
    },
    mounted(){

    },
    watch:{
        "isall":{
            handler(val){
                if(val){
                    this.getTotalPoints()
                }else{
                    this.totalPoints = this.payload.point
                }
            },immediate:true
        },
        "payload":{
            handler(val){
                this.totalPoints = val.point
            },immediate:true
        }
    }
}
</script>
<style lang="scss" scoped>
    .form-main-container{
        margin-top: 10px;
        display: flex;
        justify-content: center;

        button{
            font-size: 20px;
            height: 100px !important;
            width: 170px !important;
        }
    }
</style>