// 获取POST请求内容

//POST 请求的内容全部的都在请求体中，
//http.ServerRequest 并没有一个属性内容为请求体，
//原因是等待请求体传输可能是一件耗时的工作。

var http = require('http');
var querystring = require('querystring');
var util = require('util');

var postHTML = 
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function(req, res) {
    // 定义一个post变量，用来暂存请求体的信息
    var post = '';

    // 通过req的data事件监听函数，每当接受到请求体的数据时，
    // 就累加到post变量中
    req.on('data', function(chunk) {
        post += chunk;
    });

    // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式
    // 然后想客户端返回
    req.on('end', function() {
        post = querystring.parse(post);
        res.writeHead(200, {'Content-Type' : 'text/html; charset = utf8'});
        if(post.name && post.url) {
            res.write("网站名：" + post.name);
            res.write("<br>");
            res.write("网站 URL：" + post.url);
        }
        else {
            res.write(postHTML);
        }
        res.end();
    });
}).listen(3000);