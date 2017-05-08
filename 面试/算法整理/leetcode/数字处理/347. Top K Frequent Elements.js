/*

Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

Note: 
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

 */
var topKFrequent = function(nums, k) {
    
    var hash = {};
    var sortedObjs = [];
    var topFreqEls = [];
    
  // loop through each element in array, assign to hash key if doesnt exist, otherwise increment count which will keep track of most frequent elements
    for(var i = 0; i < nums.length; i++){
        if(!hash[nums[i]]){
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]] += 1;
        }
    }
  
  for(var key in hash){
    if(hash.hasOwnProperty(key)){
      sortedObjs.push({
        num: key, count: hash[key]
      });
    }
  } 
  
  //sorts descending order by object's 'count' value
  sortedObjs.sort(function(a,b){
    return b.count - a.count;
  })
  
  var topFreqEls = sortedObjs.slice(0,k).map(function(el){
    return parseInt(el.num);
  })
  
  return topFreqEls;
};