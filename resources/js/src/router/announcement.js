export default[
    {
        path:'/announcement',
        component: () => import(/* webpackChunkName: "announcement" */'../pages/announcement/index.vue'),
        meta:{ requiresAuth:true },
        name:'announcement'
    },
]