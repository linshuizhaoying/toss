/*

Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.

Example:
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output:  [1,2,4,7,5,3,6,8,9]
Explanation:

Note:
The total number of elements of the given matrix will not exceed 10,000.

 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix, row = 0, col = 0, output = []) {
      if (!matrix || !matrix.length) {
        return output;
    }

    let up = true,
        rowLgth = matrix.length,
        colLgth = matrix[ 0 ].length,
        lgth = rowLgth * colLgth;

    while (output.length < lgth) {
        output.push(matrix[ row ][ col ]);

        if (up) {
            if (col + 1 >= colLgth) {
                row += 1;
                up = false;
            } else if (row - 1 < 0) {
                col += 1;
                up = false;
            } else {
                row -= 1;
                col += 1;
            }
        } else {
            if (row + 1 >= rowLgth) {
                col += 1;
                up = true;
            } else if (col - 1 < 0) {
                row += 1;
                up = true;
            } else {
                row += 1;
                col -= 1;
            }
        }
    }

    return output;
};