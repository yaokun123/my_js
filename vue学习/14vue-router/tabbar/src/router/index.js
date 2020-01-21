import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//const Laze = () => import('@/components/Laze')
import Home from '@/components/tabbar/Home'
import Profile from '@/components/tabbar/Profile'
import Category from '@/components/tabbar/Category'
import Shopcart from '@/components/tabbar/Shopcart'

export default new Router({
  routes: [
    {
      path:'/home',
      components:Home
    },
    {
      path:'/profile',
      components:Profile
    },
    {
      path:'/category',
      components:Category
    },
    {
      path:'/shopcart',
      components:Shopcart
    }
  ]
})
