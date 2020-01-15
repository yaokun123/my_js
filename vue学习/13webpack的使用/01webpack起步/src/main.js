//commonJS的导入模块
const {add,mul} = require('./mathUtils.js');

console.log(add(20, 30));
console.log(mul(20, 30));



//ES6导入模块(这里可以不加js后缀，webpack会自动找到)
import {name,age,height} from "./info";

console.log('==========');

console.log(name);
console.log(age);
console.log(height);