import { Route } from '@/types/router'

const Layout = () => import('@/layout/index.vue')
const Index = () => import('@/views/user/index.vue')

const route: Route[] = [
  {
    path: '/user',
    component: Layout,
    redirect: '/user/index',
    meta: { title: '用户管理', showMenu: true },
    children: [
      {
        path: '/user/index',
        component: Index,
        meta: { title: '用户首页', showMenu: true }
      },
    ]
  }
]

export default route