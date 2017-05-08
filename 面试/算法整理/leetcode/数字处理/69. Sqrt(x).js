/*
Implement int sqrt(int x).

Compute and return the square root of x.

 */


/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    r = x;
    while (r*r > x)
        r = ((r + x/r) / 2) | 0;
    return r;
};