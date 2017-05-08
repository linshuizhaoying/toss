/*

Implement strStr().

Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
 for (var i = 0; ; i++) {
    for (var j = 0; ; j++) {
      if (j == needle.length) return i;
      if (i + j == haystack.length) return -1;
      if (needle.charAt(j) != haystack.charAt(i + j)) break;
    }
  }
};