<template>
  <div class="map-box">
    <div style="width:800px;height:600px" ref="chartsDOM"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts';

import demo1 from '@/api/demo1';
export default {
  mounted() {
    // 初始化统计图对象
    var myChart = echarts.init(this.$refs["chartsDOM"]);
    // 显示 loading 动画
    myChart.showLoading();
    // 再得到数据的基础上，进行地图绘制
    demo1.then(res => {
      // 得到结果后，关闭动画
      myChart.hideLoading();
      // 注册地图(数据放在axios返回对象的data中哦)
      echarts.registerMap('GX', res.data);
      var option = {
        series: [
          {
            name: '广西地图',
            type: 'map',
            map: 'GX',// 这个是上面注册时的名字哦，registerMap（'这个名字保持一致'）
            label: {
              show: true
            }
          }
        ]
      };
      myChart.setOption(option);
    })
  }
}

</script>
