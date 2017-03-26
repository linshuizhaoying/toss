/*

请实现一个函数按照之字形打印二叉树，
即第一行按照从左到右的顺序打印，
第二层按照从右至左的顺序打印，
第三行按照从左到右的顺序打印，
其他行以此类推。

 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
 
function Print(root)
{
    var queue = [];
    var result= [];
     
    if(root==null){
        return result ;
    }
    var nextLevel = 0;//用于控制下一层的个数
    queue.push(root);//核心的思路就是tree的遍历后将节点放入队列中。所以上面的点会在队列靠前的位置
    var toBePrinted = 1;//用于控制本层还剩余的数目
    var level = 0;  //用于控制在那哪一行
    var arr = [];  //用于记录每一层的数据
     
    while(queue.length){
         
         
        var temp =queue.shift();  //打印过后的点会被从队列中移除
        toBePrinted--;  
        arr.push(temp.val);
         
         
        if(temp.left){
            queue.push(temp.left);
            nextLevel++;
        }
        if(temp.right){
            queue.push(temp.right);
            nextLevel++;
        }
        if(toBePrinted==0){//马上进入下一行
             
             
            toBePrinted=nextLevel;
            nextLevel=0;
            level++;
            if(level%2==0){
                arr.reverse();   //在偶数行的时候对每行的数据翻转顺序
            }  
            result.push(arr);
            arr=[];  //每次换行过后再把这个数据清空
        }      
    }   
    return result;
    // write code here
}
module.exports = {
    Print : Print
};
