var myModal = document.getElementById('myModal');
var slides = document.getElementsByClassName('mySlides');
var dots = document.getElementsByClassName('demo');
var captionText = document.getElementById('caption');
var hoverShadow = document.getElementsByClassName('hover-shadow');
var btn = document.getElementById('close');
var prev = document.getElementById('prev');
var next = document.getElementById('next');

var slideIndex = 1;
//showSlides(slideIndex);

// 点击图片打开展示窗口
/*
// 失败
for(var i = 0; i < hoverShadow.length; i ++) {
    hoverShadow[i].addEventListener('click', function() {
        openModal();
        console.log(i + 1);
        currentSlide(i + 1);
    });
}

// 可行
hoverShadow[0].addEventListener('click', function() {
    openModal();
    currentSlide(1);
});
hoverShadow[1].addEventListener('click', function() {
    openModal();
    currentSlide(2);
});
hoverShadow[2].addEventListener('click', function() {
    openModal();
    currentSlide(3);
});
hoverShadow[3].addEventListener('click', function() {
    openModal();
    currentSlide(4);
});

// 可行
// 为hoverShadow添加_index属性
for(var i = 0; i < hoverShadow.length; i ++) {
    hoverShadow[i]._index = i;
    hoverShadow[i].addEventListener('click', function() {
        openModal();
        currentSlide(this._index + 1);
    });
}
*/

// 可行
// 闭包
for(var i = 0; i < hoverShadow.length; i ++) {
    (function(_i) {
        hoverShadow[_i].addEventListener('click', function() {
            openModal();
            currentSlide(_i + 1);
        })
    })(i);
}

// 点击关闭按钮关闭展示窗口
btn.addEventListener('click', closeModal);

// 点击prev按钮向前, 点击next按钮向后
prev.addEventListener('click', function() {
    plusSlide(-1);
});
next.addEventListener('click', function() {
    plusSlide(1);
})

// 点击下方图片展示对用slide
for(var i = 0; i < dots.length; i ++) {
    (function(_i) {
        dots[_i].addEventListener('click', function() {
            currentSlide(_i + 1);            
        })
    })(i);
}

// 打开展示窗口
function openModal() {
    myModal.style.display = 'block';
}

// 关闭展示窗口
function closeModal() {
    myModal.style.display = 'none';
}

// 展示对应的slide
function showSlides(n) {
    if(n > slides.length) slideIndex = 1;

    if(n < 1) slideIndex = slides.length;

    for(var i = 0; i < slides.length; i ++){
        slides[i].style.display = 'none';
    }

    for(var i = 0; i < dots.length; i ++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += ' active';
    captionText.innerHTML = dots[slideIndex-1].alt;
}

function plusSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}