<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/qushan">衢山</router-link> |
      <router-link to="/qushanplus">衢山plus</router-link> |
      <router-link to="/canves">canves</router-link>
      <router-link to="/mapc">3666</router-link>

    </nav>-->
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  created() {
    // this.bodyScale()
  },
  mounted() { },
  methods: {
    // bodyScale() {
    //   var devicewidth = document.documentElement.clientWidth; //获取当前分辨率下的可视区域宽度
    //   var scale = devicewidth /1500; // 除以设计稿的尺寸
    //   document.body.style.zoom = scale; // 放大缩小相应倍数
    // }
  },
 
};
</script>

<style lang="scss">
@import "@/assets/theAll.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
