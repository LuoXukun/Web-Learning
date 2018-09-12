// 写入文件
var fs = require('fs');

console.log('准备写入文件output.txt');

fs.writeFile('output.txt', 'luo xu kun shi hao ren', function(err) {
    if(err) {
        return console.error(err);
    }
    console.log('文件写入成功！');
    console.log('-------------------------------');
    console.log('读取写入的数据！');
    fs.readFile('output.txt', function(err, data) {
        if(err) {
            return console.error(err);
        }
        console.log('读取文件： ' + data.toString());
    });
});