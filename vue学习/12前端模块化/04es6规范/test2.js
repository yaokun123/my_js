//  在ES6中，我们可以使用 import 关键字引入模块，通过 exprot 关键字导出模块，功能较之于前几个方案更为强大，也是我们所推崇的
//  但是由于ES6目前无法在浏览器中执行，所以，我们只能通过babel将不被支持的import编译为当前受到广泛支持的 require


//  es6在导出的时候有一个默认导出，`export default`,使用它导出后，在import的时候，不需要加上{}
//  模块名字可以随意起。该名字实际上就是个对象，包含导出模块里面的函数或者变量
//  但是一个模块只能有一个export default

import {basicNum,add} from './test1'

console.log(add(99,basicNum));