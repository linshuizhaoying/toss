/*

Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.

 */
/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
// 超过88% 主要思路就是用map，然后对map排序
var frequencySort = function(s) {
    var map = {}
    for(var i = 0;i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]] = 1
        }else{
            map[s[i]]++
        }
    }
    var result = ""
    var mapKeys = Object.keys(map)
    var mapSort = mapKeys.sort(function(a,b){return map[b] - map[a]})
    var j = 0
    for(var j = 0;j<mapSort.length;j++){
    
        result = result.concat(mapSort[j].repeat(map[mapSort[j]]))

    }
   console.log(result)
    return result
};














