<template>
    <v-navigation-drawer
        class=" accent-4"
        width=350
        :mini-variant="drawer"
        color="white"
        permanent
    >
        <v-list>
            <v-img
                lazy-src="/sample/nwssuseal2.png"
                max-height="120"
                max-width="290"
                src="/sample/nwssuseal2.png"
            ></v-img>
            <v-list-item
                v-for="item in Menuitems"
                :key="item.name"
                :class="getCurrentUrl == item.route ? 'active' : ''"
                @click.stop="$route.name != item.name?$router.push({name: item.route}):''"
            >
                <v-list-item-icon v-if="drawer">
                    <v-tooltip right color="success">
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
                <v-tooltip top color="primary" v-if="getCurrentUrl != item.route">
                    <template v-slot:activator="{ on, attrs }">
                        <v-list-item-title v-bind="attrs" v-on="on">{{item.name.toUpperCase()}}</v-list-item-title>
                    </template>
                    <span>{{item.tooltip }}</span>
                </v-tooltip>
                <v-list-item-title v-else>{{item.name.toUpperCase()}}</v-list-item-title>
            </v-list-item>
        </v-list>

        <template v-slot:append>
            <div class="pa-2">
                <v-btn class="class-logout" @click="logout" block color="#006048">
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
        color: white !important;
        background-color:#006048;
    }
    .class-logout{
        color: white !important;
    }
</style>