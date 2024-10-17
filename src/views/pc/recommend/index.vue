<template>
  <div style="height: 100%;width:100%;background-color:#f0eef5">
    <vue-particles class="fullscreen-particles" color="#dedede" :particleOpacity="0.7" :particlesNumber="20"
      shapeType="circle" :particleSize="4" linesColor="#6f6f6f" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4"
      :linesDistance="150" :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push">
    </vue-particles>
    <div class="header">
      <div class="left">
        <ul>
          <li style=" border-top: 3px solid #fc5531;" @click="goto('/pc')" title="你已经再推荐页了">
            {{ $t('navbar.recommend') }}</li>
          <li @click="goto('/picWarehouse')" title="这里是赛博丹炉房">{{ $t('navbar.ImageRepository') }}</li>
          <li @click="goto('/developmentLogs')" title="开发日志/更新日志"> {{ $t('navbar.DevelopmentLogs') }}</li>
        </ul>
      </div>
      <div class="center"></div>
      <div class="right">
        <Lang class="lang" title="点击切换语言"></Lang>
      </div>
    </div>
    <marquee>{{ $t('navbar.STOPDOGBARKING') }}</marquee>
    <div class="pcBody">
      {{ $t('navbar.ThereIsNothingHere') }}
    </div>
  </div>
</template>

<script>
import "@/utils/onclickax.js"
export default {
  data() {
    return {};
  },
  components: {},
  created() { },
  mounted() { },
  methods: {
    goto(index) {
      if (this.$route.fullPath !== index) {
        this.$router.push(index);
      } else {
        console.log("目标位置与当前位置相同，跳过导航");
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.header {
  background: #fff;
  z-index: 3;
  width: 100%;
  min-width: 1280px;
  height: 48px;
  line-height: 48px;
  padding: 0 24px;
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  box-shadow: 0 2px 6px rgba(100, 100, 100, .15);
  -webkit-user-select: none;
  /* Safari 无法选中改文本 */
  -moz-user-select: none;
  /* Firefox 无法选中改文本 */
  -ms-user-select: none;
  /* IE10+/Edge 无法选中改文本 */
  user-select: none;

  /* Standard syntax 无法选中改文本 */
  .left {
    ul {
      width: auto;
      margin: 0px;

    }

    li {
      position: relative;
      display: inline-block;
      list-style: none;
      font-size: 14px;
      height: 100%;
      padding: 0 10px;
      font-weight: 600;
      margin: 0 5px 0 0;
      background-color: transparent;
      background-image: none;
      border-color: transparent;
      color: #1b69b6;
      box-shadow: none;
    }

    li:hover {
      cursor: pointer;
      /* 鼠标移动到上面显示小手 */
      background-color: #4090df !important;
      /* 添加 !important 以确保优先级 */
      color: rgb(250, 250, 250) !important;
      /* 添加 !important 以确保优先级 */
    }

  }

}

.pcBody {
  width: 65%;
  min-width: 950px;
  background-color: #fff;
  margin: 0 auto;
  padding: 30px;
  margin-top: 50px;
  margin-bottom: 50px;
  box-shadow: 0 2px 6px rgba(100, 100, 100, .3);
  text-align: left;
  color: #000;
  line-height: 1.7;
  font-size: 14px;
}

.lang {
  color: black;
  padding-right: 40px;
}

.lang:hover {
  color: rgba(78, 76, 76, 0.566);
  cursor: pointer;
}

.fullscreen-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
