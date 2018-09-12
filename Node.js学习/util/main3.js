// util.isArray util.isRegExp util.isDate util.isError

var util = require('util');

console.log(util.isArray([])); // true
console.log(util.isArray(new Array)); // true

console.log(util.isRegExp(/lala/)); // true

console.log(util.isDate(new Date())); // true
console.log(util.isDate(Date()));     // false: return a String

console.log(util.isError(new Error())); // true
console.log(util.isError(new TypeError())); // true
console.log(util.isError({ name: 'Error', message: 'an error occured'})); // false