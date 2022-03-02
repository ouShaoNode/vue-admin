import { createStore } from 'vuex'

import common from './module/common'
import user from './module/user'
import { RootState } from '@/types/vuex'

const store = createStore<RootState>({
	modules: {
		common,
		user
	}
})
export { store }