import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            redirect:"customer"
        },
        {
            path: '/customer',
            name: 'customer',
            component: () => import('./views/customer.vue')
        },
        {
            path: '/receivables',
            name: 'receivables',
            component: () => import('./views/receivables.vue')
        },
        {
            path: '/common',
            name: 'common',
            component: () => import('./views/common.vue')
        },
        {
            path: '/success',
            name: 'success',
            component: () => import('./views/success.vue')
        },
        {
            path: '/order',
            name: 'order',
            component: () => import('./views/order.vue')
        },
        {
            path: '/system',
            name: 'system',
            component: () => import('./views/system.vue')
        },
        {
            path: '/balance',
            name: 'balance',
            component: () => import('./views/balance.vue')
        },
        {
            path: '/account',
            name: 'account',
            component: () => import('./views/account.vue')
        },
        {
            path: '/message',
            name: 'message',
            component: () => import('./views/message.vue')
        }
    ]
})
