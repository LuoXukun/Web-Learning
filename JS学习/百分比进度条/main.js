function move() {
    var elem = document.getElementById('myBar');
    var width = 1;
    var id = setInterval(function() {
        if(width >= 100) {
            clearInterval(id);
        }
        else {
            width ++;
            elem.style.width = width + '%';
            elem.innerHTML = width + '%';
        }
    }, 10);
}