export default[
    {
        path:'/departments',
        component: () => import(/* webpackChunkName: "department" */'../pages/department/index.vue'),
        meta:{ requiresAuth:true },
        name:'departments'
    },
]