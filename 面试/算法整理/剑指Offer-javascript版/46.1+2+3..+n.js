/*

求1+2+3+...+n，要求不能使用乘除法、
for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）

 */

function Sum_Solution(n)
{
    // write code here
    return Math.pow(n,2)+n>>1;
}
module.exports = {
    Sum_Solution : Sum_Solution
};