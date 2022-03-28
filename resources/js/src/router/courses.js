export default[
    {
        path:'/courses',
        component: () => import(/* webpackChunkName: "course" */'../pages/courses/index.vue'),
        meta:{ requiresAuth:true },
        name:'courses'
    },
]