class Food extends Tiny.Container {
  constructor(layer) {
    super();

    this.layer = layer;
    this.foodNum = 30;
    this.foodConfig = {
      maxR : 12,
      minR : 4
    };
    this.color = [
      0xD8BFD8,
      0x6495ED,
      0x7FFFAA,
      0xFF8C00,
      0x808080,
      0xA0522D,
      0xC71585,
      'res/images/star.png'
    ];

    this.render();
  }

  render = () => {
    for(let i = 0; i < this.foodNum; i++) {
      let food = null;
      let index = Math.round(Math.random() * 7);
      let {height} = Tiny.WIN_SIZE;
      if(/png/.test(this.color[index])) {
        food = this.drawSprite(index);
      } else {
        food = this.drawCircle(index);
      }
      let a = Math.abs(Tiny.WIN_SIZE.width / 2 - food.x);
      let b = Math.abs(Tiny.WIN_SIZE.height / 2 - food.y);
      let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
      //防止蛇一出生就吃到食物
      if(c <= 20 || food.position.y > height - 130 * 2) {
        i--;
        continue;
      }

      this.addChild(food);
    }

    this.layer.addChild(this);
  };

  drawSprite(idx) {
    let {x, y} = this.randomPos();
    let texture = Tiny.Texture.fromImage(this.color[idx]);
    let food = new Tiny.Sprite(texture);
    food.setPosition(x, y);
    food.setScale(0.06);
    food.setAnchor(0.5);

    return food;
  }

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

  randomPos = () => {
    let {width, height} = Tiny.WIN_SIZE;
    let {maxR} = this.foodConfig;
    return {
      x : Math.random() * (width - 2 * maxR) + 2 * maxR,
      y : Math.random() * (height - 2 * maxR) + 2 * maxR
    }
  };
}

export default Food;
