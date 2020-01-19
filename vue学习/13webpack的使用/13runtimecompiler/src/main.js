// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

/*eslintrc语法检测特别讨厌，建议不要开
开了可以关：config/index.js useEslint改为false即可
function sum (a, b) {
  return a + b
}

console.log(sum(1, 2))*/

//template -> ast -> render -> vdom ->ui


//runtime-compiler转runtime-only
new Vue({
  el: '#app',
  //components: { App },
  //template: '<App/>'
  render:function(createElement){
    //1、普通用法：createElement(标签,{标签的属性},['内容'])
    return createElement('h2',{class:'box'},['hello world']);

    //2、传入组件对象：createElement(组件对象)
    return createElement(App)
  }
})
