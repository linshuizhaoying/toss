/*

Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 

 */


/**
 * @param {number} n
 * @return {string}
 */
var a = '0ABCDEFGHIJKLMNOPQRSTUVWXYZ';
a = a.split('');
var convertToTitle = function(n) {
    if (n < 27) {
        return a[n];
    } else {
        var temp = Math.ceil(n / 26) - 1;
        return convertToTitle(temp) + convertToTitle(n - temp * 26);
    }
}

