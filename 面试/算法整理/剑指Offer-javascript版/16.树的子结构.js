/*


输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）

 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function traverse(pRoot,array){
    if(pRoot){
        array.push(pRoot.val);
        traverse(pRoot.left,array);
        traverse(pRoot.right,array);
    }
}


function HasSubtree(pRoot1, pRoot2)
{
    if(!pRoot2)return false;
    if(!pRoot1)return false;
    var tary1=[],tary2=[];
    traverse(pRoot1,tary1);
    traverse(pRoot2,tary2);
    if(tary1.toString().indexOf(tary2.toString()) > 0){
    	return true
    }else{
    	return false
    }
    
     
}

module.exports = {
    HasSubtree: HasSubtree
};
