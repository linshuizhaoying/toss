// 链表是一种递归的数据结构，它或者为空(null)，或者指向一个结点的引用(node)
// 该结点含义一个元素和指向另一条链表的引用。
// 
// 在表头插入结点：将首结点first保存在oldfirst中，将一个新结点赋予给first，并将它item设为Null,next设置为oldfirst
// 从表头删除结点：将first指向first.next
// 在表尾插入结点:
// 新建一个结点指向最后一个结点 
// // node oldlast = last
// 创建新的尾结点
// last = new Node()
// last.item = "new Element"
// 将尾链接指向新链接
// oldlast.next = last

var node = {
	data:data,
	next:null
}