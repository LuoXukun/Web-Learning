function myEvents() {
    // Create a "close" button and append it to each list item
    var myList = document.getElementsByTagName('li');
    for(var i = 0; i < myList.length; i ++) {
        var span = document.createElement('span');
        var txt = document.createTextNode('\u00D7');
        span.className = 'close';
        span.appendChild(txt);
        myList[i].appendChild(span);
    }

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName('close');
    for(var i = 0; i < close.length; i ++) {
        (function(_i) {
            close[_i].addEventListener('click', function() {
                myList[_i].style.display = 'none';
            });
        })(i);
    }

    /* 
    for(var i = 0; i < close.length; i ++) {
        close[i].index = i;
        close[i].onclick = function() {
            myList[this.index].style.display = 'none';
        }
    }
    */

    // Add a "checked" symbol when clicking on a list item
    for(var i = 0; i < myList.length; i ++) {
        myList[i].addEventListener('click', function() {
            this.classList.toggle('checked');
        });
    }
}

myEvents();

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('myInput').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === '') {
        alert('You must write something!');
    }
    else {
        document.getElementById('myUL').appendChild(li);
    }
    document.getElementById('myInput').value = '';

    var span = document.createElement('span');
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);
    li.addEventListener("click", function() {
        this.classList.toggle('checked');
    });

    var myList = document.getElementsByTagName('li');

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName('close');
    for(var i = 0; i < close.length; i ++) {
        (function(_i) {
            close[_i].addEventListener('click', function() {
                myList[_i].style.display = 'none';
            });
        })(i);
    }
}