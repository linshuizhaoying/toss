/*

Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

For example,
Given "egg", "add", return true.

Given "foo", "bar", return false.

Given "paper", "title", return true.


 */


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 用两个对象，一个作为映射，一个作为映射标记
var isIsomorphic = function(s, t) {
       takenS = {};
    takenT = {};
    for(i = 0; i < s.length; i++) {
        letterS = s.substring(i,i+1);
        letterT = t.substring(i,i+1);
        if(takenS[letterS] === undefined && takenT[letterT] === undefined) {
            takenS[letterS] = letterT;
            takenT[letterT] = true;
        }
        else if(takenS[letterS] !== letterT)
            return false;
    }
    return true;
};