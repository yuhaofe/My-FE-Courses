import CourseService from '../../services/CourseService'

const state = () => ({
  courses: []
})

const getters = {}

const mutations = {
  SET_COURSES(state, courses) {
    state.courses = courses
  }
}

const actions = {
  fetchCourses({ commit }) {
    return CourseService.getCourses()
      .then(response => {
        commit('SET_COURSES', response)
        return response
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
