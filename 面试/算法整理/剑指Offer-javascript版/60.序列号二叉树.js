/*
请实现两个函数，分别用来序列化和反序列化二叉树
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
var arr = []; //数组要公用，不能每次都重复
function Serialize(pRoot)
{
    //方法一：返回得到树的前序和中序数组，结合题六进行重建
    //方法：根据特殊的标记进行解析
        //典型的前序遍历树，先处理自己再处理左边，最后处理右边
    if(pRoot==null){
        arr.push("a");  //null插入特殊符号
    }else{
        arr.push(pRoot.val);
        Serialize(pRoot.left);
        Serialize(pRoot.right);
    }
      //序列化后的数组，为反序列化准备
}
     
 
function Deserialize(){
    var node = null;
    if(arr.length<1){
        return null;
    }
    var number = arr.shift();
    if(typeof number=="number"){  //避开特殊符号a          
            node= new TreeNode(number);  //在创建每一个节点的同时，给她的左右子节点赋值
            node.left=Deserialize(arr);
            node.right=Deserialize(arr);
        }
    return node;
}

module.exports = {
    Serialize : Serialize,
    Deserialize : Deserialize
};