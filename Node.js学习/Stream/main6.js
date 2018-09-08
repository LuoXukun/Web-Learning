// 不覆盖，写在文件后
var fs = require('fs');
var data = '';
var data2 = '你的小青蛙是真的可爱';

// 1.读取流
var readStream = fs.createReadStream('input.txt');
readStream.setEncoding('UTF8');

readStream.on('data', function(chunk) {data += chunk;});
readStream.on('end', function() {writeS(data);});
readStream.on('error', function(err) {console.log(err.stack);});

console.log('程序1执行完毕');

// 2.写入流
function writeS(dataS) {
    var writeStream = fs.createWriteStream('output.txt');

    writeStream.write(data2+dataS, 'UTF8');

    writeStream.end();

    writeStream.on('finish', function() {console.log('写入完成');});
    writeStream.on('error', function(err) {console.log(err.stack);});

    console.log('程序2执行完成');
}