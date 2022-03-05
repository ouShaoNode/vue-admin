import { Route } from '@/types/router'

const Login = () => import('@/views/login/login.vue')
const Layout = () => import('@/layout/index.vue')
const Home = () => import('@/views/home.vue')

const route: Route[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login,
    meta: { title: '登录', showMenu: false }
  },
  {
    path: '/main',
    component: Layout,
    redirect: '/main/home',
    meta: { title: '主页', showMenu: false },
    children: [
      {
        path: 'home',
        component: Home,
        meta: { title: '首页', showMenu: false }
      },
    ]
  }
]

export default route