/*
    路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../pages/about.vue'
import Home from '../pages/home.vue'

Vue.use(VueRouter)

export default new VueRouter({
    // 应用所有的路由
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/',
            redirect: '/about'
        }
    ]
})
