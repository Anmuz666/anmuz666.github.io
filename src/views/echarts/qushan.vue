<template>
  <div class="map-box">
    <div style="width:800px;height:600px;border:1px solid black; backgrund:" ref="chartsDOM"></div>
  </div>
</template>
  <script>
import * as echarts from "echarts";
import demo1 from "@/api/qushan/330921.json";
export default {
  mounted() {
    // 初始化统计图对象
    var myChart = echarts.init(this.$refs["chartsDOM"]); //ref作用类似于id
    // 显示 loading 动画 ，在这里感觉没什么用
    myChart.showLoading();
    // 再得到数据的基础上，进行地图绘制
    echarts.registerMap("dsMap", demo1); // 这里不再需要使用 then 方法，直接传入数据即可
    var option = {
      visualMap: {
        min: 0,
        max: 120000,
        realtime: false, //false
        calculable: false, //true
        inRange: {
            color: ["lightskyblue", "yellow", "orangered"]
        }
      },
      title: {
        text: "岱山县统计图"
      },
      tooltip: {
        trigger: "item",
        formatter: function(param) {
          console.log(param);
          return (
            param.seriesName +
            "<br>" +
            param.marker +
            "&nbsp;" +
            param.name +
            "七普人口" +
            ":" +
            param.value +
            "人" +
            "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;占全县比重：" +
            param.data.specific +
            "%" +
            "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;比六普增长：" +
            param.data.updown +
            "%"
          );
        }
      }, // 配置提示框，有这个配置项即可
      series: [
        {
          name: "岱山县人口统计图",
          type: "map",
          map: "dsMap", // 这个是上面注册时的名字哦，registerMap（'这个名字保持一致'）
          roam: true, //是否开启鼠标缩放和平移漫游
          label: {
            //标签相关属性
            show: true // 显示标签
          },
          data: [
            //地图数据
            {    name: "高亭镇", value: 114559, specific: "55.08", updown: "40.67"  },
            { name: "衢山镇", value: 45476,  specific: "21.87",  updown: "-14.54"  }, //七普//占全县比重//比六普增长
            {   name: "东沙镇",    value: 12305,    specific: "5.92",    updown: "-19.56"  },
            { name: "秀山乡", value: 9964, specific: "4.79", updown: "-1.4" },
            { name: "岱西镇", value: 9607, specific: "4.62", updown: "-20.85" },
            { name: "岱东镇", value: 8142, specific: "3.91", updown: "-3.85" },
            { name: "长涂镇", value: 7929, specific: "3.81", updown: "-63.12" }
          ],
          itemStyle: {
            //区域样式相关属性
            normal: {
              areaColor: "#aaa", // 设置区域颜色（即数据项的背景色）为"#aaa"
              borderColor: "#00FBFF", // 设置边框颜色为"#ccd3e4"
              borderWidth: 1 // 设置边框宽度为1像素
            },
            // 定义当鼠标悬停在数据项上时的样式
            emphasis: {
              areaColor: "#aaa" // 悬停时区域颜色仍然为"#aaa"
            }
          }
        }
      ]
    };
    myChart.setOption(option);
    // 关闭动画，在这里感觉没什么用
    myChart.hideLoading();
  }
};
</script>
  