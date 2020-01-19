import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


//这里的mount其实与之前的el一样，el就是调用mount

//如何修改vue-cli3下的配置文件
//一、通过vue ui命令启动图形化界面，在图形化界面中修改

//二、node_modules > @vue > cli-service > webpack.config.js
//                                      >lib > Service.js
//                                      >lib > config

//三、在项目目录下创建vue.config.js