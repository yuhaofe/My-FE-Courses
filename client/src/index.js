import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import BaseCard from './components/BaseCard'
import BaseTag from './components/BaseTag'

const baseComponents = {
  BaseCard, BaseTag
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
