import Axios from 'axios'
import Vue from 'vue'
import Router from 'vue-router'
import dashboard from './dashboard'
import graduates from './graduates'
import news from './news'
// import event from './event'
import organization from './organization'
import role from './role'
import admin from './admin'
import courses from './courses'
import departments from './department'
import announcement from './announcement'
import points from './points'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '',
    scrollBehavior (){
        return {x: 0, y: 0}
    },

    routes: [
        ...dashboard,
        ...graduates,
        ...news,
        ...announcement,
        ...organization,
        ...role,
        ...admin,
        ...courses,
        ...departments,
        ...points,
        {
            path:'/login',
            component: () => import(/* webpackChunkName: "login" */'@/layout/login.vue'),
            name:'login'
        },
        {
            path:'*',
            component: () => import(/* webpackChunkName: "404" */'@/layout/404.vue'),
            name:'not-found'
        }
    ]
})
router.beforeEach((to, from, next) => {
    Axios.get(`/admin/checkuser`).then(({data})=>{
        if(to.name=='login' && data){
            next({
                name: 'not-found',
                query: { redirect: to.fullPath }
              })
            return 
        } 
        if (to.matched.some(record => record.meta.requiresAuth)) {
            if (!data) {
                next({
                    name: 'login',
                    query: { redirect: to.fullPath }
                })
            } else {
            next()
            }
        } else {
            next()
        }
    })
  })

export default router