<template>
    <v-card>
        <v-card-title>
            Add Announcements
        </v-card-title>
        <v-card-text>
            <div class="header-option">
                <div>
                    <v-icon
                        v-if="payload.by_course"
                        color="#89ABB5" 
                        class="custom-checkbox"
                        @click="payload.by_course=!payload.by_course"
                        >
                        mdi-checkbox-marked
                    </v-icon>
                    <v-icon
                        v-else
                        color="#89ABB5" 
                        class="custom-checkbox"
                        @click="payload.by_course=!payload.by_course"
                        >
                        mdi-checkbox-blank-outline
                    </v-icon>
                    By course
                </div>
                <div>
                    <v-icon
                        v-if="payload.by_section"
                        color="#89ABB5" 
                        class="custom-checkbox"
                        @click="payload.by_section=!payload.by_section"
                        >
                        mdi-checkbox-marked
                    </v-icon>
                    <v-icon
                        v-else
                        color="#89ABB5" 
                        class="custom-checkbox"
                        @click="payload.by_section=!payload.by_section"
                        >
                        mdi-checkbox-blank-outline
                    </v-icon>
                    By section
                </div>
                <div>
                    <v-icon
                        v-if="payload.by_section"
                        color="#89ABB5" 
                        class="custom-checkbox"
                        @click="payload.by_section=!payload.by_section"
                        >
                        mdi-checkbox-marked
                    </v-icon>
                    <v-icon
                        v-else
                        color="#89ABB5" 
                        class="custom-checkbox"
                        @click="payload.by_section=!payload.by_section"
                        >
                        mdi-checkbox-blank-outline
                    </v-icon>
                    By department
                </div>
                <div>
                    <v-icon
                        v-if="payload.by_section"
                        color="#89ABB5" 
                        class="custom-checkbox"
                        @click="payload.by_section=!payload.by_section"
                        >
                        mdi-checkbox-marked
                    </v-icon>
                    <v-icon
                        v-else
                        color="#89ABB5" 
                        class="custom-checkbox"
                        @click="payload.by_section=!payload.by_section"
                        >
                        mdi-checkbox-blank-outline
                    </v-icon>
                    By department
                </div>
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