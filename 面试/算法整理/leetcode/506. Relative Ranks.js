/*

Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

Example 1:
Input: [5, 4, 3, 2, 1]
Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal". 
For the left two athletes, you just need to output their relative ranks according to their scores.
Note:
N is a positive integer and won't exceed 10,000.
All the scores of athletes are guaranteed to be unique.

 */


var findRelativeRanks = function(nums) {
    var sortedNums = nums.slice(0).sort(function(a, b) {
        return b - a;
    });
    // Create a map to the sorted nums
    var sortedNumsMapping = {};
    sortedNums.forEach(function(num, index) {
        sortedNumsMapping[num] = index + 1 + '';
    });
    //{ '1': '5', '2': '4', '3': '3', '4': '2', '5': '1' }
    console.log(sortedNumsMapping)
    return nums.map(function(num, index) {
        if (sortedNumsMapping[num] === '1') return "Gold Medal";
        else if (sortedNumsMapping[num] === '2') return "Silver Medal";
        else if (sortedNumsMapping[num] === '3') return "Bronze Medal";
        else return (sortedNumsMapping[num]);
    });
};
