<template>
    <div>
        <h2 class="title">{{message}}</h2>
        <button @click="clickBtn">按钮</button>
        <h2>{{name}}</h2>


        <!--使用子插件，以后的开发中可以将插件都放在.vue文件中-->
        <Cpn></Cpn>
    </div>

</template>

<script>
    //引入子插件
    import Cpn from './Cpn.vue'
    export default {
        name: "App",
        methods:{
            clickBtn(){
                console.log('按钮被点击');
            }
        },
        data(){
            return{
                message:'Hello webpack',
                name:'test'
            }
        },
        components:{
            Cpn
        }
    }
</script>

<style scoped>
    .title{
        color: green;
    }
</style>