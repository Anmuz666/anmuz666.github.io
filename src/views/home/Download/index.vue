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
          <h3>{{ downFrom.fileName }}</h3>
          <div>
            <span style="margin:0">文件大小:{{ downFrom.fileSize }}</span>&emsp;&emsp;&emsp;
            <span style="margin:0">文件类型:{{ downFrom.fileType }}</span>
          </div>
          <el-button type="text" @click="down()">点击下载</el-button>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>
  
<script>
import axios from "axios";
export default {
  data() {
    return {
      downData: [],//存放路由获取的信息
      downFrom: {},//更具uuid获取具体信息
    };
  },
  components: {},
  mounted() {
    this.downData = JSON.parse(this.$route.query.data);//通过路由获取uuid
    this.getByFrom();//获取具体信息
  },
  methods: {
    //更具uuid获取具体信息
    getByFrom() {
      axios.get(`/DownloadJson/${this.downData[0].uuid}.json`).then(res => {
        this.downFrom = res.data.data[0];
      });
    },
    down() {
      //点击下载
      // downloadd(row) {
      //   if(row.date==1){
      var a = document.createElement("a"); // 创建一个<a></a>标签
      // a.href = '/doc/ec1c159316a047Ws.doc'
      a.href = `/${this.downFrom.address}`; //重点（如测试发现下载文件不存在/找不到，检查路径）
      a.download = `${this.downFrom.fileName}`; // 设置下载文件文件名
      a.style.display = "none"; // 隐藏a标签
      document.body.appendChild(a); // 将a标签追加到文档对象中
      a.click(); // 模拟点击了a标签，会触发a标签的href的读取，浏览器就会自动下载了
      a.remove(); // 一次性的，用完就删除a标签
      //   }
      // },
    },
    goBack() {
      this.$router.back();
    }
  }
};
</script>
  
<style scoped>
</style>