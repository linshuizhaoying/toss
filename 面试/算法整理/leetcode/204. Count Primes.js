/*

Description:

Count the number of prime numbers less than a non-negative number, n.

 */

// 求素数集合

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let flagArray = [],
        result = 0;
    for (let i = 2; i < n; i++) {
        if (flagArray[i] === undefined) {
            // is Primes
            flagArray[i] = 1;
            result++;
            // rm it's multiples
            let j = 2;
            while (i * j < n) {
                flagArray[i * j] = 0;
                j++;
            }
        }
    }
    return result;
};


var notPrime = [];
var count = 0;
for (var i = 2; i < n; i++) {
    if (notPrime[i] == undefined) {
        count++;
        for (var j = 2; i * j < n; j++) {
            notPrime[i * j] = 1;
        }
    }
}

return count;
