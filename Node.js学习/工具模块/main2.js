// Path
// Node.js path 模块提供了一些用于处理文件路径的小工具

var path = require("path");

// 格式化路径
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// 连接路径
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// 转换为绝对路径
console.log('resolve : ' + path.resolve('main2.js'));

// 路径中文件的后缀名
console.log('ext name : ' + path.extname('main2.js'));