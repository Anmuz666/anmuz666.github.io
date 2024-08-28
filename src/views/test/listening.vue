<template>
  <a-player
    v-if="isShow"
    :music="musicList[0]"
    :list="musicList"
    :mini="aplayer.mini"
    :float="aplayer.float"
    :showlrc="aplayer.showlrc"
    :mutex="aplayer.mutex"
    :shuffle="aplayer.shuffle"
    autoplay
    mode="circulation"
    repeat="repeat-all"
   
  />
</template>
 
<script>
import axios from "axios";
import APlayer from "vue-aplayer";

export default {
  name: "DefaultLayout",
  components: { APlayer },
  data() {
    return {
      // 音频列表
      aplayer:{
        mini:true,//false，迷你模式
        float:true,//false，浮动模式。允许在页面随意拖放播放器
        showLrc:true,//false,是否显示歌词
        mutex:true,//true,是否在该播放器播放时暂停其他播放器
        theme:'#41b883',//主题色。如果当前歌曲也设置了 theme 则以歌曲的为准
        shuffle:false,//false,随机播放
        repeat:'no-repeat',//轮播模式。值可以是 'repeat-one'（单曲循环）、'repeat-all'（列表循环）或者 'no-repeat'（不循环）
        listFolder:false,//默认收起播放列表
      },
      musicList: [],
      isShow: false
    };
  },
  created() {},
  mounted() {
    this.getMusic();
  },
  beforeDestroy() {
    this.isShow = false;
  },
  methods: {
    getMusic() {
      this.$nextTick(() => {
        axios.get("/musicList/index.json").then(res => {
          console.log(res.data, "responseresponseresponse");
          this.musicList = res.data.musicList;
          // 如果不使用 v-if，会导致播放器已经渲染好了才给值，那自动播放会失效
          this.isShow = true;
        });
      });
    }
  }
};
</script>