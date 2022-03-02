// url配置
const baseUrl = import.meta.env.MODE === 'development' ? 'http://localhost:8080' : '192.168.137.1'
// 当前运行环境
const runEnv: string = import.meta.env.MODE === 'development' ? 'dev' : 'pro'

export { baseUrl, runEnv}