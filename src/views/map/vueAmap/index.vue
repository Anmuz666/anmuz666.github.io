<template>
  <div style="height: 100%;width:100%">
    <!--
        amap-manager： 地图管理对象
        vid：地图容器节点的ID
        zooms： 地图显示的缩放级别范围，在PC上，默认范围[3,18]，取值范围[3-18]；在移动设备上，默认范围[3-19]，取值范围[3-19]
        center： 地图中心点坐标值
        plugin：地图使用的插件
        events： 事件
    -->
    <div class="amap-box">
      <el-amap
        :amap-manager="amapManager"
        :vid="'amap-vue'"
        :zoom="zoom"
        :plugin="plugin"
        :center="center"
        :events="events"
      ></el-amap>
    </div>
  </div>
</template>
  <script>
import { AMapManager } from "vue-amap";
let amapManager = new AMapManager();
export default {
  data() {
    let self = this;
    return {
      amapManager,
      markers: [],
      center: [121.329402, 31.228667],
      zoom: 17,
      lng: 0,
      lat: 0,
      loaded: false,
      events: {},
      // 一些工具插件
      plugin: [
        {
          // 定位
          pName: "Geolocation",
          events: {
            init(o) {
              // o是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  if (self.isEdit) {
                    // 设置经度
                    self.lng = self.longitude;
                    // 设置维度
                    self.lat = self.latitude;
                    // 设置坐标
                    self.center = [self.longitude, self.latitude];
                    self.markers.push([self.longitude, self.latitude]);
                  } else {
                    // 设置经度
                    self.lng = result.position.lng;
                    // 设置维度
                    self.lat = result.position.lat;
                    // 设置坐标
                    self.center = [self.lng, self.lat];
                    self.markers.push([self.lng, self.lat]);
                  }
                  // load
                  self.loaded = true;
                  // 页面渲染好后
                  self.$nextTick();
                }
              });
            }
          }
        }
      ]
    };
  },
  created() {
    VueAMap.getLocalCity().then(res=>{
        console.log(res)
    })
  },
  methods: {}
};
</script>
  <style >
.tip-box {
  width: 100%;
  max-height: 280px;
  position: absolute;
  top: 72px;
  z-index: 10000;
  overflow-y: auto;
  background-color: #fff;
}
</style>
  <style>
.amap-ui-poi-picker-sugg,
.amap_lib_placeSearch {
  border: 1px solid #eee;
  border-radius: 4px;
}
.amap-box {
  height: 100%;
}
</style>