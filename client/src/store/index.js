import Vue from 'vue'
import Vuex from 'vuex'
import courses from './modules/courses'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { courses },
  state: {
    isBack: false
  },
  mutations: {
    SET_ISBACK(state, isBack) {
      state.isBack = isBack
    }
  },
  actions: {
    goBack({ commit }) {
      commit('SET_ISBACK', true)
    },
    resetBack({ commit }) {
      commit('SET_ISBACK', false)
    }
  }
})

export default store