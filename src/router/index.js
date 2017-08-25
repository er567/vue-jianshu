import Vue from 'vue'
import Router from 'vue-router'
import index from './index/index'
Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: [index, {
        path: '*',
        redirect: '/404',
        hidden: true
    }, {
        path: '/404',
        component: resolve => require(['@/components/common/404/404.vue'], resolve),
        hidden: true
    },{
    path: '/',
    redirect: '/index',
    hidden: true,
    }]
})

export
default router
