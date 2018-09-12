// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
/*
while(line=readline()){
    var lines = line.split(" ");
    var a = parseInt(lines[0]);
    var b = parseInt(lines[1]);
    print(a+b);
}
*/
// 本题为考试多行输入输出规范示例，无需提交，不计分。
/*
var n = parseInt(readline());
var ans = 0;
for(var i = 0;i < n; i++){
    lines = readline().split(" ")
    for(var j = 0;j < lines.length; j++){
        ans += parseInt(lines[j]);
    }
}
print(ans);
*/

var str = readline();
var arr = str.split('');
var arr_len = arr.length;
var max_len = 0;
var i, j, k;

for(i = 0; i < arr_len && (arr_len - i) > max_len; i ++) {
    var the_len = 1;
    for(j = i + 1; j < arr_len; j ++) {
        for(k = i; k < j; k ++) {
            if(arr[k] == arr[j])
                break;
        }
        if(k != j) {
            the_len = j - i;
            break;
        }
    }
    if(j == arr_len) {
        the_len = arr_len - i;
    }
    if(max_len < the_len) {
        max_len = the_len;
    }
}

print(max_len);