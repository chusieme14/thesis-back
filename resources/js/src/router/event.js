export default[
    {
        path:'/events',
        component: () => import(/* webpackChunkName: "event" */'../pages/events/index.vue'),
        meta:{ requiresAuth:true },
        name:'events'
    },
]