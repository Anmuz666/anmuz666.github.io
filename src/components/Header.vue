<template>
  <div class="headerbk">
    <div class="navbar" id="nav">
      <div class="logo" style="font-family: 字魂鸿鹄九天体;">
        <!-- <span>苟创中学</span> -->
         <span></span>
      </div>
      <!-- <i
        style="color: black;"
        class="el-icon-arrow-left menu-icon"
        :class="{ 'arrowTransform': !flag, 'arrowTransformReturn': flag}"
        alt
        @click="toggleMenu(),flag = !flag"
      ></i> -->
      <!-- <ul id="navbarMenu">
        <li>
          <router-link to="/starting">回到起点<i class="el-icon-position"></i></router-link>
        </li>
        <li>
          <a href="#">man</a>
        </li>
        <li>
          <a href="#">what can i say</a>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // flag: false
    };
  },
  methods: {
    // toggleMenu() {
    //   var navbar = document.getElementById("nav");
    //   navbar.classList.toggle("open");
    // }
  }
};
</script>

<style scoped>
@font-face {
  font-family: 字魂鸿鹄九天体;
  src: url("@/assets/font/字魂鸿鹄九天体.ttf");
}
* {
  box-sizing: border-box;
}
.headerbk {
 
  background-color: white; /* 将背景颜色设置为白色 */
}

.body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}
.menu-icon {
  font-size: 0px;
}
.navbar {
  background-color: #ffffff;
  color: #fff;
  padding: 10px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 25px;
  color: #141e46;
}

.navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}

.navbar li {
  position: relative;
  margin-right: 15px;
}

.navbar li a {
  color: #777b91;
  text-decoration: none;
  padding: 10px;
}

.navbar li a:hover {
  color: #141e46;
}
.buttons {
  display: flex;
}

.buttons button {
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
}

.login {
  color: #232c53;
  background-color: #fff;
}

.register {
  color: #fff;
  background-color: #232c53;
  border-radius: 10px;
}
/* 添加响应式设计的样式 */
@media screen and (max-width: 768px) {
  .arrowTransform {
    transition: 0.2s;
    transform-origin: center;
    transform: rotateZ(0deg);
  }
  .arrowTransformReturn {
    transition: 0.2s;
    transform-origin: center;
    transform: rotateZ(-90deg);
  }
  .menu-icon {
    font-size: 20px;
  }
  .navbar {
    position: relative;
    padding: 10px 10px;
    height: 45px;
  }

  /* 在小屏幕上隐藏导航栏和搜索框等 */
  .navbar ul,
  /* .search-box, */
  .buttons {
    display: none;
  }

  /* 展开菜单时的导航栏样式 */
  .navbar.open ul {
    display: flex;
    flex-direction: column;
  }

  /* .navbar.open .search-box, */
  .navbar.open .buttons {
    display: block;
  }

  /* .search-box, */
  .buttons {
    display: block;
  }

  #navbarMenu {
    width: 40%;
    flex-direction: column;
    gap: 10px;
    padding: 10px 0;
    background-color: #ffffff;
    position: absolute;
    right: 0;
    bottom: -95px;
    text-align: center;
    border-radius: 0 0 0 15px;
  }

  #navbarMenu li a {
    font-size: 15px;
  }
}
</style>