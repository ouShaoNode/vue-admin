import HttpRequest from './index'
import { baseUrl } from '@/env/index'

// 请求拦截器
function interceptRequest(option: RequestConfig): boolean {
  console.log('---> 请求被拦截');
  return false
}

// 响应拦截器
function interceptResponse(response: any): ResponseData {
  console.log('---> 响应被拦截', response);
  let res: ResponseData
  if (response.status === undefined) { // 网络错误，正常的请求都会有status
    res = {
      status: -1,
      code: -1,
      data: '网络错误',
      msg: '网络错误'
    }
    return res
  } else {
    res = {
      status: response.status,
      code: response.data.code,
      data: response.data.data,
      msg: response.data.msg
    }
    if (res.status === 200) {
      
    } 
    return res
  }
}

// 可以多实例。进行分布式请求
const serverMain = new HttpRequest(baseUrl, interceptRequest, interceptResponse)

export { serverMain }