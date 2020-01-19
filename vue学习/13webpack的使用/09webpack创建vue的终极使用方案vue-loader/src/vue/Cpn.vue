<template>
    <div>
        <h2 class="notice">我是{{message}}</h2>
    </div>
</template>

<script>
    export default {
        name: "Cpn",
        data(){
            return {
                message:'子插件'
            };
        }
    }
</script>

<style scoped>
    .notice{
        color: red;
    }
</style>