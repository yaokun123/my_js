//自己手动创建这个文件


const path = require('path');
//最好在目录下执行npm init生成package.json



//配置文件以commonJS方式
module.exports = {
    entry:'./src/main.js',
    output:{

        //这个路径是绝对路径
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        //以后只要涉及url的东西都会在前面拼接该目录
        publicPath:'dist/'
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

                //babel-loader
                //npm install --save-dev babel-loader@7 babel-core babel-preset-es2015

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
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //当加载的图片，小于limit时会将图片编译成base64字符串形式
                            //当加载的图片，大于limit时需要使用file-loader模块进行加载
                            //limit: 8192,
                            limit: 3000,

                            //对图片按照一定格式命名
                            name:'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    }
};