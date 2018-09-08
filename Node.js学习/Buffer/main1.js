// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10);

// 创建一个长度为 10、且用 0x1 填充的 Buffer。 
const buf2 = Buffer.alloc(10, 1);

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');

// 写入缓冲区
const buf = Buffer.alloc(256);
len = buf.write('www.baidu.com');
console.log('写入字节数：' + len);

// 读取数据
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii', 0, 5));

// 转换为JSON对象
const json = JSON.stringify(buf5);

console.log(json);

const copy = JSON.parse(json, (key, value) => {
    return value && value.type === 'Buffer' ?
        Buffer.from(value.data) :
        value;
});

console.log(copy);

// 缓冲区合并
var buffer = Buffer.concat([buf4, buf5]);
console.log('buf4 + buf5: ' + buffer.toString());

// 缓冲区比较:安慰比较
var result = buf.compare(buf5);

if(result < 0) {
    console.log('buf在buf5之前');
}else if(result == 0){
    console.log('buf与buf5相同');
}else {
    console.log('buf在buf5之后');
}

// 拷贝缓冲区
var buffer1 = Buffer.from('abcdefghijkl')
var buffer2 = Buffer.from('RUNOOB');
    // 将buffer2插入到buffer1指定位置
buffer2.copy(buffer1, 2, 0, 5);
console.log(buffer1.toString());

// 缓冲区裁剪
buffer1 = Buffer.from('runoob');
buffer2 = buffer1.slice(0, 2);
console.log(buffer2.toString());