var url = require('url');
var template = require('./template.js');


module.exports = function(request,response){
    var url_address = request.url;
    var url_object = url.parse(url_address);
    var path_name = url_object.pathname;

    if(path_name==='/index'){
        var arg = {name: 'test'};
        template(response,path_name,arg);
        return;
    }

    if(path_name.startsWith('/css') || path_name.startsWith('/js') || path_name.startsWith('/imgs')){
        template(response,path_name);
        return;
    }
};