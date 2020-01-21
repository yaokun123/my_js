<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/home.png" alt="">
        <div slot="item-text">
          <router-link to="/home">首页</router-link>
        </div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/category.png" alt="">
        <div slot="item-text">
          <router-link to="/category">分类</router-link>
        </div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.png" alt="">
        <div slot="item-text">
          <router-link to="/shopcart">购物车</router-link>
        </div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/profile.png" alt="">
        <div slot="item-text">
          <router-link to="/profile">我的</router-link>
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
