<template>
  <div style="max-width: 1024px;margin: auto;">
    <el-header class="elHeader" style="height: 40px;border-bottom: 1px solid #ccc;">
      <div
        style="height:100%;font-size:18px; display: flex; justify-content: center; align-items: center;font-family: 'Comfortaa', cursive;">
        其他（临时游戏中心）
      </div>
    </el-header>

    <el-main>
      <div style="padding: 0px; padding: 10px 15px 10px 15px; display: flex; align-items: center;">
        <div class="grid-container">
          <div v-for="(item, index) in gameList" :key="index" class="grid-item" @click="goToPlay(item.htmlUrl)">
            <img alt="nothing" v-if="typeof item === 'object' && item.imgUrl" :src="cleanedImgUrl(item.imgUrl)">
            <p v-if="typeof item === 'object'">{{ item.gameName }}</p>
          </div>
        </div>
      </div>
    </el-main>
  </div>
</template>

<script>
import { CONSOLE_PUBLIC_URL } from "@/api/publicUrl.js"
import { getGameLobbyList } from "@/api/gouchuang/gameLobby/index.js"
import { _ } from "core-js";
export default {
  data() {
    return {
      NODE_ENV: "",
      gameList: []
    };
  },
  mounted() {
    //获取开发环境
    this.NODE_ENV = process.env.NODE_ENV
    this.getGameList()
  },
  methods: {
    getGameList() {
      getGameLobbyList().then(res => {
        this.gameList = res.data.data;
      })
    },
    cleanedImgUrl(index) {
      return CONSOLE_PUBLIC_URL + index
    },
    goToPlay(index) {
      window.open(CONSOLE_PUBLIC_URL + "/GAME/" + index + "/index.html")
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

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* 6 columns with equal width */
  gap: 10px;
  /* Space between the grid items */
}

.grid-item {
  border-radius: 10px;
  background-color: #ffffff;
  padding: 10px 20px 0px 20px;
  text-align: center;
  border: 1px solid #ccc;
  transition: background-color 0.3s ease, transform 0.3s ease;

  img {
    width: 100%;
    aspect-ratio: 1 / 1;
    display: inline-block;
    object-fit: cover;
    border-radius: 10px
  }

  p {
    padding: 0;
    margin: 0;
    font-size: 15px;
    font-family: 'Comfortaa', cursive
  }
}

.grid-item:hover {
  background-color: #ececec;
  cursor: pointer;
  transform: scale(1.05);
}
</style>