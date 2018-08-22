var text = '{ "sites": [' + 
    '{"name": "Runoob", "url": "www.runoob.com"},' +
    '{"name": "Google", "url": "www.google.com"},' +
    '{"name": "Taobao", "url": "www.taobao.com"}]}';

obj = JSON.parse(text);
console.log(obj);
document.getElementById('demo').innerText = obj.sites[1].name + ": " + obj.sites[1].url;