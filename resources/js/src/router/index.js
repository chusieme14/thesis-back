import Axios from 'axios'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    scrollBehavior (){
        return {x: 0, y: 0}
    },

    routes: [
        {
            path:'/dashboard',
            component: () => import('../pages/dashboard/index.vue'),
            // meta:{ requiresAuth:true },
            name:'dashboard'
        },
        {
            path:'/alumni',
            component: () => import('../pages/alumni/index.vue'),
            // meta:{ requiresAuth:true },
            name:'alumni'
        },
        {
            path:'/news',
            component: () => import('../pages/news/index.vue'),
            // meta:{ requiresAuth:true },
            name:'news'
        },
        {
            path:'/events',
            component: () => import('../pages/events/index.vue'),
            // meta:{ requiresAuth:true },
            name:'events'
        },
        {
            path:'/organization-chart',
            component: () => import('../pages/organization/index.vue'),
            // meta:{ requiresAuth:true },
            name:'organization-chart'
        },
        {
            path:'/roles',
            component: () => import('../pages/roles/index.vue'),
            // meta:{ requiresAuth:true },
            name:'roles'
        },
        {
            path:'/admin-user',
            component: () => import('../pages/admins/index.vue'),
            // meta:{ requiresAuth:true },
            name:'admins'
        },
        {
            path:'/',
            component: () => import('@back/layout/login.vue'),
            name:'login'
        }
    ]
})
// router.beforeEach((to, from, next) => {
//     Axios.get(`/admin/api/checkuser`).then(({data})=>{
//         if (to.matched.some(record => record.meta.requiresAuth)) {
//           // this route requires auth, check if logged in
//           // if not, redirect to login page.
//           if (!data) {
//             next({
//               name: 'login',
//               query: { redirect: to.fullPath }
//             })
//           } else {
//             next()
//           }
//         } else {
//           next() // make sure to always call next()!
//         }
//     })
//   })

export default router