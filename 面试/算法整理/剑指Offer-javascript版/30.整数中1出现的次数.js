/*


求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数？
为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,
但是对于后面问题他就没辙了。
ACMer希望你们帮帮他,并把问题更加普遍化,可以很快的求出任意非负整数区间中1出现的次数。

当计算右数第 i 位包含的 X 的个数时：

取第 i 位左边（高位）的数字，乘以 10i−1，得到基础值 a。
取第 i 位数字，计算修正值：
如果大于 X，则结果为 a+10i−1。
如果小于 X，则结果为 a。
如果等 X，则取第 i 位右边（低位）数字，设为 b，最后结果为 a+b+1。
相应的代码非常简单，效率也非常高，时间复杂度只有 O(log10n)。

 */

function NumberOf1Between1AndN_Solution(n) {
    if (n < 0) return 0;
    var high = n,
        low, temp, cur, num = 0,
        i = 1;
    while (high != 0) {
        high = parseInt(n / Math.pow(10, i));
        temp = n % Math.pow(10, i);
        cur = parseInt(temp / Math.pow(10, i - 1));
        low = temp % Math.pow(10, i - 1);
        if (cur === 1) {
            num += high * Math.pow(10, i - 1) + low + 1;
        } else if (cur < 1) {
            num += high * Math.pow(10, i - 1);
        } else {
            num += (high + 1) * Math.pow(10, i - 1);
        }
        i++;
    }
    return num;
}
module.exports = {
    NumberOf1Between1AndN_Solution: NumberOf1Between1AndN_Solution
};
