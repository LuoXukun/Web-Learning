// 快排
var arr = [3,23,66,32,2,77,45,87,64,34,33];

quickSort(arr, 0, arr.length - 1);
console.log(arr);

function quickSort(array, begin, end) {
    if(begin >= end) return;
    
    var p = array[begin];   //基准
    var i = begin + 1, j = end;
    while(true) {
        for(; arr[j] >= p && j > begin; j --);
        for(; arr[i] <= p && i < j; i ++);
        if(i >= j) break;
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    var temp = array[j]; //交换p与arr[j]
    array[j] = p;
    array[begin] = temp;

    quickSort(array, begin, j - 1);
    quickSort(array, j + 1, end);
}