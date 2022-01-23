export default[
    {
        path:'/dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '../pages/dashboard/index.vue'),
        meta:{ requiresAuth:true },
        name:'dashboard'
    }
]