// 使用node.js创建的基本的Http服务器架构

var http = require('http');
var url = require('url');
var fs = require('fs');

// 创建服务器
http.createServer(function(request, response) {
    // 解析请求，包括文件名
    var pathname = url.parse(request.url).pathname;

    // 输出请求的文件名
    console.log("Request for " + pathname + " received.");

    // 从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1), function(err, data) {
        if(err) {
            console.error(err);
            // HTTP 状态码: 404 : NOT FOUND
            // Content Type: text/plain
            response.writeHead(404, {'Content-Type': 'text/html'});
        }
        else {
            // HTTP 状态码: 200 : OK
            // Content Type: text/plain
            response.writeHead(200, {'Content-Type': 'text/html'});

            // 相应文件内容
            response.write(data.toString());
        }

        // 发送响应数据
        response.end();
    });
}).listen(8080);

// 控制台输出以下信息
console.log('Server running at http://127.0.0.1:8080/');