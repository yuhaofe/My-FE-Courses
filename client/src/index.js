import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import BaseCard from './components/BaseCard'
import BaseTag from './components/BaseTag'
import BaseNavBar from './components/BaseNavBar'
import BaseGrid from './components/BaseGrid'
import BaseGridItem from './components/BaseGridItem'
import BaseCarousel from './components/BaseCarousel'
import BaseCarouselItem from './components/BaseCarouselItem'
import BaseSearchBar from './components/BaseSearchBar'

const baseComponents = {
  BaseCard, BaseTag, BaseNavBar, BaseGrid, BaseGridItem, BaseCarousel, BaseCarouselItem, BaseSearchBar
}

Object.entries(baseComponents)
  .forEach(([name, component]) => {
    Vue.component(name, component)
  })

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
