/**
 *@desc: fibonacci
 *@param: count {Number}
 *@return: result {Number} 第count个fibonacci值，计数从0开始
  fibonacci数列为：[1, 1, 2, 3, 5, 8, 13, 21, 34 …]
  则getNthFibonacci(0)返回值为1
  则getNthFibonacci(4)返回值为5
 */
function getNthFibonacci(count) {
    if(count == 0 || count == 1) return 1;

    var first = 1;
    var second = 1;
    var third = 0;
    for(var i = 2; i <= count; i ++) {
        third = first + second;
        first = second;
        second = third;
    }
    return third;
}