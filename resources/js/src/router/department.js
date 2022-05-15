export default[
    {
        path:'/departments',
        component: () => import(/* webpackChunkName: "department" */'../pages/department/index.vue'),
        meta:{ requiresAuth:true },
        name:'departments'
    },
    {
        path: "/departments/:department_id/statistics",
        component: () => import(/* webpackChunkName: "department" */ '../pages/department/view.vue'),
        children: [
            {
                path:'dep-civil-status',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/civil-status.vue'),
                name: 'dep-civil-status',
                meta:{ 
                    parent:'/department',
                    requiresAuth:true,
                }
            },
            {
                path:'dep-gender',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/gender.vue'),
                name: 'dep-gender',
                meta:{ 
                    parent:'/department',
                    requiresAuth:true,
                }
            },
            {
                path:'dep-residents',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/residence.vue'),
                name: 'dep-residents',
                meta:{ 
                    parent:'/department',
                    requiresAuth:true,
                }
            },
            {
                path:'dep-employment',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/employment.vue'),
                name: 'dep-employment',
                meta:{ 
                    parent:'/department',
                    requiresAuth:true,
                }
            },
            {
                path:'dep-employment-status',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/employment-status.vue'),
                name: 'dep-employment-status',
                meta:{ 
                    parent:'/department',
                    requiresAuth:true,
                }
            },
            {
                path:'dep-place-work',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/work.vue'),
                name: 'dep-place-work',
                meta:{ 
                    parent:'/department',
                    requiresAuth:true,
                }
            },
            {
                path:'dep-educational-attainment',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/attainment.vue'),
                name: 'dep-educational-attainment',
                meta:{ 
                    parent:'/department',
                    requiresAuth:true,
                }
            },
            {
                path:'dep-gross-monthly-income',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/income.vue'),
                name: 'dep-gross-monthly-income',
                meta:{ 
                    parent:'/department',
                    requiresAuth:true,
                }
            },
            {
                path:'dep-time-get-job',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/time-job.vue'),
                name: 'dep-time-get-job',
                meta:{ 
                    parent:'/department',
                    requiresAuth:true,
                }
            },
            {
                path:'dep-relevance-curriculum',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/curriculum.vue'),
                name: 'dep-relevance-curriculum',
                meta:{ 
                    parent:'/department',
                    requiresAuth:true,
                }
            },
            {
                path:'dep-promotion',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/promotion.vue'),
                name: 'dep-promotion',
                meta:{ 
                    parent:'/department',
                    requiresAuth:true,
                }
            },
        ]
    },
]