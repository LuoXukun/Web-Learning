var arr = document.getElementById('test').getElementsByTagName('p');
var demo = document.getElementById('demo');

demo.innerHTML = '第二个段落内容为： ' + arr[1].textContent;
demo.innerHTML += '<br>' + '数组长度：' + arr.length; 

var nodeList = document.getElementById('test').querySelectorAll('p');
demo.innerHTML += '<br>' + '第三个段落内容为： ' + nodeList[2].textContent;
demo.innerHTML += '<br>' + '节点列表长度为：' + nodeList.length;

for(var i = 0; i < nodeList.length; i ++) {
    nodeList[i].style.color = 'red';
}

nodeList[1].parentNode.removeChild(nodeList[1]);

console.log('array', arr);
console.log('nodeList', nodeList);