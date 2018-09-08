var events = require('events');
var evevtEmitter = new events.EventEmitter();

// 监听器 #1
var listener1 = function listener1() {
    console.log('#1 执行！');
}

// 监听器 #2
var listener2 = function listener2() {
    console.log('#2 执行！');
}

// 绑定监听器
evevtEmitter.addListener('connection', listener1);

evevtEmitter.on('connection', listener2);

var evevtListeners = evevtEmitter.listenerCount('connection');
console.log(evevtListeners + '个监听器连接事件');

// 触发connection事件
console.log('------------------------------------------');
evevtEmitter.emit('connection');
console.log('------------------------------------------');

// 移除listener1
evevtEmitter.removeListener('connection', listener1);
console.log('listener1 不再受监听');

// 触发connection事件
evevtEmitter.emit('connection');

evevtListeners = evevtEmitter.listenerCount('connection');
console.log(evevtListeners + '个监听器连接事件');

console.log('END');