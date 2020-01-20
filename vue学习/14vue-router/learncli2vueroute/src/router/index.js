import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'
import User from '@/components/User'

//懒加载方式
const Laze = () => import('@/components/Laze')
const HomeNews = () => import('@/components/HomeNews')
const HomeMessage = () => import('@/components/HomeMessage')
const Profile = () => import('@/components/Profile')



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
      component: Home,
      meta:{//全局导航守卫
        title:'首页'
      },
      //路由嵌套
      children:[
        {
          path:'',
          redirect:'news'
        },
        {
          //子路由的path会以父路由的path开头
          path:'news',
          component:HomeNews
        },
        {
          path:'message',
          component:HomeMessage
        }
      ]
    },
    {
      path:'/about',
      component: About,
      meta: {
        title:'关于'
      }
    },
    {
      path:'/btn',
      component:()=>import('@/components/BtnClick')
    },

    //动态路由
    {
      path:'/user/:userId',
      component: User
    },

    //懒加载
    {
      path:'/laze',
      component: Laze
    },
    {
      path:'/profile',
      component:Profile
    }
  ]
}).beforeEach(function (to,from,next) {//全局导航守卫(前置钩子)
  //从from跳转到to
  document.title = to.matched[0].meta.title


  next()//必须要手动调
})

//后置钩子
//afterEach((to,from)=>{})

//除了全局守卫外还有  路由独享的守卫 和 组件内的守卫
