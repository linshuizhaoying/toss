/*

简单工厂模式：
静态工厂方法。由一个工厂对象决定创建某一种产品对象类的实例。主要用来创建同一类对象

 */

//工厂模式

function createFactory(type,text){
	var o  = new Object()
	o.content = text
	o.show = function(){
		console.log(o.content)
	}
	if(type == 'a'){
		o.content = text + "666"
	}
	if(type == 'b'){
	  o.content = text + "888"
	}	
  return o

}

var test = createFactory('a','2333')
test.show()