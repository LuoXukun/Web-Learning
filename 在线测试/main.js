//实现mergePromise函数，把传进去的数组顺序先后执行，
//并且把返回的数据先后放到数组data中

const timeout = ms => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, ms);
});

const ajax1 = () => timeout(2000).then(() => {
    console.log('1');
    return 1;
});

const ajax2 = () => timeout(1000).then(() => {
    console.log('2');
    return 2;
});

const ajax3 = () => timeout(2000).then(() => {
    console.log('3');
    return 3;
});

const mergePromise = ajaxArray => {
    // 在这里实现你的代码
    /*
    var da = [];
    var sequence = Promise.resolve();
    ajaxArray.forEach(function(item) {
        sequence = sequence.then(item).then(function(res) {
            da.push(res);
            return da;
        });
    });
    console.log(sequence);
    return sequence;
    */
   var arr = [];
   return new Promise(function(resolve, reject) {
       ajaxArray[0]().then(function(v) {
           arr.push(v);
           return ajaxArray[1]();
       }).then(function(v) {
           arr.push(v);
           return ajaxArray[2]();
       }).then(function(v) {
           arr.push(v);
           resolve(arr);
       })
   });
};

mergePromise([ajax1, ajax2, ajax3]).then(data => {
    console.log('done');
    console.log(data); // data 为 [1, 2, 3]
});