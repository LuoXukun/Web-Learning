console.log('当前正在执行的脚本文件的文件名（绝对路径）: ' + __filename);
console.log('当前正在执行的脚本文件的文件目录（绝对路径）: ' + __dirname);

function printHello1() {
    console.log('Hello World1!');
}
function printHello2() {
    console.log('Hello World2!');
}

var t = setTimeout(printHello1, 2000);

//clearTimeout(t);

var count = 0;
var s = setInterval(function() {
    printHello2();
    count ++;
    if(count > 4) {
        clearInterval(s);
    }
}, 1000);