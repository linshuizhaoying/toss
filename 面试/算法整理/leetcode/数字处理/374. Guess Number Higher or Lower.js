/*

We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I'll tell you whether the number is higher or lower.

You call a pre-defined API guess(int num) which returns 3 possible results (-1, 1, or 0):

-1 : My number is lower
 1 : My number is higher
 0 : Congrats! You got it!
Example:
n = 10, I pick 6.

Return 6.

 */

// 只支持java提交

// 其实就是二分法
public int guessNumber(int n) {
    int i = 1, j = n;
    while(i < j) {
        int mid = i + (j - i) / 2;
        if(guess(mid) == 0) {
            return mid;
        } else if(guess(mid) == 1) {
            i = mid + 1;
        } else {
            j = mid;
        }
    }
    return i;
}