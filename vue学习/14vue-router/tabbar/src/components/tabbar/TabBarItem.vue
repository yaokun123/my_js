<template>
  <div class="tab-bar-item" @click="tabBarClick">
    <slot name="item-icon">

    </slot>
    <slot name="item-text">

    </slot>
  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
      props:{
          path:String
      },
      methods:{
        tabBarClick(){
          //防止重复跳转相同地址报错
          if(this.$route.path == this.path){
            return false;
          }
          this.$router.push(this.path)
        }
      }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    margin-top: 3px;
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
</style>
