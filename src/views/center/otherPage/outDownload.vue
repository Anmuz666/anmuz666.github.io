<template>
  <div style="height: 100%;background-color: #f2f2f2;">
    <el-container style="height: 100%;">
      <el-header
        style="height: 50px;  font-size: 25px;color: #141e46;background:rgb(250,251,255);padding:0px 0px 0px 10px"
      >
        <div style="height:100%;">
          <div style="float: left;line-height:55px;">
            <i class="el-icon-arrow-left" style="cursor:pointer" @click="goBack()"></i>
          </div>
          <div style="float: left;"></div>
          <!-- <router-link to="/home/testMap">
                  <div>我是a组件</div>
          </router-link>-->
        </div>
      </el-header>
      <el-main style="background:rgb(243,245,251)">
        <el-card class="box-card">
          <h3 style="border-bottom: 1px solid #e8e8e8;">{{ downFrom.fileName }}</h3>
          <div class="container">
            <div class="item left-item">
              文件大小:
              <span>{{ downFrom.fileSize }}</span>
            </div>
            <div class="item">
              文件类型:
              <span>{{ downFrom.fileType }}</span>
            </div>
            <div class="item left-item">
              下载方式:
              <span>{{ downFrom.downMode }}</span>
            </div>
            <!-- <div class="item">3</div>-->
            <div class="item left-item last-item">
              下载地址:
              <el-link type="primary" :href="downFrom.address" target="_blank">去下载</el-link>
            </div>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>
      
    <script>
import axios from "axios";
import { data } from "jquery";
export default {
  data() {
    return {
      downData: [], //存放路由获取的信息
      downFrom: {} //更具uuid获取具体信息
    };
  },
  components: {},
  created() {
    this.downData = JSON.parse(this.$route.query.data); //通过路由获取uuid
    this.getByFrom(); //获取具体信息
  },
  mounted() {},
  methods: {
    //更具uuid获取具体信息
    getByFrom() {
      axios.get(`/DownloadJson/${this.downData[0].uuid}.json`).then(res => {
        this.downFrom = res.data.data[0];
      });
    },
    goBack() {
      this.$router.back();
    }
  }
};
</script>
      
<style scoped>
.container {
  font-size: 15px;
  text-align: left;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}
.container span {
  font-weight: bold;
}

.item {
  text-align: left;
}
.left-item {
  padding-left: 20px;
}
.last-item {
  grid-column: span 2;
}
</style>