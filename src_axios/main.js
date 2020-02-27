/*
  入口
 */
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
// import './base.css'
/* eslint-disable no-new */

// 创建事件总线对象，并保存到Vue的原型对象
Vue.prototype.$bus = new Vue()
Vue.prototype.$axios = axios
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />'
})
