<template>
  <div class="bk">
    <div class="content">
      <h1 class="enter" style=" text-shadow: 5px 5px 6px rgba(0, 0, 0, .6)" id="jumping-text">
        <span v-for="(char, index) in welcomeTextZH" :key="index">{{ char }}</span>
      </h1>
      <p class="enter" style=" text-shadow: 5px 5px 6px rgba(0, 0, 0, .6)">
        GouChuang Middle School NingBo Branch
      </p>
      <span class="goto">
        <span @click="goto()" class="goto">进入</span>
      </span>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      welcomeTextZH: "欢迎来到苟创中学",
    };
  },
  mounted() { },
  created() { },
  computed: {},
  methods: {
    goto() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      if (flag) {
        this.$router.push("/home");
        console.log("/mobile");
      } else {
        this.$router.push("/pc");
        console.log("/pc");
      }

    }
  }
};
</script>

<style scoped>
.goto {
  font-size: 20px;
  cursor: pointer;
  -webkit-user-select: none;
  /* Safari 无法选中改文本 */
  -moz-user-select: none;
  /* Firefox 无法选中改文本 */
  -ms-user-select: none;
  /* IE10+/Edge 无法选中改文本 */
  user-select: none;
  /* Standard syntax 无法选中改文本 */
}

.enter {
  white-space: nowrap;
  text-align: center;
  /* 贝塞尔曲线动画 */
  animation: enterenter 3s 1 cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  -webkit-user-select: none;
  /* Safari 无法选中改文本 */
  -moz-user-select: none;
  /* Firefox 无法选中改文本 */
  -ms-user-select: none;
  /* IE10+/Edge 无法选中改文本 */
  user-select: none;
  /* Standard syntax 无法选中改文本 */
}

.enter:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  opacity: 0;
  will-change: opacity;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

.enter:hover:before {
  opacity: 1;
}

/* 动画关键帧 */
@keyframes scaleUp {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.5);
  }
}

@keyframes enterenter {
  0% {
    /* 加上文字间距 */
    letter-spacing: 1em;
    /* Z轴变换 */
    transform: translateZ(300px);
    /* filter: blur(); 像素模糊效果 */
    filter: blur(12px);
    /* 透明度也要改变 */
    opacity: 0;
  }

  100% {
    transform: translateZ(12px);
    filter: blur(0);
    opacity: 1;
  }
}

.bk {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: Arial, sans-serif;
  background: #021b48;
  /* background: linear-gradient(
    125deg,
    rgba(99,194,255,1.00)8.2%,
    rgba(115,200,255,1.00) 19.6%,
    rgba(130,206,255,1.00) 36.8%,
    rgb(173, 252, 244) 73.2%,
    rgb(202, 248, 208) 90.9%
  ); */
  background-size: 500%;
  animation: bgAnimation 30s linear infinite;
}

@keyframes bgAnimation {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.content {
  color: #fff;
  text-align: center;
  z-index: 1;
}

a {
  text-decoration: none;
}

button {
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  background: linear-gradient(125deg,
      rgb(253, 218, 255) 8.2%,
      rgb(223, 173, 252) 19.6%,
      rgb(173, 205, 252) 36.8%,
      rgb(173, 252, 244) 73.2%,
      rgb(202, 248, 208) 90.9%);
  background-size: 500%;
  animation: bgButton 30s linear infinite;
}

button:active {
  color: #00eeff;
  box-shadow: inset 4px 4px 12px #00eeff, inset -4px -4px 12px #00eeff;
}

@keyframes bgButton {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@keyframes fadeOut {
  from {
    opacity: 0;
    /* 起始状态为不可见 */
  }

  to {
    opacity: 1;
    /* 结束状态为可见 */
  }
}

.goto {
  opacity: 0;
  /* 初始状态设置为不可见，确保在动画开始前元素是不可见的 */
  animation: fadeOut 1s ease-out forwards 3s;
  /* 动画名称，持续时间，动画曲线，填充模式，延迟时间 */
}

#jumping-text {
  text-align: center;
}

#jumping-text span {
  display: inline-block;
  /* 方便对单个字符使用 transform */
  transition: transform 0.2s;
  /* 平滑动画效果 */
}

#jumping-text span:hover {
  transform: translateY(-15px);
  /* 鼠标经过时向上移动10px */
}
</style>