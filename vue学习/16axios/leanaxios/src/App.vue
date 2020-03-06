<template>
  <div id="app">
  </div>
</template>

<script>
  //1、安装axios：npm install axios --save

  //2、导入
  import axios from 'axios'

  //3、使用
  axios({
    url:'https://shuidi.cn',
    //如果不定义method默认为get

    //专门针对get请求的参数拼接
    params:{
      type:1
    },

    //
  }).then(res=>{//支持promise
    console.log(res);
  });


  //axios发送并发请求
  axios.all([axios({}),axios({})]).then(results=>{
    console.log(results);
    console.log(results[0]);
    console.log(results[1]);

    //then中直接传axios.spread((res1,res2)=>{
    // console.log(res1);
    // console.log(res2);
    // })
  });


  //axios全局配置
  axios.defaults.baseURL = '';
  axios.defaults.timeout = 5000;//ms
  axios.defaults.headers.post['content-Type'] = 'application/x-www-form-urlencoded';


  //创建对应的axios实例
  const instance1 = axios.create({
    baseURL:'',//每个实例有自己的配置，不用全局的
    timeout:6000
  });


  instance1({//请求
    url:'/home/one'
  }).then(res=>{
    console.log(res);
  });
  instance1({//请求
    url:'/home/two'
  }).then(res=>{
    console.log(res);
  });


  //模块的封装network/request.js
  import {request} from "./network/request";
  request({},res=>{},err=>{});

  import {request2} from "./network/request";
  request2({}).then(res=>{
    console.log(res);
  }).catch(err=>{
    console.log(err);
  });



  //拦截器的使用
  //可以拦截全局的，也可以拦截某个实例
  instance1.interceptors.request.use(config=>{return config;},err=>{});
  instance1.interceptors.response.use(res=>{return res.data},err=>{})

  export default {
  name: 'App'
}
</script>

<style>
</style>
