var name = '小明';
var age = 18;
var flag = true;


function sum(a,b) {
    return a + b;
}

if(flag){
    console.log(sum(20, 30));
}


//导出方式1
export {
    flag
}

//导出方式2：
export var num1 = 1000;


//导出函数/类
export function num(a,b) {
    return a * b;
}

export class Person {

}

//export default(只能有一个)
//某些情况下，一个模块中包含某个功能，我们并不希望给这个功能命名，而是让导入者自己命名
const ttt = '111';
export default ttt
