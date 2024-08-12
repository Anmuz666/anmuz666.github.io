<template>
  <div>
      <el-row>
          <el-col :span="12">
              <div id="main" style="width: 500px; height: 400px"></div>
          </el-col>
          
          <el-col :span="12">
              <div id="pie" style="width: 500px; height: 400px"></div>
          </el-col>
      </el-row>
  </div>
</template>

<script>
  import * as echarts from 'echarts'

  export default {
      name: "HOme.vue",
      data(){
          return{

          }
      },
      mounted() {//页面元素渲染之后在触发
          var chartDom = document.getElementById('main');
          var myChart = echarts.init(chartDom);
          var option = {
              xAxis: {
                  type: 'category',
                  data: ['高亭镇', '东沙镇', '岱东镇', '岱西镇', '长涂镇', '衢山镇', '秀山乡']
              },
              yAxis: {
                  type: 'value'
              },
              series: [
                  {
                      data: [114559, 114559, 8142, 8142, 7929, 45476, 9964],
                      type: 'bar'
                  },
                  {
                      data: [40.67, -19.56, -3.85, -20.85,-63.12, -14.54, -1.4],
                    type: 'line'
                  },
              ]
          };
          myChart.setOption(option);


          //饼图
          var pieOption = {
              title: {
                  text: '岱山县人口统计图',
                  subtext: 'Fake Data',
                  left: 'center'
              },
              tooltip: {
                  trigger: 'item'
              },
              legend: {
                  orient: 'vertical',
                  left: 'left'
              },
              series: [
                  {
                      name: 'Access From',
                      type: 'pie',
                      radius: '50%',
                      data: [
                        {    name: "高亭镇", value: 114559, specific: "55.08", updown: "40.67"  },
            { name: "衢山镇", value: 45476,  specific: "21.87",  updown: "-14.54"  }, //七普//占全县比重//比六普增长
            {   name: "东沙镇",    value: 12305,    specific: "5.92",    updown: "-19.56"  },
            { name: "秀山乡", value: 9964, specific: "4.79", updown: "-1.4" },
            { name: "岱西镇", value: 9607, specific: "4.62", updown: "-20.85" },
            { name: "岱东镇", value: 8142, specific: "3.91", updown: "-3.85" },
            { name: "长涂镇", value: 7929, specific: "3.81", updown: "-63.12" }
                      ],
                      emphasis: {
                          itemStyle: {
                              shadowBlur: 10,
                              shadowOffsetX: 0,
                              shadowColor: 'rgba(0, 0, 0, 0.5)'
                          }
                      }
                  }
              ]
          };
          var pieDom = document.getElementById('pie');
          var pieChart = echarts.init(pieDom);
          pieChart.setOption(pieOption);
      }
  }
</script>

<style scoped>

</style>

