export default[
    {
        path:'/alumni',
        component: () => import(/* webpackChunkName: "alumni" */'../pages/alumni/index.vue'),
        meta:{ requiresAuth:true },
        name:'alumni'
    },
]