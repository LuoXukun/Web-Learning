// 参考规则
const rules = {
    'a': {
        height: 0,
        width: 10
    },
    '#page .content a': {
        height: 5
    },
    '#page a': {
        height: 10,
        display: 'block'
    }
}

// 权重定义，#element(100) > .element(10) > element(1)
const WEIGHT = {
    '#': 100,
    '.': 10,
    _default: 1,
}

const getRules = path => {
   // your code here 
   
}

console.log(getRules('a'));
//输出：{height: 0, width: 10}

console.log(getRules('#page a')); 
//输出：{height: 10, width: 10, display: "block"}

console.log(getRules('#page .content a'));
//输出：{height: 5, width: 10, display: "block"}