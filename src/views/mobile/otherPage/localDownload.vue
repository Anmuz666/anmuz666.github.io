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
        </div>
      </el-header>
      <el-main style="background:rgb(243,245,251)">
        <div style="background-color: #f2f2f2;border-bottom: 1px solid #e8e8e8;padding-top:10px">
          <h3 style="border-bottom: 1px solid #e8e8e8;margin:0">{{ downFrom.fileName }}</h3>
          <!-- <h3 style="border-bottom: 1px solid #e8e8e8;"> downFrom.fileName </h3> -->
          <div class="container">
            <div class="item left-item">
              文件大小:
              <span>{{ downFrom.fileSize }}</span>
            </div>
            <div class="item">
              文件类型:
              <span>{{ downFrom.fileType }}</span>
            </div>
            <div class="item left-item last-item">
              下载方式:
              <span>{{ downFrom.downMode }}</span>
            </div>
            <!-- <div class="item">3</div> -->
            <div class="item left-item last-item">
              下载地址:
              <el-link type="primary" @click="down()">点击下载</el-link>
              <!-- <el-button type="text" >点击下载</el-button> -->
            </div>
          </div>
          <div style="margin-top: 20px;">
            <div style="font-size: 14px;text-align: left;padding:0 20px 0 20px">
              <span style="text-align: left;">图片预览:</span>
              <span style="text-align: left;" v-if="downData[0].imgurl.lenght==0">无</span>
            </div>
            <div v-if="downData[0].imgurl.lenght!=0" style="margin-top:20px">
              <el-image
                v-for="imgurl in downData[0].imgurl"
                :src="imgurl.url"
                :fit="'cover'"
                style="width: 70%;padding:0px 30px 0px 30px"
              ></el-image>
            </div>

            <!-- <el-link type="primary" :href="downFrom.address" target="_blank">去下载</el-link> -->
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
    
  <script>
import axios from "axios";
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
    console.log(
      this.downData[0].imgurl.url,
      "this.downData this.downData this.downData "
    );
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
::v-deep .el-card__body, .el-main{
  padding: 0;
}
.container {
  margin-top:10px;
  font-size: 14px;
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