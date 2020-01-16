//自己手动创建这个文件


const path = require('path');
//最好在目录下执行npm init生成package.json



//配置文件以commonJS方式
module.exports = {
    entry:'./src/main.js',
    output:{

        //这个路径是绝对路径
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    }
};