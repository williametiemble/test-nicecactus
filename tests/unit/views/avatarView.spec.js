import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import AvatarView from '@/views/AvatarView.vue'
import router from '@/plugins/VueRouter/VueRouter.js'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('AvatarView.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      savePlayer: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })

  it('calls store action "savePlayer" when bt-action is clicked', () => {
    const wrapper = shallowMount(AvatarView, { store, localVue, router })
    wrapper.vm.saveAvatar()
    expect(actions.savePlayer).toHaveBeenCalled()
  })
})
