<template>
  <div class="bk">
    <Header></Header>
    <marquee>黑神话:悟空先行版免费下载</marquee>
    <div class="box1">
      <div class="item" @click="open()">耐摔王</div>
      <div class="item" @click="getIp()">
        <span>获取ip</span>
      </div>
      <div class="item" @click="routergot('mapc')">大地图</div>
      <div class="item" @click="routergot('starting')">回到欢迎页</div>
      <div class="item a1" @click="getdow()">
        <p style="  padding-top:100px;">
          <strong>立即下载</strong>
        </p>
      </div>
    </div>

    <lisen></lisen>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import lisen from "@/views/test/listening.vue";
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
    Header,
    lisen
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
        console.log(res.success);
        if (res.data.success == false) {
          this.$message.error("孩子快回家");
        } else if (res.data.success == true) {
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
        }
      });
    },
    getdow() {
      window.location.href = "https://pan.quark.cn/s/5936a4ff2ebc";
    }
  }
};
</script>

<style lang="scss" scoped>
@charset "GBK";
.bk {
  height: 100%;
  background-color: #f2f2f2;
}
.s {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  padding-top: 20px;
  padding-left: 200px;
  padding-right: 200px;
  overflow-y: auto;
}
.a1 {
  color: #f2f2f2;
  background-size: cover;
  /* 确保背景图片在元素内居中显示 */
  background-position: center;
  /* 防止背景图片重复 */
  background-repeat: no-repeat;
  background-image: url("@/assets/1.jpg");
  span {
    top: 0px;
    font-size: 20px;
  }
}
.item {
  width: 100%;
  height: 150px;
  border-radius: 5%;
  background-color: hsla(0, 0%, 100%, 0.3);

  align-items: center;
  justify-content: center;
}
/* 媒体查询 */
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

    align-items: center;
    justify-content: center;
  }
}
</style>