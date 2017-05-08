/*

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 

 */

// 比较快的方案
/**
 * @param {string} s
 * @return {number}
 */


var titleToNumber = function(s) {
    var result = 0;

    var sLength = s.length;

    for (var i = 0; i < sLength; i++) {
        result = result * 26 + (s.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
    }

    return result;
};


var a = '0ABCDEFGHIJKLMNOPQRSTUVWXYZ';
a = a.split('');
var b = {}
a.forEach(function getMap(element, index) {
    b[element] = index
})
var convertToTitle = function(n) {
    if (n < 27) {
        return a[n];
    } else {
        var temp = Math.ceil(n / 26) - 1;
        return convertToTitle(temp) + convertToTitle(n - temp * 26);
    }
}

var titleToNumber = function(s) {
    if (s.length == 1) {
        return b[s]
    }
    var arr = s.split('')
    var result = 0
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
        console.log(b[arr[i]])
        result = result + parseInt(b[arr[i]]) * Math.pow(26, arr.length - 1 - i)
    }
    return result
};
