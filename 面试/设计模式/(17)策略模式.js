/*

策略模式（Strategy）：将定义的一组算法封装起来，使其相互之间可以替换。
封装的算法具有一定独立性，不会随客户端变化而变化。

策略模式最主要的特色是创建一系列策略算法，每组算法处理的业务都是相同的，
只是处理的过程或者处理的结果不一样，所以它们又是可以相互替换的，
这样就解决了算法与使用者之间的耦合。在测试层面上讲，由于每组算法相互之间的独立性，
该模式更方便与对每组算法进行单元测试，保证算法的质量。

对于策略模式的有点可以归纳为3点

1. 策略模式封装了一组代码族，并且封装的代码相互之间独立，便于对算法的重复引用，提高了算法的复用率
2. 策略模式与继承相比，在类的继承中继承的方法是被封装在类中，因此当需求很多算法时，就不得不创建出多种类，
这样会导致算法与算法的使用者耦合在一起，不利于算法的独立演化，并且在类的外部改变类的算法难度也是极大的。
3. 同状态模式一样，策略模式也是一种优化分支判断语句的模式，采用策略模式对算法封装使得算法更利于维护。

当然，策略模式也有缺点。由于选择哪种算法的决定权在用户，所以对用户来说就必须了解每种算法的实现。
这就增加了用户的使用成本。其次，由于每种算法间相互独立，
这样对于一些复杂的算法处理相同逻辑的部分无法实现共享，这就会造成一些资源的浪费。
当然你可以通过享元模式（第十三章）来解决。

对于分支语句的优化，目前为止已经学了3种，分别为工厂方法模式，状态模式与策略模式。
对于工厂方法模式来说，它是一种创建型模式，它的最终目的是创建对象。
而状态模式与策略模式都是行为性模式，不过在状态模式中，其核心是对状态的控制来决定表现行为，
所以状态之间通常是不能相互替代的，否则将产生不同的行为结果。而策略模式核心是算法，
由于每种算法都要处理的业务逻辑相同，因此他们可以相互替换，当然策略模式并不关心使用者的环境，
因为同一种策略模式最终产出的结果是一定的。

 */

// 背景：过节商品打折，一部分商品5折出售，一部分8折出售，一部分商品9折出售，等到元旦，我们要搞一个幸运反馈活动，普通用户满100返30，高级VIP用户满100返50... 

// 价格策略对象
var PriceStrategy = (function() {
  // 内部算法对象
  var stragtegy = {

    // 100返30
    return30: function(price) {
      return +price + parseInt(price / 100) * 30;
    },

    // 满100返50
    return50: function(price) {
      return +price + parseInt(price / 100) * 50;
    },

    // 九折
    percent90: function(price) {
      return 90 / 100 * +price;
    },

    // 八折
    percent80: function(price) {
      return 80 / 100 * +price;
    },

    // 五折
    percent50: function(price) {
      return 50 / 100 * +price;
    }
  };

  // 策略算法调用接口
  return function(algorithm, price) {
    // 如果算法存在，则调用算法，否则返回false
    return stragtegy[algorithm] && stragtegy[algorithm](price);
  }
})();

var price = PriceStrategy('return50', '314.67');
console.log(price); // 464.67



var InputStrategy = (function() {
  var strategy = {
    isNumber: function(value) {
      return Object.prototype.toString.call(value) === '[object Array]';
    },
    phone: function(value) {
      return /^1[3578]\d{9}$/.test(value);
    }
  };

  return {
    check: function(type, value) {
      // 去除首尾空白符
      value = value.replace(/^\s+|\s+$/g, '');

      return strategy[type] ? strategy[type](value) : '没有该类型的检测方法';
    },

    // 添加策略
    addStrategy: function(type, fn) {
      strategy[type] = fn;
    }
  }
})();

InputStrategy.addStrategy('mail', function(value) {
  return /^(\w+)(@\w+)(\.\w+)+$/.test(value);
});

var is = InputStrategy.check('mail', 'abc@gmail.com');

console.log(is);







