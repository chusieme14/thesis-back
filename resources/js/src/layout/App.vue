<template>
    <v-app v-if="!isfetching">
        <div v-if="isAuth && $route.name!='not-found'" class="d-flex class-main-container">
            <side-bar @logout="logout"></side-bar>
            <div class="class-content">
                <!-- <main-header></main-header> -->
                <router-view class="class-main-content"></router-view>
            </div>
        </div>
        <router-view v-else-if="$route.name=='not-found'"></router-view>
        <login v-else></login>
    </v-app>
</template>
<script>
import MainHeader from './header.vue'
import SideBar from './sidebar.vue'
import Login from './login.vue'
export default {
    components:{
        MainHeader,
        SideBar,
        Login
    },
    data(){
        return{
            isSuperAdmin:false,
            isAuth:false,
            isfetching:true
        }
    },
    methods:{
        logout(){
            axios.get(`/admin/logout`).then(({data})=>{
                this.$router.push({name:'login'})
                this.isAuth = false
            })
        },
        getAuthuser(){
            axios.get(`/admin/checkuser`).then(({data})=>{
                console.log(data,"checkuser")
                this.isAuth = data
                this.isfetching = false
            })
        }
    },
    created(){
        // console.log(this.$route,"skdjskdj")
        // this.getAuthuser()
    },
    computed:{
        getCurrentUrl() {
            let url = this.$route.fullPath
            let parts = url.split("/")
            return parts[1]
        },
    },
    watch:{
        $route (to, from){
           this.getAuthuser()
        }
    }
}
</script>
<style lang="scss" scoped>
.class-main-content{
    margin: 20px;
}
.class-header{
    width: 100%;
}
.v-application .primary--text {
    color:#070707 !important;
}
.class-main-container{
    height: 100%;
}
.class-content{
    // margin: 40px;
    width: 85%;
    background-color: rgb(236, 231, 231);
}
.active {
	color: #070707 !important;
    background-color: rgb(35, 107, 17);
}
.class-title{
    // margin-left: 65px;
}
.v-list-item__content {
    cursor: pointer;
}
// .class-sub-list{
//     align-items: center;
//     align-self: center;
//     display: flex;
//     flex-wrap: wrap;
//     flex: 1 1;
//     overflow: hidden;
//     padding: 2px 0 !important;
//     margin-top: 13px;
//     margin-left: 62px;
// }
</style>