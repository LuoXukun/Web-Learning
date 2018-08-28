var win = document.getElementById('myWin');

var pic = document.getElementById('myPic');
var winPic = document.getElementById('my-img');

pic.onclick = function() {
    win.style.display = 'block';
    winPic.src = this.src;
}