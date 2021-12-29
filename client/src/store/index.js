import Vue from 'vue'
import Vuex from 'vuex'
import courses from './modules/courses'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { courses }
})

export default store