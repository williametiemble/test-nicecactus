import { createNamespacedHelpers } from 'vuex'
import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'
import state from './state.js'
import { NAMESPACE } from './types.js'

const { mapState, mapGetters, mapActions } = createNamespacedHelpers(NAMESPACE)

export { mapState, mapGetters, mapActions }

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
