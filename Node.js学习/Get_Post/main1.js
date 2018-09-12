// 获取Get请求内容
// 由于GET请求直接被嵌入在路径中，URL是完整的请求路径，包括了?后面的部分，因此你可以手动解析后面的内容作为GET请求的参数
var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(require, response) {
    response.writeHead(200, {'content-Type': 'text/plain; charset = utf-8'});
    var params = url.parse(require.url,true).query;
    response.write('网站名： ' + params.name);
    response.write('\n');
    response.write('网站 URL：' + params.url);
    response.end();
}).listen(3000);