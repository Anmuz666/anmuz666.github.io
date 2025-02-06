<template>
  <div style="max-width: 1024px;margin: auto;">
    <el-header class="elHeader" style="height: 40px;border-bottom: 1px solid #ccc;">
      <div
        style="height:100%;font-size:18px; display: flex; justify-content: center; align-items: center;font-family: 'Comfortaa', cursive;">
        首页
      </div>
    </el-header>

    <el-main>
      <el-main>
  <div style="padding: 0px; padding: 0px 15px 0px 15px; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 80vh; font-family: 'Comfortaa', cursive;">
    <div>欢迎来到苟创中学</div>
    <div>此页面由暗木z提供技术支持</div>
    <div>更新时间:2025/2/6 16:40</div>
  </div>
</el-main>
</el-main>
  </div>
</template>

<script>
import axios from "axios";
import { _ } from "core-js";
export default {
  data() {
    return {
      items: [
      ]
    };
  },
  mounted() {
    // this.getHomelist();
  },
  methods: {
    // getHomelist() {
    //   axios.get("/homeListJson/20240926.json").then(res => {
    //     this.items = res.data.data;
    //     console.log(res.data.data);
    //   });
    // },
    routerGoTo(index) {
      let data = [
        {
          imgurl: index.imgurl,
          uuid: index.uuid
        }
      ];
      if (index.tag == "localDown") {
        this.$router.push({
          name: "localDownload",
          query: {
            data: JSON.stringify(data)
          }
        });
        // this.$router.push("/Download");
      }
      if (index.tag == "outDown") {
        this.$router.push({
          name: "outDownload",
          query: {
            data: JSON.stringify(data)
          }
        });
        // this.$router.push({
        //   name: "Download",
        //   query: {
        //     data: JSON.stringify(data)
        //   }
        // });
        // this.$router.push("/Download");
      }

      // window.open(`/GOBACK`);
      console.log(index);
    }
  }
};
</script>

<style lang="scss" scoped>
.homeListDiv:active {
  background: rgb(243, 245, 251);
}

.elHeader {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #141e46;
  background: #f0f4ff,
}

::v-deep {

  .el-card.is-always-shadow,
  .el-card.is-hover-shadow:focus,
  .el-card.is-hover-shadow:hover {
    box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.1);
  }

  .el-card.is-always-shadow,
  .el-card.is-hover-shadow:focus,
  .el-card.is-hover-shadow:hover,
  .el-cascader__dropdown,
  .el-color-picker__panel,
  .el-message-box,
  .el-notification {
    box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.1);
  }

  .el-main {
    padding: 0px;
  }

  .el-tag {
    border-radius: 0px;
  }
}
</style>