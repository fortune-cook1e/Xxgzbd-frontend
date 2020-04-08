import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
Vue.use(VueRouter)

export const routes:RouteConfig[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'home',
    redirect: 'total-data',
    meta: {
      title: '主页'
    },
    component: () => import('@/views/home/index.vue'),
    children: [
      // 全部数据概览
      {
        path: '/total-data',
        name: 'totalData',
        component: () => import('@/views/total-data/index.vue')
      },
      // 疫情表格
      {
        path: '/area-data',
        name: 'areaData',
        component: () => import('@/views/area-data/index.vue')
      },
      // 物资填写
      {
        path: '/add-goods',
        name: 'addGoods',
        component: () => import('@/views/add-goods/index.vue')
      },
      // 物资列表
      {
        path: '/goods-list',
        name: 'goodsList',
        component: () => import('@/views/goods-list/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login/index.vue')
  }
]

const createRouter = () => new VueRouter({
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter();
  (router as any).matcher = (newRouter as any).matcher // reset router
}

export default router
