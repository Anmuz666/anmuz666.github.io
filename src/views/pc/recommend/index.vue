<template>
  <div style="height: 100%;">
    <div style="height: 100px;background-color:azure;position:sticky;top:0;z-index:1;box-shadow: 0px 0px 10px #e0dede;">
      <div>
        <a href="/pc">
          <button class="headListButton"> {{ $t('navbar.recommend') }}</button>
        </a>
        <a href="/picWarehouse">
          <button class="headListButton"> {{ $t('navbar.ImageRepository') }}</button>
        </a>
      </div>
      <Lang class="right-menu-item" style=" position: absolute;right: 160px;top:10px;color:black"></Lang>
      <marquee>{{ $t('navbar.STOPDOGBARKING') }}</marquee>
    </div>
    <div style="width:1280px;">
      <div style="width: calc(100% - 310px);background-color:aliceblue; margin: 0px auto;margin-top:10px">PC端测试页面
      </div>
      <div style="position: fixed;left:1130px;top:110px;padding:20px">
        <div class="con">
          <div class="now-data-myself">
            <div class="now-data-myself-time">{{ date }}</div>
            <div class="now-data-myself-week">
              <span v-if="this.week == 0">{{ $t('navbar.Sunday') }}</span>
              <span v-if="this.week == 1">{{ $t('navbar.Monday') }}</span>
              <span v-if="this.week == 2">{{ $t('navbar.Tuesday') }}</span>
              <span v-if="this.week == 3">{{ $t('navbar.Wednesday') }}</span>
              <span v-if="this.week == 4">{{ $t('navbar.Thursday') }}</span>
              <span v-if="this.week == 5">{{ $t('navbar.Friday') }}</span>
              <span v-if="this.week == 6">{{ $t('navbar.Saturday') }}</span>
            </div>
          </div>
          <Calendar></Calendar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//日历
import Calendar from "vue-calendar-component";
export default {
  data() {
    return {
      date: "",
      week: "",
      // 今天之前的日期不可点击
      today: parseInt(
        new Date(new Date().getTime() - 24 * 60 * 60 * 1000) / 1000
      )
    };
  },
  components: {
    Calendar: Calendar,
  },
  created() {
    var now = new Date();
    this.date = now.getDate(); //得到日期
    this.week = now.getDay(); //得到周几
  },
  mounted() { },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
.headListButton {
  margin: 0 5px 0 0;
  background-color: transparent;
  background-image: none;
  border-color: transparent;
  color: black;
  box-shadow: none;
}

.headListButton:hover {
  background-color: #3183ff !important;
  /* 添加 !important 以确保优先级 */
  color: rgb(250, 250, 250) !important;
  /* 添加 !important 以确保优先级 */
}

.now-data-myself {
  width: 40%;
  position: absolute;
  border-right: 1px solid rgba(227, 227, 227, 0.6);
  margin-bottom: 5px;
}

.con {
  position: relative;
  max-width: 280px;
  margin: auto;
  border: 1px solid rgba(227, 227, 227, 0.6);
  border-radius: 10px;
  padding: 10px;
}

.test-clock-container {
  font: normal 12px 'Helvetica Neue', Helvetica, sans-serif;
  user-select: none;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
  background: radial-gradient(ellipse at center, #969696 0%, #595959 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

::v-deep .con .wh_content_all {
  background: transparent !important;
}

::v-deep .wh_top_changge li {
  color: #F56C6C !important;
  font-size: 18px !important;
}

::v-deep .wh_content_item,
.wh_content_item_tag {
  color: #303133 !important;
}

::v-deep .wh_content_item .wh_isToday {
  background: #00d985 !important;
  color: #fff !important;
}

::v-deep .wh_content_item .wh_chose_day {
  background: #fefefe !important;
  color: #000000 !important;
  border-radius: 0;
}

::v-deep .wh_content_item .wh_top_tag {
  font-weight: bold;
}

::v-deep .wh_item_date:hover {
  background: rgb(217, 236, 255) !important;
  /* border-radius: 100px !important; */
  color: rgb(102, 177, 255) !important;
  cursor: default;
}

::v-deep .wh_content_item .wh_isToday {
  border-radius: 0px !important;
}

::v-deep .wh_item_date .wh_want_dayhide {
  color: #303133;
}

::v-deep .wh_other_dayhide {
  color: #bfbfbf;
}

::v-deep .wh_jiantou1 {
  border-top: 2px solid #909399;
  border-left: 2px solid #909399;
  width: 7px;
  height: 7px;
}

::v-deep .wh_jiantou2 {
  border-top: 2px solid #909399;
  border-right: 2px solid #909399;
  width: 7px;
  height: 7px;
}

::v-deep .wh_top_tag {
  color: #409EFF;
  /* border-top: 1px solid rgba(227, 227, 227, 0.6); */
  /* border-bottom: 1px solid rgba(227, 227, 227, 0.6); */
}

::v-deep .wh_container {
  max-width: 280px;
}

::v-deep .wh_top_changge {
  display: flex;
  width: 50%;
  margin-left: 43%;
}

::v-deep .now-data-myself-time {
  color: #F56C6C;
  font-size: 25px;
  height: 28px;
  font-family: "Helvetica Neue";
}

::v-deep .now-data-myself-week {
  font-size: 15px;
  color: #909399;
}

::v-deep .wh_top_changge .wh_content_li {
  font-family: Helvetica;
  display: block;
  line-height: 44px;
}

::v-deep .wh_top_changge li {
  display: none;

}

::v-deep .wh_item_date,
.wh_top_tag {
  width: 30px;
  height: 30px;
}
</style>
