/*
适配器模式

将一个类（对象）的接口（方法或属性）转化成另外一个接口，以满足用户需求。

类（对象）之间接口的不兼容问题可以通过适配器模式解决

 */

// 定义框架
var A = A || {};

// 通过id获取元素
A.g = function(id) {
  return document.getElementById(id);
};

// 背景：忽然项目中想把依赖换成jQuery，但总不能所有的方法都用jQuery的语法重新写一遍，那就写个适配器吧~
A.g = function(id) {
  // 通过jQuery获取jQuery对象，然后返回第一个成员
  return $(id).get(0);
};



// 背景：如果方法需要传入很多参数，那么记住这些参数的顺序是很难的，所以我们经常是以一个参数对象方式传入的。

function a(name, title, age, color, size, prize) {}

/*
 * obj.name: name
 * obj.title: title
 * obj.age: age
 * obj.color: color
 * obj.size: size
 * obj.prize: prize
 */

function a(obj) {}

 // 但是调用它的时候不知道传递的参数是否完整，此时我们通常的做法是用适配器来适配传入的参数对象

function a(obj) {
  var _default = {
    name: '雨夜清荷',
    title: '设计模式',
    age: '20',
    color: 'pink',
    size: 100,
    prize: 50
  };

  for (var i in obj) {
    _default[i] = obj[i] || _default[i];
  }

  // code ....
}


// 数据适配,将无语义的数据构造适配成语义化的数据结构。


function arrToObj(arr) {
  return {
    name: arr[0],
    type: arr[1],
    title: arr[2],
    data: arr[3]
  };
}

var arr = ['javascript', 'book', '前端编程语言', '12月1日'];

var obj = arrToObj(arr);

console.log(obj);
