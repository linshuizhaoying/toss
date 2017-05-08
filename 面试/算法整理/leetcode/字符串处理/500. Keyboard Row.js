/*

Given a List of words, 
return the words that can be typed using letters of alphabet 
on only one row's of American keyboard like the image below.

Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]


 */

// my solution timeout

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var zeroArr = ['q','w','e','r','t','y','u','i','o','p']
    var treeArr = ['a','s','d','f','g','h','j','k','l']
    var fiveArr = ['z','x','c','v','b','n','m']
    var result = []
    console.log(words)
    for(var i = 0;i<words.length;i++){
        var flag = 0
        var temp = words[i].toLowerCase()
        for(var j=0;j<temp.length;){
            if(zeroArr.indexOf(temp[j]) >0){
                flag+=0
            }
            if(treeArr.indexOf(temp[j]) >0){
                flag+=3
            }
            if(fiveArr.indexOf(temp[j]) >0){
                flag+=5
            }
        }
        if(flag == 0 || flag == temp.length*3 || flag == temp.length*5){
            result.push(temp)
        }
    }
    return result
};

// Good Solution 居然没想到用正则和filter结合QAQ
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
     return words.filter((w) => {
        // remove word from array if it fails matching all three rows
        if (
            !/^[qwertyuiop]*$/i.test(w) &&
            !/^[asdfghjkl]*$/i.test(w) &&
            !/^[zxcvbnm]*$/i.test(w)
        ) return false;
        
        return true;
    });
};