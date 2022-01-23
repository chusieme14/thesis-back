export default[
    {
        path:'/roles',
        component: () => import(/* webpackChunkName: "roles" */'../pages/roles/index.vue'),
        meta:{ requiresAuth:true },
        name:'roles'
    },
]