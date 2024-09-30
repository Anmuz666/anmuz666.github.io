<template>
  <div class="bk">
    <el-container style="height: 100%;">
     
      <el-main style="background:rgb(243,245,251)">
        <router-view></router-view>
      </el-main>
      <el-footer style="height: 50px;color: #606266;background:rgb(250,251,255)">
        <centerFooter></centerFooter>
      </el-footer>
    </el-container>
    <!--
    <div class="box1">
      <div class="item" @click="getIp()">
        <span>获取ip</span>
      </div>
      <div class="item" @click="routergot('mapc')">大地图</div>
      <div class="item" @click="routergot('starting')">回到欢迎页</div>
    </div>-->
    <!-- <lisen></lisen> -->
  </div>
</template>

<script>
import centerFooter from "@/views/center/centerFooter/index.vue";
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
    centerFooter,
    lisen
  },
  methods: {
    routergot(index) {
      if (this.$route.path != "/" + index) {
        this.$router.push("/" + index);
      } else {
        console.log("已经是当前页了");
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
  }
};
</script>

<style lang="scss" scoped>
@charset "GBK";
::v-deep {
  .el-main {
    padding: 0px;
  }
}

.bk {
  height: 100%;
  background-color: #f2f2f2;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
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
/* 媒体查询 */
@media screen and (max-width: 768px) {
  @font-face {
    font-family: 字魂鸿鹄九天体;
    src: url("@/assets/font/字魂鸿鹄九天体.ttf");
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .box1 {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
    padding-top: 20px;
    padding-left: 30px;
    padding-right: 30px;
    overflow-y: auto;
  }
}
</style>