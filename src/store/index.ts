import { createStore } from 'vuex'

export default createStore({
  state: {
    testData: 0
  },
  mutations: {
    add (state) {
      state.testData++
    }
  },
  actions: {},
  modules: {}
})