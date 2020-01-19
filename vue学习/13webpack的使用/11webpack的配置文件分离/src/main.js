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


//将组件抽取出来（app.js的方式）
//import App from './vue/app'


//将组件抽取出来（从vue文件中引入，需要安装vue-loader）
import App from './vue/App.vue'
//如果这里不想写.vue那么需要配置webpack.config.js文件extensions:['.js','.css','.vue']


const app = new Vue({
    el:'#app',
    components:{
        App
    },
    template: '<App/>'
});


//配置文件分离之后需要配置package.json指定配置文件
//webpack --config ./build/prod.config.js

//使用时候需要配置package.json 指定--config
//由于路径变了，所以还要修改base.config.js中的output.path
//path:path.resolve(__dirname,'../dist')