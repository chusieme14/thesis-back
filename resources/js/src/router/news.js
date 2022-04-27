export default[
    {
        path:'/post',
        component: () => import(/* webpackChunkName: "news" */'../pages/news/index.vue'),
        meta:{ requiresAuth:true },
        name:'post'
    },
]