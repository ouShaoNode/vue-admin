import { RouteRecordRaw } from 'vue-router'

// 路由类型
export type Route = {
    meta?: Meta  // 路由元数据
    children?: Route[]
} & RouteRecordRaw

// 路由元数据
export interface Meta {
    title: string // 路由标题
    showMenu?: boolean // 是否显示在导航栏
    icon?: string // 路由图标
}