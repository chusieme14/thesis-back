export default[
    {
        path:'/alumni',
        component: () => import(/* webpackChunkName: "alumni" */'../pages/alumni/index.vue'),
        meta:{ requiresAuth:true },
        name:'alumni'
    },
    {
        path:'/alumni/create',
        component: () => import(/* webpackChunkName: "alumni" */'../pages/alumni/form.vue'),
        meta:{ requiresAuth:true },
        name:'alumni-create'
    },
]