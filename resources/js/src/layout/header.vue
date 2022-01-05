<template>
    <div class="main-container">
        <div></div>
        <div class="avatar-container">
            <span>{{user.fullName}}</span>
            <v-menu
                bottom
                min-width="200px"
                rounded
                offset-y
            >
                <template v-slot:activator="{ on }">
                <v-btn
                    icon
                    x-large
                    v-on="on"
                >
                    <v-avatar
                    color="brown"
                    size="48"
                    >
                    <span class="white--text text-h5">{{ user.initials }}</span>
                    </v-avatar>
                </v-btn>
                </template>
                <v-card>
                <v-list-item-content class="justify-center">
                    <div class="mx-auto text-center">
                    <v-avatar
                        color="brown"
                    >
                        <span class="white--text text-h5">{{ user.initials }}</span>
                    </v-avatar>
                    <h3>{{ user.fullName }}</h3>
                    <p class="text-caption mt-1">
                        {{ user.email }}
                    </p>
                    <v-divider class="my-3"></v-divider>
                    <v-btn
                        depressed
                        rounded
                        text
                    >
                        Edit Account
                    </v-btn>
                    <v-divider class="my-3"></v-divider>
                    <v-btn
                        depressed
                        rounded
                        text
                    >
                        Disconnect
                    </v-btn>
                    </div>
                </v-list-item-content>
                </v-card>
            </v-menu>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            user: {
                initials: 'JD',
                fullName: 'John Doe',
                email: 'john.doe@doe.com',
            },
        }
    }
}
</script>
<style lang="scss" scoped>
    .main-container{
        display: flex;
        justify-content: space-between;
        background-color: #4caf50 ;
        height: 70px !important;
    }
    .avatar-container{
        margin: 10px;
        span{
            font-weight: 600;
        }
    }
</style>