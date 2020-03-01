/*
  入口
 */
import Vue from 'vue'
import router from './router/index'
import App from './App.vue'

// import './base.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />',
  router
})
