// 解压文件
var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input1.txt'));

console.log('文件解压完成');