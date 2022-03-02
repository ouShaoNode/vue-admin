// 请求失败
interface RequestFail {
  status: number, // http状态码
  code: number, // 后端自定义状态码
  msg: string, // 失败提示
  e?: any, // 请求失败失败详细信息
}
// 响应对象
interface ResponseData {
  status: number, // http状态码
  code: number, // 后端自定义状态码
  data: any, // 主要数据
  msg: string // 提示
}
// 请求配置参数
interface RequestConfig {
  url: any,  // 请求地址
  method: any, // 请求方式
  data?: any ,  // 请求数据
  timeout?: number, // 请求超时时间
  headers?: any, // 自定义请求头
  responseType?: any // 期望响应的数据类型
  onUploadProgress?: any, //上传处理进度事件
  onDownloadProgress?: any //下载处理进度事件
  auth?: any // 使用 HTTP 基础验证，设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
}