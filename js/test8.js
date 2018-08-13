document.getElementById('a').style.background = 'blue';

$('#b').css('background', 'green');

$('.grandpa').find('.child').css('border', '2px solid #999');

$('#child1').parent().css('border', '2px solid #666');

$('#child1').parents('.grandpa').css('border', '2px solid #333');

$('.child').filter('.not-gay').css('background', 'red');

$('.A')
    .css({
        color: 'red',
        background: 'black',
        border: '15px solid blue'
    })
    .addClass('black')
    .removeClass('B');

var a = $('#a');

a.hide();
a.show();
a.fadeOut(2000);
a.fadeIn(2000);
a.slideUp(2000);
a.slideDown(2000);

var text = $('#c').text();
var html = $('#c').html();
console.log("text: ", text);
console.log("html:", html);
//$('#c').text('LA');

$('#c').append('<div> APPEND </div>');
$('#c').prepend('<div> PREPEND </div>');

//$('#c').remove();