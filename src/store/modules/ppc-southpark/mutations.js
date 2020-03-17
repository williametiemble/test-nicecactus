import { Mutation } from './types.js'

export default {
  [Mutation.SET_PLAYER](state, player) {
    state.player = player
  },
}
