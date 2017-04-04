/*

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.

 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // 思路1 字典化
    if (s.length == 0) {
        return -1
    }
    var map = {}
    var index = -1
    var arr = s.split('')
    arr.forEach(function getMap(element, index) {
        map[element] = 0
    })

    for (var i = 0; i < arr.length; i++) {
        map[arr[i]] += 1
    }
    console.log(map)
    for (var i = 0; i < arr.length; i++) {
        if (map[arr[i]] == 1) {
            index = i
            break;
        }
    }
    return index
};


// 方法2

var firstUniqChar = function(s) {
    var freq = []
    var a = 'a'.charCodeAt()
    for (var i = 0; i < s.length; i++) {
        if (!freq[s.charCodeAt(i) - a]) {
            freq[s.charCodeAt(i) - a] = 1
        } else {
            freq[s.charCodeAt(i) - a] += 2;
        }

    }
    console.log(freq)
    for (var i = 0; i < s.length; i++) {
        if (freq[s.charCodeAt(i) - a] == 1)
            return i;
    }
    console.log(freq)

    return -1;
};
