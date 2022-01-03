import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import BaseCard from './components/BaseCard'
import BaseTag from './components/BaseTag'
import BaseNavBar from './components/BaseNavBar'

const baseComponents = {
  BaseCard, BaseTag, BaseNavBar
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
