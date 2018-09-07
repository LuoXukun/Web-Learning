function marked(str) {
    // your code here
    var ret = '<p>';
    var array = str.split('@@');
    var len1 = array.length;

    // blink
    if(len1 != 0) {
        var isBlink = true;
        for(var i = 0; i < len1; i ++) {
            ret += array[i];
            if(i == len1 - 1 && isBlink == true) {
                break;
            }
            if(isBlink == true) {
                ret += '<blink>';
                isBlink = false;
            }
            else {
                ret += '</blink>';
                isBlink = true;
            }
        }
    }

    // strong
    var array2 = ret.split('__');
    var len2 = array2.length;
    if(len2 != 0) {
        ret = '';
        var isStrong = true;
        for(var i = 0; i < len2; i ++) {
            ret += array2[i];
            if(i == len2 - 1 && isStrong == true) {
                break;
            }
            if(isStrong == true) {
                ret += '<strong>';
                isBlink = false;
            }
            else {
                ret += '<strong>';
                isStrong = true;
            }
        }
    }

    array2 = ret.split('**');
    len2 = array2.length;
    if(len2 != 0) {
        ret = '';
        var isStrong = true;
        for(var i = 0; i < len2; i ++) {
            ret += array2[i];
            if(i == len2 - 1 && isStrong == true) {
                break;
            }
            if(isStrong == true) {
                ret += '<strong>';
                isBlink = false;
            }
            else {
                ret += '<strong>';
                isStrong = true;
            }
        }
    }

    array2 = ret.split('*');
    len2 = array2.length;
    if(len2 != 0) {
        ret = '';
        var isStrong = true;
        for(var i = 0; i < len2; i ++) {
            ret += array2[i];
            if(i == len2 - 1 && isStrong == true) {
                break;
            }
            if(isStrong == true) {
                ret += '<em>';
                isBlink = false;
            }
            else {
                ret += '</em>';
                isStrong = true;
            }
        }
    }
    ret += '</p>';
    return ret;
}

var a = marked('@@whatever@@').trim(); // <p><blink>whatever</blink></p>
console.log(a);
var b = marked('*abc* @@def@@ __ghi__').trim(); // <p><em>abc</em> <blink>def</blink> <strong>ghi</strong></p>
console.log(b);
var c = marked('@@**cool**@@').trim(); // <p><blink><strong>cool</strong></blink></p>
console.log(c);