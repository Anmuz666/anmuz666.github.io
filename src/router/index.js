import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
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
    path: '/HOME',
    name: 'HOME',
    component: () => import('@/views/center/index.vue'),
    children: [{
        path: '/',
        name: 'home',
        component: () => import('@/views/center/centerMain/index.vue')
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/center/centerMain/index.vue')
      },
      {
        path: '/other',
        name: 'other',
        component: () => import('@/views/center/other/index.vue')
      },
    ]
  },
  {
    path: '/testMap',
    name: 'testMap',
    component: () => import('@/views/map/vueAmap/index.vue')
  },
  {
    path: '/localDownload',
    name: 'localDownload',
    component: () => import('@/views/center/otherPage/localDownload.vue'),

  },
  {
    path: '/outDownload',
    name: 'outDownload',
    component: () => import('@/views/center/otherPage/outDownload.vue'),

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
  {
    path: '/test1',
    name: 'test1',
    component: () => import('@/views/test/listening.vue')
  },
  {
    path: '/testMap',
    name: 'testMap',
    component: () => import('@/views/map/vueAmap/index.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router