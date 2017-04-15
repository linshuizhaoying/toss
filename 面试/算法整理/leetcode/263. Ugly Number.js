/*

Write a program to check whether a given number is an ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

Note that 1 is typically treated as an ugly number.

 */

var isUgly = function(num) {
if (num === 1) {
    return true;
  }
  if (num <= 0) {
    return false;
  }
  var mod2 = num % 2;
  var mod3 = num % 3;
  var mod5 = num % 5;
  if (mod2 && mod3 && mod5) {
    return false;
  } else if (!mod2) {
    return isUgly(num / 2);
  } else if (!mod3) {
    return isUgly(num / 3);
  } else if (!mod5) {
    return isUgly(num / 5);
  }
};
// 快
var isUgly = function(num) {
    if(num === 0) {
        return false;
    }
    
    while(true) {
        if(num % 2 === 0) {
            num /= 2;
        } else if(num % 3 === 0) {
            num /= 3;
        } else if(num % 5 === 0) {
            num /= 5
        } else if(num === 1) {
            return true;
        } else {
            return false;
        }
    }
};

//慢


for (var p of [2, 3, 5])
    while (num && num % p == 0)
        num /= p;
return num == 1;