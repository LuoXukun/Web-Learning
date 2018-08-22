var result = document.getElementById('result');
var btn = document.getElementById('button');

var add = (function() {
    var counter = 0;
    return function() {
        return ++counter;
    }
})();

function myFunction() {
    result.innerText = add();
}

btn.onclick = myFunction;

var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var btn1 = document.getElementById('btn');

p2.style.color = 'blue';
p2.style.fontFamily = 'Arial';
p2.style.fontSize = 'larger';

function myEvent1() {
    p1.style.color = 'red';
    p2.style.color = 'red';
}
function myEvent2(a, b) {
    alert(a + b);
}

btn1.addEventListener('click', myEvent1);
btn1.addEventListener('click', function() {
    myEvent2(3, 4);
});
/*
btn1.onclick = function() {
    p1.style.color = 'red';
    p2.style.color = 'red';
};
*/

// 添加一个元素
var div = document.getElementById('div1');
var para = document.createElement('p');
var node = document.createTextNode('这是一个新的段落。');

para.appendChild(node);
div.insertBefore(para, p2);

// 删除一个元素
var p3 = document.getElementById('p3');

p3.parentNode.removeChild(p3);

// 替换一个元素
var para1 = document.createElement('p');
var node1 = document.createTextNode('这是一个新的段落。');
para1.appendChild(node1);
var p4 = document.getElementById('p4');

p4.parentNode.replaceChild(para1, p4);
