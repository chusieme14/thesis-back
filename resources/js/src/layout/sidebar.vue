<template>
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
</template>
<script>
// import Menuitems from './MenuItems'
export default {
    data(){
        return{
            drawer:false
        }
    },
    methods:{
        logout(){
            this.$emit('logout')
            // axios.get(`logout`).then(({data})=>{
            //     this.$router.push({name:'login'})
            // })
        },
    },
    computed:{
        getCurrentUrl() {
            let url = this.$route.fullPath
            let parts = url.split("/")
            console.log(parts[1],"dksdjksjlkdlllll")
            return parts[1]
        },
        getCurrentSubUrl(){
            let url = this.$route.fullPath
            let parts = url.split("/")
            return parts[2]
        },
        isSetting(){
            let url = this.$route.fullPath
            let parts = url.split("/")
            if(parts[1]=='setting') return true
            return false
        }

    }
}
</script>
<style lang="scss" scoped>
.active {
	color: #070707 !important;
    background-color: #3f8320;
}
</style>