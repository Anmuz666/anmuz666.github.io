<template >
  <div class="bk">
    <div class="content">
      <h1 class="enter" style=" text-shadow: 5px 5px 6px rgba(0, 0, 0, .6)">欢迎来到苟创中学</h1>
      <p
        class="enter"
        style=" text-shadow: 5px 5px 6px rgba(0, 0, 0, .6)"
      >GouChuang Middle School NingBo Branch</p>
      <span class="goto">
        <button @click="goto()">进入</button>
      </span>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    goto() {
      this.$router.push("/home");
    }
  }
};
</script>
  
<style scoped>
.enter {
  white-space: nowrap;
  text-align: center;
  /* 贝塞尔曲线动画 */
  animation: enterenter 3s 1 cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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
  background: linear-gradient(
    125deg,
    rgb(253, 218, 255) 8.2%,
    rgb(223, 173, 252) 19.6%,
    rgb(173, 205, 252) 36.8%,
    rgb(173, 252, 244) 73.2%,
    rgb(202, 248, 208) 90.9%
  );
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
  background: linear-gradient(
    125deg,
    rgb(253, 218, 255) 8.2%,
    rgb(223, 173, 252) 19.6%,
    rgb(173, 205, 252) 36.8%,
    rgb(173, 252, 244) 73.2%,
    rgb(202, 248, 208) 90.9%
  );
  background-size: 500%;
  animation: bgButton 30s linear infinite;
}

button:active {
  color: #666;
  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
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
    opacity: 0; /* 起始状态为不可见 */  
  }  
  to {  
    opacity: 1; /* 结束状态为可见 */  
  }  
}
.goto {  
  opacity: 0; /* 初始状态设置为不可见，确保在动画开始前元素是不可见的 */  
  animation: fadeOut 1s ease-out forwards 3s; /* 动画名称，持续时间，动画曲线，填充模式，延迟时间 */  
}

</style>