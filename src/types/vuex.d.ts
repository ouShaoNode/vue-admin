// vuex.d.ts
import { Store } from 'vuex'

/* UserState模块 */
interface UserState {
	token: string // token令牌
  userSigns: String // 身份Id
  openId: String // 用户openId
}
/* Common模块 */
interface CommonState {
	msg: string
}
/* 全局状态 */
interface RootState {
	common: CommonState
  user: UserState
}
declare module '@vue/runtime-core' {
  // 声明自己的 store state
  interface State extends RootState{}

  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
