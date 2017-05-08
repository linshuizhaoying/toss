/*

Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital if it has more than one letter, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.
Example 1:
Input: "USA"
Output: True
Example 2:
Input: "FlaG"
Output: False
Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.

 */

/**
 * @param {string} word
 * @return {boolean}
 */
// 版本1 没考虑到大小写区分，最后WA
var detectCapitalUse = function(word) {
    var flag = true
        // 如果一开始就是小写，那么就是不符合条件的
    if (word.charCodeAt(0) > 90) {
        flag = false
        return flag
    } else {
        for (var i = 1; i < word.length; i++) {
            if (word.charCodeAt(i) > 90) {
                flag = false
            }
        }
    }
    return flag

};

// 版本2 beat 17.5% 效率不太高

var detectCapitalUse = function(word) {
    var flag = true
        // 如果第一个大写,第二个小写，剩下的必须都是小写
    if (word.charCodeAt(0) <= 90 && word.charCodeAt(1) > 90) {
    	 //console.log("one")
        for (var i = 2; i < word.length; i++) {
            if (word.charCodeAt(i) <= 90) {
                flag = false
            }
            
        }
        // 如果第一个第二个都是大写，那么剩下必须是大写
    } else if (word.charCodeAt(0) <= 90 && word.charCodeAt(1) <= 90) {
    	//console.log("two")
        for (var i = 1; i < word.length; i++) {
            if (word.charCodeAt(i) > 90) {
                flag = false
            }
        }
        
        // 从第一个字符区分 如果小写，那么全部都得是小写
    } else if (word.charCodeAt(0) > 90) {
    	//console.log("three")
        for (var i = 1; i < word.length; i++) {
            if (word.charCodeAt(i) <= 90) {
                flag = false
            }
        }
        

    }
    return flag

};

// 方法3 正则 beat 20% 而且代码量少很多

var detectCapitalUse = function(word) {
  return /^[A-Z]+$|^[a-z]+$|^[A-Z][a-z]+$/.test(word);

};
// 方法4 

var detectCapitalUse = function(word) {
  var asciiCode,
        capitalNum = 0;
    
    for(var i = 0; i < word.length; i++){
        asciiCode = word[i].charCodeAt(0);
        if(asciiCode >= 65 && asciiCode <= 90){
            capitalNum++;
        }
    }
    
    if(capitalNum > 1 && capitalNum < word.length)
        return false;
    if(capitalNum === 1 && word[0].charCodeAt(0) > 90)
        return false
    return true;
};

