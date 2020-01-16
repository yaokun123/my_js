//commonJS的导入模块
const {add,mul} = require('./js/mathUtils.js');

console.log(add(20, 30));
console.log(mul(20, 30));



//ES6导入模块(这里可以不加js后缀，webpack会自动找到)
import {name,age,height} from "./js/info";

console.log('==========');

console.log(name);
console.log(age);
console.log(height);


//依赖css文件
require('./css/normal.css');


//依赖less文件
require('./css/special.less');


//使用vue进行开发
import Vue from 'vue'
const app = new Vue({
    el:'#app',
    data:{
        message:'Hello webpack',
        name:'test'
    },
    methods:{
        clickBtn(){
            console.log('按钮被点击');
        }
    },
    //这里template定义的内容会替换el监控的容器
    template:`
    <div>
        <h2>{{message}}</h2>
        <button @click="clickBtn">按钮</button>
        <h2>{{name}}</h2>
    </div>
    `
});