/*
  入口
 */
import Vue from 'vue'
import App from './App.vue'
import './base.css'
/* eslint-disable no-new */

// 创建一个vm对象作为全局事件总线对象，并挂载到Vue原型对象上
Vue.prototype.$globalEventBus = new Vue()

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />'
})
