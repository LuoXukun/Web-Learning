$(function() {
    'use strict';
    /* 选中页面中所有input[data-rule] */
    var $inputs = $('[data-rule]');

    var inputs = [];

    var $form = $('#signup');

    $inputs.each(function(index, node) {
        /* 解析每一个input的验证规则 */
        inputs.push(new Input(node));
    })

    $form.on('submit', function(e) {
        e.preventDefault();
        $inputs.trigger('blur');
        for(var i = 0; i < inputs.length; i++) {
            var item = inputs[i];
            var r = item.validator.is_valid();
            if(!r) {
                alert('invalid');
                return;
            }
        }

        alert('注册成功');
    })
    /*
    function signup() {
        $.post('/api/signup', {})
    }
    */
})