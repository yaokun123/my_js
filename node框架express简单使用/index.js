//1、加载express模块
var express = require('express');

//2、创建一个app 对象（类似于创建一个server对象）
var app = express();

//通过中间件监听一个指定的路由的请求
app.get('/index',function(req,res){
    res.end('hello world');
});

//3、启动服务
app.listen(9090,function(){
    console.log('http://localhost:9090')
});