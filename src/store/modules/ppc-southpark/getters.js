import { Getter } from './types.js'

export default {
  [Getter.GET_PLAYER]: state => {
    return state.player
  },
}
