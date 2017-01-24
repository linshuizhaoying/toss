function spalt(fun){
	return function(array){
		return fun.apply(null,array)
	}
}

var addTwoInt = spalt(function(x,y){return x + y })
addTwoInt([1,2])  // 4
