import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})


//runtime-only(1.性能更高 2、代码更少)
//render -> vdom -> ui


//.vue文件的template是由谁处理的呢？
//vue-template-compiler
