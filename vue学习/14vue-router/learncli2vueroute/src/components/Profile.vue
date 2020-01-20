<template>
    <div>
        <!--路由的参数传递-->


        <h2>我是Profile组件</h2>
        <h3>{{$router.query}}</h3>
    </div>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped>

</style>