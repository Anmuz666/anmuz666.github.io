<template>
  <div>
    <div style="display: flex;">
      <div style="flex: 1;">
        <div style="margin-top: 5px;" @click="routergot('home')">
          <div>
            <i class="el-icon-folder-opened brightIcon" v-if="this.$route.path == '/home'"></i>
            <i class="el-icon-folder darkIcon" v-else></i>
          </div>
          <div class="fontIcon">首页</div>
        </div>
      </div>
      <div style="flex: 1;">
        <div style="margin-top: 5px;" @click="routergot('other')">
          <div>
            <i class="el-icon-s-promotion brightIcon" v-if="this.$route.path == '/other'"></i>
            <i class="el-icon-s-promotion darkIcon" v-else></i>
          </div>
          <div class="fontIcon">其他</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    routergot(index) {
      if (this.$route.path != "/" + index) {
        this.$router.push("/" + index);
      } else {
        console.log("已经是当前页了");
      }
    }
  }
};
</script>

<style scoped>
.brightIcon {
  font-size: 25px;
  color: #019fff;
}

.darkIcon {
  font-size: 25px;
}

.fontIcon {
  font-size: 10px;
}
</style>