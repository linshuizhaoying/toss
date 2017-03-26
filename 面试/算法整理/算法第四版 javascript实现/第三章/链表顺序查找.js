var str ="Lin Shui Zhao Ying Happy And 233 666 And 666 And 666 666"
function SequentialSearchST(){
	function Node(key,val,next){
		// 为了构建符号表，让一个键个一个值联系起来。它们能高效的插入和查找。
		// 使我们能够将类型的实现和使用区分开来。
		this.key = key
		this.val = val
		this.next = next
	}

	var first = null

	return {
		get:function(key){
			for(var x = first; x!= null;x=x.next){
				if(key == x.key) return x.val
			}
		  return null // 无对应键则返回null
		},
		put:function(key,val){
			for(var x = first; x!= null;x=x.next){
				if(key == x.key){
					x.val = val
					return
				}
			}
			first = new Node(key,val,first) // 如果没有找到对应键，说明是新的内容，那么插入到链表的开头
		},
		contains:function(key){
			for(var x = first; x!= null;x=x.next){
				if(key == x.key) return true
			}
		  return false
		},
		keys:function(){
			arr = []
			for(var x = first; x!= null;x=x.next){
				arr.push(x.key)
			}
			return arr.reverse() //反转
		}
	}
}


function test(arr){
	var st = new SequentialSearchST()
	var minLen = 1
	for (var i = 0; i < arr.split(' ').length; i++) {
		var word = arr.split(' ')[i]
		if(word.length < minLen) continue
		if(!st.contains(word)){
			st.put(word,1)
		}else{
			st.put(word,st.get(word)+1)
		}
	}


  max = '';
  st.put(max, 0);
  st.keys().forEach(function(word) {
    if (st.get(word) > st.get(max)) max = word;
  })
  console.log(st)
  var output = max + ' ' + st.get(max);
  return output
}

console.log('output: ' + test(str));







