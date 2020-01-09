var _ = require('underscore');
var path = require('path');
var fs = require('fs');
var mime = require('mime');


module.exports = function(response,filename,arg=''){
    var public_path = './public';
    var html_path = path.join(public_path,'html');

    var file_true = '';
    if(filename.startsWith('/css') || filename.startsWith('/js') || filename.startsWith('/imgs')){
        file_true = path.join(public_path,filename);
    }else{
        file_true = path.join(html_path,filename+'.html');
    }

    fs.readFile(file_true,function(err,data){
        if(err){
            throw err;
        }
        var text = '';
        if(arg){
            //模版替换
            data = data.toString();
            var fu = _.template(data);
            text = fu(arg);
        }else{
            text = data;
        }

        //解决乱码的思路：服务器通过设置 http 响应报文头，告诉浏览器使用相应的编码来解析网页
        response.setHeader('Content-Type',mime.getType(file_true));

        response.write(text);//此时中文会有乱码问题
        response.end();
    });
};