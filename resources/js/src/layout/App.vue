<template>
    <v-app>
        <div v-if="$route.fullPath!='/'" class="d-flex class-main-container">
            <v-navigation-drawer
                class=" accent-4"
                dark
                width=300
                color="success"
                permanent
            >
                <v-list rounded>
                    <v-img
                        lazy-src="/sample/sample_logo.png"
                        max-height="100"
                        max-width="200"
                        src="/sample/sample_logo.png"
                    ></v-img>
                    <v-list-item
                        link
                        :class="getCurrentUrl == 'dashboard' ? 'active' : ''"
                    >
                        <v-list-item-icon>
                            <v-icon>mdi-view-dashboard</v-icon>
                        </v-list-item-icon>
                        <router-link tag="v-list-item-content" :to="{ name: 'dashboard' }">
                            <v-list-item-title >Dashboard</v-list-item-title>
                        </router-link>
                    </v-list-item>
                    <v-list-item
                        link
                        :class="getCurrentUrl == 'alumni' ? 'active' : ''"
                    >
                        <v-list-item-icon>
                            <v-icon>mdi-account-box</v-icon>
                        </v-list-item-icon>
                        <router-link tag="v-list-item-content" :to="{ name: 'alumni' }">
                            <v-list-item-title >Alumni</v-list-item-title>
                        </router-link>
                    </v-list-item>
                    <v-list-item
                        link
                        :class="getCurrentUrl == 'news' ? 'active' : ''"
                    >
                        <v-list-item-icon>
                            <v-icon>mdi-newspaper</v-icon>
                        </v-list-item-icon>
                        <router-link tag="v-list-item-content" :to="{ name: 'news' }">
                            <v-list-item-title >News</v-list-item-title>
                        </router-link>
                    </v-list-item>
                    <v-list-item
                        link
                        :class="getCurrentUrl == 'events' ? 'active' : ''"
                    >
                        <v-list-item-icon>
                            <v-icon>mdi-calendar</v-icon>
                        </v-list-item-icon>
                        <router-link tag="v-list-item-content" :to="{ name: 'events' }">
                            <v-list-item-title >Events</v-list-item-title>
                        </router-link>
                    </v-list-item>
                    <v-list-item
                        link
                        :class="getCurrentUrl == 'organization-chart' ? 'active' : ''"
                    >
                        <v-list-item-icon>
                            <v-icon>mdi-account-multiple</v-icon>
                        </v-list-item-icon>
                        <router-link tag="v-list-item-content" :to="{ name: 'organization-chart' }">
                            <v-list-item-title >Organization chart</v-list-item-title>
                        </router-link>
                    </v-list-item>
                    <v-list-item
                        link
                        :class="getCurrentUrl == 'roles' ? 'active' : ''"
                    >
                        <v-list-item-icon>
                            <v-icon>mdi-security</v-icon>
                        </v-list-item-icon>
                        <router-link tag="v-list-item-content" :to="{ name: 'roles' }">
                            <v-list-item-title >Roles&Permissions</v-list-item-title>
                        </router-link>
                    </v-list-item>
                    <v-list-item
                        link
                        :class="getCurrentUrl == 'admin-user' ? 'active' : ''"
                    >
                        <v-list-item-icon>
                            <v-icon>mdi-account-key</v-icon>
                        </v-list-item-icon>
                        <router-link tag="v-list-item-content" :to="{ name: 'admins' }">
                            <v-list-item-title >Admins</v-list-item-title>
                        </router-link>
                    </v-list-item>
                </v-list>

                <template v-slot:append>
                    <div class="pa-2">
                        <v-btn @click="logout" block color="success">
                            Logout
                        </v-btn>
                    </div>
                </template>
            </v-navigation-drawer>
            <div class="class-content">
                <!-- <main-header></main-header> -->
                <router-view class="class-main-content"></router-view>
            </div>
        </div>
        <router-view v-else></router-view>
    </v-app>
</template>
<script>
import MainHeader from './header.vue'
import Navbar from './navbar'
export default {
    components:{
        MainHeader,
        Navbar,
    },
    data(){
        return{
            appointments: [
                { title: 'For approval', icon: 'mdi-view-dashboard', name:'waiting' },
                { title: 'Approved', icon: 'mdi-account-box', name:'approved' },
            ],
            courses: [
                { title: 'Ongoing', icon: 'mdi-view-dashboard', name:'ongoing' },
                { title: 'Incoming', icon: 'mdi-account-box', name:'incoming' },
                { title: 'Removed', icon: 'mdi-account-box', name:'removed' },
            ],
            isSuperAdmin:false,
            isAuth:false
        }
    },
    methods:{
        logout(){
            this.$router.push({name:'login'})
            return
            axios.get(`/admin/api/logout`).then(({data})=>{
                this.isAuth = false
                this.$router.push({name:'login'})
            })
        },
        getAuthuser(){
            axios.get(`/admin/api/checkuser`).then(({data})=>{
                this.isAuth = data
            })
      }
    },
    created(){
        console.log(this.$route,"skdjskdj")
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
        // $route (to, from){
        //    this.getAuthuser()
        // }
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