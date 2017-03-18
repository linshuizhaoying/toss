//数组实现栈

function Stack() {
    this.items = []
    this.size = 0
}
Stack.prototype = {
    constructor: Stack, //重写整个Prototype的时候不会有constructor，因此要自己重写指向
    push: function(data) {
        this.items[this.size++] = data //`后置运算`先算结果再运算本身,即先赋值再增加长度
    },
    pop: function() {
        this.size-- //需要手动减小
        return this.items.pop()
    },
    clear: function() {
        this.items = []
        this.size = 0
    },
    peek: function() { // 这个方法主要是在Java里，查看栈顶的元素但是不移动它
        return this.items[this.size - 1]
    },
    empty: function() {
        return this.size === 0
    },
    length: function() {
        return this.items.length
    }

}

var stack = new Stack();
stack.push('k');
stack.push('b');
console.log(stack.peek()); //输出b
stack.pop();
console.log(stack.peek()); //输出k


//链表实现
function Stack() {
    this.top = null;
    this.size = 0;
}
Stack.prototype = {
    constructor: Stack,
    push: function(data) {
        var node = {
            data: data,
            next: null
        };
        node.next = this.top;
        this.top = node;
        this.size++;
    },
    pop: function() {
        if (this.top === null) {
            return null;
        }
        var out = this.top;
        this.top = this.top.next;
        if (this.size > 0) {
            this.size--;
        }
        return out.data;
    },
    perk: function() {
        return this.top === null ? null : this.top.data;
    },
    clear: function() {
        this.top = null;
        this.size = 0;
    }
}
