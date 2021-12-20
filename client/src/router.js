import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './views/HomePage'
import CourseDetail from './views/CourseDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/course',
    component: CourseDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router