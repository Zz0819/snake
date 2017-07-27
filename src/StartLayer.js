import Snake from './Snake';
import Food from './Food';

class Layer extends Tiny.Container {
  constructor() {
    super();
    this.food = new Food(this);
    this.snake = new Snake(this);

    Tiny.app.onUpdate(() => {
      let time = (Tiny.ticker.shared.lastTime / 1000).toFixed(0);
      document.querySelector('.js-game-time').innerHTML = `游戏时间: ${time}s`;
      this.snake.run(this.food);
    });
  }
}

export default Layer;
