import Con from './control';
import {Alert} from 'tinyjs-plugin-ui';

class Snake extends Tiny.Container {
  constructor(layer) {
    super();

    this.layer = layer;
    this.initLength = 4;
    this.speed = 5;
    this.snakeConfig = {
      distanceX : this.speed,
      distanceY : 0
    };
    this.path = [];
    this.snakeBody = [];
    this.running = true;
    this.initSnake();

    new Con((pos) => {
      let {cos, sin} = pos;
      if(cos && sin) {
        this.snakeConfig.distanceX = -this.speed * cos;
        this.snakeConfig.distanceY = -this.speed * sin;
      }
    });
    this.alert = new Alert(Tiny.app, '再来过');
  }

  initSnake = () => {
    for(let i = 0; i < this.initLength; i++) {
      let img = i === 0 && 'res/images/head.png' || 'res/images/part.png';
      let part = this.createSprite(img);
      if(i === 0) {
        part.setScale(0.35, 0.35);
      }
      this.addChild(part);
      this.snakeBody.push(part);
    }

    this.layer.addChild(this);
  };

  createSprite = (img) => {
    let texture = Tiny.Texture.fromImage(img);
    let part = new Tiny.Sprite(texture);
    part.setPosition(Tiny.WIN_SIZE.width / 2, Tiny.WIN_SIZE.height / 2);
    part.setScale(0.3);
    part.setAnchor(0.5);
    part.setRotation(Tiny.deg2radian(90));
    return part;
  };

  run = (food) => {
    if(!this.running) {
      return;
    }

    let {distanceX, distanceY} = this.snakeConfig;
    let R = this.children[0].width;
    let r = R / 2;
    let block = Math.floor(R / this.speed);
    this.snakeBody.forEach((item, idx) => {

      //蛇头
      if(idx === 0) {
        let ang = 180 + Math.atan2(distanceY, distanceX) / (Math.PI / 180) - 90;
        item.setRotation(Tiny.deg2radian(ang));
        if(item.x > Tiny.WIN_SIZE.width - r || item.y > Tiny.WIN_SIZE.height - r || item.x < r || item.y < r) {
          this.running = false;
          this.alert.alert('杯具, 您撞墙了, 大侠请重新来过.', () => {
            location.reload();
          });
          return;
        }

        item.setPosition(item.x + distanceX, item.y + distanceY);
        this.path.unshift({x: item.x, y: item.y});
        this.eat(food);
        return true;
      }

      if(this.path.length >= idx * block && this.path[idx * block - 1]) {
        item.setPosition(this.path[idx * block - 1].x - distanceX, this.path[idx * block - 1].y - distanceY);
      }
    });

    this.path.length > this.snakeBody.length * block && this.path.pop();
  };

  eat = (food) => {
    let head = this.snakeBody[0];
    let foodArr = food.children;
    if(!foodArr.length) {
      this.running = false;
      let time = (Tiny.ticker.shared.lastTime / 1000).toFixed(0);
      this.alert.alert(`您用时${time}s吃完所有食物,再接再厉哦~`, () => {
        window.location.reload()
      });

      return;
    }

    foodArr.forEach(item => {
      let a = Math.abs(head.x - item.x);
      let b = Math.abs(head.y - item.y);
      var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
      if(c < head.width / 2 + food.foodConfig.maxR + 5) {
        food.removeChild(item);
        let lastItem = this.snakeBody[this.snakeBody.length - 1];
        let part = this.createSprite('res/images/part.png');
        part.setPosition(lastItem.x, lastItem.y);
        this.snakeBody.push(part);
        this.addChild(part);
      }
    });
  }
}

export default Snake;
