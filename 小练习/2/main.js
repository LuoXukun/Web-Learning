var script = document.createElement('script');
var head = document.getElementByTagName('head')[0];

script.type="text/javascript";
script.src='//i.alicdn/resource.js';

//绑定资源加载成功事件
script.onreadystatechange = function(){
    //判断资源加载状态是否为加载成功或加载完成
    if(/^(complete|loaded)$/.test(readyState)){
        script.onreadystatechange = null;
    }
}

//绑定资源加载失败事件
script.onerror = function(){
    //...
}
head.insertBefore(script,head.firstChild);