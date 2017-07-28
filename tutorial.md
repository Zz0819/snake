# Tiny.js 开发感受(贪吃蛇)

### 前期准备
* 根据 Tiny 官网的开始教程构建出项目，详情[点这里~](http://tinyjs.net/#/tutorial/start)
* 如果你是 es6 的重度使用者，你可能需要自己配置一下 webpack，Tiny 默认没有引入 babel，引入步骤如下：

1. 安装 babel

  ``` bash
  npm install babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 --save-dev
  ```
2. 在根目录下创建`.babelrc`

  ``` js
  {
    "presets": ["es2015", "stage-0"]
  }
  ```
3. 修改`webpack.config.json`

  ``` js
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
  ```

至此你的项目算是创建完成了...是不是很简单呢~

### 进入正题

> 我使用 Tiny 做了一个贪吃蛇 demo，没有过于复杂的逻辑，可以帮助熟悉 Tiny 开发。

* 开始之前首先要思考的是什么是贪吃蛇游戏？
  * 玩过贪吃蛇，都知道最简单的贪吃蛇就是几个方块相连，吃食物会变长，并且蛇会向上下左右四个方向移动。

* 那如何实现最简单的贪吃蛇逻辑呢?
  * 其实很简单，在代码的世界里蛇可以看做是一个js代码里的数组我们维护一个拥有一定数量组成蛇的方块的数组，就可以表示一条蛇。而食物更简单，就是在场景内随机出现的一个点。了解了这些，我们还有个一个大问题，那就是蛇如何移动。

不卖关子了，最原始的贪吃蛇逻辑，就是将蛇数组的最后一个`item`，挪到数组的开头，并且坐标是蛇头坐标加蛇`item.width`，简单写个伪代码。

``` js
/*
 * 我们初始了一个蛇，并且蛇初始是有3个object组成，每个object拥有独立的4个属性宽，高，x，y。
 * 蛇头固定一个x，后面的每一节都比蛇头的坐标减少一个蛇身体宽度的坐标，刚好3个区块无缝连接在一起接下来就是简单的运动。
 * 将蛇数组的最后一个item拿出来，将他的x坐标设为蛇头的x加一个蛇身体的坐标并插到数组开头然后100ms执行一次，在表现上蛇就是在运动了。
 */

let snakeArr = [];
// 初始蛇由3个部分组成
for(let i = 0; i < 3; i++) {
  let snakePart = {
    width: 10,
    height: 10,
    // 这里的意思是，如果 i 为0， 则为蛇头，起始的蛇头 x 坐标为100， 其余的每个部分的坐标为蛇头减 i * 蛇身体宽度;
    x: i === 0 && 100 || (100 - 10 * i),
    y: 0,
  }

  snakeArr.push(snakePart);
}

// 接下来让蛇运动起来， 这里只演示横向
setInterval(() => {
  let last = snakeArr.pop();
  let {x, y, width} = snakeArr[0];
  last.x = x + width;
  snakeArr.unshift(last);
}, 100);
```

以上是经典贪吃蛇的实现逻辑，其他部分本文不予以实现，各位可以自行脑洞实现以下。接下来，我们来看一下这个实现的问题。

> 固然这样可以实现一个经典的贪吃蛇，但是真实出来的效果是一顿一顿的向前移动，以为我们蛇走的每一格都不能小于一个蛇身体的宽。有人可以想到，我可以将setInterval的时间间隔调小，执行的快一点。如果我们要实现一秒24帧的人眼流畅动画，那你根本不用玩了。蛇会在你没有操作就已经飞到屏幕外或者撞墙而亡。具体请自行脑洞。所以我们要做一个像素级别移动的贪吃蛇，最简单的想法是蛇的所有区块都跟随它的前一个区块移动，不就可以实现运动了呢?这样我们只需要挪动蛇头的位置，保存蛇头的运动轨迹，然后让其余部分跟随这个轨迹移动就可以了。这就是像素级贪吃蛇我的实现方式。

##### 以上是实现逻辑，逻辑部分都讲清楚了，我们现在该考虑如何讲代码转化成肉眼可以见的蛇和食物呢?

> duang! duang! duang! 接下来，我们的 Tiny 要登场了，逻辑我们有了我们总要让他能出现在我们的页面中。这部分就是 Tiny 的强项了。Tiny 项目初始化的时候，会自动创建一些文件，我们看到 `main.js` 里有这么两行

``` js
import Layer from './src/StartLayer';
// 此处省略100W行。。。
Tiny.app.run(new Layer());

// 我们不需要知道太多，只要明白，Tiny.Application 的实例有一个 run 方法，这个方法以一个 layer 场景为参数来启动。
```

##### 再看到 StartLayer，它是一个继承自`Tiny.Container`的类，我们可以这么来理解这个 layer 的概念。一个画面，里面有很多个容器。一个主容器（就是我们看到的 StartLayer），主容器内部还会有很多内容的小容器组成，比如我们贪吃蛇的蛇容器，食物容器等。所以 StartLayer 我们改造成如下：

``` js
// 引入蛇和食物layer
import Snake from './Snake';
import Food from './Food';

class Layer extends Tiny.Container {
  constructor() {
    super();
    // 初始化引入的蛇和食物
    this.food = new Food(this);
    this.snake = new Snake(this);
  }
}

export default Layer;
```

##### 接下来就是实现蛇类和食物类了。

```
// 蛇类
class Snake extends Tiny.Container {
  constructor(layer) {
    super();

    // 初始化一些蛇的参数

    // 获得 StartLayer
    this.layer = layer;
    // 蛇初始的长度
    this.initLength = 4;
    // 蛇每次调度移动的速度
    this.speed = 5;
    // 蛇身体的移动每次移动的距离
    this.snakeConfig = {
      distanceX : this.speed,
      distanceY : 0
    };
    // 蛇头的运动轨迹
    this.path = [];
    // 蛇的数组
    this.snakeBody = [];
    // 初始化蛇方法
    this.initSnake();
  }
}

export default Snake;
```

##### 接下来实现初始化蛇方法：

``` js
initSnake = () => {
  for(let i = 0; i < this.initLength; i++) {
    // 蛇头和蛇身的图片不一样
    let img = i === 0 ? 'res/images/head.png' : 'res/images/part.png';
    let part = this.createSprite(img);
    if(i === 0) {
      // 调用 spirte 的实例方法 setScale 来实现缩放到 0.35
      part.setScale(0.35， 0.35);
    }
    // 将这个蛇绘制到 snake 这个容器中，我们就能在页面上看到了
    this.addChild(part);
    // 这里自己维护了一个蛇数组，其实可以通过 layer 的 children 成员来获得所有场景中的精灵实例
    this.snakeBody.push(part);
  }
  // 最后将整个蛇，渲染到 StartLayer 中
  this.layer.addChild(this);
};

createSprite = (img) => {
  // 使用fromImage来加载纹理
  let texture = Tiny.Texture.fromImage(img);
  // 将纹理贴到精灵上
  let part = new Tiny.Sprite(texture);
  // 设置所有 part 初始的属性
  part.setPosition(Tiny.WIN_SIZE.width / 2, Tiny.WIN_SIZE.height / 2);
  part.setScale(0.3);
  part.setAnchor(0.5);
  // 因为蛇最开始是横向沿 x 轴移动，贴图默认 0 度，蛇眼睛会朝上，所以旋转 90 度。
  part.setRotation(Tiny.deg2radian(90));
  return part;
};

```
这里使用 texture 来创建蛇，因为`Graphics`目前渲染可能会有性能问题，最好使用文理来处理，同时将所有蛇身体的起始点定在视窗的中心点，意思是蛇初始的时候，是从同一个点开始。

##### 蛇类应该会有一个 run 和 eat 方法，也就是吃和运动。

```
run = (food) => {
  let {distanceX， distanceY} = this.snakeConfig;
  let R = this.children[0].width;
  let r = R / 2;
  // 这个参数比较难理解，表面开来是在这个 speed 下，多久能跑完一个 R 的距离
  let block = Math.floor(R / this.speed);
  this.snakeBody.forEach((item， idx) => {
    // 蛇头
    if(idx === 0) {
      // 通过蛇每次想蛇头 xy 坐标要移动的距离，算出蛇头旋转的角度
      let ang = 180 + Math.atan2(distanceY, distanceX) / (Math.PI / 180) - 90;
      // 通过这个角度算出蛇头应该旋转多少弧度， 这里是修复蛇头在移动过程中方向贴图方向不对
      item.setRotation(Tiny.deg2radian(ang));
      // 设置蛇头坐标，表示移动蛇头
      item.setPosition(item.x + distanceX, item.y + distanceY);
      // 保存蛇头的运动轨迹
      this.path.unshift({x: item.x, y: item.y});
      // 运动过程中还要吃食物
      this.eat(food);
      return true;
    }

    /*
     * 因为蛇头和蛇身是在同一个点开始开始运动，所以蛇头必须走出一个蛇身的宽度，蛇头的下一个部分才能开始运动。
     * 转换到运动轨迹的数组中，也就是说有轨迹数组中有没有当前 index * block 这个索引的路径数据，如果有就移动对应 index 的部分。
     * 下面代码（idx * block - 1）减 1 是为了让第二个关节和蛇头不要有间隙。
     * 如果刚好按照算好的 idx * block 去取，虽然代码上是对的，但代码执行还需要一定时间，会导致蛇头和第二个关节出现一定的间隙。
     * （ps：目前只是本人猜测是这个原因。）
     */
    if(this.path.length >= idx * block && this.path[idx * block - 1]) {
      item.setPosition(this.path[idx * block - 1].x - distanceX, this.path[idx * block - 1].y - distanceY);
    }
  });

  // 这块是优化， 销毁多余不用的路径数据
  this.path.length > this.snakeBody.length * block && this.path.pop();
};

eat = (food) => {
  // 获取蛇头
  let head = this.snakeBody[0];
  // 获取食物容器下所有的食物
  let foodArr = food.children;

  foodArr.forEach(item => {
    // 以下的是坐标系中已知两点坐标，算出两点之间的距离，因为蛇身和食物都 setAnchor(0.5)，坐标点定位在中心点
    // 所以两点之间如果碰撞， 两点之间的距离一定是食物和蛇头半径之和
    let a = Math.abs(head.x - item.x);
    let b = Math.abs(head.y - item.y);
    // 其实就是根号下 a 方+b 方
    var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    // 如上逻辑
    if(c < head.width / 2 + food.foodConfig.maxR + 5) {
      // 食物从食物的容器中 remove 掉
      food.removeChild(item);
      // 获取蛇最后一个身体
      let lastItem = this.snakeBody[this.snakeBody.length - 1];
      // 通过 createSprite 生成一个蛇身的精灵实例
      let part = this.createSprite('res/images/part.png');
      // 设置精灵实例的坐标
      part.setPosition(lastItem.x, lastItem.y);
      // 将其添加到自己维护的数组中
      this.snakeBody.push(part);
      // 最后套路，添加到蛇 layer 中，以展示
      this.addChild(part);
    }
  });
}
```

##### 以上就基本完成了蛇类的实现。这里并没有使用 Tiny 的碰撞检测，因为需求简单。推荐大家使用 Tiny 实现的碰撞检测。

```
// 食物类
class Food extends Tiny.Container {
  constructor(layer) {
    super();

    // 套路获取 StartLayer
    this.layer = layer;
    // 渲染食物的数量
    this.foodNum = 30;
    // 食物的配置
    this.foodConfig = {
      maxR : 12,
      minR : 4,
    };
    // 食物的颜色，以及特殊食物的贴图
    this.color = [
      0xD8BFD8,
      0x6495ED,
      0x7FFFAA,
      0xFF8C00,
      0x808080,
      0xA0522D,
      0xC71585,
      'res/images/star.png',
    ];

    this.render();
  }
}
```

##### 实现 render 方法

```
render = () => {
  // 通过初始化的参数渲染出食物
  for(let i = 0; i < this.foodNum; i++) {
    let food = null;
    // 随机食物颜色
    let index = Math.round(Math。random() * 7);
    // 简单判断当前索引是什么类型 png 贴图就创建精灵类， 如果是颜色就通过 Graphics 绘制普通食物。
    if(/png/.test(this.color[index])) {
      food = this.drawSprite(index);
    } else {
      food = this.drawCircle(index);
    }
    // 将食物添加到食物的 layer 容器中，以展示。
    this.addChild(food);
  }
  // 将食物容器添加到 StartLayer。
  this.layer.addChild(this);
};

drawSprite(idx) {
  let {x， y} = this.randomPos();
  let texture = Tiny.Texture.fromImage(this.color[idx]);
  let food = new Tiny.Sprite(texture);
  food.setPosition(x, y);
  food.setScale(0.06);
  food.setAnchor(0.5);

  return food;
}

// 这里注意一下， 有没有发现这和原生 canvas api 完全一致?
drawCircle = (idx) => {
  let {x, y} = this.randomPos();
  let {maxR, minR} = this.foodConfig;
  let r = (maxR - minR) * Math.random() + minR;
  let food = new Tiny.Graphics();
  food.beginFill(this.color[idx % this.color.length]);
  food.drawCircle(0, 0, r);
  food.setPosition(x, y);
  food.endFill();

  return food;
};

// 这里贴上弱爆的 random 坐标方法。
randomPos = () => {
  let {width, height} = Tiny.WIN_SIZE;
  let {maxR} = this.foodConfig;
  return {
    x : Math.random() * (width - 2 * maxR) + 2 * maxR,
    y : Math.random() * (height - 2 * maxR) + 2 * maxR
  }
};
```
不得不说 Tiny 的 graphics 和 canvas 原生 api 完全一致，无上手成本，放心撸代码吧。

##### 食物类和蛇类我们都实现好了，现在我们需要让蛇动起来。

```
/*
 * 我们可以通过最挫的 setInterval 定时的去调用蛇类的 run 成员方法，但是这是十分不精确的。至于为什么不精确，请自行 google，setInterval 的运行机制。
 * 其实这里 Tiny 提供了一个游戏的主调度， 按照一秒60帧去不断的调用你的代码。
 */
Tiny.app.onUpdate(() => {
  let time = (Tiny.ticker.shared.lastTime / 1000).toFixed(0);
  document.querySelector('.js-game-time').innerHTML = `游戏时间: ${time}s`;
  this.snake.run(this.food);
});
```

在我们的主容器 StartLayer 中，使用 Tiny 的`onUpdate`方法，这是 Tiny 的主调度，该方法接受一个函数为参数，会定时执行这个函数。我们只需要将蛇类的 run 方法在这里调用就可以了。

同时你可以通过`Tiny.ticker`获取当前主调度的各种时间参数。比如这里获取了已经执行了多久了。

> 现在我们已经基本完成了贪吃蛇开发的 60%，还有 40%的内容是摇杆功能，这里就不再讲了。有兴趣的同学，可以在 github 上看看 control 的实现。上面的代码省略了部分处理逻辑，详情请移步 github;

奉上 github 地址: [传送门](https://github.com/Zz0819/snake)

初次体验Tiny开发，整体开发还是挺顺利的，没有什么特别难懂的地方。有不明白的多拿捏一下文档，就能发现解决办法。

以上

作者-遥清






