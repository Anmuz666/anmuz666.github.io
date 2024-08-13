<template>
  <div class="body">
    <div class="navbar" id="nav">
      <div class="logo">
        <img style="height: 100%;width:100%;object-fit: cover;" src="/imgs/狗头02.jpg" alt="找不到图片"/>
      </div>
      <div class="menu-icon" @click="toggleMenu" id="menuIcon">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul id="navbarMenu">
        <li>
          <a href="#">首页</a>
        </li>
        <li>
          <a href="#">man</a>
        </li>
        <li>
          <a href="#">what can i say</a>
        </li>
        <!-- <div class="search-box">
          <input type="text" placeholder="Search..." />
        </div>
        <div class="buttons">
          <button class="login">登录</button>
          <button class="register">注册</button>
        </div> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {};
  },
  methods: {  
    toggleMenu() {  
      var navbar = document.getElementById('nav');  
      navbar.classList.toggle('open');  
    }  
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #ffe7df;
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
  height: 50px;
  width:50px;
  /* font-size: 24px;
  font-weight: bold;
  color: #232c53; */
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

/* .search-box {
  position: relative;
}

.search-box input {
  width: 200px;
  height: 30px;
  border: none;
  padding: 5px 10px;
  border-radius: 6px;
  background-color: #eff6f8;
} */

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
  .navbar {
    position: relative;
    padding: 10px 10px;
  }

  /* 在小屏幕上隐藏导航栏和搜索框等 */
  .navbar ul,
  /* .search-box, */
  .buttons {
    display: none;
  }

  /* 显示汉堡式图标 */
  .navbar .menu-icon {
    display: block;
    position: relative;
    width: 30px;
    height: 20px;
    cursor: pointer;
  }

  .navbar .menu-icon span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: #232c53;
    border-radius: 4px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  .navbar .menu-icon span:nth-child(1) {
    top: 0px;
  }

  .navbar .menu-icon span:nth-child(2),
  .navbar .menu-icon span:nth-child(3) {
    top: 10px;
  }

  .navbar .menu-icon span:nth-child(4) {
    top: 20px;
  }

  /* 菜单展开时的样式 */
  .navbar.open .menu-icon span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  .navbar.open .menu-icon span:nth-child(2) {
    transform: rotate(45deg);
  }

  .navbar.open .menu-icon span:nth-child(3) {
    transform: rotate(-45deg);
  }

  .navbar.open .menu-icon span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
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
    width: 100%;
    flex-direction: column;
    gap: 10px;
    padding: 10px 0;
    background-color: #ffffff;
    border-radius: 10px;
    position: absolute;
    left: 0;
    bottom: -118px;
    text-align: center;
  }

  #navbarMenu li a {
    font-size: 20px;
  }
}
</style>