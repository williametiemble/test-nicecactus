import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    player: null,
  },
  getters: {
    getPlayer (state) {
      return state.player
    },
  },
  mutations: {
    setPlayer (state, player) {
      state.player = player
    },
  },
  actions: {
    getPlayerSaved ({commit}) {
      const player = localStorage.getItem('ppc-southpark-player')
      commit('setPlayer', player)
    },
    savePlayer ({commit}, player) {
      localStorage.setItem('ppc-southpark-player', player)
      commit('setPlayer', player)
    },
  }
})
