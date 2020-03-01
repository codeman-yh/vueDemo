/*
    路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

export default new VueRouter({
    // 应用所有的路由
    routes,
    mode: 'history' // 去掉了路由路径的#
})
