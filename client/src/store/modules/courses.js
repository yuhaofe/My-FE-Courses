import CourseService from '../../services/CourseService'

const state = () => ({
  courses: [],
  course: {}
})

const getters = {}

const mutations = {
  SET_COURSES(state, courses) {
    state.courses = courses
  },
  SET_COURSE(state, course) {
    state.course = course
  }
}

const actions = {
  fetchCourses({ commit }) {
    return CourseService.getCourses()
      .then(courses => {
        commit('SET_COURSES', courses)
        return courses
      })
      .catch(error => {
        console.log(error)
      })
  },
  fetchCourse({ commit }, id) {
    return CourseService.getCourse(id)
      .then(course => {
        commit('SET_COURSE', course)
        return course
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
