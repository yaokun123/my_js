import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'


//1、通过Vue.use(插件)，安装插件
Vue.use(Router)


//2、创建路由对象
//3、将router对象传入到Vue实例（导出）
export default new Router({
  //修改默认的激活样式
  //linkActiveClass:'active',


  //默认使用的是location.hash展示的不友好
  mode:'history',


  //配置路由和组件之间的映射关系
  routes: [
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }*/
    {
      path:'/',
      //路由重定向
      redirect:'/home'
    },
    {
      path:'/home',
      component: Home
    },
    {
      path:'/about',
      component: About
    }
  ]
})
