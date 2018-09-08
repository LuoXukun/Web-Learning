// 写入流
var fs = require('fs');
var data = 'Luo Xukun is kind.';

var writeStream = fs.createWriteStream('output.txt');

// 使用utf-8编码写入数据
writeStream.write(data, 'UTF8');

// 标记文件末尾
writeStream.end();

writeStream.on('finish', function() {
    console.log('写入完成。');
});

writeStream.on('error', function(err) {
    console.log(err.stack);
});

console.log('程序执行完毕。');