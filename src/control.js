export default class joyCon {
  constructor(callback) {
    this.con = document.querySelector('.js-con');
    this.joy = this.con.parentNode;
    this.callback = callback || (() => {});
    this.joy_x = parseInt(this.joy.offsetLeft);
    this.joy_y = parseInt(this.joy.offsetTop);
    this.con_x = parseInt(this.con.offsetLeft);
    this.con_y = parseInt(this.con.offsetTop);
    this.con_r = parseInt(this.con.offsetWidth) / 2;
    this.joy_r = parseInt(this.joy.offsetWidth) / 2;
    this.flag = false;
    this.isMobile = /ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|win ce/i.test(navigator.userAgent);
    this.bindEvent();
  }

  bindEvent = () => {
    this.con.addEventListener(`${this.isMobile && 'touchstart' || 'mousedown'}`, (e) => {
      this.flag = true;
    });

    this.joy.addEventListener(`${this.isMobile && 'touchmove' || 'mousemove'}`, (e) => {
      e.preventDefault();
    });

    document.addEventListener(`${this.isMobile && 'touchmove' || 'mousemove'}`, e => {
      if(!this.flag) return;

      e.preventDefault();
      let {pageX, pageY} = this.isMobile && e.touches[0] || e;
      let x = pageX - this.joy_x - (this.con_x + this.con_r);
      let y = pageY - this.joy_y - (this.con_y + this.con_r);
      let maxDistance = this.joy_r - this.con_r;
      let c = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
      let obj = this.calc(x, y);
      this.callback(obj);
      if(c > maxDistance) {
        this.con.style.cssText = `left:${-maxDistance * obj.cos + this.joy_r}px;top:${-maxDistance * obj.sin + this.joy_r}px;`;
      } else {
        this.con.style.cssText = `left:${pageX - this.joy_x}px;top:${pageY - this.joy_y}px;`;
      }
    });

    document.addEventListener(`${this.isMobile && 'touchend' || 'mouseup'}`, e => {
      this.flag = false;
      this.con.style.cssText = `left:50%;top:50%`;
      this.callback({
        x : 0,
        y : 0
      });
    });
  };

  calc = (x, y) => {
    let _angle = 180 + Math.atan2(y, x) / (Math.PI / 180);

    return {
      cos : Math.cos(_angle * (Math.PI / 180)),
      sin : Math.sin(_angle * (Math.PI / 180))
    };
  }
}

