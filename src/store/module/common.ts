import { CommonState } from "@/types/vuex/vuex"

const common = {
	namespaced:true,
	state: (): CommonState => ({
		msg: 'Hi! boy.'
	}),
	mutations: {
		changeMsg (state: CommonState, msg: string) {
			state.msg = msg
		}
	},
	actions: {
		
		
	},
	getters: {
		
	}
}

export default common