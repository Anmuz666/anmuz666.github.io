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
      <div class="item" @click="getIp()">
        <span>获取ip</span>
      </div>
      <div class="item" @click="routergot('mapc')">大地图</div>
      <div class="item" @click="routergot('starting')">回到欢迎页</div>
      <!-- what can i say
      <router-link to="/mapc">10086</router-link>-->
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";
export default {
  data() {
    return {
      IpData: {
        time: "",
        week: "",
        ip: "",
        location: ""
      },
      man: 0
    };
  },
  components: {
    Header
  },
  methods: {
    routergot(index) {
      this.$router.push("/" + index);
    },
    open() {
      this.man++;
    
      if (this.man > 0 && this.man <= 3) {
        this.$message("man");
      }
      if (this.man > 3 && this.man <= 4) {
        this.$message.warning("孩子这一点都不好笑");
      }
      if (this.man > 4 && this.man <= 5) {
        this.$message.warning("你还man？");
      }
      if (this.man > 5 && this.man <= 6) {
        this.$message.error("曼巴out");
      }
      if (this.man > 6) {
        this.$message.error("...");
      }
    },
    getIp() {
      axios.get("https://api.vvhan.com/api/visitor.info").then(res => {
        this.IpData.time = res.data.time;
        this.IpData.week = res.data.week;
        this.IpData.ip = res.data.ip;
        this.IpData.location = res.data.location;
        this.$notify({
          showClose: true,
          type: "success",
          title: "ip获取成功",
          dangerouslyUseHTMLString: true,
          message:
            "<span>获取时间:" +
            this.IpData.time +
            "&nbsp;" +
            this.IpData.week +
            "</span></br><span>ip地址:" +
            this.IpData.ip +
            "</span></br><span>location:" +
            this.IpData.location +
            "</span>",
          duration: 0
        });
      });
    }
  }
};
</script>

<style scoped>
.box1 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  padding-top: 20px;
  padding-left: 200px;
  padding-right: 200px;
  overflow-y: auto;
}
.item {
  width: 100%;
  height: 150px;
  border-radius: 5%;
  background-color: hsla(0, 0%, 100%, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

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