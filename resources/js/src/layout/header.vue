<template>
    <div class="main-container">
        <v-app-bar-nav-icon @click="$emit('setDrawer',!drawer)"></v-app-bar-nav-icon>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props:{
        drawer:{
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .main-container{
        height: 50px !important;
        display: flex;
        justify-content: center;
        flex-direction: column;
        background-color: #4caf50 ;
    }
    .avatar-container{
        margin: 10px;
        span{
            font-weight: 600;
        }
    }
</style>