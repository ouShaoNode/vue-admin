import { createRouter, createWebHistory } from 'vue-router'
import { store } from '@/store'
import NProgress from '@/utils/system/nprogress'

NProgress.configure({ showSpinner: false })

// 引入默认的页面
import defaultPage from './modules'
// 引入用户管理页面
import userPage from './modules/user'
// 响应路由
const routes = [
  ...defaultPage,
  ...userPage
]

// 注册路由
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由白名单
const whiteList = ['/login', '/main', '/main/home', '/user/index']

// 路由跳转前的监听操作
router.beforeEach((to, _from, next) => {
  NProgress.start();
  if (whiteList.includes(to.path)) {
    next()
  } else {
    next("/login"); // 全部重定向到登录页
  }
});

// 路由跳转后的监听操作
router.afterEach((to, from) => {
  NProgress.done()
});

export default router
