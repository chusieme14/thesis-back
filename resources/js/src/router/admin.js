export default[
    {
        path:'/admin-user',
        component: () => import(/* webpackChunkName: "admin" */'../pages/admins/index.vue'),
        meta:{ requiresAuth:true },
        name:'admins'
    },
]