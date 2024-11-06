<template>
  <div style="max-width: 1024px;margin: auto;">
    <el-header class="elHeader" style="height: 40px;">
      <div
        style="height:100%;font-size:18px; display: flex; justify-content: center; align-items: center;font-family: 'Comfortaa', cursive;">
        首页
      </div>
    </el-header>

    <el-main>
      <div style="padding:0px;padding:0px 15px 0px 15px">
        <marquee style="background:rgb(243, 245, 251);">校园内禁止狗叫，不听话的送潘宏园区</marquee>
        <p style="font-family: 'Comfortaa', cursive;">我家哥哥的出道视频</p>
        <!-- <video controls style="height:100%;width:100%;background:black"> -->
        <video controls style="height:100%;width:100%;background:black"
          src="https://imgur.la/images/2024/11/05/7b7b43e1631bcad4bca2c02bbfdaf134.mp4"
          poster="https://images.weserv.nl/?url=imgur.la/images/2024/11/05/7b7b43e1631bcad4bca2c02bbfdaf134.th.jpeg">
          您的浏览器不支持播放
        </video>
        <!-- <template v-for="item in items" class="homeListDiv">
          <div
            style="border-bottom:1px solid #ededed;padding:0px;padding:10px 0px 10px 0px;"
            @click="routerGoTo(item)"
          >
            <div>
              <div>
                <h3
                  style="margin: 0px 0px 4px; text-align: left; font-weight: 500; font-size: 16px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                >{{ item.title }}</h3>
              </div>
              <div>
                <p
                  style="margin: 0;word-wrap: break-word;text-align: left;height:20px;font-size:14px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-bottom:8px"
                >{{ item.content }}</p>
              </div>
              <div style="text-align:left;margin-bottom:10px" v-if="item.imgurl.lenght!=0">
                <el-image
                  v-for="URL in item.imgurl.slice(0, 3)"
                  style="height:68px;width:30%;display:inline-block;margin-right:6px"
                  :src="URL.url"
                  :fit="'cover'"
                ></el-image>
              </div>
              <div style="display:flex;justify-content:space-between">
                <div>
                  <i class="el-icon-download" v-if="item.tag=='localDown'"></i>
                </div>
                <div>
                  <span
                    style="font-size:12px;margin-right:16px;text-align: right;"
                  >{{ item.createUser }}</span>
                  <span
                    style="font-size:12px;margin-right:16px;text-align: right;"
                  >{{ item.createTime }}</span>
                </div>
              </div>
            </div>
          </div>
        </template> -->
      </div>
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
  // font-size: 20px;
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