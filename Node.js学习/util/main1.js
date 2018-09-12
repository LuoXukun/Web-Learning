// util.inherits:一个实现对象间原型继承的函数
var util = require('util');

function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function() {
        console.log('Hello ' + this.name);
    };
}
Base.prototype.showName = function() {
    console.log(this.name);
};

function Sub() {
    this.name = 'sub';
}

util.inherits(Sub, Base);

var objBase = new Base();
var objSub = new Sub();

objBase.showName();
objBase.sayHello();
console.log(objBase);

console.log('----------------------------------');

objSub.showName();
//objSub.sayHello();
console.log(objSub);
console.log(objSub.base);
console.log('Sub只继承了Base在原型中定义的函数，而内部创造的base和sayHello没有被继承');