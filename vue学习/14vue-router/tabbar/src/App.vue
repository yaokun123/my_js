<template>
  <div id="app">
    <router-view></router-view>

    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="./assets/img/tabbar/home.png" alt="">
        <div slot="item-text">
          <!--<router-link to="/home">首页</router-link>-->
          首页
        </div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="./assets/img/tabbar/category.png" alt="">
        <div slot="item-text">
          <!--<router-link to="/category">分类</router-link>-->
          分类
        </div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.png" alt="">
        <div slot="item-text">
          <!--<router-link to="/shopcart">购物车</router-link>-->
          购物车
        </div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="./assets/img/tabbar/profile.png" alt="">
        <div slot="item-text">
          <!--<router-link to="/profile">我的</router-link>-->
          我的
        </div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from './components/tabbar/TabBar'
  import TabBarItem from './components/tabbar/TabBarItem'
export default {
  name: 'App',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  /*导入基础样式*/
  @import "assets/css/base.css";

</style>
