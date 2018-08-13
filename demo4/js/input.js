$(function() {
    'use strict';

    window.Input = function(selector) {
        var $ele, rule = {required: true}, me = this, $error_ele;

        this.load_validator = function() {
            var val = this.get_val();
            this.validator = new Validator(val, rule);
        }

        this.get_val = function() {
            return $ele.val();
        }

        function init() {
            find_ele();
            get_error_ele();
            parse_rule();
            me.load_validator();
            listen();
        }

        function find_ele() {
            if(selector instanceof jQuery) {
                $ele = selector;
            }
            else {
                $ele = $(selector);   
            }
        }

        function parse_rule() {
            var rule_string = $ele.data('rule');
            if(!rule_string) return;

            var rule_array = rule_string.split('|');

            for(var i = 0; i < rule_array.length; i++) {
                var item = rule_array[i];
                var item_array = item.split(':');
                rule[item_array[0]] = JSON.parse(item_array[1]);
            }
            console.log(rule);
        }

        function listen() {
            $ele.on('blur', function() {
                var valid = me.validator.is_valid(me.get_val());
                if(valid)
                    $error_ele.hide();
                else
                    $error_ele.show();
            })
        }

        function get_error_ele() {
            $error_ele = $(get_error_selector());
        }

        function get_error_selector() {
            return '#' + $ele.attr('name') + '-input-error';
        }

        init();
    } 
})