1. Node.js是运行在服务端的JS。

2. events.EventEmitter: 事件的触发与事件监听器功能的封装。

3. JavaScript语言自身只有字符串数据属性，没有二进制数据属性。
Buffer类: 为Node.js带来了一种存储原始数据的方法，可以让Node.js处理
        二进制数据（当Node.js需要处理I/O操作中移动的数据时使用：处理TCP流或文件流等）。

4. Stream有四种流类型：
        Readable------可读操作
        Writable------可写操作
        Duplex--------发生错误时触发
        finish--------所有数据已被写入到底层系统时触发