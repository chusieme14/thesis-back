export default[
    {
        path:'/graduates',
        component: () => import(/* webpackChunkName: "alumni" */'../pages/alumni/index.vue'),
        meta:{ requiresAuth:true },
        name:'graduates'
    },
    {
        path:'/graduates/create',
        component: () => import(/* webpackChunkName: "alumni" */'../pages/alumni/form.vue'),
        meta:{ requiresAuth:true },
        name:'graduates-create'
    },
]