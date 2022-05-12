export default[
    {
        path:'/graduates',
        component: () => import(/* webpackChunkName: "alumni" */'../pages/alumni/index.vue'),
        meta:{ requiresAuth:true },
        name:'graduates'
    },
    {
        path:'/graduates/create',
        component: () => import(/* webpackChunkName: "alumni" */'../pages/alumni/form.vue'),
        meta:{ requiresAuth:true },
        name:'graduates-create'
    },
    {
        path:'/graduates/:graduates_id/profile',
        component: () => import(/* webpackChunkName: "alumni" */ '../pages/alumni/edit.vue'),
        meta:{ requiresAuth:true },
        name: 'profile'
    },
    // {
    //     path: "/graduates/:graduates_id",
    //     component: () => import(/* webpackChunkName: "alumni" */ '../pages/alumni/view.vue'),
    //     children: [
    //         {
    //             path:'profile',
    //             component: () => import(/* webpackChunkName: "alumni" */ '../pages/alumni/edit.vue'),
    //             name: 'profile',
    //             meta:{ 
    //                 parent:'/graduates',
    //                 requiresAuth:true,
    //             }
    //         },
    //         {
    //             path:'graduate-profile',
    //             component: () => import(/* webpackChunkName: "alumni" */ '../pages/points/index.vue'),
    //             name: 'graduate-profile',
    //             meta:{ 
    //                 parent:'/graduates',
    //                 requiresAuth:true,
    //             }
    //         },
    //     ]
    // },
]