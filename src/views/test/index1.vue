<template>
  <div>
    <form action="https://www.baidu.com/s">
      <input type="text" name="wd" />
      <input type="submit" value="百度一下" />
    </form>
  </div>
</template>
   
<script>
import { GETKEY } from "@/utils/GETKEY";
export default {
  data() {
    return {};
  },
  created() {
    // this.getTime();
    this.getPcOrPhone();
  },
  mounted() {},
  methods: {
    getTime() {
      var a = GETKEY();
      console.log(a);
      var b = "LDUP";
      if (a.toLowerCase() == b.toLowerCase()) {
        console.log("==");
      } else {
        console.log("XX");
      }
    },
    getPcOrPhone() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      if (flag) {
        console.log("/mobile");
      } else {
        console.log("/pc");
      }
    }
  }
};
</script>