<template>
    <v-navigation-drawer
        class=" accent-4"
        dark
        width=300
        :mini-variant="drawer"
        color="success"
        permanent
    >
        <v-list>
            <v-img
                lazy-src="/sample/sample_logo.png"
                max-height="100"
                max-width="200"
                src="/sample/sample_logo.png"
            ></v-img>
            <v-list-item
                v-for="item in Menuitems"
                :key="item.name"
                :class="getCurrentUrl == item.route ? 'active' : ''"
                @click.stop="$route.name != item.name?$router.push({name: item.route}):''"
            >
                <v-list-item-icon v-if="drawer">
                    <v-tooltip right color="#3f8320">
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon
                                v-bind="attrs"
                                v-on="on"
                            >{{item.icon}}</v-icon>
                        </template>
                        <span>{{item.name.toUpperCase() }}</span>
                    </v-tooltip>
                </v-list-item-icon>
                <v-list-item-icon v-else>
                    <v-icon>{{item.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-title >{{item.name.toUpperCase()}}</v-list-item-title>
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
import Menuitems from './MenuItems'
export default {
    props:{
        drawer:{}
    },
    data(){
        return{
            Menuitems: Menuitems,
        }
    },
    methods:{
        logout(){
            this.$emit('logout')
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