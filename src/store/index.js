import Vue from 'vue'
import Vuex from 'vuex'

// modules
import ppcSouthpark from './modules/ppc-southpark'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ppcSouthpark,
  },
  strict: process.env.NODE_ENV !== 'production',
})
