import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts'

import VueAMap from "vue-amap";
Vue.use(VueAMap);
// 初始化vue-amap
VueAMap.initAMapApiLoader({
  key: "18d1be06e5204f1139cb056b345c97e4", // 这里写你申请的高德地图的key可以去https://console.amap.com/申请key
  plugin: ["AMap.Autocomplete", "AMap.Geocoder", "AMap.Geolocation"],
  v: "1.4.15",
  uiVersion: "1.1"
});
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(ElementUI)


new Vue({
  router,
  store,
  echarts,
  el: '#app',
  render: h => h(App)
}).$mount('#app')