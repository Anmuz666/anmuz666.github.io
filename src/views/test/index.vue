<template>
  <div class="rainbk">
    <canvas ref="myCanvas"></canvas>
  </div>
</template>  
  
<script>
export default {
  name: "RainEffect",
  data() {
    return {
      canvas: null,
      ctx: null,
      width: 0,
      height: 0,
      arr: [],
      str: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("")
    };
  },
  mounted() {
    this.initCanvas();
    window.addEventListener("resize", this.resizeCanvas);
    setInterval(this.rain, 30);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resizeCanvas);
  },
  methods: {
    initCanvas() {
      this.canvas = this.$refs.myCanvas;
      this.width = this.canvas.offsetWidth;
      this.height = this.canvas.offsetHeight;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.ctx = this.canvas.getContext("2d");
      this.arr = Array(Math.ceil(this.width / 10)).fill(0);
    },
    rain() {
      this.ctx.fillStyle = "rgba(0,0,0,0.05)";
      this.ctx.fillRect(0, 0, this.width, this.height);
      this.ctx.fillStyle = "rgba(0, 128, 0, 1)";
      this.ctx.font = "16px Arial"; // 注意：'h3 Arial' 不是一个有效的字体大小，我改为 '16px Arial'

      this.arr.forEach((value, index) => {
        const char = this.str[Math.floor(Math.random() * this.str.length)];
        const x = index * 10;
        const y = value + 10;

        if (y >= this.height || Math.random() > 0.98) {
          this.arr[index] = 0;
        } else {
          this.arr[index] = y;
        }

        this.ctx.fillText(char, x, y);
      });
    },
    resizeCanvas() {
      this.initCanvas(); // 重新初始化画布以适应新的窗口大小
    }
  }
};
</script>  
  
<style scoped>
.rainbk {
  height: 100%;
  width:100%;
  margin: 0;
  overflow: hidden;
}

</style>