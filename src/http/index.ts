import axios from 'axios'
import { stringify } from 'querystring'


/* 自定义拦截器 */
class HttpRequest {
  private interceptRequest: Function  // 请求拦截
  private interceptResponse: Function  // 响应拦截
  private serverHost: string  // 请求地址
  
  /* 构造函数 */
  constructor(host: string, interceptRequest?: Function, interceptResponse?: Function) {
    interceptRequest ? this.interceptRequest = interceptRequest : this.interceptRequest = (c: RequestConfig) => c
    interceptResponse ? this.interceptResponse = interceptResponse : this.interceptResponse = (r: any) => r
    host ? this.serverHost = host : this.serverHost = ''
  }
  
  request (option: RequestConfig): Promise<any>{
    // 取消请求
    let isRequest: boolean = this.interceptRequest(option)
    if (isRequest) {
      console.log('-----> 请求被拦截');
      return Promise.reject()
    } else if (!this.serverHost){
      console.log('-----> 请求被拦截，没有配置远程主机IP');
      return Promise.reject()
    }else if (!option.url){
      console.log('-----> 请求被拦截，没有配置请求路径');
      return Promise.reject()
    }
    // 返回请求结果
    return new Promise((resolve, reject) => {
      console.log(this.config(option));
      axios(this.config(option)).then(response => {
        let res: ResponseData = this.interceptResponse(response) //把响应数据先交给响应拦截
        if (res.status === 200) {
          resolve(res)
        } else {
          reject(res)
        }
      }).catch(err => {
        reject(this.interceptResponse(err))
      })
    })
  }
  /* 整理请求参数 */
  private config (option: RequestConfig): RequestConfig {
    let c: RequestConfig = { 
      url: this.serverHost + option.url,
      method: option.method || 'POST',
      data: option.data || {},
      //headers: option.headers || ''
     }
    if (option.timeout) { c.timeout = option.timeout }
    if (option.auth) { c.auth = option.auth }
    if (option.responseType) { c.responseType = option.responseType }
    if (option.onDownloadProgress) { c.onDownloadProgress = option.onDownloadProgress }
    if (option.onDownloadProgress) { c.onDownloadProgress = option.onDownloadProgress }
    return c
  }
}

export default HttpRequest
