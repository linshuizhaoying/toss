/*

Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

 */

// 大数相加，从末尾开始加，然后把进位保存。
// 补0将字符串长度一致

 var total = '';
    var remainder = 0;
    var num1Length = num1.length;
    var num2Length = num2.length;
  
    var diff = Math.abs(num1Length - num2Length);
    // Pad smaller number with 0's to give equal string length
    for (var i=0; i < diff; i++) {
      if (num1Length > num2Length)
        num2 = '0' + num2;
      else
        num1 = '0' + num1;
    }
    
    var maxLength = Math.max(num1Length, num2Length);
    for (i = maxLength - 1; i >= 0; i--) {
        var digit1 = num1[i] || 0;
        var digit2 = num2[i] || 0;
        var sum = (parseInt(digit1) + parseInt(digit2) + parseInt(remainder)).toString();
        
      	// Two digits
        if (sum.length > 1) {
            remainder = sum.charAt(0);
            sum = sum.charAt(1);
        }   
        // Single digit (no remainder)
        else {
            remainder = 0;
        }
        total = sum + total;
    }
  
    // If anything remaining, append it
    if (remainder > 0)
        total = remainder.toString() + total;
    
    return total;