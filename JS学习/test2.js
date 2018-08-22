/* 是否带有小数 */
function isDecimal(strValue) {
    var objRegExp = /^\d+\.\d+$/;
    return objRegExp.test(strValue);
}

/* 是否中文名称 */
function isChina(strValue) {
    var objRegExp = /^[\u4E00-\u9FA5]{2,4}$/;
    return objRegExp.test(strValue);
}

/* 是否8位数字 */
function isStudentNo(strValue) {
    var objRegExp = /^[0-9]{8}$/;
    return objRegExp.test(strValue);
}

/* 是否电话号码 */
function isTelCode(strValue) {
    var objRegExp = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
    return objRegExp.test(strValue);
}

/* 是否合法邮箱 */
function isEmail(strValue) {
    var objRegExp = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
    return objRegExp.test(strValue);
}

function isValid() {
    var student = [
        document.getElementById('student-code').value,
        document.getElementById('student-name').value,
        document.getElementById('student-post').value,
        document.getElementById('student-phone').value
    ];
    console.log(student);

    if(!isStudentNo(student[0])) {
        return false;
    }
    if(!isChina(student[1])) {
        return false;
    }
    if(!isEmail(student[2])) {
        return false;
    }
    if(!isTelCode(student[3])) {
        return false;
    }

    alert("提交成功！");
    return false;
}

document.getElementById('my-form').onsubmit = isValid;