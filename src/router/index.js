import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import {
  getflag
} from "@/components/index.js"

const routes = [
  {
    //默认页面
    path: '/',
    name: 'starting',
    component: () => import('@/views/starting/index.vue')
  },
  {
    //欢迎页
    path: '/starting',
    name: 'starting',
    component: () => import('@/views/starting/index.vue')
  },
  //移动页面->
  {
    path: '/HOME',
    name: 'HOME',
    component: () => import('@/views/mobile/index.vue'),
    meta: {
      isAuth: true,
      permissions: 'mobile',
      title: 'HOME'
    },
    children: [
      {
        //移动默认页
        path: '/',
        name: 'home',
        component: () => import('@/views/mobile/centerMain/index.vue'),
        meta: {
          isAuth: true,
          permissions: 'mobile',
          title: 'home'
        },
      },
      {
        //移动首页
        path: '/home',
        name: 'home',
        component: () => import('@/views/mobile/centerMain/index.vue'),
        meta: {
          isAuth: true,
          permissions: 'mobile',
          title: 'home'
        },
      },
      {
         //移动其他页
        path: '/other',
        name: 'other',
        component: () => import('@/views/mobile/other/index.vue'),
        meta: {
          isAuth: true,
          permissions: 'mobile',
          title: 'other'
        },
      },
    ]
  },
  //<-移动页面
  //pc页面->
  {
    //pc首页
    path: '/pc',
    name: 'pc',
    component: () => import('@/views/pc/recommend/index.vue'),
    meta: {
      isAuth: true,
      permissions: 'pc',
      title: 'pc'
    }
  },
  {
    //游戏大厅
    path: '/GameLobby',
    name: 'GameLobby',
    component: () => import('@/views/pc/GameLobby/index.vue'),
    meta: {
      isAuth: true,
      permissions: 'pc',
      title: 'GameLobby'
    }
  },
  {
    //pc图片仓库
    path: '/picWarehouse',
    name: 'picWarehouse',
    component: () => import('@/views/pc/picWarehouse/index.vue'),
    meta: {
      isAuth: true,
      permissions: 'pc',
      title: 'picWarehouse'
    }
  },
  {
    //pc日志
    path: '/developmentLogs',
    name: 'developmentLogs',
    component: () => import('@/views/pc/developmentLogs/index.vue'),
    meta: {
      isAuth: true,
      permissions: 'pc',
      title: 'developmentLogs'
    }
  },
  {
    //pc测试页
    path: '/test',
    name: 'test',
    component: () => import('@/views/pc/test/index.vue'),
    meta: {
      isAuth: true,
      permissions: 'pc',
      title: 'test'
    }
  },
  //<-pc页面
  {
    //内部下载
    path: '/localDownload',
    name: 'localDownload',
    component: () => import('@/views/mobile/otherPage/localDownload.vue'),

  },
  {
    //外部下载
    path: '/outDownload',
    name: 'outDownload',
    component: () => import('@/views/mobile/otherPage/outDownload.vue'),

  },









//以下尚未用到
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
    component: () => import('@/views/test/index1.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})


//全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next) => {
  // console.log('前置路由守卫', to, from)
  //判断是否需要鉴权
  if (to.meta.isAuth) {
    //判断当前设备是不是手机
    if (getflag()) {
      //判断路由权限是不是手机
      if (to.meta.permissions == 'mobile') {
        next()
      } else {
        alert('请在PC端访问该页面')
      }
      //设备不是手机
    } else {
      //判断路由权限是不是电脑
      if (to.meta.permissions == 'pc') {
        next()
      } else {
        alert('请在移动端访问该页面')
      }
    }
    //不需要直接放行
  } else {
    next()
  }
})
export default router