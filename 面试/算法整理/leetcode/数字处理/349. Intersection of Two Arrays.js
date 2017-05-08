/*

Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.

 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function(nums1, nums2) {
    // 先压缩
    var num1Map = {}
    var result = []
    nums1.forEach(function(element, index) {
        if (!num1Map[element]) {
            num1Map[element] = 0
        }
    })
    nums2.forEach(function(element, index) {
        if (num1Map[element] == 0) {
            num1Map[element] = 1
        }
    })
    console.log(num1Map)
    for (var i in num1Map) {
        if (num1Map[i] === 1) {
            result.push(parseInt(i))
        }
    }
    return result

};

var intersection = function(nums1, nums2) {

    const set = new Set(nums1);
    return [...new Set(nums2.filter(n => set.has(n)))];

};
