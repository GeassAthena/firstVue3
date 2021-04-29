import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页',
      KeepAlive: true
    },
    component: () => import('../views/index/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router;
