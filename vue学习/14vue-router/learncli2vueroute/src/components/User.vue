<template>
  <div>
    <h2>我是用户{{userid}}</h2>
  </div>
</template>

<script>
    export default {
        name: "User",
      computed:{
        userid(){
          //$route是谁处于活跃状态就拿到谁（其实就是router/index.js中new Router对象）
          //$routes是拿到所有
          return this.$route.params.userId
        }
      }
    }
</script>

<style scoped>

</style>
