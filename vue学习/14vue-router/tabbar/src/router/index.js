import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//const Laze = () => import('@/components/Laze')
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
