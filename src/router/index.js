import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'starting',
    component: () => import('@/views/starting/index.vue')
  },
  {
    path: '/starting',
    name: 'starting',
    component: () => import('@/views/starting/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/echarts/AboutView.vue')
  },
  {
    path: '/qushan',
    name: 'qushan',
    component: () => import('@/views/echarts/qushan.vue')
  },
  {
    path: '/qushanplus',
    name: 'qushanplus',
    component: () => import('@/views/echarts/qushanplus.vue')
  },
  {
    path: '/canves',
    name: 'canves',
    component: () => import('@/views/echarts/canves.vue')
  },
  {
    path: '/mapc',
    name: 'mapc',
    component: () => import('@/views/echarts/mapChart.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test/index.vue')
  },
  // {
  //   path: '/hello',
  //   name: 'hello',
  //   component: () => import('@/views/test/HelloWorld.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
