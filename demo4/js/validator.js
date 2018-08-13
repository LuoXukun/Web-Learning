/* 验证 */
$(function() {
    'use strict';

    window.Validator = function(val, rule) {
        this.is_valid = function(new_val) {
            if(new_val != undefined)
                val = new_val;

            /* 如果不是必填项且用户未填写任何内容则直接判定为合法 */
            if(!rule.required && !val)
                return true;

            for(var key in rule) {
                if(key == 'required') continue;
                var r = this['validate_' + key]();
                if(!r) return false;
            }
            return true;
        }

        /* 数字最大值 */
        this.validate_max = function() {
            val = parseFloat(val);
            return val <= rule.max;
        }

        /* 数字最小值 */
        this.validate_min = function() {
            val = parseFloat(val);
            return val >= rule.min;
        }
        
        /* 字符串长度最大值 */
        this.validate_maxlength = function() {
            val = val.toString();
            return val.length <= rule.maxlength;
        }

        /* 字符串长度最小值 */
        this.validate_minlength = function() {
            val = val.toString();
            return val.length >= rule.minlength;
        }

        /* 判断是否数字 */
        this.validate_numeric = function() {
            return $.isNumeric(val);
        }

        /* 判断是否为空 */
        this.validate_required = function() {
            var real = $.trim(val);
            console.log('a' + real + 'a');
            if(!real && real !== 0) return false;
            return true;
        }

        /* 判断模式 */
        this.validate_pattern = function() {
            var reg = new RegExp(rule.pattern);
            return reg.test(val);
        }
    }
})