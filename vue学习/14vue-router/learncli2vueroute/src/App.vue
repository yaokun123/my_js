<template>
  <div id="app">
    <!--router-link最终会被渲染成a标签
    router-link to属性，用于指定跳转的路径
    router-link tag属性，可以指定router-link这之后渲染什么组件
    router-link replace属性，指定以history.replaceState模式，这样就不会有返回
    router-link active-class属性，当router-link对应的路由匹配成功时，会自动给当前元素设置一个router-link-active的class，这只active-class可以修改默认的名称（也可以在路由配置中修改）
-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>


    <!--通过代码跳转路由-->
    <button @click="btnClick">按钮</button>


    <!--动态路由-->
    <router-link :to="'/user/' + userId" tag="button">用户</router-link>

    <!--参数传递-->
    <!--<router-link to="/profile" tag="button">档案</router-link>-->
    <router-link :to="{path:'/profile',query:{name:'test',age:18}}" tag="button">档案</router-link>
    <router-view></router-view>

    <!--keep-alive的使用-->
    <!--两个重要的属性include和exclude-->
    <!--<keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>-->
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return {
        userId:'zhangsan'
      }
    },
    methods:{
      btnClick(){
        //通过代码的方式修改路由
        this.$router.push('/btn')

        //或

        //this.$router.replace('/home')

        //通过query参数
        //this.$router.replace({path:'/home',query:{}})
      }
    }
  }
</script>

<style>

</style>
