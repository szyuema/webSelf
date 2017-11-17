     
<template>
  <canvas id="canvas" class="canvas" ref="canvas" width="500" height="300">
    您的浏览器不支持canvas
  </canvas>
</template>


<script>
var speed = -7;
var startPoint = 250;
var Interval = '';

export default {
  mounted() {
    // 获取标签
    var cas = this.$refs.canvas;
    // 获取绘制环境
    var ctx = cas.getContext('2d'); // 2d  webgl webgl2 bitmaprenderer
    // // 矩形
    // ctx.fillStyle = 'red';
    // ctx.fillRect(100, 100, 150, 100);

    // // 开始路径
    // ctx.beginPath();
    // // 路径
    // ctx.moveTo(100, 100);// 把路径移动到画布中的指定点，不创建线条
    // ctx.lineTo(250, 100);// 画路径线
    // ctx.lineTo(250, 200);
    // ctx.lineTo(100, 200);
    // // 结束
    // ctx.closePath();// 创建从当前点回到起始点的路径
    // ctx.fillStyle = 'red';
    // ctx.fill();

    // 画圆
    ctx.beginPath();
    ctx.moveTo(250, 150);
    ctx.arc(250, 150, 100, this.toDeg(0), this.toDeg(45), true);
    ctx.closePath();
    ctx.fillStyle = 'red';
    ctx.fill();
    // var that = this;
    Interval = setInterval(() => { // 写法2
      this.run(ctx);
    }, 50);
    // Interval = setInterval(function() { //写法一
    //   this.run(ctx);
    // }.bind(this), 50);

    // 文字
    // ctx.font = '20px';
    // ctx.textAlign = 'center';
    // ctx.fillText('Hello World!', 10, 50);
    // window.x = 1;
    // var o = {
    //   x: 2,
    //   y: function() {
    //     console.log(this.x);
    //   }
    // };
    // setTimeout(o.y.bind(o), 1000);
    console.log(ctx + '');
  },
  activated() {
    console.log('activated');
  },
  methods: {
    toDeg(r) {
      return r * Math.PI / 180;
    },
    run(ctx) {
      if (startPoint < 100) {
        speed = 7;
      }
      if (startPoint > 400) {
        speed = -7;
      }
      ctx.clearRect(0, 0, 500, 300);
      startPoint += speed;
      ctx.beginPath();
      ctx.moveTo(startPoint, 150);
      ctx.arc(startPoint, 150, 100, this.toDeg(0), this.toDeg(45), true);
      ctx.closePath();
      ctx.fill();
    }
  },
  beforeDestroy() {
    clearInterval(Interval);
  }
};
</script>

<style lang="less" scoped>
.canvas {
  border: 1px solid #fff;
  background: rgba(229, 229, 194, 0.38);
}
</style>

