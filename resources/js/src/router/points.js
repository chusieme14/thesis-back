export default[
    {
        path:'/points',
        component: () => import(/* webpackChunkName: "points" */'../pages/points/index.vue'),
        meta:{ requiresAuth:true },
        name:'points'
    },
]