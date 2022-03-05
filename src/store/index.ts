import { createStore } from 'vuex'

import common from './module/common'
import user from './module/user'
import router from './module/router'
import { RootState } from '@/types/vuex'

const store = createStore<RootState>({
	modules: {
		common,
		user,
		router
	}
})
export { store }