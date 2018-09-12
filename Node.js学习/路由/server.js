// 服务器
var http = require('http');
var url = require('url');

function start(route) {
    function onRequest(request, reponse) {
        var pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + 'received.');

        route(pathname);

        reponse.writeHead(200, {'Content-Type': 'text/plain'});
        reponse.write('Hello World');
        reponse.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log('Server has started.');
}

exports.start = start;