<template>
    <v-card>
        <v-card-title>
            Add Announcements
        </v-card-title>
        <v-card-text>
            <div class="header-option">
                
            </div>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="$emit('cancel')">Cancel</v-btn>
            <v-btn color="success">Save</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    props:{
        payload:{

        }
    },
    data(){
        return{
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .header-option{
        display: flex;
        justify-content: space-between;
    }
</style>