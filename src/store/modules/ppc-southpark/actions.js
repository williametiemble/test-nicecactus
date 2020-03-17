import { Action, Mutation } from './types.js'
import * as ppcService from '@/services/ppc-southpark.service.js'

export default {
  async [Action.GET_PLAYER_SAVED]({ commit }) {
    const player = await ppcService.getPlayerSave()
    commit(Mutation.SET_PLAYER, player)
  },
  async [Action.SAVE_PLAYER]({ commit }, player) {
    ppcService.setPlayerSave(player)
    commit(Mutation.SET_PLAYER, player)
  },
}
