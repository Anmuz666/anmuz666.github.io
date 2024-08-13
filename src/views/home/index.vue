<template>
  <div style="height:100%;width:100%;">
    <Header></Header>
    <marquee>校内静止狗叫</marquee>
    <div class="box1">
      <div class="item" @click="open()">
        man
        <!--  
          <img src="/imgs/狗头02.jpg" alt="找不到图片"/>
        <p>测试字幕</p>-->
      </div>
      <div class="item" @click="routergot('mapc')">大地图</div>
      <div class="item" @click="routergot('mapc')">大地图</div>
      <div class="item" @click="routergot('starting')">回到欢迎页</div>
      <!-- what can i say
      <router-link to="/mapc">10086</router-link>-->
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  data() {
    return {};
  },
  components: {
    Header
  },
  methods: {
    routergot(index) {
      this.$router.push("/" + index);
    },
    open() {
      this.$message("man");
    }
  }
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .box1 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    padding-top: 20px;
    padding-left: 30px;
    padding-right: 30px;
    overflow-y: auto;
  }
  .item {
    width: 100%;
    height: 150px;
    border-radius: 10%;
    background-color: hsla(0, 0%, 100%, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>