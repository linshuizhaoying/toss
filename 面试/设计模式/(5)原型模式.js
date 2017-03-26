/*
  原型模式就是将原型对象指向创建对象的类，使这些类共享原型对象的方法和属性。
  将可复用，可共享，耗时比较大的从基类中提取出来放在原型中。

 */

'use strict';

// 图片轮播类
var LoopImages = function(imgArr, container) {
  this.imagesArray = imgArr; // 轮播图片组
  this.container = container; // 轮播图片容器
};

LoopImages.prototype = {
  // 创建轮播图片
  createImages: function() {
    console.log('LoopImages createImage function');
  },

  // 切换下一张图片
  changeImage: function() {
    console.log('LoopImages changeImage function');
  }
};

// 上下滑动切换类
var SlideLoopImg = function(imgArr, container) {
  // 构造函数继承图片轮播类
  LoopImages.call(this, imgArr, container);
};

SlideLoopImg.prototype = new LoopImages();

// 重写继承的切换下一张方法
SlideLoopImg.prototype.changeImage = function() {
  console.log('SlideLoopImg changeImage function');
};

// 渐隐切换类
var FadeLoopImg = function(imgArr, container, arrow) {
  LoopImages.call(this, imgArr, container);

  // 切换剪头私有变量
  this.arrow = arrow;
};

FadeLoopImg.prototype = new LoopImages();
FadeLoopImg.prototype.changeImage = function() {
  console.log('FadeLoopImg changeImage function');
};


// 测试用例
var fadeImg = new FadeLoopImg(['a.png', 'b.png'], 'slider', '123');
console.log(fadeImg);



/**
 * 基于已经存在的模板对象克隆出新对象的模式
 *
 * 参数1，参数2，参数3...表示模板对象
 * 注意。这里对模板引用类型的属性实质上进行了浅复制（引用类型属性共享），可以根据需求自行深复制（引用类型属性复制）
 */
function prototypeExtend() {
  // 缓存类
  var F = function() {};

  for (var i = 0; i < arguments.length; i++) {
    // 遍历每个末班对象中的属性
    for (var j in arguments[i]) {
      // 将属性复制到缓存类原型中
      F.prototype[j] = arguments[i][j];
    }
  }

  // 返回缓存类的一个实例
  return new F();
}

var penguin = prototypeExtend({
  speed: 20,
  swim: function() {
    console.log('游泳速度'+ this.speed);
  }
},{
  run: function(speed) {
    console.log('奔跑速度'+ speed)
  }
}, {
  jump: function() {
    console.log('跳跃动作');
  }
});

penguin.swim();
penguin.run(10);
penguin.jump();

console.log(penguin.__proto__);
