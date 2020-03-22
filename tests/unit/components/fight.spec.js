import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Fight from '@/components/Fight.vue'
import router from '@/plugins/VueRouter/VueRouter.js'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Fight.vue', () => {
  let getters
  let store

  beforeEach(() => {
    getters = {
      getPlayer: jest.fn()
    }
    store = new Vuex.Store({
      getters
    })
  })

  it('Test methods isUser', () => {
    const wrapper = shallowMount(Fight,
    {
      store,
      localVue,
      router,
      propsData: {
        type: 'user'
      }
    })
    expect(wrapper.vm.isUser()).toBe(true)
    expect(wrapper.vm.isUser()).toBeType('boolean')
  })

  it('Test methods getChoice', () => {
    const wrapper = shallowMount(Fight,
    {
      store,
      localVue,
      router,
      propsData: {
        type: 'user'
      }
    })
    expect(wrapper.vm.getChoice()).toBeType('number')
    expect(wrapper.vm.getChoice()).toBeBetween(0, 2)
  })

  it('Test methods getChoiceLabel', () => {
    const wrapper = shallowMount(Fight,
    {
      store,
      localVue,
      router,
      propsData: {
        type: 'user'
      }
    })
    expect(wrapper.vm.getChoiceLabel(0)).toBe('Rock')
    expect(wrapper.vm.getChoiceLabel(1)).toBe('Paper')
    expect(wrapper.vm.getChoiceLabel(2)).toBe('Scissors')
    expect(wrapper.vm.getChoiceLabel()).toBeType('string')
  })

  it('Test computed winnerText', () => {
    const wrapper = shallowMount(Fight,
    {
      store,
      localVue,
      router,
      propsData: {
        type: 'user',
      }
    })
    expect(wrapper.vm.winnerText).toBeType('string')

    wrapper.setData({
      choice1: 0,
      choice2: 1,
    })
    expect(wrapper.vm.winnerText).toBe('You Loose')

    wrapper.setData({
      choice1: 2,
      choice2: 0,
    })
    expect(wrapper.vm.winnerText).toBe('You Loose')

    wrapper.setData({
      choice1: 1,
      choice2: 0,
    })
    expect(wrapper.vm.winnerText).toBe('You Win')

    wrapper.setData({
      choice1: 0,
      choice2: 2,
    })
    expect(wrapper.vm.winnerText).toBe('You Win')

    wrapper.setData({
      choice1: 0,
      choice2: 0,
    })
    expect(wrapper.vm.winnerText).toBe('Egality')

    wrapper.setProps({ type: 'com' })

    wrapper.setData({
      choice1: 0,
      choice2: 1,
    })
    expect(wrapper.vm.winnerText).toBe('COM Loose')

    wrapper.setData({
      choice1: 2,
      choice2: 0,
    })
    expect(wrapper.vm.winnerText).toBe('COM Loose')

    wrapper.setData({
      choice1: 1,
      choice2: 0,
    })
    expect(wrapper.vm.winnerText).toBe('COM Win')

    wrapper.setData({
      choice1: 0,
      choice2: 2,
    })
    expect(wrapper.vm.winnerText).toBe('COM Win')

    wrapper.setData({
      choice1: 0,
      choice2: 0,
    })
    expect(wrapper.vm.winnerText).toBe('Egality')
  })
})
