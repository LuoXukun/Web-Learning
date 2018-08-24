var demo = document.getElementById('demo');
var btn = document.getElementById('btn');
var txt = '';

var test1 = [1, 5, 1, 10];
var test2 = [2, 4, 2, 5];
var test3 = [9, 3, 9, 3];

txt += '两个数组合并:' + test1.concat(test2);
txt += '<br>'
txt += '三个数组合并:' + test1.concat(test2, test3);
txt += '<br>'
txt += '数组作为字符串输出：' + test1.join();

test1.reverse();
txt += '<br>'
txt += '顺序反转：' + test1;

test1.sort(function(a, b) {return a - b;});
txt += '<br>'
txt += '数组按数字升序：' + test1;

demo.innerHTML = txt;

console.log(location.href);

alert('警告框');
confirm('确认框');
prompt('提示框');

function myFunction() {
    location.assign('http://www.baidu.com');
}

btn.addEventListener('click', myFunction);