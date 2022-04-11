<template>
    <content-view :menus="menus"></content-view>
</template>

<script>
export default {
    computed:{
        menus(){
            return [
                {
                    // text: this._lang('client.view.profile'),
                    text:'Profile',
                    route: "client-profile",
                    icon: "person",
                },
                {
                    // text: this._lang('client.view.statistics'),
                    text:'Subscription',
                    route: "client-subscription",
                    icon: "mdi-chart-bar",
                },
                {
                    // text: this._lang('client.view.subscriptions'),
                    text:'Documents',
                    route: "client-document",
                    icon: "mdi-file-document",
                },
                {
                    // text: this._lang('client.view.payments'),
                    text:'Bookings',
                    route: "client-booking",
                    icon: "mdi-bookmark-check-outline",
                },
                {
                    // text: this._lang('client.view.payments'),
                    text:'Credit',
                    route: "client-credit",
                    icon: "mdi-credit-card-outline",
                },
            ]
        }
    }
}
</script>