<template>
  <div style="max-width: 1024px;margin: auto;">
    <el-header class="elHeader" style="height: 50px;">
      <div style="height:100%;">
        <div style="float: left;line-height:45px;font-family: 字魂鸿鹄九天体;">苟创中学</div>
        <!-- <div style="float: left;line-height:45px;font-family: 字魂鸿鹄九天体;">- -</div> -->
        <div style="float: right;font-size:10px">移动端,pc端请用电脑打开</div>
      </div>
    </el-header>
     <marquee>校园内禁止狗叫，不听话的送潘宏园区</marquee>
    <el-main>
      <div style="padding:0px;background:#ffffff;padding:0px 15px 0px 15px">
        <template v-for="item in items" class="homeListDiv">
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
              <!-- <div>
              <p
                style="margin: 0;text-align: left;height:20px;font-size:14px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-bottom:8px"
              >{{ item.content }}</p>
              </div>-->
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
                  <!-- <span style="font-size:12px;margin-right:16px">{{ item.tag }}</span> -->
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
        </template>
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
        // {
        //   title:
        //     "1111111111111111111111111111111111111111111111111111111111111",
        //   content:
        //     "1111111111111111111111111111111111111111111111111111111111111",
        //   createUser: "12312",
        //   img: "1",
        //   tag: "1",
        //   imgurl: [
        //     {
        //       url:
        //         "/homeImg/1727428191656.webp"
        //     },
        //     {
        //       url:
        //         "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        //     },
        //     {
        //       url:
        //         "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        //     },
        //     {
        //       url:
        //         "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        //     }
        //   ],
        //   createTime: "createTime"
        // },
        // {
        //   title:
        //     "1111111111111111111111111111111111111111111111111111111111111",
        //   content: "132123",
        //   createUser: "12312",
        //   img: "0"
        // }
      ]
    };
  },
  mounted() {
    this.getHomelist();
  },
  methods: {
    getHomelist() {
      axios.get("/homeListJson/20240926.json").then(res => {
        this.items = res.data.data;
        console.log(res.data.data);
      });
    },
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
@font-face {
  font-family: 字魂鸿鹄九天体;
  src: url("@/assets/font/字魂鸿鹄九天体.ttf");
}
.homeListDiv:active {
  background: rgb(243, 245, 251);
}
.elHeader {
  font-size: 30px;
  color: #141e46;
  background-image: linear-gradient(
    to bottom right,
    rgba(224, 243, 255, 1),
    rgba(193, 231, 255, 1),
    rgba(161, 218, 255, 1),
    rgba(130, 206, 255, 1),
    rgba(99, 194, 255, 1)
  );
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