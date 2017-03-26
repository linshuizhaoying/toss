/*

桥接模式（Bridge）

在系统沿着多个维度变化的同时，又不增加其复杂度并已达到解耦

桥接模式先抽象提取公共部分，然后将实现和抽象通过桥接方法链接在一起，实现解耦的作用。

桥接模式主要的特点是将实现层(如元素绑定的事件)与抽象层(修饰页面UI逻辑)解耦分离，使两部分可以独立编号。

主要对结构之间的解耦。

在javascript更多的利用this的特效，this只接受直接调用者支配。

 */

var spans = document.getElementsByTagName('span');

spans[0].onmouseover = function() {
  this.style.color = 'red';
  this.style.background = '#ddd';
};
spans[0].onmouseout = function() {
  this.style.color = '#333';
  this.style.background = '#f5f5f5';
};

spans[1].onmouseover = function() {
  this.getElementsByTagName('strong')[0].style.color = 'red';
  this.getElementsByTagName('strong')[0].style.background = '#ddd';
};
spans[1].onmouseout = function() {
  this.getElementsByTagName('strong')[0].style.color = '#333';
  this.getElementsByTagName('strong')[0].style.background = '#f5f5f5';
};

// 使用桥接模式后
function changeColor(dom, color, bg) {
  dom.style.color = color;
  this.style.background = bg;
}

// 事件与业务逻辑的桥梁
spans[0].onmouseover = function() {
  changeColor(this, 'red', '#ddd');
};
spans[0].onmouseout = function() {
  changeColor(this, '#333', '#f5f5f5');
};



// 多维变量类
// 运动单元
function Speed(x, y) {
  this.x = x;
  this.y = y;
}
Speed.prototype.run = function() {
  console.log('跑起来');
};

// 着色单元
function Color(cl) {
  this.color = cl;
}
Color.prototype.draw = function() {
  console.log('绘制色彩');
};


function Ball(x, y, c) {
  // 实现运动单元
  this.speed = new Speed(x, y);
  // 实现着色单元
  this.color = new Color(c);
};
Ball.prototype.init = function() {
  // 实现运动
  this.speed.run();
  // 实现着色
  this.color.draw();
};

var a = new Ball(1,2,'red');
a.init();