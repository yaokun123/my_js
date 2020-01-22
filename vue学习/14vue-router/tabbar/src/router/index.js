import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//const Laze = () => import('@/components/Laze')

//注意：这里的@是一个别名，在webpack.base.conf.js中28行配置的
//其他的别名都在这个对象里配置


//注意src中的路径前面要加上一个~
//直接import的化则不需要
import Home from '@/components/tabbar/Home'
import Profile from '@/components/tabbar/Profile'
import Category from '@/components/tabbar/Category'
import Shopcart from '@/components/tabbar/Shopcart'

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/home',
      component:Home
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/shopcart',
      component:Shopcart
    }
  ]
})
