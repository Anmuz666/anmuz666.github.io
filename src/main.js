import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import * as echarts from 'echarts'


Vue.config.productionTip = false
Vue.prototype.$echarts= echarts
Vue.use(ElementUI, { locale })


new Vue({
  router,
  store,
  echarts,
  render: h => h(App)
}).$mount('#app')
