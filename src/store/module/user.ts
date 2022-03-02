import { UserState } from "@/types/vuex"

const user = {
	namespaced:true,
	state: (): UserState => ({
		token: '',
		userSigns: '',
		openId: '',
	}),
	mutations: {
		setToken (state: UserState, token: string) {
			state.token = token
		},
		setUserSigns (state: UserState, userSigns: string) {
			state.userSigns = userSigns
		},
		setOpenId (state: UserState, openId: string) {
			state.openId = openId
		}
	},
	actions: {
		
		
	},
	getters: {
		
	}
}

export default user