<template>
    <div>
      <h2>我是首页</h2>

      <!--这里是路由嵌套-->
      <router-link to="/home/news" tag="button">新闻</router-link>
      <router-link to="/home/message" tag="button">消息</router-link>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Home",

        //声明周期函数
        /*created() {
            console.log('home created');
        },
        destroyed() {
            console.log('home destroyed');
        },*/



        //这两个函数，只有该组件被保持了状态使用了keep-alive，才是有效的
        /*activated() {
        },
        deactivated() {
        },*/



        //保留状态结合这个函数使用
        //beforeRouteLeave(){}
    }
</script>

<style scoped>

</style>
