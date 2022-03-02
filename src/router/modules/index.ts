import { Route } from '@/types/router'

const Login = () => import('@/views/login/login.vue')
const Layout = () => import('@/layout/index.vue')

const route: Route[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login,
    meta: { title: '登录'}
  },
  {
    path: '/main',
    component: Layout,
    meta: { title: '登录'}
  }
]

export default route