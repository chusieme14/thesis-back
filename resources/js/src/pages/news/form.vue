<template>
    <v-card>
        <v-card-title>{{payload.id?'Edit':'Add'}} post</v-card-title>
        <v-card-text>
            <v-img
                max-height="350"
                @click="triggerUpload"
                :src="payload.image_base64?payload.image_base64:'/sample/no_image.png'"
            ></v-img>
            <input 
                ref="file_input"
                type='file' class="hidden" 
                accept="image/x-png,image/gif,image/jpeg" 
                @change="onFileChange($event.target.files)"
            />
            <v-text-field
                v-model="payload.title"
                counter="25"
                label="Title"
            ></v-text-field>
            <v-textarea
                v-model="payload.description"
                filled
                label="Description"
                auto-grow
            ></v-textarea>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="cancel">Cancel</v-btn>
            <v-btn color="success" @click="save">Save</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:{
        payload:{

        },
    },
    methods:{
        save(){
            this.$emit('save');
        },

        cancel(){
            this.$emit('cancel');
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
    },
}
</script>