import { serverMain } from '@/http/request'

// 登录
const login = (params: any) => serverMain.request({url: '/mysql/test/selectV2', method: 'POST', data: params})

export {
  login
}