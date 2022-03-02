import { RouteRecordRaw } from 'vue-router'

// 路由类型
export type Route = {
    meta?: Meta  // 路由元数据
} & RouteRecordRaw

// 路由元数据
export interface Meta {
    title: string // 路由标题
    icon?: string // 路由图标
}