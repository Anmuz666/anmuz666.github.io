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
import Lang from '@/components/Lang'//引入语言切换组件
Vue.component('Lang', Lang)//注册语言切换组件

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(ElementUI)

import VueParticles from 'vue-particles'//粒子效果https://vue-particles.netlify.app/
Vue.use(VueParticles)

new Vue({
  router,
  store,
  echarts,
  el: '#app',
  i18n,
  render: h => h(App)
}).$mount('#app')