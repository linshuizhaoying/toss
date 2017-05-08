/*

Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.

Please note that the string does not contain any non-printable characters.

Example:

Input: "Hello, my name is John"
Output: 5

 */

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    var result = 0;
    var arr = s.trim().split('')
    console.log(arr)
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] == ' ' && arr[i + 1] != ' ') {
            result++
        }
    }
    return s.trim().length == 0 ? 0 : result + 1
};

// 正则的解法

s = s.trim()
if (s.length === 0) return 0;
return s.replace(/\s+/g, ' ').split(' ').length;
