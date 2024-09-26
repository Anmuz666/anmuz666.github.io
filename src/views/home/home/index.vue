<template>
  <div style="max-width: 1024px;margin: auto;">
    <div style="padding:0px;background:#ffffff;padding:0px 15px 0px 15px">
      <template v-for="item in items" class="homeListDiv">
        <div
          style="border-bottom:1px solid #ededed;padding:0px;padding:10px 0px 10px 0px"
          @click="routerGoTo(item)"
        >
          <div>
            <div>
              <h3
                style="margin: 0;text-align: left;font-weight:500;font-size:16px;margin-bottom:4px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
              >{{ item.title }}</h3>
            </div>
            <div>
              <p
                style="margin: 0;text-align: left;height:20px;font-size:14px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-bottom:8px"
              >{{ item.content }}</p>
            </div>
            <div style="text-align:left">
              <span style="font-size:12px;margin-right:16px">{{ item.createUser }}</span>
              <span style="font-size:12px;margin-right:16px">{{ item.createTime }}</span>
              <span style="font-size:12px;margin-right:16px">{{ item.tag }}</span>
            </div>
          </div>
          <!-- <div>
            <div>
              <el-image style="width: 100px; height: 100px" :src="'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'" :fit="'cover'"></el-image>
            </div>
          </div>-->
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { _ } from "core-js";
export default {
  data() {
    return {
      items: [
        {
          a: 1
        },
        {
          a: 2
        }
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
      let data = [{
        uuid: index.uuid
      }];
      if (index.tag == "down") {
        this.$router.push({
          name: "Download",
          query: {
            data: JSON.stringify(data)
          }
        });
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
}
</style>