//导入1
import {flag} from "./aaa.js";


//使用模块化之后就不能直接使用别的模块中的变量，需要导入之后再使用
if(flag){
    console.log('小明');
}

//导入2
import * as aaaaaa from './aaa.js'