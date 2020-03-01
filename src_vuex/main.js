/*
  入口
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
// import './base.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />',
  store // 配置vuex的store对象
})
