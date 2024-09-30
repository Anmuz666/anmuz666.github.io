<template>
  <div >
    <div style="display: flex;">
      <div style="flex: 1;">
        <div style="margin-top: 5px;" @click="routergot('home')">
          <div>
            <i
              style="font-size: 25px;color: aqua;"
              class="el-icon-folder-opened"
              v-if="this.$route.path=='/home'"
            ></i>
            <i style="font-size: 25px;" class="el-icon-folder" v-else></i>
          </div>
          <div style="font-size: 10px;">首页</div>
        </div>
      </div>
      <div style="flex: 1;">
        <div style="margin-top: 5px;" @click="routergot('other')">
          <div>
            <i
              style="font-size: 25px;color: aqua;"
              class="el-icon-s-promotion"
              v-if="this.$route.path=='/other'"
            ></i>
            <i style="font-size: 25px;" class="el-icon-s-promotion" v-else></i>
          </div>
          <div style="font-size: 10px;">其他</div>
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
</style>