var a = [1, 2, 3];

let b = a;
console.log('b = a: ', b, b != a);

let c = a.slice();//选择数组元素
console.log('c = a:slice(): ', c, c != a);

let d = a.splice();//返回被删除的项目
console.log('d = a:splice(0, 0): ', d, d != a);

let e = a.concat();// 连接数组
console.log('e = a.concat()', e, e != a);