import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './views/HomePage'
import CourseDetail from './views/CourseDetail'
import FavoritesPage from './views/FavoritesPage'
import MyPage from './views/MyPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/course/:id',
    component: CourseDetail
  },
  {
    path: '/favorites',
    component: FavoritesPage
  },
  {
    path: '/my',
    component: MyPage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router