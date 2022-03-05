import { RouterState } from "@/types/vuex"

const router = {
	namespaced:true,
	state: (): RouterState => ({
		activeMenuItem: '',
	}),
	mutations: {
		setActiveMenuItem (state: RouterState, activeMenuItem: string) {
			state.activeMenuItem = activeMenuItem
		},
		
	},
	actions: {
		
		
	},
	getters: {
		
	}
}

export default router