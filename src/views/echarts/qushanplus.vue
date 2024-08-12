<template>
  <div class="map-box">
    <div style="width:800px;height:600px;border:1px solid black; " ref="chartsDOM"></div>
  </div>
</template>
    <script>
import * as echarts from "echarts";

import demo330921 from "@/api/qushan/330921.json";

import demo16321 from "@/api/qushan/16321.json";
export default {
    name: "App",
 
  data() {
    return {
      map: [],
    };
  },

  mounted() {
    // 初始化统计图对象
    var myChart = echarts.init(this.$refs["chartsDOM"]); //ref作用类似于id
    // 显示 loading 动画 ，在这里感觉没什么用
    myChart.showLoading();
    // 再得到数据的基础上，进行地图绘制
    echarts.registerMap("dsMap", demo330921); // 这里不再需要使用 then 方法，直接传入数据即可
    var option = {
      visualMap: {
        min: 1111,
        max: 333332,
        realtime: false, //false
        calculable: false, //true
        inRange: {
          color: ["lightskyblue", "yellow", "orangered"]
        }
      },
      title: {
        text: "岱山县统计图"
      },

      tooltip: {}, // 配置提示框，有这个配置项即可
      series: [
        {
          name: "岱山县地图",
          type: "map",
          map: "dsMap", // 这个是上面注册时的名字哦，registerMap（'这个名字保持一致'）
          label: {
            show: true
          },
          data: [
            { name: "衢山镇", value: 12001 },
            { name: "东沙镇", value: 12001 },
            { name: "岱东镇", value: 12001 },
            { name: "岱西镇", value: 12001 },
            { name: "高亭镇", value: 12001 },
            { name: "长涂镇", value: 12001 },
            { name: "秀山乡", value: 12001 }
          ]
        }
      ]
    };
    myChart.setOption(option);
    // 关闭动画，在这里感觉没什么用
    myChart.hideLoading();
    this.initParamsCity('urn:ogc:def:crs:OGC:1.3:CRS84');
  },
  methods: {
    initParamsCity(name) {
      // 要有城市映射
      const map = {
        'urn:ogc:def:crs:OGC:1.3:CRS84': demo330921,
        '衢山镇': demo16321,
      };
      echarts.registerMap("mapJson", {
        geoJSON: map[name],
      });
 
      var chart = echarts.init(this.$refs.map);
      chart.setOption({
        geo: [
          {
            map: "mapJson",
          },
        ],
      });
      chart.on("click", (params) => {
        this.initParamsCity(params.name);
      });
    },
  },
};
</script>
    