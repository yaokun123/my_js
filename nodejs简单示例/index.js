var http = require('http');
var route = require('./route.js');


// Create an HTTP tunneling proxy
var server = http.createServer(function(request, response){
    /*response.writeHead(200,{'Content-Type': 'text/plain'});
    response.end('okay');*/
});

server.on('connect',function(req,clientSocket,head){
    //connect to an origin server


    /*var srvUrl = url.parse(`http://${req.url}`);
    var srvSocket = net.connect(srvUrl.port, srvUrl.hostname, () => {
        cltSocket.write('HTTP/1.1 200 Connection Established\r\n' +
            'Proxy-agent: Node.js-Proxy\r\n' +
            '\r\n');
        srvSocket.write(head);
        srvSocket.pipe(cltSocket);
        cltSocket.pipe(srvSocket);
    });*/
});


server.on('request',function(request,response){
    route(request,response);
});


server.listen(9090,function(){
    console.log('服务器启动了。请访问：localhost:9090');
});