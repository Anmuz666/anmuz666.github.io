import Vue from 'vue'
import App from './App.vue'
import Cookies from 'js-cookie'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts'
import i18n from '@/lang'//国际化插件
//elementui处理国际化
Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium' ,  // set element-ui default size
  i18n: (key, value) => i18n.t(key, value) 
})
import Lang from '@/components/Lang'
 
Vue.component('Lang', Lang)
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
  i18n,
  render: h => h(App)
}).$mount('#app')