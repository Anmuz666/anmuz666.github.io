<template>
  <div class="bk">
    <div class="content">
      <h1 class="enter" id="jumping-text">
        <span v-for="(char, index) in welcomeTextZH" :key="index">{{ char }}</span>
      </h1>
      <p class="enter">
        GouChuang Middle School NingBo Branch
      </p>
      <span class="goto">
        <span @click="goto()" class="goto">进入</span>
      </span>
    </div>
  </div>
</template>

<script>
import { getflag } from "@/components/index.js";
export default {
  data() {
    return {
      welcomeTextZH: "欢迎来到苟创中学",
    };
  },
  methods: {
    goto() {
      if (getflag()) {
        this.$router.push("/home");
        console.log("/mobile");
      } else {
        this.$router.push("/pc");
        console.log("/pc");
      }
    },
  },
};
</script>

<style scoped>
.goto {
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  color: #fff;
  opacity: 0;
  animation: fadeOut 1s ease-out forwards 3s;
}

.enter {
  white-space: nowrap;
  text-align: center;
  animation: enterenter 3s 1 cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  user-select: none;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.enter:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  /* box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3); */
  opacity: 0;
  transition: 0.2s;
}

.enter:hover:before {
  opacity: 1;
}

@keyframes enterenter {
  0% {
    letter-spacing: 1em;
    transform: translateZ(300px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    transform: translateZ(12px);
    filter: blur(0);
    opacity: 1;
  }
}

.bk {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #ff7e5f, #feb47b); /* 更改为渐变色 */
  background-size: 200% 200%;
  animation: bgAnimation 10s ease infinite;
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

#jumping-text span {
  display: inline-block;
  transition: transform 0.2s;
}

#jumping-text span:hover {
  transform: translateY(-10px);
}

@keyframes fadeOut {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
