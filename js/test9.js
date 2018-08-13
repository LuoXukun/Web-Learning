var card = $('#card');
var cardTrigger = $('#card-trigger');
var card1 = $('#card1');
var cardTrigger1 = $('#card-trigger1');
var loaded = false;

/*cardTrigger.on('click', function() {
    if(card.is(':visible')) {
        card.hide();
    }
    else {
        card.show();
    }
})
*/

cardTrigger.click(function() {
    card.toggle();
});


cardTrigger1.click(function() {
    if(card1.is(':visible')) {
        card1.slideUp();
    }
    else {
        if(!loaded) {
            card1.load('test9-1.html');
            loaded = true;
        }
        card1.slideDown();
    }
});

card.on('mouseenter', function() {
    card.addClass('active');
});

card.on('mouseleave', function() {
    card.removeClass('active');
});

$('#login-trigger').click(function() {
    $('#login').submit();
});