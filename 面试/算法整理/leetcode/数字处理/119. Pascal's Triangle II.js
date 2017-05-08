/*
Given an index k, return the kth row of the Pascal's triangle.

For example, given k = 3,
Return [1,3,3,1].



 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
	  var numRows = rowIndex+1
	 if(rowIndex == 0){
	     return [1]
	 }
	  if(rowIndex == 1){
	     return [1,1]
	 }
    if (numRows >1) {
        var result = [[1]];

        for(var i = 1;i < numRows;i++) {
            result[i] = [];
            for(var j = 0; j < i + 1;j++) {
                result[i][j] = (result[i - 1][j] || 0) + (result[i - 1][j - 1] || 0);
            }
        }
            
        return result[rowIndex];
    }
};