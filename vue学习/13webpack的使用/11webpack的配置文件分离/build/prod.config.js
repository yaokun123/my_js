
//uglifyjs-webpack-plugin 丑化js
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

//webpack-merge
const WebpackMerge = require('webpack-merge');

const baseConfig = require('./base.config');

module.exports = WebpackMerge(baseConfig,{

    plugins:[
        new UglifyjsWebpackPlugin()
    ]

});

//使用时候需要配置package.json 指定--config
//由于路径变了，所以还要修改base.config.js中的output.path
//path:path.resolve(__dirname,'../dist')