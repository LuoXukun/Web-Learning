var myWeb = document.getElementById('text');
var btn = document.getElementById('check');
var message = document.getElementById('err-message');
var txt = '';
var btn1 = document.getElementById('button');

function myEvent() {
    var num = document.getElementById('number').value;
    try {
        message.innerText = '';
        if(num == '') throw 'null';
        if(isNaN(num)) throw 'not a number';
        num = Number(num);
        if(num < 5) throw 'too small';
        if(num > 10) throw 'too big';
    }
    catch(err) {
        message.innerText = 'Error: ' + err;
    }
}

function myFunction() {
    var num = document.getElementById('my-input');
    if(num.checkValidity() == false) {
        alert(num.validationMessage);
    }
    else {
        alert('输入正确');
    }
}

btn.onclick = myEvent;
btn1.onclick = myFunction;