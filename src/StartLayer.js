import Snake from './Snake';
import Food from './Food';

class Layer extends Tiny.Container {
  constructor() {
    super();
    this.food = new Food(this);
    this.snake = new Snake(this);

    Tiny.app.onUpdate(() => {
      if(this.snake.running) {
        let time = (Tiny.ticker.shared.lastTime / 1000).toFixed(0);
        document.querySelector('.js-game-time').innerHTML = `游戏时间: ${time}s`;
        this.snake.run(this.food);
        this.snake.dust && this.snake.dust.update();
      }
    });
  }
}

export default Layer;
