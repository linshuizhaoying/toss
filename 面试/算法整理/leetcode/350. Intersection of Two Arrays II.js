/*

Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:
What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?


 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 233 一次过，都没调试过~
var intersect = function(nums1, nums2) {
    var map = {}
    var result = []
    for(var i = 0;i<nums1.length;i++){
    	if(!map[nums1[i]]){
    		map[nums1[i]] = 1
    	}else{
    		map[nums1[i]] +=1
    	}
    }
    for(var j =0;j<nums2.length;j++){
    	if(map[nums2[j]] && map[nums2[j]]>=1){
    		result.push(nums2[j])
    		map[nums2[j]] -=1
    	}
    }
    return result
};


// 还有类似思路的
// 
  // track how often each number occurs in first list
    var store = nums1.reduce(function(map, n) {
        map[n] = (map[n] + 1) || 1;
        
        return map;
    }, {});
    
    // filter out numbers from second list based on
    // how often they occurred in the first list
    return nums2.filter(function(n) {
        if (store[n]) {
            store[n]--;
            
            return true;
        } else {
            return false;
        }
    });