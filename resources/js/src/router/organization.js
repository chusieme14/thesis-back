export default[
    {
        path:'/organization-chart',
        component: () => import(/* webpackChunkName: "organization" */'../pages/organization/index.vue'),
        meta:{ requiresAuth:true },
        name:'organization-chart'
    },
]