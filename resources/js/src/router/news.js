export default[
    {
        path:'/news',
        component: () => import(/* webpackChunkName: "news" */'../pages/news/index.vue'),
        meta:{ requiresAuth:true },
        name:'news'
    },
]