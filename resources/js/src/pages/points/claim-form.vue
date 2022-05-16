<template>
    <v-card>
        <v-card-title>Claim Points</v-card-title>
        <v-card-text>
            <div>
                <v-icon
                    v-if="payload.isall==1"
                    class="custom-checkbox"
                    @click="payload.isall=0"
                >
                    mdi-checkbox-marked
                </v-icon>
                <v-icon
                    v-else
                    class="custom-checkbox"
                    @click="payload.isall=1"
                >
                    mdi-checkbox-blank-outline
                </v-icon>
                All Points
            </div>
            <div class="class-button">
                <v-btn class="mr-5" x-large color="primary">Id</v-btn>
                <v-btn x-large color="primary">Load</v-btn>
            </div>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="$emit('cancel')" color="error">Cancel</v-btn>
            <v-btn color="success">Claim</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    props:{
        payload:{}
    },
    data(){
        return{

        }
    },
    methods:{

    },
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
    .class-button{
        margin-top: 10px;
        display: flex;
        justify-content: center;
    }
</style>