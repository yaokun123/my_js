//开发时配置

//webpack-merge
const WebpackMerge = require('webpack-merge');

const baseConfig = require('./base.config');




//配置文件以commonJS方式
module.exports = WebpackMerge(baseConfig,{
    //配置本地服务器
    devServer:{
        contentBase:'./dist',//服务的文件目录
        inline:true,//是否实时监听
        //端口：port
        //historyApiFallback:在SPA页面中，依赖HTML5的history模式
        //通过运行./node_modules/.bin/webpack-dev-server或者配置scripts
    }
});