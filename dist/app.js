!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist",e(e.s=7)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(4),o=i(r),a=n(2),s=i(a);!function(){var t={orientation:0,dpi:2,fixSize:!0,height:window.innerHeight,width:window.innerWidth,renderOptions:{antialias:!0,backgroundColor:11382189}};Tiny.app=new Tiny.Application(t),{init:function(){console.log("init"),this.resourceLoad()},resourceLoad:function(){var t=[];for(var e in s.default)t.push(s.default[e]);var n=document.getElementById("progress"),i=document.getElementById("percent");Tiny.Loader.run({resources:t,onProgress:function(t,e){console.log("percent:",t+"%",e.name);var r=~~t;i.innerHTML=r+"%",n.style.width=r+"%"},onAllComplete:function(){console.log("all complete");var t=document.body;t.removeChild(i),t.removeChild(n.parentNode),Tiny.app.run(new o.default)}})}}.init()}()},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=function(t){function e(t){i(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.render=function(){for(var t=0;t<n.foodNum;t++){var e=null,i=Math.round(7*Math.random()),r=Tiny.WIN_SIZE.height;e=/png/.test(n.color[i])?n.drawSprite(i):n.drawCircle(i);var o=Math.abs(Tiny.WIN_SIZE.width/2-e.x),a=Math.abs(Tiny.WIN_SIZE.height/2-e.y);Math.sqrt(Math.pow(o,2)+Math.pow(a,2))<=20||e.position.y>r-260?t--:n.addChild(e)}n.layer.addChild(n)},n.drawCircle=function(t){var e=n.randomPos(),i=e.x,r=e.y,o=n.foodConfig,a=o.maxR,s=o.minR,u=(a-s)*Math.random()+s,c=new Tiny.Graphics;return c.beginFill(n.color[t%n.color.length]),c.drawCircle(0,0,u),c.setPosition(i,r),c.endFill(),c},n.randomPos=function(){var t=Tiny.WIN_SIZE,e=t.width,i=t.height,r=n.foodConfig.maxR;return{x:Math.random()*(e-2*r)+2*r,y:Math.random()*(i-2*r)+2*r}},n.layer=t,n.foodNum=30,n.foodConfig={maxR:12,minR:4},n.color=[14204888,6591981,8388522,16747520,8421504,10506797,13047173,"res/images/star.png"],n.render(),n}return o(e,t),a(e,[{key:"drawSprite",value:function(t){var e=this.randomPos(),n=e.x,i=e.y,r=Tiny.Texture.fromImage(this.color[t]),o=new Tiny.Sprite(r);return o.setPosition(n,i),o.setScale(.06),o.setAnchor(.5),o}}]),e}(Tiny.Container);e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={"s_Tiny.js_png":"res/images/Tiny.js.png"}},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(5),s=function(t){return t&&t.__esModule?t:{default:t}}(a),u=n(6),c=function(t){function e(t){i(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.initSnake=function(){for(var t=0;t<n.initLength;t++){var e=0===t&&"res/images/head.png"||"res/images/part.png",i=n.createSprite(e);0===t&&i.setScale(.35,.35),n.addChild(i),n.snakeBody.push(i)}n.layer.addChild(n)},n.createSprite=function(t){var e=Tiny.Texture.fromImage(t),n=new Tiny.Sprite(e);return n.setPosition(Tiny.WIN_SIZE.width/2,Tiny.WIN_SIZE.height/2),n.setScale(.3),n.setAnchor(.5),n.setRotation(Tiny.deg2radian(90)),n},n.run=function(t){if(n.running){var e=n.snakeConfig,i=e.distanceX,r=e.distanceY,o=n.children[0].width,a=o/2,s=Math.floor(o/n.speed);n.snakeBody.forEach(function(e,o){if(0===o){var u=180+Math.atan2(r,i)/(Math.PI/180)-90;return e.setRotation(Tiny.deg2radian(u)),e.x>Tiny.WIN_SIZE.width-a||e.y>Tiny.WIN_SIZE.height-a||e.x<a||e.y<a?(n.running=!1,void n.alert.alert("杯具, 您撞墙了, 大侠请重新来过.",function(){location.reload()})):(e.setPosition(e.x+i,e.y+r),n.path.unshift({x:e.x,y:e.y}),n.eat(t),!0)}n.path.length>=o*s&&n.path[o*s-1]&&e.setPosition(n.path[o*s-1].x-i,n.path[o*s-1].y-r)}),n.path.length>n.snakeBody.length*s&&n.path.pop()}},n.eat=function(t){var e=n.snakeBody[0],i=t.children;if(!i.length){n.running=!1;var r=(Tiny.ticker.shared.lastTime/1e3).toFixed(0);return void n.alert.alert("您用时"+r+"s吃完所有食物,再接再厉哦~",function(){window.location.reload()})}i.forEach(function(i){var r=Math.abs(e.x-i.x),o=Math.abs(e.y-i.y);if(Math.sqrt(Math.pow(r,2)+Math.pow(o,2))<e.width/2+t.foodConfig.maxR+5){t.removeChild(i);var a=n.snakeBody[n.snakeBody.length-1],s=n.createSprite("res/images/part.png");s.setPosition(a.x,a.y),n.snakeBody.push(s),n.addChild(s)}})},n.layer=t,n.initLength=4,n.speed=5,n.snakeConfig={distanceX:n.speed,distanceY:0},n.path=[],n.snakeBody=[],n.running=!0,n.initSnake(),new s.default(function(t){var e=t.cos,i=t.sin;e&&i&&(n.snakeConfig.distanceX=-n.speed*e,n.snakeConfig.distanceY=-n.speed*i)}),n.alert=new u.Alert(Tiny.app,"再来过"),n}return o(e,t),e}(Tiny.Container);e.default=c},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(3),u=i(s),c=n(1),l=i(c),h=function(t){function e(){r(this,e);var t=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.food=new l.default(t),t.snake=new u.default(t),Tiny.app.onUpdate(function(){if(t.snake.running){var e=(Tiny.ticker.shared.lastTime/1e3).toFixed(0);document.querySelector(".js-game-time").innerHTML="游戏时间: "+e+"s",t.snake.run(t.food),t.snake.dust&&t.snake.dust.update()}}),t}return a(e,t),e}(Tiny.Container);e.default=h},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function t(e){var n=this;i(this,t),this.bindEvent=function(){n.con.addEventListener(""+(n.isMobile&&"touchstart"||"mousedown"),function(t){n.flag=!0}),n.joy.addEventListener(""+(n.isMobile&&"touchmove"||"mousemove"),function(t){t.preventDefault()}),document.addEventListener(""+(n.isMobile&&"touchmove"||"mousemove"),function(t){if(n.flag){t.preventDefault();var e=n.isMobile&&t.touches[0]||t,i=e.pageX,r=e.pageY,o=i-n.joy_x-(n.con_x+n.con_r),a=r-n.joy_y-(n.con_y+n.con_r),s=n.joy_r-n.con_r,u=Math.sqrt(Math.pow(o,2)+Math.pow(a,2)),c=n.calc(o,a);n.callback(c),n.con.style.cssText=u>s?"left:"+(-s*c.cos+n.joy_r)+"px;top:"+(-s*c.sin+n.joy_r)+"px;":"left:"+(i-n.joy_x)+"px;top:"+(r-n.joy_y)+"px;"}}),document.addEventListener(""+(n.isMobile&&"touchend"||"mouseup"),function(t){n.flag=!1,n.con.style.cssText="left:50%;top:50%",n.callback({x:0,y:0})})},this.calc=function(t,e){var n=180+Math.atan2(e,t)/(Math.PI/180);return{cos:Math.cos(n*(Math.PI/180)),sin:Math.sin(n*(Math.PI/180))}},this.con=document.querySelector(".js-con"),this.joy=this.con.parentNode,this.callback=e||function(){},this.joy_x=parseInt(this.joy.offsetLeft),this.joy_y=parseInt(this.joy.offsetTop),this.con_x=parseInt(this.con.offsetLeft),this.con_y=parseInt(this.con.offsetTop),this.con_r=parseInt(this.con.offsetWidth)/2,this.joy_r=parseInt(this.joy.offsetWidth)/2,this.flag=!1,this.isMobile=/ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|win ce/i.test(navigator.userAgent),this.bindEvent()};e.default=r},function(t,e,n){/*!
 * tinyjs-plugin-ui
 * Description: Tiny.js UI plugin
 * Author: yiqi
 * Version: v0.1.5
 */
!function(e,n){t.exports=n()}(0,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/dist",e(0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);Object.defineProperty(e,"Button",{enumerable:!0,get:function(){return i(r).default}});var o=n(6);Object.defineProperty(e,"DOM",{enumerable:!0,get:function(){return i(o).default}});var a=n(7);Object.defineProperty(e,"Label",{enumerable:!0,get:function(){return i(a).default}});var s=n(8);Object.defineProperty(e,"Alert",{enumerable:!0,get:function(){return i(s).default}});var u=n(9);Object.defineProperty(e,"NinePatch",{enumerable:!0,get:function(){return i(u).default}});var c=n(10);Object.defineProperty(e,"Toast",{enumerable:!0,get:function(){return i(c).default}})},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=n(3),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=function(t){function e(t){i(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));Object.assign(n.setting,t);var o=n,a=n.setting.active,s=n.setting.text||"",u=n.setting.background,c=a.background,l=void 0;if(Tiny.isUndefined(u)&&(u=n.setting.blankBase64),Tiny.isString(u)){var h=Tiny.BaseTexture.from(u),d=new Tiny.Texture(h);u=new Tiny.Sprite(d),Tiny.BaseTexture.removeFromCache(h)}var f=u.texture,p=n.getOpacity(),y=n.getScale().x,b=n.getScale().y;if(Tiny.isString(c)){var g=Tiny.BaseTexture.from(c);l=new Tiny.Texture(g),Tiny.BaseTexture.removeFromCache(g)}n.addChild(u),Tiny.isString(s)&&(s=new Tiny.Text(s,n.setting.textStyle)),n.addChild(s),u.texture.on("update",function(){n.updatePosition(),o.emit("rendered")}),n.text=s,n.background=u,n.buttonMode=!0;var w=function(){l&&(u.texture=f),a.opacity&&o.setOpacity(p),a.scale&&o.setScale(y,b)},v=function(t){Tiny.isFunction(a.callback)&&a.callback(t)};return n.on("pointerdown",function(t){if(l&&(u.texture=l),a.opacity&&o.setOpacity(a.opacity),a.scale){var e=a.scale;Tiny.isNumber(e)&&(e={scaleX:e,scaleY:e}),o.setScale(e.scaleX,e.scaleY)}}),n.on("pointerup",w),n.on("pointermove",function(t){}),n.on("pointerupoutside",w),n.on("click",v),n.on("tap",v),n}return o(e,t),a(e,[{key:"updatePosition",value:function(t){var e=void 0,n=void 0,i=~~this.setting.width,r=~~this.setting.height,o=t||this.setting.textPosition;this.background.width=i||this.background.texture.width,this.background.height=r||this.background.texture.height;var a=this.background.width-this.text.width,s=this.background.height-this.text.height;switch(o){case 1:e=0,n=0;break;case 2:e=a/2,n=0;break;case 3:e=a,n=0;break;case 4:e=0,n=s/2;break;case 6:e=a,n=s/2;break;case 7:e=0,n=s;break;case 8:e=a/2,n=s;break;case 9:e=a,n=s;break;default:e=a/2,n=s/2}this.text.setPosition(e,n)}},{key:"value",get:function(){return this.text.text},set:function(t){this.text&&(this.text.text=t,this.updatePosition())}}]),e}(u.default);e.default=c},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(4),s=function(t){return t&&t.__esModule?t:{default:t}}(a),u=function(t){function e(){i(this,e);var t=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.interactive=!0,t.on("pointerdown",function(t){}),t.on("pointerup",function(t){}),t.on("pointermove",function(t){}),t.on("pointerupoutside",function(t){}),t}return o(e,t),e}(s.default);e.default=u},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(5),s=function(t){return t&&t.__esModule?t:{default:t}}(a),u=function(t){function e(t,n){i(this,e);var o=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.setting=new s.default,o.children=[],o.parent=null,o.stage=null,o.initialized=!1,o.dragInitialized=!1,o.dropInitialized=!1,o.dirty=!0,o.pixelPerfect=!0,o.setting.width=t||0,o.setting.height=n||0,o}return o(e,t),e}(Tiny.Container);e.default=u},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function t(){n(this,t),this.width=0,this.height=0,this.active={},this.textStyle={},this.roundRectBase64_black75="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxMzAyZGY2ZS02Y2FmLTQ5YTUtYTVkNS1jM2Q3ZTY1ZGY2YjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzQwQzQ1MDRDMDRGMTFFN0FFOEE4Qzg3QzREMDc2RjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzQwQzQ1MDNDMDRGMTFFN0FFOEE4Qzg3QzREMDc2RjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTMwMmRmNmUtNmNhZi00OWE1LWE1ZDUtYzNkN2U2NWRmNmI1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEzMDJkZjZlLTZjYWYtNDlhNS1hNWQ1LWMzZDdlNjVkZjZiNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PobBPigAAAEFSURBVHjarJXNCgFRGIaP42+j/GysEW6AcBH2UrgyK3EFlNzBhLLAEvlZ2GCPeD99o6HxO99bT02n09M08533uJR9PCDDJEEYnMAOLEAfDHntIS4bWRaUQVS9zxa0WH6P2/KsQQnUQEB9Du0pAB+YgsuzkGRF9XvSwAvGVmEOVNX/IekabDT/gIpyHnJ4NL9dREBIjrzm0ZBKhoQJQWGchEFBYYiEZ0HhbZj3gr4DCZeCwhkJB4LCAQkNbhGnIYehuYIaAkJyHM2zvAF+kPpT1gbd57aZcCX9Oug90LSrL1oYgRWIfdGJVLB10DFlrxrbvAJy3N4xS3nQh59zSxt2V8BVgAEA0AAwNCQbWm0AAAAASUVORK5CYII=",this.roundRectBase64_white="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhBMkZEMEVCQkUxODExRTdBQ0IzRDUwNDhFRTNGQTg4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhBMkZEMEVDQkUxODExRTdBQ0IzRDUwNDhFRTNGQTg4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEEyRkQwRTlCRTE4MTFFN0FDQjNENTA0OEVFM0ZBODgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEEyRkQwRUFCRTE4MTFFN0FDQjNENTA0OEVFM0ZBODgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5j8e8ZAAAA4UlEQVR42qyUXQqCQBRG1cD2UEFQq2gXVtaLq6hd6GstI6j2EQS9RlhQuIXyZfouXGH8K3TuB2cYh7kHZcZrK6WsirjAYyagB1LwBGewB0dey4eEBabgqv6H9syK9fpDB4SqeUKuLQnbyHRpTugr85DDsjHQAdzAwDLLC4wcDAsBGaUPlg5fDal49Ml3TIZCwgcJ35h0hYSpU3nbDULCRNCXkPAiKDyR8CAoPEhf7HF2KGuBt1uBj94cIoP/OKprX5sWsm1d+8qYN2iw/q8Gq+OCAOxADFIm5rWA95RqvwIMAKI2aIgZcds+AAAAAElFTkSuQmCC",this.blankBase64="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM3RDMwODAzQUM4RTExRTc4MDNEQTZGQ0E2MjgxNEFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM3RDMwODA0QUM4RTExRTc4MDNEQTZGQ0E2MjgxNEFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzdEMzA4MDFBQzhFMTFFNzgwM0RBNkZDQTYyODE0QUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzdEMzA4MDJBQzhFMTFFNzgwM0RBNkZDQTYyODE0QUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Iqam2AAAAEElEQVR42mL4//8/A0CAAQAI/AL+26JNFgAAAABJRU5ErkJggg=="};e.default=i},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){var e=document.createElement("template"),n=document.createElement("span");e.innerHTML=t,document.body.appendChild(n),e.content?n.appendChild(e.content,n.lastElementChild):n.insertAdjacentHTML("beforeend",t),n.style.position="absolute",n.style.zIndex="-1",n.style.display="block";var i=s(n),r={width:i[0],height:i[1]};return n.parentNode.removeChild(n),r}function s(t){var e=void 0,n=[t.offsetWidth,t.offsetHeight];return n[0]||(e=t.style,"none"===e.display?(e.display="block",n=[t.offsetWidth,t.offsetHeight],e.display="none"):""===e.display&&(e.display="block",n=[t.offsetWidth,t.offsetHeight],e.display="")),n}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),c=n(4),l=function(t){return t&&t.__esModule?t:{default:t}}(c),h=function(t){function e(t){i(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));Object.assign(n.setting,t);var o=n.setting.html;return n.sprite=null,n._parseHTML(o),n}return o(e,t),u(e,[{key:"updateHTML",value:function(t){this._parseHTML(t,!0)}},{key:"_parseHTML",value:function(t,e){var n=this,i=a(t),r=~~this.setting.width||i.width,o=~~this.setting.height||i.height,s='\n    <svg xmlns="http://www.w3.org/2000/svg" width="'+r+'" height="'+o+'">\n      <foreignObject width="100%" height="100%">\n        <div xmlns="http://www.w3.org/1999/xhtml">'+t+"</div>\n      </foreignObject>\n    </svg>\n    ",u=new Blob([s],{type:"image/svg+xml;charset=utf-8"}),c=new FileReader;c.onload=function(){var t=Tiny.Texture.fromImage(this.result);e?n.sprite.texture=t:(n.sprite=new Tiny.Sprite(t),n.addChild(n.sprite)),n.sprite.texture.on("update",function(){n.emit("rendered")})},c.readAsDataURL(u)}}]),e}(l.default);e.default=h},function(t,e,n){"use strict";function i(t,e){var n={};for(var i in t)e.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),c=n(3),l=function(t){return t&&t.__esModule?t:{default:t}}(c),h=function(t){function e(t){r(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.defaultSetting={text:"",width:0,height:0},n.settings=Object.assign({},n.defaultSetting,t||{}),n.render(),n}return a(e,t),u(e,[{key:"render",value:function(){var t=this.settings,e=t.text,n=t.width,r=t.height,o=(t.wordWrap,t.breakWords,t.wordWrapWidth,i(t,["text","width","height","wordWrap","breakWords","wordWrapWidth"])),a=s({wordWrap:n&&!0||!1,breakWords:n&&!0||!1,wordWrapWidth:n},o);if(this.text=new Tiny.Text(e,a),r&&n){var u=new Tiny.Graphics;u.lineStyle(0),u.beginFill(16777215),u.drawRect(0,0,n,r),u.endFill(),this.mask=u}this.addChild(this.text)}}]),e}(l.default);e.default=h},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(3),c=i(u),l=n(7),h=i(l),d=n(2),f=i(d),p=n(9),y=i(p),b=function(t){function e(t,n){r(this,e);var i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i.stage=t&&t.stage||null,i.buttonText=n||"关闭",i.DPI=Tiny.config.dpi,i.PADDING=40*i.DPI,i.CONTENT_FONTSIZE=16*i.DPI,i.BTN_FONTSIZE=14*i.DPI,i.MIN_HEIGHT=50*i.DPI,i.MAX_WIDTH=.8*Tiny.WIN_SIZE.width,i}return a(e,t),s(e,[{key:"render",value:function(t){this.removeChildren(0,this.children.length),this.label=this.drawLabel(t),this.roundRect=this.drawRoundRect(),this.btn=this.drawButton(),this.updatePosition()}},{key:"drawLabel",value:function(t){var e=new h.default({text:t,fill:"0x333333",fontSize:this.CONTENT_FONTSIZE,width:this.MAX_WIDTH-this.PADDING});return this.addChild(e),e}},{key:"drawRoundRect",value:function(){var t=this.getLocalBounds(),e=t.height,n=e>this.MIN_HEIGHT&&e+this.PADDING||this.MIN_HEIGHT+this.PADDING,i=Tiny.BaseTexture.from(this.setting.roundRectBase64_white),r=new Tiny.Texture(i),o=new y.default(r,this.MAX_WIDTH,n,[10,10,1,1]);return Tiny.BaseTexture.removeFromCache(i),this.addChild(o),o}},{key:"drawButton",value:function(){var t=this,e=new f.default({text:this.buttonText,textStyle:{fill:"0x108EE9",fontSize:this.BTN_FONTSIZE},active:{opacity:.5,callback:function(){t.stage&&t.stage.removeChild(t),t.callback&&t.callback()}}});return this.addChild(e),e}},{key:"updatePosition",value:function(){var t=this.roundRect,e=t.width,n=t.height,i=Tiny.WIN_SIZE;this.btn.setPosition(this.MAX_WIDTH-this.btn.width,n-this.btn.height),this.label.setPosition(this.MAX_WIDTH/2-this.label.width/2,n/2-this.label.height/2-5*this.DPI),this.setChildIndex(this.label,1),this.setPosition(i.width/2-e/2,i.height/2-n/2)}},{key:"alert",value:function(t,e){this.stage&&(this.stage.removeChild(this),this.render(t),this.stage.addChild(this),this.callback=e)}}]),e}(c.default);e.default=b},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=n(4),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=function(t){function e(t,n,o,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;i(this,e);var u=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return u._gridTexture=t,u._debugDraw=!1,u._textures=[],u._gridSprites=[],u._targetWidth=n||0,u._targetHeight=o||0,u._textureOrigFrame=new Tiny.Rectangle(0,0,u._gridTexture.width,u._gridTexture.height),u._scale9Grid=null,u._overlapPadding=s||0,u._inited=!1,u.scale9Grid=a,u._gridTexture.baseTexture.hasLoaded?u._onGridTextureUpdate():u._gridTexture.once("update",u._onGridTextureUpdate,u),u}return o(e,t),a(e,[{key:"_onGridTextureUpdate",value:function(){this._init(),this._update()}},{key:"_init",value:function(){if(!this._inited){this._inited=!0;for(var t=0;t<9;t++){var e=new Tiny.Texture(this._gridTexture,new Tiny.Rectangle(0,0,this._gridTexture.width,this._gridTexture.height),new Tiny.Rectangle(0,0,this._gridTexture.width,this._gridTexture.height),null,0);this._textures.push(e);var n=new Tiny.Sprite(e);n.visible=!1,this._gridSprites.push(n),this.addChild(n)}}}},{key:"resize",value:function(t,e){this._targetWidth=t,this._targetHeight=e,this._update(t,e)}},{key:"_update",value:function(){if(this._gridTexture&&this._gridTexture.baseTexture.hasLoaded&&this._inited){(this.width<this._gridTexture.width||this.height<this._gridTexture.height)&&console.warn("九宫格尺寸设置异常，尺寸不能小于素材尺寸");for(var t=Math.max(this.width,this._gridTexture.width),e=Math.max(this.height,this._gridTexture.height),n=this._scale9Grid,i=n[0],r=Math.max(0,n[2]),o=Math.max(0,this._gridTexture.width-i-r),a=n[1],s=Math.max(0,n[3]),u=Math.max(0,this._gridTexture.height-a-s),c=[i,r,o],l=[0,i,i+r],h=[a,s,u],d=[0,a,a+s],f=this.overlapPadding,p=0;p<3;p++)for(var y=0;y<3;y++){var b=3*p+y,g=this._gridSprites[b],w=new Tiny.Rectangle(l[y],d[p],c[y],h[p]);if(w.width>0&&w.height>0){var v=0===y||2===y?c[y]:Math.max(0,t-c[0]-c[2]),_=0===p||2===p?h[p]:Math.max(0,e-h[0]-h[2]),m=0===y?0:1===y?c[0]:Math.max(0,t-c[2]),T=0===p?0:1===p?h[0]:Math.max(0,e-h[2]);v>0&&_>0?(this._textures[b].frame=w,g.anchor.set(0,0),g.x=m-y*f,g.y=T-p*f,g.alpha=this._debugDraw?.1+.05*b:1,g.width=v,g.height=_,g.visible=!0):g.visible=!1}else g.visible=!1}this.emit("resize")}}},{key:"debug",get:function(){return this._debugDraw},set:function(t){this._debugDraw=t,this._update()}},{key:"scale9Grid",get:function(){return this._scale9Grid},set:function(t){if(t){var e="string"==typeof t?t.split(","):t;if(4!==e.length)return void console.error("error scale9Grid format",t);e=e.map(function(t){return parseFloat(t)}),this._scale9Grid=e}else this._scale9Grid=[0,0,0,0];this._update()}},{key:"width",get:function(){return this._targetWidth||this._gridTexture.width},set:function(t){this._targetWidth=t,this._update()}},{key:"height",get:function(){return this._targetHeight||this._gridTexture.height},set:function(t){this._targetHeight=t,this._update()}},{key:"overlapPadding",get:function(){return this._overlapPadding},set:function(t){this._overlapPadding=+t||0,this._update()}}]),e}(u.default);e.default=c},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(3),c=i(u),l=n(7),h=i(l),d=n(9),f=i(d),p=function(t){function e(t,n){r(this,e);var i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i.stage=t&&t.stage||null,i.autoHideTime=n||2e3,i.DPI=Tiny.config.dpi,i.PADDING=20*i.DPI,i.CONTENT_FONTSIZE=16*i.DPI,i.MIN_HEIGHT=20*i.DPI,i.MAX_WIDTH=.4*Tiny.WIN_SIZE.width,i.MIN_WIDTH=.3*Tiny.WIN_SIZE.width,i.bindEvent(),i}return a(e,t),s(e,[{key:"bindEvent",value:function(){var t=this;this.on("pointerdown",function(e){t.stage&&t.stage.removeChild(t)})}},{key:"render",value:function(t){this.removeChildren(0,this.children.length),this.label=this.drawLabel(t),this.roundRect=this.drawRoundRect(),this.updatePosition()}},{key:"drawLabel",value:function(t){var e=new h.default({text:t,fill:"0xffffff",fontSize:this.CONTENT_FONTSIZE,width:this.MAX_WIDTH});return this.addChild(e),e}},{key:"drawRoundRect",value:function(){var t=this.getLocalBounds(),e=t.width,n=t.height,i=n>this.MIN_HEIGHT&&n+this.PADDING||this.MIN_HEIGHT+this.PADDING,r=this.PADDING;e>this.MAX_WIDTH?r+=this.MAX_WIDTH:e<this.MIN_WIDTH?r+=this.MIN_WIDTH:r+=e;var o=new f.default(Tiny.Sprite.fromImage(this.setting.roundRectBase64_black75).texture,r,i,[10,10,1,1],0);return this.addChild(o),o}},{key:"updatePosition",value:function(){var t=this.roundRect,e=t.width,n=t.height,i=Tiny.WIN_SIZE;this.label.setPosition(e/2-this.label.width/2,n/2-this.label.height/2),this.setChildIndex(this.label,1),this.setPosition(i.width/2-e/2,i.height/2-n/2)}},{key:"show",value:function(t){var e=this;if(this.stage){this.stage.removeChild(this),this.render(t),this.stage.addChild(this);var n=new Tiny.ticker.CountDown({duration:this.autoHideTime,times:1});n.on("complete",function(t){e.stage.children.length&&e.stage.removeChild(e),n.destroy()}),n.start()}}}]),e}(c.default);e.default=p}])})},function(t,e,n){t.exports=n(0)}]);