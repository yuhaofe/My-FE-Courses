import axios from 'axios'

const client = axios.create({
  baseURL: '/api/',
  timeout: 5000
})

client.defaults.headers.get['Accept'] = 'application/json'
client.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'

function getCourses() {
  return client.get('courses/').then(response => {
    if (response.status === 200) {
      return response.data
    } else {
      return Promise.reject()
    }
  })
}

function getCoursesByTag(tag) {
  return client.get('courses/tag/' + tag).then(response => {
    if (response.status === 200) {
      return response.data
    } else {
      return Promise.reject()
    }
  })
}

function getCoursesBySearch(search) {
  return client.get('courses/search/' + search).then(response => {
    if (response.status === 200) {
      return response.data
    } else {
      return Promise.reject()
    }
  })
}

function getCourse(id) {
  return client.get('course/' + id).then(response => {
    if (response.status === 200) {
      return response.data
    } else {
      return Promise.reject()
    }
  })
}

export default {
  getCourses, getCoursesByTag, getCoursesBySearch, getCourse
}