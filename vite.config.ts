import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const pathResolve = (dir: string): any => {
  return resolve(__dirname, ".", dir)
}

const alias: Record<string, string> = {
  '@': pathResolve("src")
}

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias
	},
  css: {
  	preprocessorOptions: {
  		scss: {
  			additionalData: '@import "./src/assets/scss/variable.scss";'
  		}
  	}
  },
	server: {
		proxy: {
			// 字符串简写写法
      // '/foo': 'http://localhost:4567',
      // // 选项写法
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, '')
      // },
      // 正则表达式写法
      // '^/test': {
      //   target: 'http://localhost:8080/mysql/test/selectV2',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/fallback/, '')
      // }
      // 使用 proxy 实例
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   configure: (proxy, options) => {
      //     // proxy 是 'http-proxy' 的实例
      //   }
      // }
		}
	},
  plugins: [vue()]
})
