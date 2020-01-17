//自己手动创建这个文件


const path = require('path');
//最好在目录下执行npm init生成package.json

//VueLoaderPlugin插件问题
const VueLoaderPlugin = require('vue-loader/lib/plugin');
//横幅插件webpack自带的
const webpack = require('webpack');
//html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
//uglifyjs-webpack-plugin 丑化js
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');



//配置文件以commonJS方式
module.exports = {
    entry:'./src/main.js',
    output:{

        //这个路径是绝对路径
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        //以后只要涉及url的东西都会在前面拼接该目录
        //自动生成index.html就不需要这个了
        //publicPath:'dist/'
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        },
        //extensions:['.js','.css','.vue']
    }
    ,
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

                //url-loader
                //npm install --save-dev url-loader


                //file-loader
                //npm install --save-dev file-loader

                //babel-loader
                //npm install --save-dev babel-loader@7 babel-core babel-preset-es2015

                //vue（这里运行时也需要所以不使用--save-dev）
                //npm install --save vue
                //runtime-only：代码中不可以有任何的template
                //runtime-compiler：代码中可以有template
                //需要在webpack.config.js配置resolve指定使用runtime-compiler

                //vue-loader识别.vue文件
                //npm install vue-loader vue-template-compiler --save-dev
                //以上安装成功之后运行npm run build 会报错：TypeError: Cannot read property 'vue' of undefined
                //原因是webpack版本与vue-loader版本不兼容
                //解决方案：npm install vue-loader@latest --save-dev
                //之后会说缺少插件，这需要在webpack.config.js中配置

                //html-webpack-plugin自动生成index.html文件
                //npm install html-webpack-plugin --save-dev

                //uglifyjs-webpack-plugin       丑化js/压缩
                //npm install uglifyjs-webpack-plugin@1.1.1 --save-dev

                //搭建本地服务器
                //npm install webpack-dev-server@2.9.1 --save-dev

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
            },
            {
                test: /\.vue$/,
                //注意vue-loader从14.x之后需要安装以一个插件
                //如果不想安装插件可以使用13.0.0版本的(修改package.json文件"vue-loader": "^13.0.0"然后npm install)
                use: ['vue-loader']
            }
        ]
    },
    //VueLoaderPlugin插件问题
    plugins:[
        //make sure to include the plugin for the magic
        new VueLoaderPlugin(),
        new webpack.BannerPlugin('最终版权归yaok所以'),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new UglifyjsWebpackPlugin()
    ],
    //配置本地服务器
    devServer:{
        contentBase:'./dist',//服务的文件目录
        inline:true,//是否实时监听
        //端口：port
        //historyApiFallback:在SPA页面中，依赖HTML5的history模式
        //通过运行./node_modules/.bin/webpack-dev-server或者配置scripts
    }
};