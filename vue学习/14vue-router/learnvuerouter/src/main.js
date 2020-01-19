import Vue from 'vue'
import App from './App'

//如果写的是目录，会自动找目录下的index.js文件
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
