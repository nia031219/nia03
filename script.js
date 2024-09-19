const colors = [
    "#eec996",
    "#8fb7d3",
    "#b7d4c6",
    "#c3bedd",
    "#f1d5e4",
    "#cae1d3",
    "#f3c89d",
    "#d0b0c3",
    "#819d53",
    "#c99294",
    "#cec884",
    "#ff8e70",
    "#e0a111",
    "#fffdf6",
    "#cbd7ac",
    "#e8c6c0",
    "#dc9898",
    "#ecc8ba",
    "#fff000",
  ]; //用来设置的颜色
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  let count = 1;

  var ww = window.innerWidth;
  var wh = window.innerHeight;

  var hearts = [];

  function init() {
    requestAnimationFrame(render);
    canvas.width = ww;
    canvas.height = wh;
    for (var i = 0; i < 100; i++) {
      hearts.push(new Heart());
    }
  }

  function Heart() {
    this.x = Math.random() * ww;
    this.y = Math.random() * wh;
    this.opacity = Math.random() * 0.5 + 0.5;
    this.vel = {
      x: (Math.random() - 0.5) * 4,
      y: (Math.random() - 0.5) * 4,
    };
    this.targetScale = Math.random() * 0.15 + 0.02;
    this.scale = this.targetScale * Math.random();
  }

  Heart.prototype.update = function (i) {
    this.x += this.vel.x;
    this.y += this.vel.y;

    this.scale += (this.targetScale - this.scale) * 0.01;
    if (this.x - this.width > ww || this.x + this.width < 0) {
      this.scale = 0;
      this.x = Math.random() * ww;
    }
    if (this.y - this.height > wh || this.y + this.height < 0) {
      this.scale = 0;
      this.y = Math.random() * wh;
    }
    this.width = 473.8;
    this.height = 408.6;
  };
  Heart.prototype.draw = function (i) {
    ctx.globalAlpha = this.opacity;
    ctx.font = `${180 * this.scale}px "微软雅黑"`;
    // ctx.font="20px";
    ctx.fillStyle = colors[i % 18];
    ctx.fillText(
      "林子豪💗赵嘉璇",
      this.x - this.width * 0.5,
      this.y - this.height * 0.5,
      this.width,
      this.height
    );
    // ctx.drawImage(
    //   heartImage,
    //   this.x - this.width * 0.5,
    //   this.y - this.height * 0.5,
    //   this.width,
    //   this.height
    // );
  };

  function render() {
    ctx.clearRect(0, 0, ww, wh);
    // ctx.globalAlpha = 1;
    // ctx.fillStyle = "rgba(255,255,255,0.3)";
    // ctx.fillRect(0, 0, ww, wh);
    for (var i = 0; i < 100; i++) {
      hearts[i].update(i);
      hearts[i].draw(i);
    }
    requestAnimationFrame(render);
  }
  init();

  // var heartImage = new Image();
  // heartImage.onload = init();
  // heartImage.src =
  //   "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NzMuOHB4IiBoZWlnaHQ9IjQwOC42cHgiIHZpZXdCb3g9IjAgMCA0NzMuOCA0MDguNiI+PHBhdGggZmlsbD0iI2QzMjkzMiIgZD0iTTQwNC42LDE2LjZDMzg1LjQsNi4xLDM2My41LDAsMzQwLDBjLTQxLjUsMC03OC41LDE4LjktMTAzLDQ4LjVDMjEyLjMsMTguOSwxNzUuMywwLDEzMy44LDAgYy0yMy4zLDAtNDUuMyw2LjEtNjQuNSwxNi42QzI3LjksMzkuNSwwLDgzLjQsMCwxMzMuOWMwLDE0LjQsMi40LDI4LjMsNi42LDQxLjJDMjkuNiwyNzguNCwyMzcsNDA4LjYsMjM3LDQwOC42IHMyMDcuMi0xMzAuMiwyMzAuMi0yMzMuNWM0LjMtMTIuOSw2LjYtMjYuOCw2LjYtNDEuMkM0NzMuOCw4My40LDQ0NS45LDM5LjYsNDA0LjYsMTYuNnoiLz48L3N2Zz4=";

  window.addEventListener("resize", function () {
    ww = window.innerWidth;
    wh = window.innerHeight;
  });
