/*

You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Example:

[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Answer: 16
Explanation: The perimeter is the 16 yellow stripes in the image below:


 */


/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var result = 0
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            var temp = 4
            if (grid[i][j] == 1) {
                // 如果存在上一行而且相邻
                if (i - 1 >= 0 && grid[i - 1][j] === 1) {
                    temp--
                }
                console.log(i - 1 > 0 && grid[i - 1][j] === 1)
                //如果存在左边而且相邻
                if(j-1>=0&&grid[i][j-1] ===1){
                    temp--
                }
                console.log(j-1>=0&&grid[i][j-1] ===1)
                // 如果存在右边而且相邻
                
                if(grid[i].length -1 >= j+1 && grid[i][j+1] === 1 ){
                    temp--
                }
                console.log(grid[i].length -1 >= j+1 && grid[i][j+1] === 1)
                // 如果存在下边而且相邻
                if (i +1 <=grid.length -1  && grid[i +1][j] === 1) {
                    temp--
                }
                console.log(i +1 <=grid.length -1  && grid[i +1][j] === 1)
                console.log("此时i:"+i +" "+ "此时j:" +j )
                console.log("此时temp:" + temp)
                result += temp
            }
        }

    }
    return result
};