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
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                //css-loader只负责将css文件进行加载
                //npm install css-loader --save-dev

                //style-loader负责将css样式添加到dom中
                //npm install style-loader --save-dev

                //less-loader加载和转译 LESS 文件
                //npm install --save-dev less-loader less

                //webpack使用多个loader时候是从右向左读的
                use:['style-loader','css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ]
    }
};