var p1 = document.getElementById('p1');
var clock = document.getElementById('clock');

function person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
}

var myFather = new person('XuKun', 'Luo', 21, 'black');

var txt = '';

for(var x in myFather) {
    txt += myFather[x];
    txt += ' ';
}

p1.innerText = txt;


// 显示一个时钟
function startTime() {
    var today = new Date();
    var hour = today.getHours()
    var minute = today.getMinutes();
    var second = today.getSeconds();

    hour = checkTime(hour);
    minute = checkTime(minute);
    second = checkTime(second);

    clock.innerText = hour + ':' + minute + ':' + second;
}

function checkTime(x) {
    if(x < 10)
        x = '0' + i;
    return x;
}

document.body.onload = setInterval(function() {startTime();}, 500);