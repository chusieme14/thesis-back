export default[
    {
        path:'/courses',
        component: () => import(/* webpackChunkName: "course" */'../pages/courses/index.vue'),
        meta:{ requiresAuth:true },
        name:'courses'
    },
    {
        path: "/courses/:course_id/statistics",
        component: () => import(/* webpackChunkName: "department" */ '../pages/courses/view.vue'),
        children: [
            {
                path:'courses-civil-status',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/civil-status.vue'),
                name: 'courses-civil-status',
                meta:{ 
                    parent:'/courses',
                    requiresAuth:true,
                }
            },
            {
                path:'courses-gender',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/gender.vue'),
                name: 'courses-gender',
                meta:{ 
                    parent:'/courses',
                    requiresAuth:true,
                }
            },
            {
                path:'courses-residents',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/residence.vue'),
                name: 'courses-residents',
                meta:{ 
                    parent:'/courses',
                    requiresAuth:true,
                }
            },
            {
                path:'courses-employment',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/employment.vue'),
                name: 'courses-employment',
                meta:{ 
                    parent:'/courses',
                    requiresAuth:true,
                }
            },
            {
                path:'courses-employment-status',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/employment-status.vue'),
                name: 'courses-employment-status',
                meta:{ 
                    parent:'/courses',
                    requiresAuth:true,
                }
            },
            {
                path:'courses-place-work',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/work.vue'),
                name: 'courses-place-work',
                meta:{ 
                    parent:'/courses',
                    requiresAuth:true,
                }
            },
            {
                path:'courses-educational-attainment',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/attainment.vue'),
                name: 'courses-educational-attainment',
                meta:{ 
                    parent:'/courses',
                    requiresAuth:true,
                }
            },
            {
                path:'courses-gross-monthly-income',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/income.vue'),
                name: 'courses-gross-monthly-income',
                meta:{ 
                    parent:'/courses',
                    requiresAuth:true,
                }
            },
            {
                path:'courses-time-get-job',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/time-job.vue'),
                name: 'courses-time-get-job',
                meta:{ 
                    parent:'/courses',
                    requiresAuth:true,
                }
            },
            {
                path:'courses-relevance-curriculum',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/curriculum.vue'),
                name: 'courses-relevance-curriculum',
                meta:{ 
                    parent:'/courses',
                    requiresAuth:true,
                }
            },
            {
                path:'courses-promotion',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/promotion.vue'),
                name: 'courses-promotion',
                meta:{ 
                    parent:'/courses',
                    requiresAuth:true,
                }
            },
        ]
    },
]