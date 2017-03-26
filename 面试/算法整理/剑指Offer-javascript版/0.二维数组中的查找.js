/*
在一个二维数组中，每一行都按照从左到右递增的顺序排序，
每一列都按照从上到下递增的顺序排序。请完成一个函数，
输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

 */

// 二维数组
// 1 2 3
// 4 5 6
// a = [[1,2,3],
// 			[4,5,6]]
function Find(target, array) {

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
        	if(array[i][j] == target){
        		return true
        	}
        }
    }
    return false
}
module.exports = {
    Find: Find
};
