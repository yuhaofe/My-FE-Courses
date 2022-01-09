import CourseService from '../../services/CourseService'

const state = () => ({
  courses: [],
  filteredCourses: [],
  course: {},
  filter: {
    search: '',
    tag: ''
  }
})

const getters = {}

const mutations = {
  SET_COURSES(state, courses) {
    state.courses = courses
  },
  SET_COURSE(state, course) {
    state.course = course
  },
  SET_FILTEREDCOURSES(state, courses) {
    state.filteredCourses = courses
  },
  SET_FILTER(state, filter) {
    state.filter = filter
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
  },
  fetchCoursesByFilter({ commit, state }) {
    if (state.filter.tag) {
      return CourseService.getCoursesByTag(state.filter.tag)
      .then(courses => {
        commit('SET_FILTEREDCOURSES', courses)
        return courses
      })
      .catch(error => {
        console.log(error)
      })
    } else if (state.filter.search != undefined) {
      return CourseService.getCoursesBySearch(state.filter.search)
      .then(courses => {
        commit('SET_FILTEREDCOURSES', courses)
        return courses
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  setFilter({ commit, state }, filter) {
    if (filter.tag != state.filter.tag || filter.search != state.filter.search) {
      const coursesLoading = []
      coursesLoading.loading = true
      commit('SET_FILTEREDCOURSES', coursesLoading)
      commit('SET_FILTER', filter)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
