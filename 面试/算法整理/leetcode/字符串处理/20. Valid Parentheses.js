/*

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.



 */

/**
 * @param {string} s
 * @return {boolean}
 */


var isValid = function(s) {
    var valid = true,
        pair = {
            '(': ')',
            '[': ']',
            '{': '}'
        },
        nowWaitingFor = [];

    for (var i = 0; i < s.length; i++) {
        var nowChar = s.charAt(i);


        if (nowChar.match(/[(\[\{]/)) {

            nowWaitingFor.unshift(pair[nowChar]);

        } else if (nowChar.match(/[)\]\}]/)) {

            if (nowWaitingFor[0] !== nowChar) {
                valid = false;
                break;
            } else {
                nowWaitingFor.splice(0, 1);
            }
        }
    }

    if (nowWaitingFor.length !== 0) {
        valid = false;
    }

    return valid;
};
